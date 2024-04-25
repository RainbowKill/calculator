import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  require('dotenv').config();
  dotenv.config();

  const app = await NestFactory.create(AppModule);
  await app.listen(3003);
}
bootstrap();
