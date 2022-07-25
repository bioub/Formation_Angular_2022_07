import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // permet de demander HttpClient au niveau d'un constructeur
    TodosModule, // avant AppRoutingModule
    UsersModule, // avant AppRoutingModule
    AppRoutingModule, // en dernier à cause de la route **
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
