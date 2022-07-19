/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLDivElement}
 */
export function createTodoItem(todo) {
  // <div class="todo-item" data-todo-id="123">
  //   <input type="checkbox" class="todo-item-completed">
  //   <span class="todo-item-title">ABC</span>
  //   <button class="todo-item-button-delete">-</button>
  // </div>

  // Exercice 1
  // Compléter le code suivant de sorte à insérer
  // les éléments input et button du code HTML en commentaire ci dessus

  // Exercice 2
  // Au clic du bouton moins, supprimer la balise
  // <div class="todo-item"...

  const divEl = document.createElement('div');
  divEl.className = "todo-item";
  divEl.dataset.todoId = String(todo.id);

  const checkboxEl = createTodoItemCompleted(todo)
  divEl.append(checkboxEl);

  const spanEl = createTodoItemTitle(todo);
  divEl.append(spanEl);

  const buttonEl = createTodoItemButtonDelete(todo);
  divEl.append(buttonEl);

  return divEl;
}

/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLInputElement}
 */
function createTodoItemCompleted(todo) {
  const inputEl = document.createElement('input');
  inputEl.type = 'checkbox';
  inputEl.className = "todo-item-completed";
  inputEl.checked = todo.completed;
  return inputEl;
}

/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLSpanElement}
 */
function createTodoItemTitle(todo) {
  const spanEl = document.createElement('span');
  spanEl.className = "todo-item-title";
  spanEl.innerText = todo.title;
  return spanEl;
}

/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @returns {HTMLButtonElement}
 */
 function createTodoItemButtonDelete(todo) {
  const buttonEl = document.createElement('button');
  buttonEl.className = "todo-item-button-delete";
  buttonEl.innerText = '-';

  return buttonEl;
}


