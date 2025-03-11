import { Prisma } from '@/prisma/generated/prisma-client';

export type TrainingPlanWithRelations = Prisma.TrainingPlanGetPayload<{
  include: {
    trainingPlanWeeks: {
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
    };
  };
}>;
