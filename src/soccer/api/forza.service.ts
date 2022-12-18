import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import * as moment from 'moment';

@Injectable()
export class ForzaService {
  constructor(private readonly http: HttpService) {}

  async liveNow()
  {
    const now = moment().format('YYYY-MM-DD');    
    return await this.http.get(`https://forzafootball.com/api/calendar/${now}`)
      .toPromise()
      .then( res => res.data)
      .then( ( res ) => {
            const matches = res.matches;
            const live = matches.filter( i => i.status == 'live');
            const reslt = live.map( live => {
                const daymatch = {};
                daymatch["country"] = live.tournament.region.name;
                daymatch["league"] = live.tournament.name;
                daymatch["score"] = live.score.current;
                daymatch["home_team"] = live.home_team.name;
                daymatch["away_team"] = live.away_team.name;
                daymatch["time"] = `${live.match_time.current}'`;
                return daymatch;
            });

            return reslt;
       });
  }

  async finishedMatches()
  {
    const now = moment().format('YYYY-MM-DD');    
    return await this.http.get(`https://forzafootball.com/api/calendar/${now}`)
      .toPromise()
      .then( res => res.data)
      .then( ( res ) => {
        const matches = res.matches;
        const live = matches.filter( i => i.status == 'after');
        const reslt = live.map( live => {
            const daymatch = {};
            daymatch["country"] = live.tournament.region.name;
            daymatch["league"] = live.tournament.name;
            daymatch["score"] = live.score.current;
            daymatch["home_team"] = live.home_team.name;
            daymatch["away_team"] = live.away_team.name;
            daymatch["time"] = `${live.match_time.current}'`;
            return daymatch;
        });

        return reslt;
   });
  }

  async nextMatches()
  {
    const now = moment().format('YYYY-MM-DD');    
    return await this.http.get(`https://forzafootball.com/api/calendar/${now}`)
      .toPromise()
      .then( res => res.data)
      .then( ( res ) => {
        const matches = res.matches;
        const live = matches.filter( i => i.status == 'before');
        const reslt = live.map( live => {
            const daymatch = {};
            daymatch["country"] = live.tournament.region.name;
            daymatch["league"] = live.tournament.name;            
            daymatch["home_team"] = live.home_team.name;
            daymatch["away_team"] = live.away_team.name;  
            daymatch["date"] = moment(live.kickoff_at).format('YYYY-MM-DD H:mm:ss');  
            return daymatch;
        });

        return reslt;
   });
  }  
}
