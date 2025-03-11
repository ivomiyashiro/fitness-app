import { Module } from '@nestjs/common';
import { WorkoutController } from '@/workout/workout.controller';
import { WorkoutAdapter } from '@/workout/workout.adapter';
import {
  WorkoutCreateService,
  WorkoutDeleteService,
  WorkoutFindManyService,
  WorkoutUpdateService,
} from '@/workout/services';

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
