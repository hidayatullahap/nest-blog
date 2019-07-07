import { Injectable, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {

  async getHello(): Promise<any> {
    return new Promise(resolve => {
      resolve({ message: "pong" })
    });
  }
}
