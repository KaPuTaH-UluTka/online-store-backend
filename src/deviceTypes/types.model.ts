import { BelongsToMany, Column, HasMany, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { Device } from '../devices/device.model';
import { TypeBrand } from './type-brand.model';
import { Brand } from '../deviceBrands/brand.model';

interface TypeCreationAttrs {
  name: string;
}

@Table({ tableName: 'types' })
export class Type extends Model<Type, TypeCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  @ApiProperty({ example: 'Name', description: 'Type name' })
  @Column({ type: DataTypes.STRING, unique: true })
  declare name: string;

  @HasMany(() => Brand)
  devices: Device[];
  @BelongsToMany(() => Brand, () => TypeBrand)
  brands: Brand[];
}
