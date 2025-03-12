import { IsEnum } from 'class-validator';
import { BaseSearchParams } from '@/common/contracts';

export enum TrainingPlanSortField {
  NAME = 'name',
  CREATED_AT = 'createdAt',
}

export class TrainingPlanSearchParams extends BaseSearchParams<TrainingPlanSortField> {
  @IsEnum(TrainingPlanSortField)
  sortBy?: TrainingPlanSortField = TrainingPlanSortField.NAME;
}
