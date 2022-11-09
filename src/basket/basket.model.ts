import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { BasketDevice } from './basketDevice.model';
import { User } from '../users/users.model';

@Table({ tableName: 'basket' })
export class Basket extends Model<Basket> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  declare userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => BasketDevice)
  basket: BasketDevice[];
}
