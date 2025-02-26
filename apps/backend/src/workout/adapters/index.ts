import { Injectable } from '@nestjs/common';
import { WorkoutResponse, WorkoutServiceResponse } from '../contracts';

@Injectable()
export class WorkoutAdapter {
  constructor() {}

  toResponse(workout: WorkoutServiceResponse): WorkoutResponse {
    return {
      workoutId: workout.workoutId,
      name: workout.name,
      order: workout.order,
      trainingPlanWeekId: workout.trainingPlanWeekId,
      exercises: workout.workoutExercises.map((workoutExercise) => ({
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
      })),
    };
  }

  toResponseArray(workouts: WorkoutServiceResponse[]): WorkoutResponse[] {
    return workouts.map((workout) => this.toResponse(workout));
  }
}
