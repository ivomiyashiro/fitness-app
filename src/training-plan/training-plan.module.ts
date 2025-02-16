import { Module } from '@nestjs/common';
import { TrainingPlanController } from './training-plan.controller';
import { TrainingPlanAdapter } from './adapters';
import {
  CreateTrainingPlanService,
  DeleteTrainingPlanService,
  GetManyTrainingPlanService,
  GetTrainingPlanService,
  UpdateTrainingPlanService,
} from './services';

@Module({
  imports: [],
  controllers: [TrainingPlanController],
  providers: [
    TrainingPlanAdapter,
    GetTrainingPlanService,
    GetManyTrainingPlanService,
    CreateTrainingPlanService,
    UpdateTrainingPlanService,
    DeleteTrainingPlanService,
  ],
})
export class TrainingPlanModule {}
