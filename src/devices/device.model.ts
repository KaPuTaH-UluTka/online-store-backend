import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Brand } from '../deviceBrands/brand.model';
import { Type } from '../deviceTypes/types.model';
import { BasketDevice } from '../basket/basketDevice.model';
import { Rating } from './rating.model';
import { DeviceInfo } from './deviceInfo.model';

interface DeviceCreationAttrs {
  name: string;
  price: number;
  rating: number;
  img: string;
  typeId: number;
  brandId: number;
  info: string;
}

@Table({ tableName: 'devices' })
export class Device extends Model<Device, DeviceCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  @ApiProperty({ example: 'Name', description: 'Device name' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  declare name: string;
  @ApiProperty({ example: 'Price', description: 'Device price' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  declare price: number;
  @ApiProperty({ example: 'Rating', description: 'Device rating' })
  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  declare rating: number;
  @ApiProperty({ example: 'Picture', description: 'link to pic' })
  @Column({ type: DataType.STRING, allowNull: false })
  declare img: string;
  @ForeignKey(() => Brand)
  @Column({ type: DataType.INTEGER })
  declare brandId: number;
  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER })
  declare typeId: number;
  @ForeignKey(() => DeviceInfo)
  @Column({ type: DataType.STRING })
  declare info: string;

  @BelongsTo(() => Brand)
  brand: Brand;
  @BelongsTo(() => Type)
  type: Type;
  @HasMany(() => BasketDevice)
  basketDevices: BasketDevice[];
  @HasMany(() => Rating)
  rate: Rating[];
  @HasMany(() => DeviceInfo)
  deviceInfo: DeviceInfo;
}
