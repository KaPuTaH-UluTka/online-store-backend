import {Body, Controller, Delete, Get, Patch, Post, Req, UploadedFile, UseInterceptors} from "@nestjs/common";
import {DeviceService} from "../devices/device.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {CreateDeviceDto} from "../devices/dto/create-device.dto";
import {Request} from "express";
import {BasketService} from "./basket.service";

@Controller('basket')
export class BasketController {
  constructor(private basketService: BasketService) {}

  // @Post()
  // create(@Body() deviceDto: CreateDeviceDto) {
  //   return this.deviceService.create(deviceDto);
  // }
  //
  // @Get()
  // getAll() {
  //   return this.deviceService.getAll();
  // }
  //
  // @Get('/:id')
  // getOne(@Req() req: Request) {
  //   const { id } = req.params;
  //   return this.deviceService.getOne(id);
  // }
  //
  // @Patch('/:id')
  // @UseInterceptors(FileInterceptor('img'))
  // updateDevice(@Body() deviceDto: CreateDeviceDto, @UploadedFile() img, @Req() req: Request) {
  //   const { id } = req.params;
  //   return this.deviceService.update(deviceDto, img, id);
  // }
  //
  // @Delete('/:id')
  // deleteOne(@Req() req: Request) {
  //   const { id } = req.params;
  //   return this.deviceService.deleteOne(id);
  // }
}
