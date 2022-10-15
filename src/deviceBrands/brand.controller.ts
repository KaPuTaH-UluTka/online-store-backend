import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('brands')
export class BrandsController {
  constructor(private brandService: BrandService) {}

  @Post()
  create(@Body() brandDto: CreateBrandDto) {
    return this.brandService.createBrand(brandDto);
  }

  @Get()
  getAll() {
    return this.brandService.getBrands();
  }

  @Delete('/:id')
  deleteOne(@Req() request: Request) {
    const { id } = request.params;
    return this.brandService.deleteOne(id);
  }
}
