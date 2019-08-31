import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaintenanceModule } from './maintenance/maintenance.module';
// import { databaseProviders } from './database.providers';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MaintenanceModule, 
    MongooseModule.forRoot('mongodb://maintenance-db:27017/antilopa', { 
      useNewUrlParser: true, 
      auth: {authSource: "admin"}, 
      user: 'root', pass: 'example'})],
  controllers: [AppController],
  providers: [AppService],
  // exports: [...databaseProviders]
})
export class AppModule {}
