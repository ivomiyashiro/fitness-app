import { PrismaService } from '@/prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { WorkoutServiceResponse, WorkoutUpdate } from '../contracts';

@Injectable()
export class WorkoutUpdateService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(
    workoutId: string,
    contract: WorkoutUpdate,
  ): Promise<WorkoutServiceResponse> {
    const workout = await this.prismaService.workout.findUnique({
      where: { workoutId },
      include: {
        workoutExercises: true,
      },
    });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    const workoutWithSameName = await this.prismaService.workout.findFirst({
      where: {
        name: contract.name,
        trainingPlanWeekId: workout.trainingPlanWeekId,
        workoutId: {
          not: workoutId,
        },
      },
    });

    if (workoutWithSameName) {
      throw new BadRequestException(
        `Workout with name ${contract.name} already exists in this training plan week`,
      );
    }

    return this.prismaService.$transaction(async (prisma) => {
      const updatedWorkout = await prisma.workout.update({
        where: { workoutId },
        data: {
          name: contract.name,
          order: contract.order,
        },
        include: {
          trainingPlanWeek: {
            select: {
              trainingPlanWeekId: true,
            },
          },
          workoutExercises: {
            include: {
              workout: {
                select: {
                  workoutId: true,
                  name: true,
                },
              },
              exercise: {
                select: {
                  exerciseId: true,
                  name: true,
                },
              },
            },
          },
        },
      });

      const workoutExercisesToDelete = workout.workoutExercises.filter(
        (workoutExercise) =>
          !contract.exercises.some(
            (exercise) => exercise.exerciseId === workoutExercise.exerciseId,
          ),
      );

      await prisma.workoutExercise.deleteMany({
        where: {
          workoutId,
          workoutExerciseId: {
            in: workoutExercisesToDelete.map(
              (workoutExercise) => workoutExercise.workoutExerciseId,
            ),
          },
        },
      });

      // Updating order for existing exercises and creating new ones
      const existingExercises = await prisma.workoutExercise.findMany({
        where: { workoutId },
        select: { exerciseId: true, workoutExerciseId: true },
      });

      for (const [index, exercise] of contract.exercises.entries()) {
        const existingExercise = existingExercises.find(
          (e) => e.exerciseId === exercise.exerciseId,
        );

        if (existingExercise) {
          await prisma.workoutExercise.update({
            where: { workoutExerciseId: existingExercise.workoutExerciseId },
            data: { order: index },
          });
        } else {
          await prisma.workoutExercise.create({
            data: {
              order: index,
              exerciseId: exercise.exerciseId,
              workoutId,
            },
          });
        }
      }

      return updatedWorkout;
    });
  }
}
