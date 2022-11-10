import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './basket.model';
import { Device } from '../devices/device.model';
import { BasketDevice } from './basketDevice.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BasketService {
  constructor(
    @InjectModel(Basket) private basketRepository: typeof Basket,
    @InjectModel(Device) private deviceRepository: typeof Device,
    @InjectModel(BasketDevice) private basketDeviceRepository: typeof Device,
  ) {}

  async createBasket(userId: number) {
    await this.basketRepository.create({ userId: userId });
  }

  // async update(deviceDto: CreateDeviceDto, img, id: string) {
  //   if (img) {
  //     const fileName = await this.fileService.createFile(img);
  //     const device = await this.deviceRepository.update(
  //       { ...deviceDto, img: fileName },
  //       { where: { id } }
  //     );
  //     if (device[0] === 0) {
  //       throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
  //     }
  //     return deviceDto;
  //   } else {
  //     const device = await this.deviceRepository.update(deviceDto, { where: { id } });
  //     if (device[0] === 0) {
  //       throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
  //     }
  //     return deviceDto;
  //   }
  // }
  //
  // async getOne(id: string) {
  //   const device = await this.deviceRepository.findOne({ where: { id }, include: { all: true } });
  //   if (device === null) {
  //     throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
  //   } else {
  //     return device;
  //   }
  // }
  //
  // async getAll() {
  //   const devices = await this.deviceRepository.findAll();
  //   if (devices === null) {
  //     throw new HttpException('Devices not found', HttpStatus.NOT_FOUND);
  //   } else {
  //     return devices;
  //   }
  // }
  //
  // async deleteOne(id: string) {
  //   await this.deviceRepository.destroy({ where: { id } }).then(function (deletedRecord) {
  //     if (deletedRecord !== 1) {
  //       throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
  //     } else {
  //       return new HttpException('Deleted successfully', HttpStatus.OK);
  //     }
  //   });
  // }
}
