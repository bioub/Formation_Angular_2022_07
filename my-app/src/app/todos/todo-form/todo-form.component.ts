import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'my-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  newTodo = '';

  @Output() add = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(event: SubmitEvent) {
    event.preventDefault();
    this.add.emit(this.newTodo);
  }

  toggleComplete(completed: boolean) {

  }
}
