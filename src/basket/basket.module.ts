import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasketDevice } from './basketDevice.model';
import { Device } from '../devices/device.model';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { Basket } from './basket.model';

@Module({
  providers: [BasketService],
  controllers: [BasketController],
  imports: [SequelizeModule.forFeature([BasketDevice, Device, Basket])],
  exports: [BasketService],
})
export class BasketModule {}
