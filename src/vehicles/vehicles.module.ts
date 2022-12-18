import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { NhtsaService } from './apis/nhtsa.service';
import { VehiclesController } from './vehicles.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [VehiclesController],
  providers: [VehiclesService, NhtsaService],
  imports: [HttpModule]

})
export class VehiclesModule {}
