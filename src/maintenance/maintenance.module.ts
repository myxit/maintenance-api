import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MaintenanceService } from './maintenance.service';
import { MaintenanceController } from './maintenance.controller';
import { MaintenanceSchema } from './maintenance.schema';
// import { maintenanceProviders } from './maintenance.providers';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Maintenance', schema: MaintenanceSchema }])],
  controllers: [MaintenanceController],
  providers: [MaintenanceService],
})
export class MaintenanceModule {}
