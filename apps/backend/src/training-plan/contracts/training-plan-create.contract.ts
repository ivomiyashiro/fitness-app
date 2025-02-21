import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

export class TrainingPlanCreate {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MaxLength(50, { message: 'Name must be less than 50 characters' })
  name: string;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  @MaxLength(255, { message: 'Description must be less than 255 characters' })
  description: string;

  @IsNumber({}, { message: 'Weeks must be a number' })
  @IsNotEmpty({ message: 'Weeks is required' })
  @Max(24, { message: 'Weeks must be less than 24' })
  weeks: number;
}
