import { IsArray, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ExerciseResponse } from '@/exercise/contracts';

export class WorkoutCreate {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString({ message: 'Training plan week id must be a string' })
  @IsNotEmpty({ message: 'Training plan week id is required' })
  trainingPlanWeekId: string;

  @IsArray({ message: 'Exercises must be an array' })
  @IsNotEmpty({ message: 'Exercises are required' })
  @ValidateNested({ each: true })
  @Type(() => ExerciseResponse)
  exercises: ExerciseResponse[];
}
