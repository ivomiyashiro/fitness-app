import { Injectable } from '@nestjs/common';
import { Exercise } from '@/prisma/generated/prisma-client';
import { ExerciseResponse } from '@/exercise/contracts';

@Injectable()
export class ExerciseAdapter {
  toResponse(exercise: Exercise): ExerciseResponse {
    return {
      exerciseId: exercise.exerciseId,
      name: exercise.name,
    };
  }

  toResponseArray(exercises: Exercise[]): ExerciseResponse[] {
    return exercises.map((exercise) => this.toResponse(exercise));
  }
}
