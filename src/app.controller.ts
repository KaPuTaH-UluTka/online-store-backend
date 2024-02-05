import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('/')
@Controller()
export class AppController {
  @ApiOperation({ summary: 'Hello user' })
  @ApiResponse({ status: 200, description: 'online-store' })
  @Get()
  getHello(): string {
    return 'online-store';
  }
}
