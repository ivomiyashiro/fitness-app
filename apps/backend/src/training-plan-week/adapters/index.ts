import { Injectable } from '@nestjs/common';
import { TrainingPlanWeek } from '@/prisma/generated/prisma-client';
import { TrainingPlanWeekResponse } from '../contracts';

@Injectable()
export class TrainingPlanWeekAdapter {
  toReponse(trainingPlanWeek: TrainingPlanWeek): TrainingPlanWeekResponse {
    return TrainingPlanWeekAdapter.adaptToResponse(trainingPlanWeek);
  }

  toReponseArray(
    trainingPlanWeeks: TrainingPlanWeek[],
  ): TrainingPlanWeekResponse[] {
    return TrainingPlanWeekAdapter.adaptToResponseArray(trainingPlanWeeks);
  }

  private static adaptToResponse(trainingPlanWeek: TrainingPlanWeek) {
    return {
      trainingPlanWeekId: trainingPlanWeek.trainingPlanWeekId,
      trainingPlanId: trainingPlanWeek.trainingPlanId,
      weekNumber: trainingPlanWeek.weekNumber,
    };
  }

  private static adaptToResponseArray(trainingPlanWeeks: TrainingPlanWeek[]) {
    return trainingPlanWeeks.map((trainingPlanWeek) =>
      TrainingPlanWeekAdapter.adaptToResponse(trainingPlanWeek),
    );
  }
}
