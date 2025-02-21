import { CONFIG } from '@/common/config';
import { IHttpDeletedResponse } from '@/common/contracts';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  TrainingPlanCreateService,
  TrainingPlanDeleteService,
  TrainingPlanFindManyService,
  TrainingPlanFindService,
  TrainingPlanUpdateService,
} from './services';
import { TrainingPlanAdapter } from './adapters';
import {
  TrainingPlanCreate,
  TrainingPlanUpdate,
  TrainingPlanResponse,
} from './contracts';

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
  async getTrainingPlan(): Promise<TrainingPlanResponse[]> {
    const trainingPlans = await this.trainingPlanFindManyService.handle();

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
