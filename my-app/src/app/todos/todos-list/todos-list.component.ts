import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'my-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

  @Input() items: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
