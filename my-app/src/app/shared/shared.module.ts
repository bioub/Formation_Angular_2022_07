import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { MultiStateButtonComponent } from './multi-state-button/multi-state-button.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    ClockComponent,
    MultiStateButtonComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockComponent,
    MultiStateButtonComponent,
    SelectComponent,
  ]
})
export class SharedModule { }
