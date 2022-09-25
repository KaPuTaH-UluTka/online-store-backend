import { InjectModel } from '@nestjs/sequelize';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Type } from './types.model';
import { CreateTypeDto } from './dto/create-type.dto';

@Injectable({})
export class TypesService {
  constructor(@InjectModel(Type) private typeRepository: typeof Type) {}

  async createType(typeDto: CreateTypeDto) {
    const type = await this.typeRepository.create(typeDto);
    return type;
  }

  async getTypes() {
    const types = await this.typeRepository.findAll({ include: { all: true } });
    return types;
  }

  async deleteOne(id: string) {
    await this.typeRepository.destroy({ where: { id } }).then(function (deletedRecord) {
      if (deletedRecord !== 1) {
        throw new HttpException('Type not found', HttpStatus.NOT_FOUND);
      }
    });
  }
}
