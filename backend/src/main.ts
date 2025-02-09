import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Set the view engine to Handlebars (using `hbs`)
  app.setViewEngine('hbs');

  // Set directories for layouts and partials
  hbs.registerPartials(join(__dirname, '..', 'views/partials')); // Register partials
  app.useStaticAssets(join(__dirname, '..', 'views')); // Static assets

  // Register the layout directory (optional but useful for large projects)
  hbs.registerPartials(join(__dirname, '..', 'views/layouts')); // Register layout templates

  // Set up the views directory for your app
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  // Set the default layout
  app.set('view options', { layout: 'layouts/main' });

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
