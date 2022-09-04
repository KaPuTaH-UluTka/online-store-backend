import { CreateDeviceDto } from './dto/create-device.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Device } from './device.model';
import { FilesService } from '../files/files.service';

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
}
