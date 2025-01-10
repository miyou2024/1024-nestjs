import { startApp } from '@ittlr/nestjs-bootstrap/nestjs-bootstrap.util';
import { NestFactory } from '@nestjs/core';
import { ExampleModule } from './example.module';

async function bootstrap() {
  const app = await NestFactory.create(ExampleModule);
  await startApp(app);
}
bootstrap();
