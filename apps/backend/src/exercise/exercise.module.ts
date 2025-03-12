import { Module } from '@nestjs/common';
import { ExerciseAdapter } from '@/exercise/exercise.adapter';
import { ExerciseController } from '@/exercise/exercise.controller';
import {
  ExerciseCreateBulkService,
  ExerciseSearchService,
} from '@/exercise/services';

@Module({
  controllers: [ExerciseController],
  providers: [
    ExerciseAdapter,
    ExerciseCreateBulkService,
    ExerciseSearchService,
  ],
})
export class ExerciseModule {}
