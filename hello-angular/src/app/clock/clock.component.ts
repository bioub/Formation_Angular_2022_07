import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit, OnChanges, OnDestroy {
  @Input() format = 'HH:mm:ss';
  @Input() delay = 1000;

  now = new Date();

  interval: any;

  constructor() {
    console.log('constructor', this.delay);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.delay);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['delay']?.previousValue !== changes['delay']?.currentValue) {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.now = new Date();
        // detectChanges();
        // grace à Zone.js on peut intercepter les callbacks asynchrones
      }, this.delay);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
