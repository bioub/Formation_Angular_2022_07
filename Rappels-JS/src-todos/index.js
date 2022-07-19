import { createTodoItem } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todo-form-input');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todos-list');

formEl.addEventListener('submit', (event) => {
  console.log('submit fired');
  event.preventDefault();

  const itemEl = createTodoItem({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  listEl.append(itemEl);
});
