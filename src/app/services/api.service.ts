import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiences } from '../models/experiences.model';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpClient, private userDataService: UserDataService) { }

  getData() {
    this.httpService.get('https://personal-website-52d41.firebaseio.com/experiances.json').subscribe(
      (data: any[]) => {
        var experiencesList = data as Experiences[];
        this.userDataService.setExperiences(experiencesList);
      }
    );
  }
}
