import { IsNotEmpty, IsString } from 'class-validator';

export class WorkoutCreate {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString({ message: 'Training plan week id must be a string' })
  @IsNotEmpty({ message: 'Training plan week id is required' })
  trainingPlanWeekId: string;
}
