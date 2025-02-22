import { Module } from '@nestjs/common';
import { TrainingPlanWeekController } from './training-plan-week.controller';
import { TrainingPlanWeekAdapter } from './adapters';
import {
  TrainingPlanWeekCreateService,
  TrainingPlanWeekDeleteService,
  TrainingPlanWeekGetService,
} from './services';

@Module({
  imports: [],
  controllers: [TrainingPlanWeekController],
  providers: [
    TrainingPlanWeekAdapter,
    TrainingPlanWeekCreateService,
    TrainingPlanWeekDeleteService,
    TrainingPlanWeekGetService,
  ],
})
export class TrainingPlanWeekModule {}
