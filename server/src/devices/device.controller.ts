import { DeviceService } from './device.service';
import { Body, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { FileInterceptor } from '@nestjs/platform-express';

export class DeviceController {
  constructor(private deviceService: DeviceService) {}

  @Post()
  @UseInterceptors(FileInterceptor('img'))
  create(@Body() deviceDto: CreateDeviceDto, @UploadedFile() img) {
    return this.deviceService.create(deviceDto, img);
  }

  @Post()
  getAll() {}

  @Post()
  getOne(@Body() deviceDto: CreateDeviceDto) {}

  @Post()
  deleteOne(@Body() deviceDto: CreateDeviceDto) {}
}
