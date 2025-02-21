import { IsNotEmpty, IsString } from 'class-validator';

export class TrainingPlanWeekCreate {
  @IsString({ message: 'Training plan id must be a string' })
  @IsNotEmpty({ message: 'Training plan id is required' })
  trainingPlanId: string;
}
