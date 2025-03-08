import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { TrainingPlanWeek } from '@/prisma/generated/prisma-client';

@Injectable()
export class TrainingPlanWeekCopyService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(trainingPlanWeekId: string): Promise<TrainingPlanWeek[]> {
    // 1. Once I have the training plan week, I can get the data to copy
    const trainingPlanWeekToCopy =
      await this.prismaService.trainingPlanWeek.findUnique({
        where: { trainingPlanWeekId },
        include: {
          trainingPlan: {
            include: {
              trainingPlanWeeks: {
                select: {
                  trainingPlanWeekId: true,
                },
              },
            },
          },
          workouts: {
            include: {
              workoutExercises: {
                include: {
                  exercise: true,
                  sets: {
                    orderBy: {
                      order: 'asc',
                    },
                  },
                },
                orderBy: {
                  order: 'asc',
                },
              },
            },
            orderBy: {
              order: 'asc',
            },
          },
        },
      });

    if (!trainingPlanWeekToCopy) {
      throw new NotFoundException('Training plan week not found');
    }

    await this.prismaService.$transaction(async (ctx) => {
      // 2. Deletes all workouts except the one that is being copied
      await ctx.workout.deleteMany({
        where: {
          AND: {
            trainingPlanWeek: {
              trainingPlanId: trainingPlanWeekToCopy.trainingPlanId,
            },
            trainingPlanWeekId: {
              not: trainingPlanWeekId,
            },
          },
        },
      });

      const trainingPlanWeeksToBeCopied =
        trainingPlanWeekToCopy.trainingPlan.trainingPlanWeeks.filter(
          (trainingPlanWeek) =>
            trainingPlanWeek.trainingPlanWeekId !== trainingPlanWeekId,
        );

      // Process all training plan weeks in parallel
      await Promise.all(
        trainingPlanWeeksToBeCopied.map(async (trainingPlanWeek) => {
          // 3. Create copy of workouts
          const workoutData = trainingPlanWeekToCopy.workouts.map(
            (workout) => ({
              name: workout.name,
              order: workout.order,
              trainingPlanWeekId: trainingPlanWeek.trainingPlanWeekId,
            }),
          );

          const createdCopyWorkouts = await ctx.workout.createManyAndReturn({
            data: workoutData,
            select: {
              workoutId: true,
              name: true,
              order: true,
              trainingPlanWeekId: true,
            },
          });

          // Create a mapping between source workouts and their copies
          const workoutMapping: Record<string, string> =
            trainingPlanWeekToCopy.workouts.reduce(
              (map, sourceWorkout) => {
                const targetWorkout = createdCopyWorkouts.find(
                  (w) =>
                    w.name === sourceWorkout.name &&
                    w.order === sourceWorkout.order,
                );
                if (targetWorkout) {
                  map[sourceWorkout.workoutId] = targetWorkout.workoutId;
                }
                return map;
              },
              {} as Record<string, string>,
            );

          // 4. Create copy of workout exercises
          const workoutExercisesData = trainingPlanWeekToCopy.workouts.flatMap(
            (workout) =>
              workout.workoutExercises.map((workoutExercise) => ({
                workoutId: workoutMapping[workout.workoutId],
                exerciseId: workoutExercise.exerciseId,
                order: workoutExercise.order,
              })),
          );

          const createdCopyWorkoutExercises =
            await ctx.workoutExercise.createManyAndReturn({
              data: workoutExercisesData,
              select: {
                workoutExerciseId: true,
                exerciseId: true,
                order: true,
                workoutId: true,
              },
            });

          // Create a mapping between source workout exercises and their copies
          const workoutExerciseMapping: Record<string, string> = {};

          trainingPlanWeekToCopy.workouts.forEach((workout) => {
            workout.workoutExercises.forEach((sourceWorkoutExercise) => {
              const targetWorkoutId = workoutMapping[workout.workoutId];

              if (targetWorkoutId) {
                const targetWorkoutExercise = createdCopyWorkoutExercises.find(
                  (we) =>
                    we.workoutId === targetWorkoutId &&
                    we.exerciseId === sourceWorkoutExercise.exerciseId &&
                    we.order === sourceWorkoutExercise.order,
                );

                if (targetWorkoutExercise) {
                  workoutExerciseMapping[
                    sourceWorkoutExercise.workoutExerciseId
                  ] = targetWorkoutExercise.workoutExerciseId;
                }
              }
            });
          });

          // 5. Create copy of sets
          const setsData = trainingPlanWeekToCopy.workouts
            .flatMap((workout) =>
              workout.workoutExercises.flatMap((workoutExercise) =>
                workoutExercise.sets.map((set) => ({
                  reps: set.reps,
                  rir: set.rir,
                  order: set.order,
                  workoutExerciseId:
                    workoutExerciseMapping[workoutExercise.workoutExerciseId],
                })),
              ),
            )
            .filter((set) => set.workoutExerciseId); // Filter out any sets where we couldn't find a matching workout exercise

          await ctx.set.createMany({ data: setsData });
        }),
      );
    });

    return this.prismaService.trainingPlanWeek.findMany({
      where: {
        trainingPlanId: trainingPlanWeekToCopy.trainingPlanId,
      },
    });
  }
}
