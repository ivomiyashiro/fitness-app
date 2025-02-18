import { Injectable } from '@nestjs/common';
import { TrainingPlan } from '@prisma/client';
import { ITrainingPlanResponse } from '../contracts/training-plan.response';

@Injectable()
export class TrainingPlanAdapter {
  toResponse(trainingPlan: TrainingPlan): ITrainingPlanResponse {
    return TrainingPlanAdapter.adaptToResponse(trainingPlan);
  }

  toResponseArray(trainingPlans: TrainingPlan[]): ITrainingPlanResponse[] {
    return TrainingPlanAdapter.adaptToResponseArray(trainingPlans);
  }

  private static adaptToResponse(trainingPlan: TrainingPlan) {
    return {
      trainingPlanId: trainingPlan.trainingPlanId,
      name: trainingPlan.name,
      description: trainingPlan.description,
    };
  }

  private static adaptToResponseArray(trainingPlans: TrainingPlan[]) {
    return trainingPlans.map((trainingPlan) =>
      TrainingPlanAdapter.adaptToResponse(trainingPlan),
    );
  }
}
