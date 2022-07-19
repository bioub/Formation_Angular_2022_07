import { createTodoItem } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todo-form-input');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todos-list');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const itemEl = createTodoItem({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  listEl.append(itemEl);
});

// Exercice 3
// Sélectionner la checkbox
// <input type="checkbox" class="todo-form-toggle" />
// au clic de celle-ci, cocher ou décocher toutes les
// checkbox dans todo-item (créée à l'exercice 1)
