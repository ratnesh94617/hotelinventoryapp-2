import { Inject, Injectable } from '@angular/core';
import { RouteConfig } from '../search/routeConfig';
import { RouteConfigToken } from '../search/routeConfig.service';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private routeConfig: RouteConfig) { 
    console.log('ConfigService created'); 
    console.log('routeConfig', this.routeConfig);
  }
}
