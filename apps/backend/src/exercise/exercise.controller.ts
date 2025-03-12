import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { PaginatedResponse } from '@/common/contracts';
import {
  ExerciseResponse,
  ExerciseCreate,
  ExerciseSearchParams,
} from '@/exercise/contracts';

import { ExerciseAdapter } from '@/exercise/exercise.adapter';

import {
  ExerciseCreateBulkService,
  ExerciseSearchService,
} from '@/exercise/services';

@Controller('exercises')
export class ExerciseController {
  constructor(
    private readonly exerciseAdapter: ExerciseAdapter,
    private readonly exerciseCreateBulkService: ExerciseCreateBulkService,
    private readonly exerciseSearchService: ExerciseSearchService,
  ) {}

  @Get()
  async getExercises(
    @Query() searchParams: ExerciseSearchParams,
  ): Promise<PaginatedResponse<ExerciseResponse>> {
    const result = await this.exerciseSearchService.handle(searchParams);

    return {
      data: this.exerciseAdapter.toResponseArray(result.data),
      meta: result.meta,
    };
  }

  @Post('/bulk')
  async createExercises(
    @Body() exercises: ExerciseCreate[],
  ): Promise<ExerciseResponse[]> {
    const result = await this.exerciseCreateBulkService.handle(exercises);

    return this.exerciseAdapter.toResponseArray(result);
  }
}
