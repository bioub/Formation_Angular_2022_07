import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  now = new Date();

  constructor() {
    setInterval(() => {
      this.now = new Date();
      // detectChanges();
      // grace à Zone.js on peut intercepter les callbacks asynchrones
    }, 1000);
  }

  ngOnInit(): void {
  }

}
