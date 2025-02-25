import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Exercise } from '@/prisma/generated/prisma-client';
import { ExerciseCreate } from '../contracts';

@Injectable()
export class ExerciseCreateBulkService {
  constructor(private readonly prismaService: PrismaService) {}

  async handle(exercises: ExerciseCreate[]): Promise<Exercise[]> {
    const existingExercises = await this.prismaService.exercise.findMany({
      where: {
        name: {
          in: exercises.map((exercise) => exercise.name),
        },
      },
    });

    if (existingExercises.length > 0) {
      const existingExerciseNames = existingExercises.map(
        (exercise) => exercise.name,
      );

      throw new BadRequestException(
        `One or more exercises already exist: ${existingExerciseNames.join(
          ', ',
        )}`,
      );
    }

    await this.prismaService.exercise.createMany({
      data: exercises,
      skipDuplicates: true,
    });

    const createdExercises = await this.prismaService.exercise.findMany({
      where: {
        name: {
          in: exercises.map((exercise) => exercise.name),
        },
      },
    });

    return createdExercises;
  }
}
