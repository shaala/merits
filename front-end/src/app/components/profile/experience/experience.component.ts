import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showExperienceModal() {
    const popup = document.querySelector('.popup-experience');
    popup.setAttribute('style', 'display: block');
    }
}
