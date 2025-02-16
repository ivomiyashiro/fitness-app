import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { TrainingPlan } from '@prisma/client';

@Injectable()
export class GetManyTrainingPlanService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(): Promise<TrainingPlan[]> {
    return await this.prisma.trainingPlan.findMany();
  }
}
