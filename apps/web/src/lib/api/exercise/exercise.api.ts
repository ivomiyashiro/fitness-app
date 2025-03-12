import BaseService from "@/lib/api";
import { PaginatedResponse } from "@/lib/api/index.types";

import { Exercise } from "@/domain";

import { ExerciseResponse, ExerciseQueryParams } from "./exercise.api.types";

class Service {
  private baseService: BaseService;
  private endpoint = "/exercises";

  constructor() {
    this.baseService = new BaseService();
  }

  public get(
    params?: ExerciseQueryParams,
  ): Promise<PaginatedResponse<Exercise>> {
    const result = this.baseService.get<PaginatedResponse<ExerciseResponse>>(
      this.endpoint,
      params,
    );

    return result;
  }
}

export const ExerciseService = new Service();
