import { Injectable } from '@nestjs/common';
import { Prisma } from '@/prisma/generated/prisma-client';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class TrainingPlanWeekGetService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(trainingPlanId?: string) {
    let where: Prisma.TrainingPlanWeekWhereInput;

    if (trainingPlanId) {
      where = {
        trainingPlanId,
      };
    }

    return await this.prismaService.trainingPlanWeek.findMany({
      where,
    });
  }
}
