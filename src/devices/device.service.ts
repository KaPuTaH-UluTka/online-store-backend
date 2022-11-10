import { CreateDeviceDto } from './dto/create-device.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Device } from './device.model';
import { FilesService } from '../files/files.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable({})
export class DeviceService {
  constructor(
    @InjectModel(Device) private deviceRepository: typeof Device,
    private fileService: FilesService
  ) {}

  async create(deviceDto: CreateDeviceDto, img: FormData) {
    const fileName = await this.fileService.createFile(img);
    try {
      const device = await this.deviceRepository.create({ ...deviceDto, img: fileName });
      return device;
    } catch (err) {
      throw new HttpException('Device already exist', HttpStatus.BAD_REQUEST);
    }
  }

  async update(deviceDto: CreateDeviceDto, img, id: string) {
    if (img) {
      const fileName = await this.fileService.createFile(img);
      const device = await this.deviceRepository.update(
        { ...deviceDto, img: fileName },
        { where: { id } }
      );
      if (device[0] === 0) {
        throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
      }
      return deviceDto;
    } else {
      const device = await this.deviceRepository.update(deviceDto, { where: { id } });
      if (device[0] === 0) {
        throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
      }
      return deviceDto;
    }
  }

  async getOne(id: string) {
    const device = await this.deviceRepository.findOne({ where: { id }, include: { all: true } });
    if (device === null) {
      throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
    } else {
      return device;
    }
  }

  async getAll() {
    const devices = await this.deviceRepository.findAll();
    if (devices === null) {
      throw new HttpException('Devices not found', HttpStatus.NOT_FOUND);
    } else {
      return devices;
    }
  }

  async deleteOne(id: string) {
    await this.deviceRepository.destroy({ where: { id } }).then(function (deletedRecord) {
      if (deletedRecord !== 1) {
        throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
      } else {
        return new HttpException('Deleted successfully', HttpStatus.OK);
      }
    });
  }
}
