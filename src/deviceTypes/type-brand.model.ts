import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { Brand } from '../deviceBrands/brand.model';
import { Type } from './types.model';

@Table({ tableName: 'deviceTypes-brand' })
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
