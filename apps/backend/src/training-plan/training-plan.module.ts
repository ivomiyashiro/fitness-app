import { Module } from '@nestjs/common';
import { TrainingPlanAdapter } from '@/training-plan/training-plan.adapter';
import { TrainingPlanController } from '@/training-plan/training-plan.controller';
import {
  TrainingPlanCreateService,
  TrainingPlanDeleteService,
  TrainingPlanFindManyService,
  TrainingPlanFindService,
  TrainingPlanUpdateService,
} from '@/training-plan/services';

@Module({
  imports: [],
  controllers: [TrainingPlanController],
  providers: [
    TrainingPlanAdapter,
    TrainingPlanFindService,
    TrainingPlanFindManyService,
    TrainingPlanCreateService,
    TrainingPlanUpdateService,
    TrainingPlanDeleteService,
  ],
})
export class TrainingPlanModule {}
