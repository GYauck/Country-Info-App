import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //enable CORS
  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS,
  });

  await app.listen(process.env.PORT);
}
bootstrap();
