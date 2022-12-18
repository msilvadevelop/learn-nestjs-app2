import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ForzaService } from './api/forza.service';

@Controller('soccer')
export class SoccerController {
  constructor(private readonly forzaSoccer: ForzaService) {}

  @Get('today/live')  
  matchesOnLive() {
    return this.forzaSoccer.liveNow();
  }

  @Get('today/finished')  
  matchesfinished() {
    return this.forzaSoccer.finishedMatches();
  }
  
  @Get('today/next')  
  matchesNext() {
    return this.forzaSoccer.nextMatches();
  }  
}
