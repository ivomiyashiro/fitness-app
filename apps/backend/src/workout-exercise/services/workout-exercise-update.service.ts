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
    return await this.prismaService.workoutExercise.update({
      where: { workoutExerciseId },
      data: {
        sets: {
          upsert: data.sets.map((set) => ({
            where: { setId: set.setId },
            update: { ...set },
            create: { ...set, order: order + 1 },
          })),
          deleteMany: {
            setId: {
              notIn: data.sets.map((set) => set.setId),
            },
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
  }
}
