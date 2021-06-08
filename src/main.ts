import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`/webhook`)
  app.use(helmet());
  app.use(json({ limit: '10mb' }))
  const port = process.env.PORT
  await app.listen(port, () => {
    console.log(`
    /$$$$$$$$ /$$$$$$$$ /$$   /$$ /$$$$$$  /$$$$$$  /$$   /$$
    |__  $$__/| $$_____/| $$  /$$|_  $$_/ /$$__  $$| $$$ | $$
       | $$   | $$      |  $$/$$/  | $$  | $$   \ $$| $$$$| $$
       | $$   | $$$$$    \  $$$$/   | $$  | $$  | $$| $$ $$ $$
       | $$   | $$__/     /$$ $$   | $$  | $$   |$$| $$   $$$
       | $$   | $$       /$$ /\ $$  | $$  | $$  | $$| $$ \  $$$
       | $$   | $$$$$$$$|$$ / \ $$ /$$$$$$|  $$$$$$/| $$ \  $$$
       |__/   |________/|__/  |__/|______/ \______/ |__/  \__/

    `)
    console.log(`Service running on port: ${port}`)
  });
}
bootstrap();
