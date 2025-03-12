import { Injectable } from '@nestjs/common';
import { Prisma } from '@/prisma/generated/prisma-client';

import {
  TrainingPlanSearchParams,
  TrainingPlanWithRelations,
} from '@/training-plan/contracts';

import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class TrainingPlanFindManyService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(
    params?: TrainingPlanSearchParams,
  ): Promise<TrainingPlanWithRelations[]> {
    const { sortBy, sortOrder, offset, search, limit } = params || {};

    const where: Prisma.TrainingPlanWhereInput = search
      ? {
          name: {
            contains: search,
            mode: 'insensitive',
          },
        }
      : {};

    return await this.prisma.trainingPlan.findMany({
      where,
      include: {
        trainingPlanWeeks: {
          include: {
            workouts: {
              include: {
                workoutExercises: {
                  include: {
                    exercise: true,
                    sets: true,
                    workout: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: {
        [sortBy]: sortOrder,
      },
      skip: offset,
      take: limit,
    });
  }
}
