export type TrainingPlanResponse = {
  trainingPlanId: string;
  name: string;
  description: string;
  trainingPlanWeeks: {
    trainingPlanWeekId: string;
    weekNumber: number;
  }[];
};
