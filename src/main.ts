import { NestFactory } from '@nestjs/core';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.use(passport.initialize());
  await app.listen(4000);
}
bootstrap();
