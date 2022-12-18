import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class NhtsaService {
  constructor(private readonly http: HttpService) {}

  async getMakes()
  {
    return await this.http.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
      .toPromise()
      .then( res => res.data)
      .then( data => data.Results);
  }

  async getMakesModels()
  {
    return await this.http.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
      .toPromise()
      .then( res => res.data)
      .then( data => data.Results);
  }
}
