import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

import { TrainingPlanWithWeeks } from '../contracts';

@Injectable()
export class GetManyTrainingPlanService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(): Promise<TrainingPlanWithWeeks[]> {
    return await this.prisma.trainingPlan.findMany({
      include: {
        trainingPlanWeeks: true,
      },
    });
  }
}
