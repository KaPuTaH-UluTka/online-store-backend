import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { BasketService } from './basket.service';
import { CreateBasketDeviceDto } from './dto/basket-device.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Basket')
@Controller('basket')
export class BasketController {
  constructor(private basketService: BasketService) {}

  @Post()
  create(@Body() basketDeviceDto: CreateBasketDeviceDto) {
    return this.basketService.createBasketDevice(basketDeviceDto);
  }

  @Get('/:id')
  getOneBasket(@Req() req: Request) {
    const { id } = req.params;
    return this.basketService.getOneBasket(id);
  }

  @Delete('/:id')
  deleteOne(@Req() req: Request) {
    const { id } = req.params;
    return this.basketService.deleteOneBasketDevice(id);
  }
}
