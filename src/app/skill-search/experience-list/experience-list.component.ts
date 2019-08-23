import { Component, OnInit, Input } from '@angular/core';
import { Experiences } from 'src/app/models/experiences.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.css']
})
export class ExperienceListComponent implements OnInit {

  @Input() experiences: Experiences;
  @Input() events: Subject<String>;
  constructor() { }

  ngOnInit() {
  }

}
