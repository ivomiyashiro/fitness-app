import BaseService from "..";
import { TrainingPlanWeek } from "@/domain";
import { DeletedResponse, RequestParams } from "../index.types";
import {
  TrainingPlanWeekPostRequest,
  TrainingPlanWeekResponse,
} from "./training-plan-week.types";

class Service {
  private baseService: BaseService;
  private endpoint = "/training-plan-weeks";

  constructor() {
    this.baseService = new BaseService();
  }

  public get(params?: RequestParams): Promise<TrainingPlanWeek[]> {
    const result = this.baseService.get<TrainingPlanWeekResponse[]>(
      this.endpoint,
      params,
    );

    return result;
  }

  public post(data: TrainingPlanWeekPostRequest): Promise<TrainingPlanWeek> {
    const result = this.baseService.post<TrainingPlanWeekResponse>(
      this.endpoint,
      data,
    );

    return result;
  }

  public delete(
    trainingPlanWeekId: TrainingPlanWeek["trainingPlanWeekId"],
  ): Promise<DeletedResponse> {
    const result = this.baseService.delete<DeletedResponse>(
      `${this.endpoint}/${trainingPlanWeekId}`,
    );

    return result;
  }

  public copy(
    trainingPlanWeekId: TrainingPlanWeek["trainingPlanWeekId"],
  ): Promise<TrainingPlanWeek[]> {
    const result = this.baseService.put<TrainingPlanWeekResponse>(
      `${this.endpoint}/${trainingPlanWeekId}/copy`,
      {},
    );

    return result;
  }
}

export const TrainingPlanWeekService = new Service();
