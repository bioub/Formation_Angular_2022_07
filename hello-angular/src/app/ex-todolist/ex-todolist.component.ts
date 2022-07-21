import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-ex-todolist',
  templateUrl: './ex-todolist.component.html',
  styleUrls: ['./ex-todolist.component.css'],
})
export class ExTodolistComponent implements OnInit {
  newTodo = 'DEF';
  todos = [
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
}
