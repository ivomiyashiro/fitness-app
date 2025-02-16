import { PrismaService } from '@/prisma/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TrainingPlan } from '@prisma/client';
import { CreateTrainingPlan } from '../validators';

@Injectable()
export class CreateTrainingPlanService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(contract: CreateTrainingPlan): Promise<TrainingPlan> {
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
        weeks: {
          createMany: {
            data: newTrainingPlanWeeks,
          },
        },
      },
    });

    return createdTrainingPlan;
  }
}
