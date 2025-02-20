import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

import { CreateTrainingPlan } from '../validators';
import { TrainingPlanWithWeeks } from '../contracts';

@Injectable()
export class CreateTrainingPlanService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(contract: CreateTrainingPlan): Promise<TrainingPlanWithWeeks> {
    const trainingPlan = await this.prisma.trainingPlan.findUnique({
      where: { name: contract.name },
    });

    if (trainingPlan) {
      throw new HttpException(
        `Training plan with name '${contract.name}' already exists`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const newTrainingPlan = {
      name: contract.name,
      description: contract.description,
    };

    // Creates a new training plan week for each week in the contract
    const newTrainingPlanWeeks = Array.from(
      { length: contract.weeks },
      (_, i) => ({
        weekNumber: i + 1,
      }),
    );

    const createdTrainingPlan = await this.prisma.trainingPlan.create({
      data: {
        ...newTrainingPlan,
        trainingPlanWeeks: {
          createMany: {
            data: newTrainingPlanWeeks,
          },
        },
      },
      include: {
        trainingPlanWeeks: true,
      },
    });

    return createdTrainingPlan;
  }
}
