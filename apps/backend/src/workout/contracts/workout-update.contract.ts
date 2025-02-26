import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ExerciseResponse } from '@/exercise/contracts';

export class WorkoutUpdate {
  @IsString({ message: 'Name must be a string' })
  @IsOptional()
  @MaxLength(50, { message: 'Name must be less than 50 characters' })
  name: string;

  @IsNumber({}, { message: 'Order must be a number' })
  @IsOptional()
  @Min(1, { message: 'Order must be greater than 0' })
  order: number;

  @IsString({ message: 'Training plan week id must be a string' })
  @IsOptional()
  @IsUUID(undefined, { message: 'Training plan week id must be a valid UUID' })
  trainingPlanWeekId: string;

  @IsArray({ message: 'Exercises must be an array' })
  @IsNotEmpty({ message: 'Exercises are required' })
  @ValidateNested({ each: true })
  @Type(() => ExerciseResponse)
  exercises: ExerciseResponse[];
}
