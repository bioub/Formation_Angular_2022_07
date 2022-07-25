import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    UserAddComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, // à faire dans chaque module où on veut utiliser les forms Angular
    UsersRoutingModule
  ]
})
export class UsersModule { }
