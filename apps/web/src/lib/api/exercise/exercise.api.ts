import BaseService from "@/lib/api";
import { PaginatedResponse } from "@/lib/api/index.types";

import { ExerciseResponse, ExerciseQueryParams } from "./exercise.api.types";

class Service {
  private baseService: BaseService;
  private endpoint = "/exercises";

  constructor() {
    this.baseService = new BaseService();
  }

  public get(params?: ExerciseQueryParams) {
    return this.baseService.get<PaginatedResponse<ExerciseResponse>>(
      this.endpoint,
      params,
    );
  }
}

export const ExerciseService = new Service();
