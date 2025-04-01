import React from "react";
import styles from "./TodoItem.module.scss";
import { Todo } from "./TodoApp";

interface TodoItemProps {
  todo: Todo;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

// NOTES
// Use onClick={() => onEdit(todo.id)} when you need to pass arguments.
// Use onClick={onEdit} when the function doesn’t need arguments (or if it's

const TodoItem = ({ todo, onEdit, onDelete }: TodoItemProps) => {
  return (
    <div className={styles.todoitem}>
      <div className={styles.todoText}>{todo.text}</div>
      <div className={styles.todoActions}>
        <button className="btn btn-success" onClick={() => onEdit(todo.id)}>
          Edit Todo
        </button>
        <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
          Delete Todo
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
