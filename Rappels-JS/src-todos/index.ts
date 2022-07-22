import { createTodoItem, createTodoItemTitle, createTodoItemTitleEdit } from './todos';

const formEl = document.querySelector('.todo-form') as HTMLFormElement;
const inputEl = document.querySelector('.todo-form-input') as HTMLInputElement;
const listEl = document.querySelector('.todos-list') as HTMLDivElement;
const toggleEl = document.querySelector('.todo-form-toggle') as HTMLInputElement;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const itemEl = createTodoItem({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  listEl.append(itemEl);
});

// Exercice 2 : clic du bouton moins
listEl.addEventListener('click', (event) => {
  // console.log('event.target', event.target);
  // console.log('event.currentTarget', event.currentTarget);
  // event.currentTarget l'élément sur lequel on a appelé addEventListener
  // event.target l'élément le plus profond de l'arbre sur lequel
  const target = event.target as HTMLElement;

  if (target.classList.contains('todo-item-button-delete')) {
    target.closest('.todo-item')!.remove();
  }
});

// Exercice 3
// Sélectionner la checkbox
// <input type="checkbox" class="todo-form-toggle" />
// au clic de celle-ci, cocher ou décocher toutes les
// checkbox dans todo-item (créée à l'exercice 1)

toggleEl.addEventListener('click', () => {
  const checkboxEls = listEl.querySelectorAll<HTMLInputElement>('.todo-item-completed');

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = toggleEl.checked;
  }
});

listEl.addEventListener('dblclick', (event) => {
  const target = event.target as HTMLElement;

  if (target.classList.contains('todo-item-title')) {
    target.replaceWith(createTodoItemTitleEdit(target.innerText));
  }
});

window.addEventListener('click', (event) => {
  const editEl = listEl.querySelector<HTMLInputElement>('.todo-item-title-edit');

  if (editEl && event.target !== editEl) {
    editEl.replaceWith(createTodoItemTitle(editEl.value));
  }
});

listEl.addEventListener('keydown', (event) => {
  const target = event.target as any;

  if (target.classList.contains('todo-item-title-edit') && event.key === 'Enter') {
    target.replaceWith(createTodoItemTitle((target as HTMLInputElement).value));
  }
});




// listEl.dispatchEvent(new Event('tripleclick'));
