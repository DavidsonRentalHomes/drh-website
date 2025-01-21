import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServecssModule } from './servecss/servecss.module';

@Module({
  imports: [ServecssModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
