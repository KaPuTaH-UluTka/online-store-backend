import { Column, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';

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
}
