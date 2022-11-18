import { InjectModel } from '@nestjs/sequelize';
import { Basket } from './basket.model';
import { BasketDevice } from './basketDevice.model';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateBasketDeviceDto } from './dto/basket-device.dto';

@Injectable()
export class BasketService {
  constructor(
    @InjectModel(Basket) private basketRepository: typeof Basket,
    @InjectModel(BasketDevice) private basketDeviceRepository: typeof BasketDevice
  ) {}

  async createBasket(userId: number) {
    await this.basketRepository.create({ userId: userId });
  }

  async createBasketDevice(basketDeviceDto: CreateBasketDeviceDto) {
    const basketDevice = await this.basketDeviceRepository.findOne({
      where: { basketId: basketDeviceDto.basketId, deviceId: basketDeviceDto.deviceId },
    });
    if (basketDevice === null) {
      await this.basketDeviceRepository.create(basketDeviceDto);
    } else {
      await this.basketDeviceRepository.update(
        { number: basketDevice.number + 1 },
        { where: { basketId: basketDeviceDto.basketId, deviceId: basketDeviceDto.deviceId } }
      );
    }
  }

  async getOneBasket(id: string) {
    const basketDevice = await this.basketDeviceRepository.findAll({
      where: { basketId: id },
    });
    if (basketDevice === null) {
      throw new HttpException('Basket not found', HttpStatus.NOT_FOUND);
    } else {
      return basketDevice;
    }
  }

  async decreaseOneBasketDevice(basketDeviceDto: CreateBasketDeviceDto) {
    const basketDevice = await this.basketDeviceRepository.findOne({
      where: { basketId: basketDeviceDto.basketId, deviceId: basketDeviceDto.deviceId },
    });
    if (basketDevice === null) {
      throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
    } else {
      await this.basketDeviceRepository.update(
        { number: basketDevice.number - 1 },
        { where: { basketId: basketDeviceDto.basketId, deviceId: basketDeviceDto.deviceId } }
      );
    }
  }

  async deleteOneBasketDevice(id: string) {
    await this.basketDeviceRepository.destroy({ where: { id } }).then(function (deletedRecord) {
      if (deletedRecord !== 1) {
        throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
      } else {
        return new HttpException('Deleted successfully', HttpStatus.OK);
      }
    });
  }
}
