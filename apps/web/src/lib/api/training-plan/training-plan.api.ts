import BaseService from "..";
import { TrainingPlan } from "@/domain";
import {
  TrainingPlanPostRequest,
  TrainingPlanPutRequest,
  TrainingPlanResponse,
} from "./training-plan.api.contracts";
import {
  DeletedResponse,
  PaginatedResponse,
  QueryParams,
} from "../index.types";

class Service {
  private baseService: BaseService;
  private endpoint = "/training-plans";

  constructor() {
    this.baseService = new BaseService();
  }

  public get(params?: QueryParams): Promise<PaginatedResponse<TrainingPlan>> {
    const result = this.baseService.get<PaginatedResponse<TrainingPlan>>(
      this.endpoint,
      params,
    );

    return result;
  }

  public post(data: TrainingPlanPostRequest): Promise<TrainingPlan> {
    const result = this.baseService.post<TrainingPlanResponse>(
      this.endpoint,
      data,
    );

    return result;
  }

  public put(
    trainingPlanId: TrainingPlan["trainingPlanId"],
    data: TrainingPlanPutRequest,
  ): Promise<TrainingPlan> {
    const result = this.baseService.put<TrainingPlanResponse>(
      `${this.endpoint}/${trainingPlanId}`,
      data,
    );

    return result;
  }

  public delete(
    trainingPlanId: TrainingPlan["trainingPlanId"],
  ): Promise<DeletedResponse> {
    const result = this.baseService.delete<DeletedResponse>(
      `${this.endpoint}/${trainingPlanId}`,
    );

    return result;
  }
}

export const TrainingPlanService = new Service();
