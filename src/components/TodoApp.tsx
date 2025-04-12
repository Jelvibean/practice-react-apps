"use client";
import React, { useState, useEffect } from "react";
import styles from "./TodoApp.module.scss";
import { TodoList } from "./TodoList";

export type Todo = {
  id: number;
  text: string;
};

export const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [buttonState, setButtonState] = useState<Todo | null>(null);
  const [todos, setTodos] = useState<Todo[]>([]);

  //Step 4.  You reset this guy to now not just be a simple
  // const [todos, setTodos] = userState([]); now it will grab from
  // localStorage.
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Fetching todos from localStorage...");
      const savedTodo = localStorage.getItem("todos");
      if (savedTodo) {
        setTodos(JSON.parse(savedTodo));
      }
    }
  }, []); // Runs only once after mounting

  //Step 3
  // Why dont we now add it to localStorage
  // This happens first before step 3 when file loads.
  // First round it goes up and finds the [] to be empty.
  // ✅ Store todos in localStorage when they change (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("Saving todos to localStorage", todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  //Step 1 - capture the users words form the input field.
  const detectUsersInput = (event) => {
    setInputText(event.target.value);
  };

  // Step 2 - Create the element you are reading from the input.
  const addTodo = () => {
    if (inputText !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputText.trim(),
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

  const saveEditedTodo = () => {
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
    if (currentTodoToEdit) {
      console.log("you found him", currentTodoToEdit);
      setInputText(currentTodoToEdit.text);
      setButtonState(currentTodoToEdit);

      console.log("your button state", buttonState);
    } else {
      // Handle the case where the todo is not found
      console.log("Todo not found with id", id);
    }
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
        <div className={styles.fieldWrapper}>
          <div className={styles.inputwrapper}>
            <input
              type="text"
              placeholder="Add you item"
              value={inputText}
              onChange={detectUsersInput}
              className="form-control"
            />
          </div>
          <div className={styles.buttonWrapper}>
            {buttonState ? (
              //Step 7 - add your button state and add the two different buttons
              <button
                className={`btn btn-primary ${styles.mybutton}`}
                onClick={saveEditedTodo}
              >
                Save Todo
              </button>
            ) : (
              <button
                className={`btn btn-primary ${styles.mybutton}`}
                onClick={addTodo}
              >
                Add Todo
              </button>
            )}
          </div>
        </div>
        <div>
          <TodoList
            todos={todos}
            onEdit={handleEditTodo}
            onDelete={handleDeleteTodo}
          />
        </div>
      </div>
      <div className={styles.hrspace}>
        <hr />
        <hr />
        <hr />
      </div>
    </>
  );
};
