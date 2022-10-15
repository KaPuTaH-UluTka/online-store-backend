import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Device } from '../devices/device.model';
import { Brand } from './brand.model';
import { BrandService } from './brand.service';
import { BrandsController } from './brand.controller';
import { Type } from '../deviceTypes/types.model';

@Module({
  providers: [BrandService],
  controllers: [BrandsController],
  imports: [SequelizeModule.forFeature([Type, Device, Brand])],
  exports: [BrandService],
})
export class BrandsModule {}
