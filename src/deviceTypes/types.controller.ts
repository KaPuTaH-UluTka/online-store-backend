import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Types')
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

  @Delete('/:id')
  deleteOne(@Req() request: Request) {
    const { id } = request.params;
    return this.typesService.deleteOne(id);
  }
}
