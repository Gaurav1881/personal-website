import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  questions: string[][] = [
    ['Who is my favorite basketball player?', 'Lebron James', 'Fred Vanvleet', 'Pascal Siakam', 'Kawhi Leonard', 'Fred Vanvleet'],
    ['What kind of dog do I have?', 'Pitbull', 'Golden Doodle', 'Beagle', 'Cockerspaniel & Poodle Mix', 'Cockerspaniel & Poodle Mix'],
    ['Which of the following is NOT one of my hobbies?', 'Cooking', 'Archery', 'Going to the Gym', 'Drawing', 'Archery'],
    ['What is my ideal weekend activity to do with friends?', 'An Escape Room', 'Watch a Movie', 'Go Shopping', 'Play Tennis', 'An Escape Room'],
    ['Which of the following programming languages have I NOT worked with?', 'Java', 'Python', 'C++', 'Ruby', 'Ruby'],
    ['What is my favorite game category?', 'Adventure Games', 'Puzzle/Strategy Games', 'FPS Games', 'Simulation Games', 'Puzzle/Strategy Games']
  ];

  questionIndex = 0;


  selectedAnswer = '';

  constructor() { }

  ngOnInit() {
  }

  onSelectButton(button: HTMLButtonElement) {
    this.selectedAnswer = button.textContent;
  }

  onSelectNext() {
    this.questionIndex = this.questionIndex + 1;
    if (this.questionIndex == this.questions.length) {
      this.questionIndex = 0;
    }
    this.selectedAnswer = '';
  }

  getClass(option) {
    let curOption = this.questions[this.questionIndex][option];
    if (this.selectedAnswer == curOption) {
      if (curOption == this.questions[this.questionIndex][5]) {
        return "btn btn-success";
      }
      return "btn btn-danger";
    } else {
      return "btn btn-light";
    }
  }
}
