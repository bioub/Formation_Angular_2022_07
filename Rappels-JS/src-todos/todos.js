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

  const spanEl = document.createElement('span');
  spanEl.className = "todo-item-title";
  spanEl.innerText = todo.title;

  divEl.append(spanEl);

  return divEl;
}

