import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multi-state-button',
  templateUrl: './multi-state-button.component.html',
  styleUrls: ['./multi-state-button.component.css']
})
export class MultiStateButtonComponent implements OnInit {

  @Input() items = ['Romain', 'Jean', 'Eric'];
  @Input() selected = 'Jean';

  @Output() selectedChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectNext() {
    const selectedIndex = this.items.indexOf(this.selected);
    const nextIndex = (selectedIndex + 1) % this.items.length;
    this.selected = this.items[nextIndex];

    this.selectedChange.emit(this.selected);
    // 0 = 3 x 0 + 0
    // 1 = 3 x 0 + 1
    // 2 = 3 x 0 + 2
    // 3 = 3 x 1 + 0
    // 4 = 3 x 1 + 1
    // 5 = 3 x 1 + 2
    // 6 = 3 x 2 + 0
    /*
    si selectedIndex vaut 2 (sur le dernier du tableau)
         3|3
         -+-----
(modulo) 0|1 (quotien )
          |
    */
  }
}
