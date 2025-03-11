import { Injectable } from '@nestjs/common';
import {
  TrainingPlanWeekResponse,
  TrainingPlanWeekWithRelations,
} from '@/training-plan-week/contracts';

@Injectable()
export class TrainingPlanWeekAdapter {
  toReponse(
    trainingPlanWeek: TrainingPlanWeekWithRelations,
  ): TrainingPlanWeekResponse {
    return {
      trainingPlanWeekId: trainingPlanWeek.trainingPlanWeekId,
      trainingPlanId: trainingPlanWeek.trainingPlanId,
      weekNumber: trainingPlanWeek.weekNumber,
      workouts: trainingPlanWeek.workouts.map((workout) => ({
        workoutId: workout.workoutId,
        name: workout.name,
        order: workout.order,
        workoutExercises: workout.workoutExercises.map((workoutExercise) => ({
          workoutExerciseId: workoutExercise.workoutExerciseId,
          order: workoutExercise.order,
          workout: {
            workoutId: workoutExercise.workout.workoutId,
            name: workoutExercise.workout.name,
          },
          exercise: {
            exerciseId: workoutExercise.exercise.exerciseId,
            name: workoutExercise.exercise.name,
          },
          sets: workoutExercise.sets.map((set) => ({
            setId: set.setId,
            reps: set.reps,
            rir: set.rir,
          })),
        })),
      })),
    };
  }

  toReponseArray(
    trainingPlanWeeks: TrainingPlanWeekWithRelations[],
  ): TrainingPlanWeekResponse[] {
    return trainingPlanWeeks.map((trainingPlanWeek) =>
      this.toReponse(trainingPlanWeek),
    );
  }
}
