import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { Basket } from './basket.model';
import { Device } from '../devices/device.model';

@Table({ tableName: 'basket-device' })
export class BasketDevice extends Model<BasketDevice> {
  @ApiProperty({ example: '1', description: 'uniq id' })
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataTypes.INTEGER, allowNull: true })
  declare number: number;

  @ForeignKey(() => Basket)
  @Column({ type: DataTypes.INTEGER })
  declare basketId: number;

  @ForeignKey(() => Device)
  @Column({ type: DataTypes.INTEGER })
  declare deviceId: number;
}
