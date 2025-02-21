import { Module } from '@nestjs/common';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanAdapter } from './adapters';
import {
  TrainingPlanCreateService,
  TrainingPlanDeleteService,
  TrainingPlanFindManyService,
  TrainingPlanFindService,
  TrainingPlanUpdateService,
} from './services';

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
