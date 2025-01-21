import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return this.appService.getHomepage();
  }

  @Get('/about')
  @Render('about')
  aboutPage() {
    return this.appService.getAboutPage();
  }
}
