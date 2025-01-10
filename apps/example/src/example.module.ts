import {
  initGlobalConfig,
  NestjsBootstrapModule,
} from '@ittlr/nestjs-bootstrap';
import { Global, Module } from '@nestjs/common';
import { ExampleController } from './example.controller';
import { ExampleService } from './example.service';

@Global()
@Module({
  imports: [
    NestjsBootstrapModule.register({
      configOptions: {
        load: [initGlobalConfig('config.example.yaml')],
      },
    }),
  ],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
