const todo = {
  id: Math.random(),
  title: 'ABC',
  completed: true,
};

// extension d'objet (depuis l'origine de JS)
// todo.editMode = true;

// extension d'objet avec plus de controler (ES5 2009)
Object.defineProperty(todo, 'editMode', {
  value: true,
  // writable: false,
  // enumerable: false,
  // configurable: false,
});

console.log('editMode', todo.editMode); // true

console.log(JSON.stringify(todo));
