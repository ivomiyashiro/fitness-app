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
import { IHttpDeletedResponse } from '@/common/contracts';
import { WorkoutCreate, WorkoutResponse, WorkoutUpdate } from './contracts';
import { WorkoutAdapter } from './adapters';
import {
  WorkoutCreateService,
  WorkoutDeleteService,
  WorkoutFindManyService,
  WorkoutUpdateService,
} from './services';

@Controller('workouts')
export class WorkoutController {
  constructor(
    private readonly workoutAdapter: WorkoutAdapter,
    private readonly workoutCreateService: WorkoutCreateService,
    private readonly workoutDeleteService: WorkoutDeleteService,
    private readonly workoutFindManyService: WorkoutFindManyService,
    private readonly workoutUpdateService: WorkoutUpdateService,
  ) {}

  @Get()
  async getWorkouts(
    @Query('trainingPlanWeekId') trainingPlanWeekId?: string,
  ): Promise<WorkoutResponse[]> {
    const workouts =
      await this.workoutFindManyService.handle(trainingPlanWeekId);
    return this.workoutAdapter.toResponseArray(workouts);
  }

  @Post()
  async createWorkout(@Body() data: WorkoutCreate): Promise<WorkoutResponse> {
    const workout = await this.workoutCreateService.handle(data);
    return this.workoutAdapter.toResponse(workout);
  }

  @Put(':workoutId')
  async updateWorkout(
    @Param('workoutId') workoutId: string,
    @Body() data: WorkoutUpdate,
  ): Promise<WorkoutResponse> {
    const workout = await this.workoutUpdateService.handle(workoutId, data);
    return this.workoutAdapter.toResponse(workout);
  }

  // TODO: Update bulk for workouts order

  @Delete(':workoutId')
  async deleteWorkout(
    @Param('workoutId') workoutId: string,
  ): Promise<IHttpDeletedResponse> {
    await this.workoutDeleteService.handle(workoutId);
    return {
      message: 'Workout deleted successfully',
      timestamp: new Date().toISOString(),
      path: '/workouts',
    };
  }
}
