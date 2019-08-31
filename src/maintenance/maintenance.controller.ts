import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { IMaintenance } from './maintenance.interface';

// @UseGuards(AuthGuard('jwt'))
@Controller('maintenance')
export class MaintenanceController {
  constructor(public service: MaintenanceService) {}

  @Post()
  async create(@Body() createCatDto: any) {
    this.service.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<IMaintenance[]> {
    return this.service.findAll();
  }
}
