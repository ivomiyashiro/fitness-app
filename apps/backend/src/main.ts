import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter, PrismaExceptionFilter } from '@/common/filters';
import { GlobalValidationPipe } from '@/common/pipes';
import { CONFIG } from '@/common/config';
import { AppModule } from '@/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Cors Enabled
  app.enableCors({
    origin: CONFIG.CORS.ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Global Prefix
  app.setGlobalPrefix(CONFIG.API.PREFIX);

  // Global Exception Filters
  app.useGlobalFilters(HttpExceptionFilter, PrismaExceptionFilter);

  // Global ValidationPipe
  app.useGlobalPipes(GlobalValidationPipe);

  await app.listen(CONFIG.PORT);
}

void bootstrap();
