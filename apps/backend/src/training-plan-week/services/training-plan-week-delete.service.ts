import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { TrainingPlanWeek } from '@/prisma/generated/prisma-client';

@Injectable()
export class TrainingPlanWeekDeleteService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(trainingPlanWeekId: string): Promise<TrainingPlanWeek> {
    const trainingPlanWeek =
      await this.prismaService.trainingPlanWeek.findUnique({
        where: { trainingPlanWeekId },
      });

    if (!trainingPlanWeek) {
      throw new HttpException(
        'Training plan week not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return await this.prismaService.trainingPlanWeek.delete({
      where: { trainingPlanWeekId },
    });
  }
}
