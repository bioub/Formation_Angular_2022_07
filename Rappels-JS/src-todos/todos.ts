interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export function createTodoItem(todo: Todo) {
  const divEl = document.createElement('div');
  divEl.className = 'todo-item';
  divEl.dataset.todoId = String(todo.id);

  const checkboxEl = createTodoItemCompleted(todo.completed);
  divEl.append(checkboxEl);

  const spanEl = createTodoItemTitle(todo.title);
  divEl.append(spanEl);

  const buttonEl = createTodoItemButtonDelete();
  divEl.append(buttonEl);

  return divEl;
}

function createTodoItemCompleted(completed: boolean) {
  const inputEl = document.createElement('input');
  inputEl.type = 'checkbox';
  inputEl.className = 'todo-item-completed';
  inputEl.checked = completed;
  return inputEl;
}

export function createTodoItemTitle(title: string) {
  const spanEl = document.createElement('span');
  spanEl.className = 'todo-item-title';
  spanEl.innerText = title;
  return spanEl;
}

export function createTodoItemTitleEdit(title: string) {
  const inputEl = document.createElement('input');
  inputEl.className = 'todo-item-title-edit';
  inputEl.value = title;
  return inputEl;
}

function createTodoItemButtonDelete() {
  const buttonEl = document.createElement('button');
  buttonEl.className = 'todo-item-button-delete';
  buttonEl.innerText = '-';

  return buttonEl;
}
