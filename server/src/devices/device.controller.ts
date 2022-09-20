import { DeviceService } from './device.service';
import { Body, Delete, Get, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request } from 'express';

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

  @Get()
  getOne(@Body() deviceDto: CreateDeviceDto) {}

  @Delete()
  deleteOne(@Req() req: Request) {
    const { id } = req.params;
    return this.deviceService.deleteOne(id);
  }
}
