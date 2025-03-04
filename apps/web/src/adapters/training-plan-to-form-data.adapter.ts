import { TrainingPlanFormData } from "@/app/training-plans/training-plans.page.hook";
import { TrainingPlan } from "@/models";

export const trainingPlanToFormDataArray = (
  trainingPlan: TrainingPlan[],
): TrainingPlanFormData[] => {
  return trainingPlan.map((tp) => ({
    trainingPlanId: tp.trainingPlanId,
    name: tp.name,
    description: tp.description,
    weeks: tp.trainingPlanWeeks.length,
  }));
};
