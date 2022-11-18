import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderController } from './order.controller';

@Module({
  providers: [OrderService],
  controllers: [OrderController],
  imports: [SequelizeModule.forFeature([])],
  exports: [OrderService],
})
export class OrderModule {}
