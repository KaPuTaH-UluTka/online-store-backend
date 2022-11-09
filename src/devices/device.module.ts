import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasketDevice } from '../basket/basketDevice.model';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { FilesModule } from '../files/files.module';
import { Brand } from '../deviceBrands/brand.model';
import { Type } from '../deviceTypes/types.model';
import { Device } from './device.model';
import { DeviceInfo } from './deviceInfo.model';

@Module({
  providers: [DeviceService],
  controllers: [DeviceController],
  imports: [
    SequelizeModule.forFeature([BasketDevice, Brand, Type, Device, DeviceInfo]),
    FilesModule,
  ],
  exports: [DeviceService],
})
export class DeviceModule {}
