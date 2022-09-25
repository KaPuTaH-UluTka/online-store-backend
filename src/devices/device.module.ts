import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BasketDevice } from '../basket/basketDevice.model';
import { DeviceService } from './device.service';
import { DeviceController } from './device.controller';
import { FilesModule } from '../files/files.module';

@Module({
  providers: [DeviceService],
  controllers: [DeviceController],
  imports: [SequelizeModule.forFeature([BasketDevice, FilesModule])],
  exports: [DeviceService],
})
export class DeviceModule {}
