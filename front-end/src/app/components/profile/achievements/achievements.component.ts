import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  showAchieveModal() {
    const popup = document.querySelector('.popup-achievment');
    popup.setAttribute('style', 'display: block');
    console.log(' achievement pop up works');
  }
}
