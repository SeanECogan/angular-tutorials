import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  currentTime: Date;

  constructor() {
    this.currentTime = new Date();

    setInterval(() => {
      this.currentTime = this.getCurrentTime();
    }, 1000);
  }

  ngOnInit(): void {
  }

  getCurrentTime(): Date {
    return new Date();
  }
}
