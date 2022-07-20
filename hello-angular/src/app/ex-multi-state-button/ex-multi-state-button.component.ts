import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-multi-state-button',
  templateUrl: './ex-multi-state-button.component.html',
  styleUrls: ['./ex-multi-state-button.component.css']
})
export class ExMultiStateButtonComponent implements OnInit {

  items = ['Romain', 'Jean', 'Eric'];
  selected = 'Jean';

  constructor() { }

  ngOnInit(): void {
  }

}
