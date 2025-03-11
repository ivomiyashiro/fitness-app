import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { WorkoutExerciseService } from '@/workout-exercise/contracts';

@Injectable()
export class WorkoutExerciseFindManyService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(workoutId: string): Promise<WorkoutExerciseService[]> {
    return this.prismaService.workoutExercise.findMany({
      where: {
        workoutId,
      },
      include: {
        exercise: true,
        sets: true,
        workout: true,
      },
      orderBy: {
        order: 'asc',
      },
    });
  }
}
