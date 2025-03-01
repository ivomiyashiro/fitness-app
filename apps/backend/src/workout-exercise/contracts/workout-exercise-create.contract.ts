import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class Set {
  @IsNotEmpty({ message: 'Reps are required' })
  @IsNumber({}, { message: 'Reps must be a number' })
  reps: number;

  @IsNotEmpty({ message: 'RIR is required' })
  @IsNumber({}, { message: 'RIR must be a number' })
  rir: number;
}

export class WorkoutExerciseCreate {
  @IsNotEmpty({ message: 'Exercise Id is required' })
  @IsString({ message: 'Exercise Id must be a string' })
  @IsUUID('4', { message: 'Exercise Id must be a valid UUID' })
  exerciseId: string;

  @IsNotEmpty({ message: 'Workout Id is required' })
  @IsString({ message: 'Workout Id must be a string' })
  @IsUUID('4', { message: 'Workout Id must be a valid UUID' })
  workoutId: string;

  @IsNotEmpty({ message: 'Sets are required' })
  @IsArray({ message: 'Sets must be an array' })
  @ValidateNested({ each: true })
  @Type(() => Set)
  sets: Set[];
}
