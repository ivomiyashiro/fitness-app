import { Injectable } from '@nestjs/common';
import { TrainingPlan } from '@prisma/client';

@Injectable()
export class TrainingPlanAdapter {
  toResponse(trainingPlan: TrainingPlan) {
    return TrainingPlanAdapter.adaptToTrainingPlanResponse(trainingPlan);
  }

  toResponseArray(trainingPlans: TrainingPlan[]) {
    return TrainingPlanAdapter.adaptToTrainingPlanResponseArray(trainingPlans);
  }

  private static adaptToTrainingPlanResponse(trainingPlan: TrainingPlan) {
    return {
      id: trainingPlan.id,
      name: trainingPlan.name,
      description: trainingPlan.description,
    };
  }

  private static adaptToTrainingPlanResponseArray(
    trainingPlans: TrainingPlan[],
  ) {
    return trainingPlans.map((trainingPlan) =>
      TrainingPlanAdapter.adaptToTrainingPlanResponse(trainingPlan),
    );
  }
}
