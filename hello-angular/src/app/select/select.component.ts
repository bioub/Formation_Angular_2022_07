import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  items = ['Romain', 'Jean', 'Eric'];
  selected = 'Jean';
  menuOpen = false;

  // @ViewChild('containerRef') containerRef!: ElementRef<HTMLDivElement>;

  // private hostRef!: ElementRef;
  // constructor(hostRef: ElementRef) {
  //   this.hostRef = hostRef;
  // }
  constructor(private hostRef: ElementRef) {}

  ngOnInit(): void {
  }

  select(item: string) {
    this.selected = item;
    this.menuOpen = false;
  }

  // @HostListener('click', ['$event'])
  // hostClick(event: PointerEvent) {
  //   console.log('hostClick', event);
  // }

  @HostListener('window:click', ['$event'])
  windowClick(event: PointerEvent) {
    if (this.hostRef.nativeElement.contains(event.target)) {
      return;
    }

    this.menuOpen = false;
  }
}
