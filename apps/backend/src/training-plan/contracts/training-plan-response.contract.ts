import { TrainingPlanWeekResponse } from '@/training-plan-week/contracts';

export type TrainingPlanResponse = {
  trainingPlanId: string;
  name: string;
  description: string;
  trainingPlanWeeks: Omit<TrainingPlanWeekResponse, 'trainingPlanId'>[];
};
