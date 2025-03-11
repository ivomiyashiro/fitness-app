import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';

import { IHttpDeletedResponse } from '@/common/contracts';
import {
  TrainingPlanWeekResponse,
  TrainingPlanWeekCreate,
} from '@/training-plan-week/contracts';

import { TrainingPlanWeekAdapter } from '@/training-plan-week/training-plan-week.adapter';
import {
  TrainingPlanWeekCopyService,
  TrainingPlanWeekCreateService,
  TrainingPlanWeekDeleteService,
  TrainingPlanWeekGetService,
} from '@/training-plan-week/services';

@Controller('training-plan-weeks')
export class TrainingPlanWeekController {
  constructor(
    private readonly trainingPlanWeekAdapter: TrainingPlanWeekAdapter,
    private readonly trainingPlanWeekCreateService: TrainingPlanWeekCreateService,
    private readonly trainingPlanWeekDeleteService: TrainingPlanWeekDeleteService,
    private readonly trainingPlanWeekCopyService: TrainingPlanWeekCopyService,
    private readonly trainingPlanWeekGetService: TrainingPlanWeekGetService,
  ) {}

  @Get()
  async getTrainingPlanWeeks(
    @Query('trainingPlanId') trainingPlanId?: string,
  ): Promise<TrainingPlanWeekResponse[]> {
    const result = await this.trainingPlanWeekGetService.handle(trainingPlanId);

    return this.trainingPlanWeekAdapter.toReponseArray(result);
  }

  @Post()
  async createTrainingPlanWeek(
    @Body() contract: TrainingPlanWeekCreate,
  ): Promise<TrainingPlanWeekResponse> {
    const result = await this.trainingPlanWeekCreateService.handle(contract);

    return this.trainingPlanWeekAdapter.toReponse(result);
  }

  @Delete(':id')
  async deleteTrainingPlanWeek(
    @Param('id') id: string,
  ): Promise<IHttpDeletedResponse> {
    await this.trainingPlanWeekDeleteService.handle(id);

    return {
      message: 'Training plan week deleted successfully',
      timestamp: new Date().toISOString(),
      path: '/training-plan-weeks',
    };
  }

  @Put(':id/copy')
  async copyTrainingPlanWeek(
    @Param('id') id: string,
  ): Promise<TrainingPlanWeekResponse[]> {
    const result = await this.trainingPlanWeekCopyService.handle(id);

    return this.trainingPlanWeekAdapter.toReponseArray(result);
  }
}
