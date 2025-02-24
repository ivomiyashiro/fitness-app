import { Module } from '@nestjs/common';

import { PrismaModule } from '@/prisma/prisma.module';
import { TrainingPlanModule } from '@/training-plan/training-plan.module';
import { TrainingPlanWeekModule } from '@/training-plan-week/training-plan-week.module';
import { WorkoutModule } from '@/workout/workout.module';

@Module({
  imports: [
    TrainingPlanModule,
    PrismaModule,
    TrainingPlanWeekModule,
    WorkoutModule,
  ],
  providers: [],
})
export class AppModule {}
