import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { BasketDevice } from './basketDevice.model';
import { User } from '../users/users.model';

@Table({ tableName: 'basket' })
export class Basket extends Model<Basket> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @ForeignKey(() => User)
  @Column({ type: DataTypes.INTEGER })
  declare userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => BasketDevice)
  basket: BasketDevice[];
}
