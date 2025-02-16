import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { IUpdateTrainingPlan } from '../contracts';

export class UpdateTrainingPlan implements IUpdateTrainingPlan {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  @MaxLength(50, { message: 'Name must be less than 50 characters' })
  name: string;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  @MaxLength(255, { message: 'Description must be less than 255 characters' })
  description: string;
}
