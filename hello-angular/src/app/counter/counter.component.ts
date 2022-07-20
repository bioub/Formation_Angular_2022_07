import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count++;
  }

  updateCount(event: Event) {
    const target = event.target as HTMLInputElement;
    this.count = target.valueAsNumber;
  }

}
