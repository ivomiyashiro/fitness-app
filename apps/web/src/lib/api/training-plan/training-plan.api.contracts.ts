import { TrainingPlanWeekResponse } from "../training-plan-week/training-plan-week.types";

export type TrainingPlanResponse = {
  trainingPlanId: string;
  name: string;
  description: string;
  trainingPlanWeeks: Omit<TrainingPlanWeekResponse, "trainingPlanId">[];
};

export type TrainingPlanPostRequest = {
  name: string;
  description?: string;
  weeks: number;
};

export type TrainingPlanPutRequest = {
  name: string;
  description?: string;
};
