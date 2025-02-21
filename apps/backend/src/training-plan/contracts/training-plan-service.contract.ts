import { Prisma } from '@/prisma/generated/prisma-client';

export type TrainingPlanWithWeeks = Prisma.TrainingPlanGetPayload<{
  include: {
    trainingPlanWeeks: true;
  };
}>;
