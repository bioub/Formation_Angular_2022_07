import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'my-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {

  }
}
