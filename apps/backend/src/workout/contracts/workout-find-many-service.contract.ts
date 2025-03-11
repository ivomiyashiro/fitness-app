import { Prisma } from '@/prisma/generated/prisma-client';

export type WorkoutServiceResponse = Prisma.WorkoutGetPayload<{
  include: {
    workoutExercises: {
      include: {
        exercise: true;
        sets: true;
        workout: true;
      };
    };
  };
}>;
