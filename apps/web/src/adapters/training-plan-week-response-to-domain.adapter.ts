import { TrainingPlanWeekResponse } from "@/lib/api/training-plan-week/training-plan-week.types";
import { TrainingPlanWeek } from "@/models";

export const trainingPlanWeekResponseToDomainAdapter = (
  response: TrainingPlanWeekResponse,
): TrainingPlanWeek => {
  return {
    trainingPlanId: response.trainingPlanId,
    trainingPlanWeekId: response.trainingPlanWeekId,
    weekNumber: response.weekNumber,
  };
};
