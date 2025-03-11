import { Injectable } from '@nestjs/common';
import {
  TrainingPlanResponse,
  TrainingPlanWithRelations,
} from '@/training-plan/contracts';

@Injectable()
export class TrainingPlanAdapter {
  toResponse(trainingPlan: TrainingPlanWithRelations): TrainingPlanResponse {
    return {
      trainingPlanId: trainingPlan.trainingPlanId,
      name: trainingPlan.name,
      description: trainingPlan.description,
      trainingPlanWeeks: trainingPlan.trainingPlanWeeks.map(
        (trainingPlanWeek) => ({
          trainingPlanWeekId: trainingPlanWeek.trainingPlanWeekId,
          weekNumber: trainingPlanWeek.weekNumber,
          workouts: trainingPlanWeek.workouts.map((workout) => ({
            trainingPlanWeekId: trainingPlanWeek.trainingPlanWeekId,
            workoutId: workout.workoutId,
            name: workout.name,
            order: workout.order,
            workoutExercises: workout.workoutExercises.map(
              (workoutExercise) => ({
                workoutExerciseId: workoutExercise.workoutExerciseId,
                order: workoutExercise.order,
                exercise: {
                  exerciseId: workoutExercise.exercise.exerciseId,
                  name: workoutExercise.exercise.name,
                },
                sets: workoutExercise.sets.map((set) => ({
                  setId: set.setId,
                  reps: set.reps,
                  rir: set.rir,
                })),
                workout: {
                  workoutId: workoutExercise.workout.workoutId,
                  name: workoutExercise.workout.name,
                },
              }),
            ),
          })),
        }),
      ),
    };
  }

  toResponseArray(
    trainingPlans: TrainingPlanWithRelations[],
  ): TrainingPlanResponse[] {
    return trainingPlans.map((trainingPlan) => this.toResponse(trainingPlan));
  }
}
