import React from "react";
import { Todo } from "./TodoApp";
import TodoItem from "./TodoItem";

type TodoItemProps = {
  todo: Todo;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <>
      <div>
        {todos.map((todo: Todo) => (
          // Step 5 create the item component an pass what is needed to it.
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
