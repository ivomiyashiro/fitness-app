import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

import { TrainingPlanWithRelations } from '@/training-plan/contracts';

@Injectable()
export class TrainingPlanFindService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(id: string): Promise<TrainingPlanWithRelations> {
    const trainingPlan = await this.prisma.trainingPlan.findUnique({
      where: { trainingPlanId: id },
      include: {
        trainingPlanWeeks: {
          include: {
            workouts: {
              include: {
                workoutExercises: true,
              },
            },
          },
        },
      },
    });

    if (!trainingPlan) {
      throw new HttpException(
        `Training plan with id '${id}' not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return trainingPlan;
  }
}
