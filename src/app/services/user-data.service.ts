import { Injectable, OnInit } from '@angular/core';
import { Experiences } from '../models/experiences.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { 
    this.onObtainExperiences = new Subject<Experiences[]>();
  }
  private experiences: Experiences[];
  private onObtainExperiences: Subject<Experiences[]>;

  setExperiences(experiences: Experiences[]){
    this.experiences = experiences;
    this.onObtainExperiences.next(this.experiences.slice())
  }

  getExperienceObserable() {
    return this.onObtainExperiences;
  }
}
