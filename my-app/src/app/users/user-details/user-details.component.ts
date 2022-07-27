import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, switchMap } from 'rxjs';
import { User } from '../user.interface';
import { UserService } from '../user.service';

@Component({
  selector: 'my-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: User | undefined;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // récupère le userId dans l'url à cet instant
    // console.log('userId snapshot', this.activatedRoute.snapshot.paramMap.get('userId'));

    // récupère le userId dans le temps (la valeur actuelle et les valeurs futures)
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   // console.log('userId subscribe', paramMap.get('userId'));
    //   const id = paramMap.get('userId')!;
    //   this.userService.getById(id).subscribe((user) => {
    //     this.user = user;
    //   });
    // });

    // avec mergeMap (plus le callback hell)
    this.activatedRoute.paramMap.pipe(
      switchMap((paramMap) => this.userService.getById(paramMap.get('userId')!))
    ).subscribe((user) => {
      this.user = user;
    });

    // this.userService.getById(id).subscribe(() => {

    // });
  }
}
