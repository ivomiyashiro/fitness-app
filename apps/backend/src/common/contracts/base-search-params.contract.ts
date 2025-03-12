import { Transform, Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export class BaseSearchParams<T extends string> {
  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  limit?: number = 20;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Type(() => Number)
  offset?: number = 0;

  @IsOptional()
  @IsEnum({} as Record<T, string>, { message: 'Invalid sort field' })
  sortBy?: T;

  @IsOptional()
  @IsEnum(SortOrder)
  @Transform(({ value }: { value: unknown }) => {
    if (typeof value === 'string') {
      return value.toLowerCase() as SortOrder;
    }
    return value as SortOrder;
  })
  sortOrder?: SortOrder = SortOrder.ASC;
}
