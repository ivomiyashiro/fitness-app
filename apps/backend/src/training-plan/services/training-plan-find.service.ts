import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

import { TrainingPlanWithWeeks } from '../contracts';

@Injectable()
export class TrainingPlanFindService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(id: string): Promise<TrainingPlanWithWeeks> {
    const trainingPlan = await this.prisma.trainingPlan.findUnique({
      where: { trainingPlanId: id },
      include: {
        trainingPlanWeeks: true,
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
