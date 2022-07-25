import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private title: Title, private httpClient: HttpClient) {
    this.title.setTitle('Users - MyApp');
  }

  ngOnInit(): void {
    // const xhrFactory = new XHRFactory();
    // const httpHandler = new HttpXhrBackend(xhrFactory);
    // const httpClient = new HttpClient(httpHandler);
    // fetch()
    // const xhr = new XMLHttpRequest();
  }

}
