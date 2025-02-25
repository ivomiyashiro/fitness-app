import { Injectable } from '@nestjs/common';
import { Workout } from '@/prisma/generated/prisma-client';
import { WorkoutResponse } from '../contracts';

@Injectable()
export class WorkoutAdapter {
  constructor() {}

  toResponse(workout: Workout): WorkoutResponse {
    return {
      workoutId: workout.workoutId,
      name: workout.name,
      order: workout.order,
      trainingPlanWeekId: workout.trainingPlanWeekId,
    };
  }

  toResponseArray(workouts: Workout[]): WorkoutResponse[] {
    return workouts.map((workout) => this.toResponse(workout));
  }
}
