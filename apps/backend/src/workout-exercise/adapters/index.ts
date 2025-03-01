import { Injectable } from '@nestjs/common';
import { WorkoutExerciseResponse, WorkoutExerciseService } from '../contracts';

@Injectable()
export class WorkoutExerciseAdapter {
  toResponse(workoutExercise: WorkoutExerciseService): WorkoutExerciseResponse {
    return {
      workoutExerciseId: workoutExercise.workoutExerciseId,
      order: workoutExercise.order,
      exercise: {
        exerciseId: workoutExercise.exercise.exerciseId,
        name: workoutExercise.exercise.name,
      },
      workout: {
        workoutId: workoutExercise.workout.workoutId,
        name: workoutExercise.workout.name,
      },
      sets: workoutExercise.sets.map((set) => ({
        setId: set.setId,
        reps: set.reps,
        rir: set.rir,
      })),
    };
  }

  toResponseArray(
    workoutExercises: WorkoutExerciseService[],
  ): WorkoutExerciseResponse[] {
    return workoutExercises.map((workoutExercise) =>
      this.toResponse(workoutExercise),
    );
  }
}
