import { Module } from '@nestjs/common';
import { WorkoutController } from './workout.controller';
import { WorkoutAdapter } from './adapters';
import {
  WorkoutCreateService,
  WorkoutDeleteService,
  WorkoutFindManyService,
  WorkoutUpdateService,
} from './services';

@Module({
  imports: [],
  controllers: [WorkoutController],
  providers: [
    WorkoutAdapter,
    WorkoutCreateService,
    WorkoutDeleteService,
    WorkoutFindManyService,
    WorkoutUpdateService,
  ],
})
export class WorkoutModule {}
