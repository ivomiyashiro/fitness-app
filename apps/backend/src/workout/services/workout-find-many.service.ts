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
        trainingPlanWeek: {
          select: {
            trainingPlanWeekId: true,
          },
        },
        workoutExercises: {
          include: {
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
          },
        },
      },
      orderBy: {
        order: 'asc',
      },
    });
  }
}
