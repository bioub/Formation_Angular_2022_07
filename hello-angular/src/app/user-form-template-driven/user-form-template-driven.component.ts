import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form-template-driven',
  templateUrl: './user-form-template-driven.component.html',
  styleUrls: ['./user-form-template-driven.component.css']
})
export class UserFormTemplateDrivenComponent implements OnInit {

  user = {
    username: 'romainb',
    email: '',
    phone: '0600000000',
    isActive: true,
  }

  constructor() { }

  ngOnInit(): void {
  }

  logUser() {
    // event.preventDefault() // optionnel avec la lib Angular (Reactive ou Template Driven)

    console.log(this.user);
  }
}
