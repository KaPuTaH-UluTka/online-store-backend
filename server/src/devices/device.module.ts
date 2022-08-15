import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasketDevice } from '../basket/basketDevice.model';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';

@Module({
  providers: [DeviceService],
  controllers: [DeviceController],
  imports: [SequelizeModule.forFeature([BasketDevice])],
  exports: [DeviceService],
})
export class DeviceModule {}
