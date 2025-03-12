import { TrainingPlan } from "@/domain";
import { WorkoutResponse } from "../workout/workout.api.types";

export type TrainingPlanWeekResponse = {
  trainingPlanWeekId: string;
  trainingPlanId: string;
  weekNumber: number;
  workouts: Omit<WorkoutResponse, "trainingPlanWeekId">[];
};

export type TrainingPlanWeekPostRequest = {
  trainingPlanId: TrainingPlan["trainingPlanId"];
};
