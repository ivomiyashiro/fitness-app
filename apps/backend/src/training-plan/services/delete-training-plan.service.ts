import { PrismaService } from '@/prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TrainingPlan } from '@prisma/client';

@Injectable()
export class DeleteTrainingPlanService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(id: string): Promise<TrainingPlan> {
    const trainingPlan = await this.prisma.trainingPlan.findUnique({
      where: { trainingPlanId: id },
    });

    if (!trainingPlan) {
      throw new HttpException(
        `Training plan with id '${id}' not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return await this.prisma.trainingPlan.delete({
      where: { trainingPlanId: id },
    });
  }
}
