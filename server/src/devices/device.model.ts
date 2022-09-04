import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { User } from '../users/users.model';
import { Brand } from '../brands/brand.model';
import { Type } from '../types/type.model';
import { BasketDevice } from '../basket/basketDevice.model';
import { Rating } from './rating.model';
import { DeviceInfo } from './deviceInfo.model';

interface DeviceCreationAttrs {
  name: string;
  price: number;
  rating: number;
  img: string;
}

@Table({ tableName: 'devices' })
export class Device extends Model<Device, DeviceCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  @ApiProperty({ example: 'Name', description: 'Device name' })
  @Column({ type: DataTypes.STRING, unique: true, allowNull: false })
  declare name: string;
  @ApiProperty({ example: 'Price', description: 'Device price' })
  @Column({ type: DataTypes.INTEGER, allowNull: false })
  declare price: number;
  @ApiProperty({ example: 'Rating', description: 'Device rating' })
  @Column({ type: DataTypes.INTEGER, defaultValue: 0 })
  declare rating: number;
  @ApiProperty({ example: 'Picture', description: 'link to pic' })
  @Column({ type: DataTypes.STRING, allowNull: false })
  declare img: string;
  @ForeignKey(() => Brand)
  @Column({ type: DataTypes.INTEGER })
  declare brandId: number;
  @ForeignKey(() => Type)
  @Column({ type: DataTypes.INTEGER })
  declare typeId: number;

  @BelongsTo(() => Type)
  type: Type;
  @BelongsTo(() => Brand)
  brand: Brand;
  @HasMany(() => BasketDevice)
  basketDevices: BasketDevice[];
  @HasMany(() => Rating)
  rate: Rating[];
  @HasMany(() => DeviceInfo)
  info: DeviceInfo[];
}
