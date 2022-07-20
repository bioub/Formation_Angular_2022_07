import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-basics',
  templateUrl: './ex-basics.component.html',
  styleUrls: ['./ex-basics.component.css']
})
export class ExBasicsComponent implements OnInit {

  name = 'Romain';

  constructor() { }

  ngOnInit(): void {
  }

  updateName(event: Event) {
    const target = event.target as HTMLInputElement;
    this.name = target.value;
  }

}
