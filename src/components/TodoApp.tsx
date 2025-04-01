import React, { useState, useEffect } from "react";
import styles from "./TodoApp.module.scss";
import TodoItem from "./TodoItem";

export type Todo = {
  id: number;
  text: string;
};

export const TodoApp = () => {
  const [inputText, setInputText] = useState("");

  const [buttonState, setButtonState] = useState<Todo | null>(null);

  //Step 4.  You reset this guy to now not just be a simple
  // const [todos, setTodos] = userState([]); now it will grab from
  // localStorage.
  const [todos, setTodos] = useState(() => {
    console.log("This only runs once when the component first mounts");
    const savedTodo = localStorage.getItem("todos");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });

  //Step 3
  // Why dont we now add it to localStorage
  // This happens first before step 3 when file loads.
  // First round it goes up and finds the [] to be empty.
  useEffect(() => {
    console.log("you should see the latest update", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //Step 1 - capture the users words form the input field.
  const detectUsersInput = (event) => {
    setInputText(event.target.value);
  };

  // Step 2 - Create the element you are reading from the input.
  const addTodo = () => {
    if (inputText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputText,
      };
      //remember this is logging todos immediately after calling
      //setTodos([...todos, newTodo]);. However, state updates in React are
      //asynchronous. This means that when you log todos, it still holds
      //the old state (which is empty initially) because setTodos has not yet
      //completed updating the state. Go set a useEffect() to watch for changes
      setTodos([...todos, newTodo]);
      setInputText("");

      console.log("what am I", todos);
    }
  };

  const saveTodo = () => {
    if (!buttonState) return; // If buttonState is null, exit early.
    setTodos(
      todos.map((todo) =>
        todo.id === buttonState.id ? { ...todo, text: inputText } : todo
      )
    );
    setButtonState(null);
    setInputText("");
  };

  //Step 6
  const handleEditTodo = (id: number) => {
    console.log("you made it to edit", id);
    const currentTodoToEdit = todos.find((todo) => todo.id === id);
    console.log("you found him", currentTodoToEdit);
    setInputText(currentTodoToEdit.text);
    setButtonState(currentTodoToEdit);

    console.log("your button state", buttonState);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setButtonState(null);
    setInputText("");
  };

  return (
    <>
      <div className={styles.todoApp}>
        <h1>Daily Check List</h1>
        <div className="d-flex">
          <input
            type="text"
            placeholder="Add you item"
            value={inputText}
            onChange={detectUsersInput}
            className={`form-control ${styles.inputStyling}`}
          />

          {buttonState ? (
            //Step 7 - add your button state and add the two different buttons
            <button className="btn btn-primary" onClick={saveTodo}>
              Save Todo
            </button>
          ) : (
            <button className="btn btn-primary" onClick={addTodo}>
              Add Todo
            </button>
          )}
        </div>
        <div>
          {todos.map((todo: Todo) => (
            // Step 5 create the item component an pass what is needed to it.
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={handleEditTodo}
              onDelete={handleDeleteTodo}
            ></TodoItem>
          ))}
        </div>
      </div>
      <div className="hrspace">
        <hr />
        <hr />
        <hr />
      </div>
    </>
  );
};
