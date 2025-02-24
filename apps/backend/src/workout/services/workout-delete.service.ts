import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Workout } from '@/prisma/generated/prisma-client';

@Injectable()
export class WorkoutDeleteService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(workoutId: string): Promise<Workout> {
    const workout = await this.prismaService.workout.findUnique({
      where: { workoutId },
    });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    return this.prismaService.workout.delete({
      where: { workoutId },
    });
  }
}
