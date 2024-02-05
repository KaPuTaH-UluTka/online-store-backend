import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Uniq id' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  @ApiProperty({ example: 'ADMIN', description: 'Role' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  declare value: string;
  @ApiProperty({ example: 'Possibilities', description: 'Role description' })
  @Column({ type: DataType.STRING, allowNull: false })
  declare description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
