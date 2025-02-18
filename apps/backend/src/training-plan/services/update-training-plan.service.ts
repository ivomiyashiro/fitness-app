import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TrainingPlan } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { UpdateTrainingPlan } from '../validators';

@Injectable()
export class UpdateTrainingPlanService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(
    id: string,
    contract: UpdateTrainingPlan,
  ): Promise<TrainingPlan> {
    const trainingPlan = await this.prisma.trainingPlan.findUnique({
      where: { trainingPlanId: id },
    });

    if (!trainingPlan) {
      throw new HttpException(
        `Training plan with id '${id}' not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    const existingTrainingPlan = await this.prisma.trainingPlan.findUnique({
      where: { name: contract.name },
    });

    if (existingTrainingPlan && existingTrainingPlan.trainingPlanId !== id) {
      throw new HttpException(
        `Training plan with name '${contract.name}' already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const updatedTrainingPlan = {
      ...trainingPlan,
      ...contract,
    };

    return await this.prisma.trainingPlan.update({
      where: { trainingPlanId: id },
      data: updatedTrainingPlan,
    });
  }
}
