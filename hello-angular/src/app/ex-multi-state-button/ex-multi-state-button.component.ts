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

  selectNext() {
    const selectedIndex = this.items.indexOf(this.selected);
    const nextIndex = (selectedIndex + 1) % this.items.length;
    this.selected = this.items[nextIndex];

    /*
    si selectedIndex vaut 2 (sur le dernier du tableau)
         3|3
         -+-----
(modulo) 0|1 (quotien )
          |
    */
  }
}
