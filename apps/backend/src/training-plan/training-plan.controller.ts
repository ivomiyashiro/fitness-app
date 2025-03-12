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

import { CONFIG } from '@/common/config';
import { IHttpDeletedResponse } from '@/common/contracts';

import { TrainingPlanAdapter } from '@/training-plan/training-plan.adapter';
import {
  TrainingPlanCreate,
  TrainingPlanUpdate,
  TrainingPlanResponse,
  TrainingPlanSearchParams,
} from '@/training-plan/contracts';
import {
  TrainingPlanCreateService,
  TrainingPlanDeleteService,
  TrainingPlanFindManyService,
  TrainingPlanFindService,
  TrainingPlanUpdateService,
} from '@/training-plan/services';

@Controller('training-plans')
export class TrainingPlanController {
  constructor(
    private readonly trainingPlanAdapter: TrainingPlanAdapter,
    private readonly trainingPlanCreateService: TrainingPlanCreateService,
    private readonly trainingPlanDeleteService: TrainingPlanDeleteService,
    private readonly trainingPlanFindManyService: TrainingPlanFindManyService,
    private readonly trainingPlanFindService: TrainingPlanFindService,
    private readonly trainingPlanUpdateService: TrainingPlanUpdateService,
  ) {}

  @Get()
  async getTrainingPlan(
    @Query() searchParams: TrainingPlanSearchParams,
  ): Promise<TrainingPlanResponse[]> {
    const trainingPlans =
      await this.trainingPlanFindManyService.handle(searchParams);

    return this.trainingPlanAdapter.toResponseArray(trainingPlans);
  }

  @Get(':id')
  async getTrainingPlanById(
    @Param('id') id: string,
  ): Promise<TrainingPlanResponse> {
    const trainingPlan = await this.trainingPlanFindService.handle(id);

    return this.trainingPlanAdapter.toResponse(trainingPlan);
  }

  @Post()
  async createTrainingPlan(
    @Body() contract: TrainingPlanCreate,
  ): Promise<TrainingPlanResponse> {
    const trainingPlan = await this.trainingPlanCreateService.handle(contract);

    return this.trainingPlanAdapter.toResponse(trainingPlan);
  }

  @Put(':id')
  async updateTrainingPlan(
    @Param('id') id: string,
    @Body() contract: TrainingPlanUpdate,
  ): Promise<TrainingPlanResponse> {
    const trainingPlan = await this.trainingPlanUpdateService.handle(
      id,
      contract,
    );

    return this.trainingPlanAdapter.toResponse(trainingPlan);
  }

  @Delete(':id')
  async deleteTrainingPlan(
    @Param('id') id: string,
  ): Promise<IHttpDeletedResponse> {
    await this.trainingPlanDeleteService.handle(id);

    return {
      message: CONFIG.DELETED_MESSAGE,
      path: '/training-plan',
      timestamp: new Date().toISOString(),
    };
  }
}
