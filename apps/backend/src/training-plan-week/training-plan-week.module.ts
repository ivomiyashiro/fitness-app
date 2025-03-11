import { Module } from '@nestjs/common';
import { TrainingPlanWeekAdapter } from '@/training-plan-week/training-plan-week.adapter';
import { TrainingPlanWeekController } from '@/training-plan-week/training-plan-week.controller';
import {
  TrainingPlanWeekCreateService,
  TrainingPlanWeekDeleteService,
  TrainingPlanWeekGetService,
  TrainingPlanWeekCopyService,
} from '@/training-plan-week/services';

@Module({
  imports: [],
  controllers: [TrainingPlanWeekController],
  providers: [
    TrainingPlanWeekAdapter,
    TrainingPlanWeekCreateService,
    TrainingPlanWeekDeleteService,
    TrainingPlanWeekCopyService,
    TrainingPlanWeekGetService,
  ],
})
export class TrainingPlanWeekModule {}
