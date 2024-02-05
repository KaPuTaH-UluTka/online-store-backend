import { DeviceService } from './device.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Devices')
@Controller('devices')
export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Post()
  @UseInterceptors(FileInterceptor('img'))
  create(@Body() deviceDto: CreateDeviceDto, @UploadedFile() img) {
    return this.deviceService.create(deviceDto, img);
  }

  @Get()
  getAll() {
    return this.deviceService.getAll();
  }

  @Get('/:id')
  getOne(@Req() req: Request) {
    const { id } = req.params;
    return this.deviceService.getOne(id);
  }

  @Patch('/:id')
  @UseInterceptors(FileInterceptor('img'))
  updateDevice(@Body() deviceDto: CreateDeviceDto, @UploadedFile() img, @Req() req: Request) {
    const { id } = req.params;
    return this.deviceService.update(deviceDto, img, id);
  }

  @Delete('/:id')
  deleteOne(@Req() req: Request) {
    const { id } = req.params;
    return this.deviceService.deleteOne(id);
  }
}
