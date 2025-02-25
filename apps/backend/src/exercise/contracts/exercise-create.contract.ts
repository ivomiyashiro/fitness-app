import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class ExerciseCreate {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MaxLength(50, { message: 'Name must be less than 50 characters' })
  name: string;
}
