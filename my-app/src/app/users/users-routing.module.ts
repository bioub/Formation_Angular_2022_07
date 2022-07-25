import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
  {
    path: 'users', // URL /users
    component: UsersComponent,
    children: [
      {
        path: 'add', // URL /users/add
        component: UserAddComponent,
      },
      {
        path: ':userId', // ex URL /users/123 ou /users/NIMPORTE_QUEL_ID (dont /users/add)
        component: UserDetailsComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
