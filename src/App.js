import React from "react";
import "./App.css";
import { TodoApp } from "./components/TodoApp";
import { Summary } from "./components/Summary";

function App() {
  return (
    <>
      <TodoApp></TodoApp>
      <Summary></Summary>
    </>
  );
}

export default App;
