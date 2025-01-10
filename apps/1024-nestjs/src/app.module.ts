import { initGlobalConfig, NestjsBootstrapModule } from '@ittlr/nestjs-bootstrap';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    NestjsBootstrapModule.register({
      configOptions: {
        load: [initGlobalConfig('config.1024-nestjs.yaml')],
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
