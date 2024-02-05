import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Device } from '../devices/device.model';
import { Type } from '../deviceTypes/types.model';
import { TypeBrand } from '../deviceTypes/type-brand.model';

interface BrandCreationAttrs {
  name: string;
}

@Table({ tableName: 'brands' })
export class Brand extends Model<Brand, BrandCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  @ApiProperty({ example: 'Name', description: 'Brand name' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  declare name: string;

  @HasMany(() => Device)
  devices: Device[];
  @BelongsToMany(() => Type, () => TypeBrand)
  types: Type[];
}
