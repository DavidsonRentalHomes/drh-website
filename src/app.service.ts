import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! App Service';
  }

  getHomepage() {
    return { message: 'Hello world! Step 2' };
  }

  getAboutPage() {
    return { message: 'About Page' };
  }
}
