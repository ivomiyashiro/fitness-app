import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Exercise } from '@/prisma/generated/prisma-client';

@Injectable()
export class ExerciseFindManyService {
  constructor(private readonly prisma: PrismaService) {}

  async handle(): Promise<Exercise[]> {
    return this.prisma.exercise.findMany();
  }
}
