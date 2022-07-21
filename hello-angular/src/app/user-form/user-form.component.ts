import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = {
    username: 'romainb',
    email: 'romain.bohdanowicz@formation.tech',
    phone: '0600000000',
    isActive: true,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
