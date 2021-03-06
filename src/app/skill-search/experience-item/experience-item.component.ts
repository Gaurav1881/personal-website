import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/models/experience.model';
import { Skills } from 'src/app/models/skills.model';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent implements OnInit {

  @Input() experience: Experience;
  @Input() events: Subject<String>;

  validSkills: Skills[];

  constructor() {
    this.validSkills = [];
    this.events = new Subject();
  }

  ngOnInit() {
    this.validSkills = this.experience.skills;
    this.events.pipe(debounceTime(100)).subscribe(
      (searchKeyword) => {
        this.searchForKeyworks(searchKeyword)
      }
    )
  }

  searchForKeyworks(searchKeyword: String) {
    this.validSkills = [];
    if (this.experience.name.toLowerCase().includes(searchKeyword.toLocaleLowerCase())) {
      this.validSkills = this.experience.skills;
    } else if (this.experience.position && this.experience.position.toLowerCase().includes(searchKeyword.toLocaleLowerCase())) {
      this.validSkills = this.experience.skills;
    } else {
      this.experience.skills.forEach(
        (skill) => {
          console.log("looping");
          var found = false;
          if (skill.description.toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase())) {
            this.validSkills.push(skill);
          } else {
            var counter = 0;
            while (counter < skill.keywords.length && !found) {
              var keyword = skill.keywords[counter];
              if (keyword.toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase())) {
                this.validSkills.push(skill);
                found = true;
              }
              counter = counter + 1;
            }
          }
        }
      );
    }
  }
}
