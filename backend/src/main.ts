import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PATH_TO_FRONTEND } from './constants';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Serve Angular static files
  app.useStaticAssets(PATH_TO_FRONTEND);

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
