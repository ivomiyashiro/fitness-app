import { Workout } from "@/models";
import BaseService from "..";
import {
  WorkoutPostRequest,
  WorkoutPutRequest,
  WorkoutResponse,
} from "./workout.api.types";
import { DeletedResponse, RequestParams } from "../index.types";

class Service {
  private baseService: BaseService;
  private endpoint = "/workouts";

  constructor() {
    this.baseService = new BaseService();
  }

  public async get(params?: RequestParams): Promise<Workout[]> {
    const result = await this.baseService.get<WorkoutResponse[]>(
      this.endpoint,
      params,
    );

    return result;
  }

  public post(data: WorkoutPostRequest) {
    return this.baseService.post<WorkoutResponse>(this.endpoint, data);
  }

  public put(data: WorkoutPutRequest) {
    return this.baseService.put<WorkoutResponse>(
      `${this.endpoint}/${data.workoutId}`,
      data,
    );
  }

  public delete(workoutId: Workout["workoutId"]) {
    return this.baseService.delete<DeletedResponse>(
      `${this.endpoint}/${workoutId}`,
    );
  }
}

export const WorkoutService = new Service();
