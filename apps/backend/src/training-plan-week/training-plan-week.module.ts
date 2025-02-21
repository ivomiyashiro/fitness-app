import { Module } from '@nestjs/common';
import { TrainingPlanWeekController } from './training-plan-week.controller';
import { TrainingPlanWeekAdapter } from './adapters';
import {
  CreateTrainingPlanWeekService,
  DeleteTrainingPlanWeekService,
  GetTrainingPlanWeekService,
} from './services';

@Module({
  imports: [],
  controllers: [TrainingPlanWeekController],
  providers: [
    TrainingPlanWeekAdapter,
    GetTrainingPlanWeekService,
    CreateTrainingPlanWeekService,
    DeleteTrainingPlanWeekService,
  ],
})
export class TrainingPlanWeekModule {}
