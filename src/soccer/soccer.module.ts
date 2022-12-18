import { Module } from '@nestjs/common';
import { SoccerService } from './soccer.service';
import { ForzaService } from './api/forza.service';
import { SoccerController } from './soccer.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  controllers: [SoccerController],
  providers: [SoccerService, ForzaService],
  imports: [HttpModule]
})
export class SoccerModule {}
