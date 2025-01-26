import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! App Service';
  }

  getHomepage() {
    return { title: 'Home | Davidson Rental Homes' };
  }

  getAboutPage() {
    return { title: 'About | Davidson Rental Homes' };
  }
}
