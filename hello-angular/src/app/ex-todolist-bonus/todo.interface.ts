export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface EditableTodo extends Todo {
  editMode: boolean;
}
