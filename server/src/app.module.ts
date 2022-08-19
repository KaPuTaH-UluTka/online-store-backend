import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/users.model';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { Basket } from './basket/basket.model';
import { BasketDevice } from './basket/basketDevice.model';
import { Rating } from './devices/rating.model';
import { Device } from './devices/device.model';
import { DeviceInfo } from './devices/deviceInfo.model';
import { TypeBrand } from './types/type-brand.model';
import { Brand } from './brands/brand.model';
import { Type } from './types/type.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [
        User,
        Role,
        UserRoles,
        Basket,
        BasketDevice,
        Rating,
        Device,
        DeviceInfo,
        Brand,
        Type,
        TypeBrand,
      ],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
  ],
})
export class AppModule {}
