import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common/pipes'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform:true,   //validaciones para numeros es params y body
    transformOptions:{//validaciones para numeros es params y body
      enableImplicitConversion: true//validaciones para numeros es params y body
    }
    })
    );
  app.setGlobalPrefix('api/v2')
  await app.listen(3000);
}
bootstrap();
