import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { WorkoutExerciseAdapter } from './adapters';
import {
  WorkoutExerciseCreateService,
  WorkoutExerciseDeleteService,
  WorkoutExerciseUpdateService,
  WorkoutExerciseFindManyService,
} from './services';
import { WorkoutExerciseCreate, WorkoutExerciseUpdate } from './contracts';

@Controller('workout-exercises')
export class WorkoutExerciseController {
  constructor(
    private readonly workoutExerciseAdapter: WorkoutExerciseAdapter,
    private readonly workoutExerciseCreateService: WorkoutExerciseCreateService,
    private readonly workoutExerciseDeleteService: WorkoutExerciseDeleteService,
    private readonly workoutExerciseFindManyService: WorkoutExerciseFindManyService,
    private readonly workoutExerciseUpdateService: WorkoutExerciseUpdateService,
  ) {}

  @Get()
  async findMany(@Query('workoutId') workoutId: string) {
    const result = await this.workoutExerciseFindManyService.handle(workoutId);

    return this.workoutExerciseAdapter.toResponseArray(result);
  }

  @Post()
  async create(@Body() data: WorkoutExerciseCreate) {
    const result = await this.workoutExerciseCreateService.handle(data);

    return this.workoutExerciseAdapter.toResponse(result);
  }

  @Put(':workoutExerciseId')
  async update(
    @Param('workoutExerciseId') workoutExerciseId: string,
    @Body() data: WorkoutExerciseUpdate,
  ) {
    const result = await this.workoutExerciseUpdateService.handle(
      workoutExerciseId,
      data,
    );

    return this.workoutExerciseAdapter.toResponse(result);
  }

  @Delete(':workoutExerciseId')
  async delete(@Param('workoutExerciseId') workoutExerciseId: string) {
    await this.workoutExerciseDeleteService.handle(workoutExerciseId);

    return {
      message: 'Workout exercise deleted successfully',
      timestamp: new Date().toISOString(),
      path: '/workout-exercises/:workoutExerciseId',
    };
  }
}
