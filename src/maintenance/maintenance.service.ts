import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IMaintenance } from './maintenance.interface';

@Injectable()
export class MaintenanceService {
  constructor(
    @InjectModel('Maintenance')
    private readonly maintenance: Model<IMaintenance>,
  ) {}

  async create(createDto: any): Promise<IMaintenance> {
    const createdModel = new this.maintenance(createDto);
    return await createdModel.save();
  }

  async findAll(): Promise<IMaintenance[]> {
    return await this.maintenance.find().exec();
  }
}
