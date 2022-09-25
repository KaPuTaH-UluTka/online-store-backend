import { Body, Controller, Get, Post } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';

@Controller('types')
export class TypesController {
  constructor(private typesService: TypesService) {}

  @Post()
  create(@Body() typeDto: CreateTypeDto) {
    return this.typesService.createType(typeDto);
  }

  @Get()
  getAll() {
    return this.typesService.getTypes();
  }
}
