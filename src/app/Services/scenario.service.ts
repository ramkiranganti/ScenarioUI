import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from '../../environments/environment';
import { Scenario } from '../Interfaces/scenario';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  
  serviceURL: string;

  constructor(private baseService: BaseService) {
    this.serviceURL = environment.ScenarioAPI;
   }

  getScenarios() {      
      return this.baseService.get(this.serviceURL + 'api/Scenario/GetScenarios');
  }

}
