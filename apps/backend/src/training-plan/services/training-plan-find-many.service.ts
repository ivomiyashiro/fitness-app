import { Injectable } from '@nestjs/common';
import { Prisma } from '@/prisma/generated/prisma-client';

import {
  TrainingPlanSearchParams,
  TrainingPlanWithRelations,
} from '@/training-plan/contracts';

import { PrismaService } from '@/prisma/prisma.service';
import { PaginatedResponse } from '@/common/contracts';

@Injectable()
export class TrainingPlanFindManyService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(
    params?: TrainingPlanSearchParams,
  ): Promise<PaginatedResponse<TrainingPlanWithRelations>> {
    const { sortBy, sortOrder, offset, search, limit } = params || {};

    const where: Prisma.TrainingPlanWhereInput = search
      ? {
          name: {
            contains: search,
            mode: 'insensitive',
          },
        }
      : {};

    const result = await this.prisma.trainingPlan.findMany({
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

    return {
      data: result,
      meta: {
        currentPage: offset,
        totalCount: result.length,
        totalPages: Math.ceil(result.length / limit),
        nextPage: offset + limit,
        prevPage: offset - limit,
        currentPageCount: result.length,
        limit,
        offset,
      },
    };
  }
}
