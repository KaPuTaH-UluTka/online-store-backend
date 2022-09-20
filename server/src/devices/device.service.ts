import { CreateDeviceDto } from './dto/create-device.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Device } from './device.model';
import { FilesService } from '../files/files.service';
import { Request, Response } from 'express';
import { HttpException, HttpStatus } from '@nestjs/common';

export class DeviceService {
  constructor(
    @InjectModel(Device) private deviceRepository: typeof Device,
    private fileService: FilesService
  ) {}

  async create(deviceDto: CreateDeviceDto, img: string) {
    const fileName = await this.fileService.createFile(img);
    const device = await this.deviceRepository.create({ ...CreateDeviceDto, img: fileName });
    return device;
  }

  async getOne(deviceDto: CreateDeviceDto) {}

  async getAll() {
    const devices = await this.deviceRepository.findAll({ include: { all: true } });
    return devices;
  }

  async deleteOne(id: string) {
    await this.deviceRepository.destroy({ where: { id } }).then(function (deletedRecord) {
      if (deletedRecord !== 1) {
        throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
      }
    });
  }
}
