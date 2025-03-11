import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import {
  WorkoutExerciseService,
  WorkoutExerciseCreate,
} from '@/workout-exercise/contracts';

@Injectable()
export class WorkoutExerciseCreateService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(data: WorkoutExerciseCreate): Promise<WorkoutExerciseService> {
    const workoutExercises = await this.prismaService.workoutExercise.findMany({
      where: {
        workoutId: data.workoutId,
      },
    });

    const workoutExerciseOrder = workoutExercises.length + 1;

    const workoutExercise = await this.prismaService.workoutExercise.create({
      data: {
        workoutId: data.workoutId,
        exerciseId: data.exerciseId,
        order: workoutExerciseOrder,
        sets: {
          createMany: {
            data: data.sets.map((set, index) => ({
              reps: set.reps,
              rir: set.rir,
              order: index + 1,
            })),
          },
        },
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

    return workoutExercise;
  }
}
