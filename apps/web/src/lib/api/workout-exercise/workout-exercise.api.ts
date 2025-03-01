import { WorkoutExercise } from "@/models";
import BaseService from "..";
import {
  WorkoutExerciseCreateRequest,
  WorkoutExerciseResponse,
  WorkoutExerciseUpdateRequest,
} from "./workout-exercise.types";
import { RequestParams } from "../index.types";

class Service {
  private baseService: BaseService;
  private endpoint = "/workout-exercises";

  constructor() {
    this.baseService = new BaseService();
  }

  public get(params?: RequestParams) {
    return this.baseService.get<WorkoutExerciseResponse[]>(
      this.endpoint,
      params,
    );
  }

  public post(data: WorkoutExerciseCreateRequest) {
    return this.baseService.post<WorkoutExerciseResponse>(this.endpoint, data);
  }

  public put(
    workoutExerciseId: WorkoutExercise["workoutExerciseId"],
    data: WorkoutExerciseUpdateRequest,
  ) {
    return this.baseService.put<WorkoutExerciseResponse>(
      `${this.endpoint}/${workoutExerciseId}`,
      data,
    );
  }

  public delete(workoutExerciseId: WorkoutExercise["workoutExerciseId"]) {
    return this.baseService.delete<WorkoutExerciseResponse>(
      `${this.endpoint}/${workoutExerciseId}`,
    );
  }
}

export const WorkoutExerciseService = new Service();
