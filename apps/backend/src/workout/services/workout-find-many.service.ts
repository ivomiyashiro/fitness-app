import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { WorkoutServiceResponse } from '../contracts';

@Injectable()
export class WorkoutFindManyService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(trainingPlanWeekId?: string): Promise<WorkoutServiceResponse[]> {
    return await this.prismaService.workout.findMany({
      where: {
        trainingPlanWeekId,
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
      orderBy: {
        order: 'asc',
      },
    });
  }
}
