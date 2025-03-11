import { WorkoutExerciseResponse } from '@/workout-exercise/contracts';

export type WorkoutResponse = {
  workoutId: string;
  trainingPlanWeekId: string;
  name: string;
  order: number;
  workoutExercises: Omit<WorkoutExerciseResponse, 'workoutId'>[];
};
