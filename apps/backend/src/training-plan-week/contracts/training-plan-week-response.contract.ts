import { WorkoutResponse } from '@/workout/contracts';

export type TrainingPlanWeekResponse = {
  trainingPlanWeekId: string;
  trainingPlanId: string;
  weekNumber: number;
  workouts: Omit<WorkoutResponse, 'trainingPlanWeekId'>[];
};
