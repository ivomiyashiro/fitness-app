import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { WorkoutExerciseService } from '../contracts';

@Injectable()
export class WorkoutExerciseFindManyService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(workoutId: string): Promise<WorkoutExerciseService[]> {
    return this.prismaService.workoutExercise.findMany({
      where: {
        workoutId,
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
      orderBy: {
        order: 'asc',
      },
    });
  }
}
