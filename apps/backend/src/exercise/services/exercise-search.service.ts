import { Injectable } from '@nestjs/common';

import { Exercise, Prisma } from '@/prisma/generated/prisma-client';

import { PaginatedResponse, SortOrder } from '@/common/contracts';
import { ExerciseSearchParams, ExerciseSortField } from '@/exercise/contracts';

import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ExerciseSearchService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(
    params?: ExerciseSearchParams,
  ): Promise<PaginatedResponse<Exercise>> {
    const {
      search,
      limit = 20,
      offset = 0,
      sortBy = ExerciseSortField.NAME,
      sortOrder = SortOrder.ASC,
    } = params || {};

    const where: Prisma.ExerciseWhereInput = search
      ? {
          name: {
            contains: search,
            mode: 'insensitive',
          },
        }
      : {};

    const [data, totalCount] = await Promise.all([
      this.prisma.exercise.findMany({
        where,
        take: limit,
        skip: offset,
        orderBy: {
          [sortBy]: sortOrder,
        },
      }),
      this.prisma.exercise.count({ where }),
    ]);

    const currentPage = Math.floor(offset / limit) + 1;
    const totalPages = Math.ceil(totalCount / limit);

    return {
      data,
      meta: {
        totalCount,
        currentPage,
        totalPages,
        nextPage: currentPage < totalPages ? currentPage + 1 : null,
        prevPage: currentPage > 1 ? currentPage - 1 : null,
        currentPageCount: data.length,
        limit,
        offset,
      },
    };
  }
}
