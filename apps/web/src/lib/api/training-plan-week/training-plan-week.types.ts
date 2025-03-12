import { TrainingPlan } from "@/domain";
import { WorkoutResponse } from "../workout/workout.api.types";

export type TrainingPlanWeekResponse = {
  trainingPlanWeekId: string;
  trainingPlanId: string;
  weekNumber: number;
  workouts: WorkoutResponse[];
};

export type TrainingPlanWeekPostRequest = {
  trainingPlanId: TrainingPlan["trainingPlanId"];
};
