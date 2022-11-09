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
import { TypeBrand } from './deviceTypes/type-brand.model';
import { Brand } from './deviceBrands/brand.model';
import { Type } from './deviceTypes/types.model';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';
import { TypesModule } from './deviceTypes/types.module';
import { DeviceModule } from './devices/device.module';
import { BrandsModule } from './deviceBrands/brand.module';
import {AppController} from "./app.controller";

@Module({
  controllers: [AppController],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
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
    TypesModule,
    BrandsModule,
    DeviceModule,
    UsersModule,
    RolesModule,
    AuthModule,
  ],
})
export class AppModule {}
