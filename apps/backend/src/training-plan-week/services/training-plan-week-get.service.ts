import { Injectable } from '@nestjs/common';
import { Prisma } from '@/prisma/generated/prisma-client';
import { TrainingPlanWeekWithRelations } from '@/training-plan-week/contracts';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class TrainingPlanWeekGetService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(
    trainingPlanId?: string,
  ): Promise<TrainingPlanWeekWithRelations[]> {
    let where: Prisma.TrainingPlanWeekWhereInput;

    if (trainingPlanId) {
      where = {
        trainingPlanId,
      };
    }

    return await this.prismaService.trainingPlanWeek.findMany({
      where,
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
