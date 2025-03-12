import BaseService from "..";
import { TrainingPlan } from "@/domain";
import {
  TrainingPlanPostRequest,
  TrainingPlanPutRequest,
  TrainingPlanResponse,
} from "./training-plan.api.contracts";
import { DeletedResponse, RequestParams } from "../index.types";

class Service {
  private baseService: BaseService;
  private endpoint = "/training-plans";

  constructor() {
    this.baseService = new BaseService();
  }

  public get(params?: RequestParams): Promise<TrainingPlan[]> {
    const result = this.baseService.get<TrainingPlanResponse[]>(
      this.endpoint,
      params,
    );

    return result;
  }

  public post(data: TrainingPlanPostRequest): Promise<TrainingPlan> {
    return this.baseService.post<TrainingPlanResponse>(this.endpoint, data);
  }

  public put(
    trainingPlanId: TrainingPlan["trainingPlanId"],
    data: TrainingPlanPutRequest,
  ): Promise<TrainingPlan> {
    return this.baseService.put<TrainingPlanResponse>(
      `${this.endpoint}/${trainingPlanId}`,
      data,
    );
  }

  public delete(
    trainingPlanId: TrainingPlan["trainingPlanId"],
  ): Promise<DeletedResponse> {
    return this.baseService.delete<DeletedResponse>(
      `${this.endpoint}/${trainingPlanId}`,
    );
  }
}

export const TrainingPlanService = new Service();
