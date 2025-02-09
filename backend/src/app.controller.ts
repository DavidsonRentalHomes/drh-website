import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { AppService } from './app.service';
import { PATH_TO_FRONTEND } from './constants';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Enable client-side routing
  @Get('*')
  serveAngularApp(@Res() res: Response) {
    res.sendFile(join(PATH_TO_FRONTEND, 'index.html'));
  }
}
