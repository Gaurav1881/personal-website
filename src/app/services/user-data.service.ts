import { Injectable } from '@angular/core';
import { Experiances } from '../models/experiances.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  private experiances: Experiances[];
  private onObtainExperiances: Subject<Experiances[]>;

  setExperiances(experiances: Experiances[]){
    this.experiances = experiances;
    this.onObtainExperiances.next(this.experiances.slice())
  }

  getExperianceObserable() {
    return this.onObtainExperiances;
  }
}
