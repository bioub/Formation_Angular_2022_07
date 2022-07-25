import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from "@ng-select/ng-select";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ClockComponent } from './clock/clock.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CounterComponent } from './counter/counter.component';
import { ExBasicsComponent } from './ex-basics/ex-basics.component';
import { ExMultiStateButtonComponent } from './ex-multi-state-button/ex-multi-state-button.component';
import { SelectComponent } from './select/select.component';
import { ExTodolistComponent } from './ex-todolist/ex-todolist.component';
import { ExTodolistBonusComponent } from './ex-todolist-bonus/ex-todolist-bonus.component';
import { LimitPipe } from './limit.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ClockComponent,
    UserFormComponent,
    CounterComponent,
    ExBasicsComponent,
    ExMultiStateButtonComponent,
    SelectComponent,
    ExTodolistComponent,
    ExTodolistBonusComponent,
    LimitPipe,
    HighlightDirective,
  ],
  imports: [
    BrowserModule, // exports CommonModule donc de ngIf, ngStyle, ngClass...
    NgSelectModule, // exports NgSelectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
