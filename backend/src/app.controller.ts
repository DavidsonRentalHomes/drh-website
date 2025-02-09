import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  healthCheck(@Res() res: Response) {
    res.json({
      message:
        'Server is running. Prefix all requests with `/api` to access server resources.',
    });
  }

  // Enable client-side routing
  @Get('/api/hello')
  serveAngularApp(@Res() res: Response) {
    res.json({ message: 'Hello from the server!' });
  }
}
