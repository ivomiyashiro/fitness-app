import { Module } from '@nestjs/common';

import { TrainingPlanModule } from '@/training-plan/training-plan.module';
import { PrismaModule } from '@/prisma/prisma.module';

@Module({
  imports: [TrainingPlanModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
