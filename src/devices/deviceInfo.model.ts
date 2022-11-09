import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { Device } from './device.model';

@Table({ tableName: 'device-info' })
export class DeviceInfo extends Model<DeviceInfo> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  @ApiProperty({ example: 'Name', description: 'Info title' })
  @Column({ type: DataTypes.STRING, allowNull: false })
  declare title: string;
  @ApiProperty({ example: 'Description', description: 'Info description' })
  @Column({ type: DataTypes.STRING, allowNull: false })
  declare description: string;
  @ForeignKey(() => Device)
  @Column({ type: DataTypes.INTEGER })
  declare deviceId: number;

  @BelongsTo(() => Device)
  device: Device;
}
