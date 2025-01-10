import { NestFactory } from '@nestjs/core';
import { ExampleModule } from './example.module';

async function bootstrap() {
  const app = await NestFactory.create(ExampleModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
