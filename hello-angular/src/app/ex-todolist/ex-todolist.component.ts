import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-ex-todolist',
  templateUrl: './ex-todolist.component.html',
  styleUrls: ['./ex-todolist.component.css'],
})
export class ExTodolistComponent implements OnInit {
  newTodo = 'DEF';
  todos: Todo[] = [
    {
      id: Math.random(),
      title: 'ABC',
      completed: true,
    },
    {
      id: Math.random(),
      title: 'XYZ',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addTodo(event: SubmitEvent) {
    event.preventDefault();
    this.todos.push({
      id: Math.random(),
      title: this.newTodo,
      completed: false,
    });
    this.newTodo = '';
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  toggleComplete(completed: boolean) {
    for (const todo of this.todos) {
      todo.completed = completed;
    }
  }
}
