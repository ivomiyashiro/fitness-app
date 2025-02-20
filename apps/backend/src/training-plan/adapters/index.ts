import { Injectable } from '@nestjs/common';
import { TrainingPlanResponse, TrainingPlanWithWeeks } from '../contracts';

@Injectable()
export class TrainingPlanAdapter {
  toResponse(trainingPlan: TrainingPlanWithWeeks): TrainingPlanResponse {
    return TrainingPlanAdapter.adaptToResponse(trainingPlan);
  }

  toResponseArray(
    trainingPlans: TrainingPlanWithWeeks[],
  ): TrainingPlanResponse[] {
    return TrainingPlanAdapter.adaptToResponseArray(trainingPlans);
  }

  private static adaptToResponse(trainingPlan: TrainingPlanWithWeeks) {
    return {
      trainingPlanId: trainingPlan.trainingPlanId,
      name: trainingPlan.name,
      description: trainingPlan.description,
      trainingPlanWeeks: trainingPlan.trainingPlanWeeks.map((week) => ({
        trainingPlanWeekId: week.trainingPlanWeekId,
        weekNumber: week.weekNumber,
      })),
    };
  }

  private static adaptToResponseArray(trainingPlans: TrainingPlanWithWeeks[]) {
    return trainingPlans.map((trainingPlan) =>
      TrainingPlanAdapter.adaptToResponse(trainingPlan),
    );
  }
}
