import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.interface';
import { TodoService } from './todo.service';

@Component({
  selector: 'my-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
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

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getAll().subscribe((todos) => {
      this.todos = this.todos.concat(todos);
    });
  }

  addTodo(title: string) {
    this.todos.push({
      id: Math.random(),
      title: title,
      completed: false,
    });
  }
}
