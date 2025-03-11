import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import {
  TrainingPlanWeekCreate,
  TrainingPlanWeekWithRelations,
} from '@/training-plan-week/contracts';

@Injectable()
export class TrainingPlanWeekCreateService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(
    contract: TrainingPlanWeekCreate,
  ): Promise<TrainingPlanWeekWithRelations> {
    const trainingPlan = await this.prismaService.trainingPlan.findUnique({
      where: { trainingPlanId: contract.trainingPlanId },
      include: {
        trainingPlanWeeks: {
          select: {
            weekNumber: true,
          },
        },
      },
    });

    if (!trainingPlan) {
      throw new HttpException(
        `Training plan with id '${contract.trainingPlanId}' not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    const nextWeekNumber = trainingPlan.trainingPlanWeeks.length + 1;

    return await this.prismaService.trainingPlanWeek.create({
      data: {
        ...contract,
        weekNumber: nextWeekNumber,
      },
      include: {
        workouts: {
          include: {
            workoutExercises: {
              include: {
                exercise: true,
                sets: true,
                workout: true,
              },
            },
          },
        },
      },
    });
  }
}
