import { startApp } from '@ittlr/nestjs-bootstrap/nestjs-bootstrap.util';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await startApp(app);
}
bootstrap();
