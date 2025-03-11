import { PrismaService } from '@/prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { WorkoutCreate, WorkoutServiceResponse } from '../contracts';

@Injectable()
export class WorkoutCreateService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(data: WorkoutCreate): Promise<WorkoutServiceResponse> {
    const trainingPlanWeek =
      await this.prismaService.trainingPlanWeek.findUnique({
        where: {
          trainingPlanWeekId: data.trainingPlanWeekId,
        },
      });

    if (!trainingPlanWeek) {
      throw new NotFoundException(
        `Training plan week with id ${data.trainingPlanWeekId} not found`,
      );
    }

    const workoutWithSameName = await this.prismaService.workout.findFirst({
      where: {
        name: data.name,
        trainingPlanWeekId: data.trainingPlanWeekId,
      },
    });

    if (workoutWithSameName) {
      throw new BadRequestException(
        `Workout with name ${data.name} already exists in this training plan week`,
      );
    }

    return await this.prismaService.$transaction(async (tx) => {
      const workouts = await tx.workout.findMany({
        where: {
          trainingPlanWeekId: data.trainingPlanWeekId,
        },
        select: {
          order: true,
        },
      });

      const order = workouts.length + 1;

      const workout = await tx.workout.create({
        data: {
          name: data.name,
          trainingPlanWeekId: data.trainingPlanWeekId,
          order,
        },
        include: {
          workoutExercises: {
            include: {
              exercise: true,
              sets: true,
              workout: true,
            },
          },
        },
      });

      // Create workout exercises
      await tx.workoutExercise.createMany({
        data: data.exercises.map((exercise, index) => ({
          workoutId: workout.workoutId,
          exerciseId: exercise.exerciseId,
          order: index,
        })),
      });

      return workout;
    });
  }
}
