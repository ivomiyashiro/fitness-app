import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class WorkoutExerciseDeleteService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(workoutExerciseId: string) {
    const workoutExercise = await this.prismaService.workoutExercise.findUnique(
      {
        where: { workoutExerciseId },
      },
    );

    if (!workoutExercise) {
      throw new NotFoundException('Workout exercise not found');
    }

    await this.prismaService.workoutExercise.delete({
      where: { workoutExerciseId },
    });
  }
}
