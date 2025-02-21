import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Delete,
  Param,
} from '@nestjs/common';
import { IHttpDeletedResponse } from '@/common/contracts';
import {
  CreateTrainingPlanWeekService,
  DeleteTrainingPlanWeekService,
  GetTrainingPlanWeekService,
} from './services';
import { TrainingPlanWeekAdapter } from './adapters';
import { TrainingPlanWeekResponse, TrainingPlanWeekCreate } from './contracts';

@Controller('training-plan-weeks')
export class TrainingPlanWeekController {
  constructor(
    private readonly createTrainingPlanWeekService: CreateTrainingPlanWeekService,
    private readonly deleteTrainingPlanWeekService: DeleteTrainingPlanWeekService,
    private readonly getTrainingPlanWeekService: GetTrainingPlanWeekService,
    private readonly trainingPlanWeekAdapter: TrainingPlanWeekAdapter,
  ) {}

  @Get()
  async getTrainingPlanWeeks(
    @Query('trainingPlanId') trainingPlanId?: string,
  ): Promise<TrainingPlanWeekResponse[]> {
    const result = await this.getTrainingPlanWeekService.handle(trainingPlanId);

    return this.trainingPlanWeekAdapter.toReponseArray(result);
  }

  @Post()
  async createTrainingPlanWeek(
    @Body() contract: TrainingPlanWeekCreate,
  ): Promise<TrainingPlanWeekResponse> {
    const result = await this.createTrainingPlanWeekService.handle(contract);

    return this.trainingPlanWeekAdapter.toReponse(result);
  }

  @Delete(':id')
  async deleteTrainingPlanWeek(
    @Param('id') id: string,
  ): Promise<IHttpDeletedResponse> {
    await this.deleteTrainingPlanWeekService.handle(id);

    return {
      message: 'Training plan week deleted successfully',
      timestamp: new Date().toISOString(),
      path: '/training-plan-weeks',
    };
  }
}
