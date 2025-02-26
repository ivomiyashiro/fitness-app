import { Prisma } from '@/prisma/generated/prisma-client';

export type WorkoutServiceResponse = Prisma.WorkoutGetPayload<{
  include: {
    workoutExercises: {
      include: {
        exercise: {
          select: {
            exerciseId: true;
            name: true;
          };
        };
        workout: {
          select: {
            workoutId: true;
            name: true;
          };
        };
      };
    };
    trainingPlanWeek: {
      select: {
        trainingPlanWeekId: true;
      };
    };
  };
}>;
