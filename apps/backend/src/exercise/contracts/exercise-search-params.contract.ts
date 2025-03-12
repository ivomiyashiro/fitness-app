import { IsEnum } from 'class-validator';
import { BaseSearchParams } from '@/common/contracts';

export enum ExerciseSortField {
  NAME = 'name',
  CREATED_AT = 'createdAt',
}

export class ExerciseSearchParams extends BaseSearchParams<ExerciseSortField> {
  @IsEnum(ExerciseSortField)
  sortBy?: ExerciseSortField = ExerciseSortField.NAME;
}
