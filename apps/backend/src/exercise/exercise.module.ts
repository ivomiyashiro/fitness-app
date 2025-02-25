import { Module } from '@nestjs/common';
import { ExerciseController } from './exercise.controller';
import { ExerciseAdapter } from './adapters';
import { ExerciseCreateBulkService, ExerciseFindManyService } from './services';

@Module({
  controllers: [ExerciseController],
  providers: [
    ExerciseAdapter,
    ExerciseCreateBulkService,
    ExerciseFindManyService,
  ],
})
export class ExerciseModule {}
