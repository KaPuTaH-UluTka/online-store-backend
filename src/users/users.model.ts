import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';
import { Basket } from '../basket/basket.model';
import { Rating } from '../devices/rating.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'uniq id' })
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;
  @ApiProperty({ example: 'user@gmail.com', description: 'Email' })
  @Column({ type: DataType.STRING, unique: true })
  declare email: string;
  @ApiProperty({ example: '12345678', description: 'Password' })
  @Column({ type: DataType.STRING })
  declare password: string;
  @ApiProperty({ example: 'true', description: 'Ban status' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  declare banned: boolean;
  @ApiProperty({ example: 'info', description: 'Ban reason' })
  @Column({ type: DataType.STRING, allowNull: true })
  declare banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
  @HasOne(() => Basket)
  userBasket: Basket;
  @HasMany(() => Rating)
  rating: Rating[];
}
