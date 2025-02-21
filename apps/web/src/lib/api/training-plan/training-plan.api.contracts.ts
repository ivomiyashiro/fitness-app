export type TrainingPlanResponse = {
  trainingPlanId: string;
  name: string;
  description: string;
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
