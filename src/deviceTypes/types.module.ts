import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Type } from './types.model';
import { Device } from '../devices/device.model';
import { Brand } from '../deviceBrands/brand.model';

@Module({
  providers: [TypesService],
  controllers: [TypesController],
  imports: [SequelizeModule.forFeature([Type, Device, Brand])],
  exports: [TypesService],
})
export class TypesModule {}
