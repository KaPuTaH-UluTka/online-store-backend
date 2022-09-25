import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { User } from '../users/users.model';
import { Device } from './device.model';

@Table({ tableName: 'rating' })
export class Rating extends Model<Rating> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  @ApiProperty({ example: '5', description: 'Device rate' })
  @Column({ type: DataTypes.INTEGER, allowNull: false })
  declare rate: string;
  @ForeignKey(() => User)
  @Column({ type: DataTypes.INTEGER })
  declare userId: number;
  @ForeignKey(() => Device)
  @Column({ type: DataTypes.INTEGER })
  declare deviceId: number;

  @BelongsTo(() => User)
  user: User;
  @BelongsTo(() => Device)
  device: Device;
}
