import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('ping')
  async getHello() {
    const result = await this.appService.getHello();
    return result;
  }
}
