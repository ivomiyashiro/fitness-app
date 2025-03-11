import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { TrainingPlanWithRelations } from '@/training-plan/contracts';

@Injectable()
export class TrainingPlanFindManyService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(): Promise<TrainingPlanWithRelations[]> {
    return await this.prisma.trainingPlan.findMany({
      include: {
        trainingPlanWeeks: {
          include: {
            workouts: {
              include: {
                workoutExercises: {
                  include: {
                    exercise: true,
                    sets: true,
                    workout: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
