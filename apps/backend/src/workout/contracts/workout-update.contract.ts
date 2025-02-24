import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class WorkoutUpdate {
  @IsString({ message: 'Name must be a string' })
  @IsOptional()
  @MaxLength(50, { message: 'Name must be less than 50 characters' })
  name: string;

  @IsNumber({}, { message: 'Order must be a number' })
  @IsOptional()
  @Min(1, { message: 'Order must be greater than 0' })
  order: number;
}
