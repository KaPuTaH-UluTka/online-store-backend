import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Brand } from '../brands/brand.model';
import { Type } from './type.model';

@Table({ tableName: 'type-brand' })
export class TypeBrand extends Model<TypeBrand> {
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  @ForeignKey(() => Brand)
  @Column({ type: DataTypes.INTEGER })
  declare brandId: number;
  @ForeignKey(() => Type)
  @Column({ type: DataTypes.INTEGER })
  declare typeId: number;
}
