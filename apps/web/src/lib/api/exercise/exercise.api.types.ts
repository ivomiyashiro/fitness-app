import { QueryParams } from "../index.types";

export type ExerciseResponse = {
  exerciseId: string;
  name: string;
};

export type ExerciseSortBy = "name" | "createdAt" | "updatedAt";

export type ExerciseSortOrder = "asc" | "desc";

export interface ExerciseQueryParams extends QueryParams {
  search?: string;
  sortBy?: ExerciseSortBy;
  sortOrder?: ExerciseSortOrder;
}
