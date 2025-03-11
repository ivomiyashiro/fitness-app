import { Prisma } from '@/prisma/generated/prisma-client';

export type TrainingPlanWeekWithRelations = Prisma.TrainingPlanWeekGetPayload<{
  include: {
    workouts: {
      include: {
        workoutExercises: {
          include: {
            exercise: true;
            sets: true;
            workout: true;
          };
        };
      };
    };
  };
}>;
