import { PrismaService } from '@/prisma/prisma.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { WorkoutExerciseService, WorkoutExerciseUpdate } from '../contracts';

@Injectable()
export class WorkoutExerciseUpdateService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(
    workoutExerciseId: string,
    data: WorkoutExerciseUpdate,
  ): Promise<WorkoutExerciseService> {
    const workoutExercise = await this.prismaService.workoutExercise.findUnique(
      {
        where: { workoutExerciseId },
        select: {
          sets: {
            select: {
              order: true,
            },
          },
        },
      },
    );

    if (!workoutExercise) {
      throw new NotFoundException('Workout exercise not found');
    }

    const order = workoutExercise.sets.length;

    // TODO: Test if sets orders are created and updated correctly
    return await this.prismaService.$transaction(async (ctx) => {
      const newSets = data.sets.filter((set) => !set.setId);
      const existingSets = data.sets.filter((set) => set.setId);
      const existingSetIds = existingSets.map((set) => set.setId);

      // Delete sets that are not in the request
      await ctx.set.deleteMany({
        where: {
          workoutExerciseId,
          setId: { notIn: existingSetIds },
        },
      });

      // Update existing sets that are in the request
      if (existingSets.length > 0) {
        await Promise.all(
          existingSets.map((set) =>
            ctx.set.update({
              where: { setId: set.setId },
              data: { reps: set.reps, rir: set.rir },
            }),
          ),
        );
      }

      // Create new sets that are in the request
      if (newSets.length > 0) {
        await ctx.set.createMany({
          data: newSets.map((set, index) => ({
            order: order + index + 1,
            reps: set.reps,
            rir: set.rir,
            workoutExerciseId,
          })),
        });
      }

      // Updates workout exercise if exerciseId is provided and returns the updated workout exercise
      return await ctx.workoutExercise.update({
        where: { workoutExerciseId },
        data: {
          exerciseId: data.exerciseId,
        },
        select: {
          workoutExerciseId: true,
          order: true,
          exercise: {
            select: {
              exerciseId: true,
              name: true,
            },
          },
          workout: {
            select: {
              workoutId: true,
              name: true,
            },
          },
          sets: {
            select: {
              setId: true,
              reps: true,
              rir: true,
            },
          },
        },
      });
    });
  }
}
