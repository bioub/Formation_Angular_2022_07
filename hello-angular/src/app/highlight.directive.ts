import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(hostRef: ElementRef<HTMLElement>) {
    hostRef.nativeElement.style.backgroundColor = 'yellow'
  }

}
