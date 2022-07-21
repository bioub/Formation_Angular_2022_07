import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ClockComponent } from './clock/clock.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CounterComponent } from './counter/counter.component';
import { ExBasicsComponent } from './ex-basics/ex-basics.component';
import { ExMultiStateButtonComponent } from './ex-multi-state-button/ex-multi-state-button.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ClockComponent,
    UserFormComponent,
    CounterComponent,
    ExBasicsComponent,
    ExMultiStateButtonComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule, // exports CommonModule donc de ngIf, ngStyle, ngClass...

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
