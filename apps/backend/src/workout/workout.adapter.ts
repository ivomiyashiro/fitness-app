import { Injectable } from '@nestjs/common';
import { WorkoutResponse, WorkoutServiceResponse } from '@/workout/contracts';

@Injectable()
export class WorkoutAdapter {
  constructor() {}

  toResponse(workout: WorkoutServiceResponse): WorkoutResponse {
    return {
      workoutId: workout.workoutId,
      name: workout.name,
      order: workout.order,
      trainingPlanWeekId: workout.trainingPlanWeekId,
      workoutExercises: workout.workoutExercises.map((workoutExercise) => ({
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
      })),
    };
  }

  toResponseArray(workouts: WorkoutServiceResponse[]): WorkoutResponse[] {
    return workouts.map((workout) => this.toResponse(workout));
  }
}
