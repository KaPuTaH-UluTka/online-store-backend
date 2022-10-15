import { InjectModel } from '@nestjs/sequelize';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Brand } from './brand.model';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable({})
export class BrandService {
  constructor(@InjectModel(Brand) private brandRepository: typeof Brand) {}

  async createBrand(brandDto: CreateBrandDto) {
    try {
      const brand = await this.brandRepository.create(brandDto);
      return brand;
    } catch (err) {
      console.log(err);
      throw new HttpException('Brand already exist', HttpStatus.BAD_REQUEST);
    }
  }

  async getBrands() {
    const brands = await this.brandRepository.findAll();
    return brands;
  }

  async deleteOne(id: string) {
    await this.brandRepository.destroy({ where: { id } }).then(function (deletedRecord) {
      if (deletedRecord !== 1) {
        throw new HttpException('Brand not found', HttpStatus.NOT_FOUND);
      } else {
        return new HttpException('Deleted successfully', HttpStatus.OK);
      }
    });
  }
}
