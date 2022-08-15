import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { User } from '../users/users.model';
import { Basket } from './basket.model';

@Table({ tableName: 'basketDevice' })
export class BasketDevice extends Model<BasketDevice> {
  @ApiProperty({ example: '1', description: 'uniq id' })
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @ForeignKey(() => Basket)
  @Column({ type: DataTypes.INTEGER })
  declare basketId: number;
}
