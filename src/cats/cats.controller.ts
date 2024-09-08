import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  @Get() // [GET] /cats
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('bread') // [GET] /cats/bread
  findAllWithPrefix(): string {
    return 'This action returns all cats with route cats/bread';
  }

  @Get('request-object')
  findAllWithRequestObject(@Req() request: Request): string {
    return 'This action returns all cats with route cats/bread';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get('findAllAsync')
  async findAllAsync(): Promise<any[]> {
    return [];
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): string {
    return 'This action adds a new cat';
  }
}
