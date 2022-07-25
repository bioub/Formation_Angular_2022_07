import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from './user.interface';
import { UserService } from './user.service';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  loading = false;
  users: User[] = [];

  constructor(private title: Title, private userService: UserService) {}

  ngOnInit(): void {
    // const xhrFactory = new XHRFactory();
    // const httpHandler = new HttpXhrBackend(xhrFactory);
    // const httpClient = new HttpClient(httpHandler);
    // fetch()
    // const xhr = new XMLHttpRequest();
    this.title.setTitle('Users - MyApp');
    this.userService.getAll().subscribe((users) => {
      this.users = users;
      this.loading = false; // la réponse est reçu
    });
    this.loading = true; // la requete est envoyé

    this.userService.add.subscribe((user) => {
      this.users.push(user);
    });
  }
}
