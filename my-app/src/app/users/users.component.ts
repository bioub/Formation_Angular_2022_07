import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHandler, HttpXhrBackend } from '@angular/common/http';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const httpHandler = new HttpXhrBackend();
    // const httpClient = new HttpClient(httpHandler);
    // fetch()
    // const xhr = new XMLHttpRequest();
  }

}
