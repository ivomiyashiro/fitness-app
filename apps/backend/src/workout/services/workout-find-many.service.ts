import { Injectable } from '@nestjs/common';
import { Workout } from '@/prisma/generated/prisma-client';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class WorkoutFindManyService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(trainingPlanWeekId?: string): Promise<Workout[]> {
    return await this.prismaService.workout.findMany({
      where: {
        trainingPlanWeekId,
      },
      include: {
        trainingPlanWeek: {
          select: {
            trainingPlanId: true,
          },
        },
      },
      orderBy: {
        order: 'asc',
      },
    });
  }
}
