import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UserDataService } from '../services/user-data.service';
import { Subscription, Subject } from 'rxjs';
import { Experiences } from '../models/experiences.model';

@Component({
  selector: 'app-skill-search',
  templateUrl: './skill-search.component.html',
  styleUrls: ['./skill-search.component.css']
})
export class SkillSearchComponent implements OnInit {

  private experienceSubscription: Subscription;
  private experiencesList: Experiences[]; 
  private searchBarChanged: Subject<String>;

  constructor(private apiService: ApiService, private userDataService: UserDataService) { 
    this.searchBarChanged = new Subject<String>();
  }

  ngOnInit() {
    this.apiService.getData();
    this.experienceSubscription = this.userDataService.getExperienceObserable().subscribe(
      (experiences: Experiences[]) => this.experiencesList = experiences
    );
  }
}
