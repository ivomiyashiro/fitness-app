import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { TrainingPlanWeek } from '@/prisma/generated/prisma-client';

@Injectable()
export class TrainingPlanWeekDeleteService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(trainingPlanWeekId: string): Promise<TrainingPlanWeek> {
    return await this.prismaService.$transaction(async (tx) => {
      const trainingPlanWeek = await tx.trainingPlanWeek.findUnique({
        where: { trainingPlanWeekId },
      });

      if (!trainingPlanWeek) {
        throw new HttpException(
          'Training plan week not found',
          HttpStatus.NOT_FOUND,
        );
      }

      await tx.trainingPlanWeek.delete({
        where: { trainingPlanWeekId },
      });

      const trainingPlan = await tx.trainingPlan.findUnique({
        where: { trainingPlanId: trainingPlanWeek.trainingPlanId },
        include: {
          trainingPlanWeeks: {
            orderBy: {
              weekNumber: 'asc',
            },
          },
        },
      });

      if (!trainingPlan) {
        throw new HttpException(
          'Training plan not found',
          HttpStatus.NOT_FOUND,
        );
      }

      // Update each week's number individually
      for (const [index, tpw] of trainingPlan.trainingPlanWeeks.entries()) {
        await tx.trainingPlanWeek.update({
          where: { trainingPlanWeekId: tpw.trainingPlanWeekId },
          data: { weekNumber: index + 1 },
        });
      }

      return trainingPlanWeek;
    });
  }
}
