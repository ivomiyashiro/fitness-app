import { Module } from '@nestjs/common';
import { WorkoutExerciseController } from '@/workout-exercise/workout-exercise.controller';
import { WorkoutExerciseAdapter } from '@/workout-exercise/workout-exercise.adapter';
import {
  WorkoutExerciseCreateService,
  WorkoutExerciseDeleteService,
  WorkoutExerciseFindManyService,
  WorkoutExerciseUpdateService,
} from '@/workout-exercise/services';

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
