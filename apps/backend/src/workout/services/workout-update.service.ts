import { PrismaService } from '@/prisma/prisma.service';
import { Workout } from '@/prisma/generated/prisma-client';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { WorkoutUpdate } from '../contracts';

@Injectable()
export class WorkoutUpdateService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(workoutId: string, data: WorkoutUpdate): Promise<Workout> {
    const workout = await this.prismaService.workout.findUnique({
      where: { workoutId },
    });

    if (!workout) {
      throw new NotFoundException('Workout not found');
    }

    const workoutWithSameName = await this.prismaService.workout.findFirst({
      where: {
        name: data.name,
        trainingPlanWeekId: workout.trainingPlanWeekId,
        workoutId: {
          not: workoutId,
        },
      },
    });

    if (workoutWithSameName) {
      throw new BadRequestException(
        `Workout with name ${data.name} already exists in this training plan week`,
      );
    }

    return this.prismaService.workout.update({
      where: { workoutId },
      data: {
        name: data.name,
        order: data.order,
      },
    });
  }
}
