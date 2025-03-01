import { Module } from '@nestjs/common';

import { ExerciseModule } from '@/exercise/exercise.module';
import { PrismaModule } from '@/prisma/prisma.module';
import { TrainingPlanModule } from '@/training-plan/training-plan.module';
import { TrainingPlanWeekModule } from '@/training-plan-week/training-plan-week.module';
import { WorkoutModule } from '@/workout/workout.module';
import { WorkoutExerciseModule } from '@/workout-exercise/workout-exercise.module';

@Module({
  imports: [
    ExerciseModule,
    PrismaModule,
    TrainingPlanModule,
    TrainingPlanWeekModule,
    WorkoutModule,
    WorkoutExerciseModule,
  ],
  providers: [],
})
export class AppModule {}
