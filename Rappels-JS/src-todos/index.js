import { createTodoItem, createTodoItemTitle, createTodoItemTitleEdit } from './todos.js';

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todo-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todo-form-input');

/** @type {HTMLDivElement} */
const listEl = document.querySelector('.todos-list');

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todo-form-toggle');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const itemEl = createTodoItem({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  listEl.append(itemEl);
});

listEl.addEventListener('click', (event) => {
  // console.log('event.target', event.target);
  // console.log('event.currentTarget', event.currentTarget);
  // event.currentTarget l'élément sur lequel on a appelé addEventListener
  // event.target l'élément le plus profond de l'arbre sur lequel

  if (event.target.classList.contains('todo-item-button-delete')) {
    event.target.closest('.todo-item').remove();
  }
});

// Exercice 3
// Sélectionner la checkbox
// <input type="checkbox" class="todo-form-toggle" />
// au clic de celle-ci, cocher ou décocher toutes les
// checkbox dans todo-item (créée à l'exercice 1)

toggleEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = listEl.querySelectorAll('.todo-item-completed');

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = toggleEl.checked;
  }
});

listEl.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('todo-item-title')) {
    /** @type {HTMLSpanElement} */
    const spanEl = event.target;

    spanEl.replaceWith(createTodoItemTitleEdit(spanEl.innerText));
  }
});

window.addEventListener('click', (event) => {
  /** @type {HTMLInputElement} */
  const editEl = listEl.querySelector('.todo-item-title-edit');

  if (editEl && event.target !== editEl) {
    editEl.replaceWith(createTodoItemTitle(editEl.value));
  }
});


listEl.addEventListener('keydown', (event) => {
  if (event.target.classList.contains('todo-item-title-edit') && event.key === 'Enter') {
    /** @type {HTMLInputElement} */
    const inputEl = event.target;

    inputEl.replaceWith(createTodoItemTitle(inputEl.value));
  }
});
