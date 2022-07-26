import { Component, OnInit } from '@angular/core';
import {
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'my-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  // userForm = new FormGroup({
  //   name: new FormControl('', {
  //     nonNullable: true,
  //     validators: Validators.required,
  //   }),
  //   username: new FormControl('', { nonNullable: true }),
  //   email: new FormControl('', {
  //     nonNullable: true,
  //     validators: [Validators.required, Validators.email],
  //   }),
  // });

  constructor(
    private userService: UserService,
    private fb: NonNullableFormBuilder
  ) {}

  userForm = this.fb.group({
    name: ['', Validators.required],
    username: [''],
    email: ['', [Validators.required, Validators.email]],
  });

  ngOnInit(): void {
    // this.userForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  createUser() {
    if (this.userForm.valid) {
      this.userService.create(this.userForm.value).subscribe((user) => {
        // console.log('user created', user);
        this.userService.add.next(user); // emit
      });
    }
  }
}
