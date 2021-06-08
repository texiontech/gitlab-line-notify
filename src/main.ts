import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CORS_ALLOW_LIST,
    credentials: true,
  });
  app.setGlobalPrefix(`/${process.env.VERSION}/api`)
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.use(json({ limit: '10mb' }))
  await app.listen(3000);
}
bootstrap();
