import { IsNotEmpty, IsString } from 'class-validator';

export class ExerciseResponse {
  @IsString({ message: 'Exercise id must be a string' })
  @IsNotEmpty({ message: 'Exercise id is required' })
  exerciseId: string;

  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;
}
