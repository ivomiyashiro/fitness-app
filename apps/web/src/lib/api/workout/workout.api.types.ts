import { ExerciseResponse } from "../exercise/exercise.api.types";

export type WorkoutPostRequest = {
  trainingPlanWeekId: string;
  name: string;
  order?: number;
  exercises: ExerciseResponse[];
};

export type WorkoutPutRequest = {
  trainingPlanWeekId: string;
  name: string;
  order?: number;
  exercises: ExerciseResponse[];
};

export type WorkoutResponse = {
  workoutId: string;
  trainingPlanWeekId: string;
  name: string;
  order: number;
};
