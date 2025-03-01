import { Module } from '@nestjs/common';
import { WorkoutExerciseController } from './workout-exercise.controller';
import { WorkoutExerciseAdapter } from './adapters';
import {
  WorkoutExerciseCreateService,
  WorkoutExerciseDeleteService,
  WorkoutExerciseFindManyService,
  WorkoutExerciseUpdateService,
} from './services';

@Module({
  controllers: [WorkoutExerciseController],
  providers: [
    WorkoutExerciseAdapter,
    WorkoutExerciseCreateService,
    WorkoutExerciseDeleteService,
    WorkoutExerciseFindManyService,
    WorkoutExerciseUpdateService,
  ],
})
export class WorkoutExerciseModule {}
