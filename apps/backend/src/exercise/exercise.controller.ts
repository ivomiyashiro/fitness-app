import { Body, Controller, Get, Post } from '@nestjs/common';
import {
  ExerciseCreateBulkService,
  ExerciseFindManyService,
} from '@/exercise/services';
import { ExerciseResponse, ExerciseCreate } from '@/exercise/contracts';
import { ExerciseAdapter } from '@/exercise/exercise.adapter';

@Controller('exercises')
export class ExerciseController {
  constructor(
    private readonly exerciseAdapter: ExerciseAdapter,
    private readonly exerciseCreateBulkService: ExerciseCreateBulkService,
    private readonly exerciseFindManyService: ExerciseFindManyService,
  ) {}

  @Get()
  async getExercises(): Promise<ExerciseResponse[]> {
    const result = await this.exerciseFindManyService.handle();

    return this.exerciseAdapter.toResponseArray(result);
  }

  @Post('/bulk')
  async createExercises(
    @Body() exercises: ExerciseCreate[],
  ): Promise<ExerciseResponse[]> {
    const result = await this.exerciseCreateBulkService.handle(exercises);

    return this.exerciseAdapter.toResponseArray(result);
  }
}
