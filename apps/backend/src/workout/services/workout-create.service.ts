import { PrismaService } from '@/prisma/prisma.service';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Workout } from '@/prisma/generated/prisma-client';
import { WorkoutCreate } from '../contracts';

@Injectable()
export class WorkoutCreateService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(data: WorkoutCreate): Promise<Workout> {
    const trainingPlanWeek =
      await this.prismaService.trainingPlanWeek.findUnique({
        where: {
          trainingPlanWeekId: data.trainingPlanWeekId,
        },
      });

    if (!trainingPlanWeek) {
      throw new NotFoundException(
        `Training plan week with id ${data.trainingPlanWeekId} not found`,
      );
    }

    const workout = await this.prismaService.workout.findFirst({
      where: {
        name: data.name,
        trainingPlanWeekId: data.trainingPlanWeekId,
      },
    });

    if (workout) {
      throw new BadRequestException(
        `Workout with name ${data.name} already exists in this training plan week`,
      );
    }

    const workouts = await this.prismaService.workout.findMany({
      where: {
        trainingPlanWeekId: data.trainingPlanWeekId,
      },
      select: {
        order: true,
      },
    });

    const order = workouts.length + 1;

    return this.prismaService.workout.create({
      data: {
        ...data,
        order,
      },
    });
  }
}
