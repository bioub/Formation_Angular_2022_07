import { Component, HostListener, OnInit } from '@angular/core';
import { Todo } from './todo.interface';

@Component({
  selector: 'app-ex-todolist-bonus',
  templateUrl: './ex-todolist-bonus.component.html',
  styleUrls: ['./ex-todolist-bonus.component.css'],
})
export class ExTodolistBonusComponent implements OnInit {
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

  editingTodo: Todo | null = null;

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

  @HostListener('window:click', ['$event'])
  windowClick(event: PointerEvent) {
    const target = event.target as HTMLElement;

    if (target.classList.contains('todo-item-title-edit')) {
      return;
    }

    this.editingTodo = null;
  }

  inputEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.editingTodo = null;
    }
  }
}
