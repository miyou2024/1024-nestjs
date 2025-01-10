import { INestjsBootstrapOptions } from '@ittlr/nestjs-bootstrap/nestjs-bootstrap.interface';
import { DynamicModule, Module } from '@nestjs/common';
import { ForwardReference } from '@nestjs/common/interfaces/modules/forward-reference.interface';
import { Type } from '@nestjs/common/interfaces/type.interface';
import { ConfigModule } from '@nestjs/config';
import { NestjsBootstrapService } from './nestjs-bootstrap.service';

@Module({})
export class NestjsBootstrapModule {
  static register(options?: INestjsBootstrapOptions): DynamicModule {
    const moduleImports: Array<
      Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference
    > = [];
    if (options) {
      if (
        options.configOptions &&
        options.configOptions.constructor === Object
      ) {
        if (Object.keys(options.configOptions).length) {
          const configImportModule = ConfigModule.forRoot({
            isGlobal: true,
            ...options.configOptions,
          });
          moduleImports.push(configImportModule);
        }
      }
    }
    return {
      global: true,
      module: NestjsBootstrapModule,
      imports: [...moduleImports],
      providers: [NestjsBootstrapService],
      exports: [NestjsBootstrapService],
    };
  }
}
