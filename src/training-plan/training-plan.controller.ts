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
import { TrainingPlanAdapter } from './adapters';
import { ITrainingPlanResponse } from './contracts/training-plan.response';
import {
  CreateTrainingPlanService,
  DeleteTrainingPlanService,
  GetManyTrainingPlanService,
  GetTrainingPlanService,
  UpdateTrainingPlanService,
} from './services';
import { CreateTrainingPlan, UpdateTrainingPlan } from './validators';

@Controller('training-plan')
export class TrainingPlanController {
  constructor(
    private readonly getTrainingPlanService: GetTrainingPlanService,
    private readonly getManyTrainingPlanService: GetManyTrainingPlanService,
    private readonly createTrainingPlanService: CreateTrainingPlanService,
    private readonly deleteTrainingPlanService: DeleteTrainingPlanService,
    private readonly updateTrainingPlanService: UpdateTrainingPlanService,
    private readonly trainingPlanAdapter: TrainingPlanAdapter,
  ) {}

  @Get()
  async getTrainingPlan(): Promise<ITrainingPlanResponse[]> {
    const trainingPlans = await this.getManyTrainingPlanService.handle();

    return this.trainingPlanAdapter.toResponseArray(trainingPlans);
  }

  @Get(':id')
  async getTrainingPlanById(
    @Param('id') id: string,
  ): Promise<ITrainingPlanResponse> {
    const trainingPlan = await this.getTrainingPlanService.handle(id);

    return this.trainingPlanAdapter.toResponse(trainingPlan);
  }

  @Post()
  async createTrainingPlan(
    @Body() contract: CreateTrainingPlan,
  ): Promise<ITrainingPlanResponse> {
    const trainingPlan = await this.createTrainingPlanService.handle(contract);

    return this.trainingPlanAdapter.toResponse(trainingPlan);
  }

  @Put(':id')
  async updateTrainingPlan(
    @Param('id') id: string,
    @Body() contract: UpdateTrainingPlan,
  ): Promise<ITrainingPlanResponse> {
    const trainingPlan = await this.updateTrainingPlanService.handle(
      id,
      contract,
    );

    return this.trainingPlanAdapter.toResponse(trainingPlan);
  }

  @Delete(':id')
  async deleteTrainingPlan(
    @Param('id') id: string,
  ): Promise<IHttpDeletedResponse> {
    await this.deleteTrainingPlanService.handle(id);

    return {
      message: CONFIG.DELETED_MESSAGE,
      path: '/training-plan',
      timestamp: new Date().toISOString(),
    };
  }
}
