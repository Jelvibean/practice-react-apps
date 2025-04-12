import React from "react";
import { Summary } from "../../src/components/Summary";
import { TodoApp } from "../../src/components/TodoApp";

const fetchTodo = () => {
  return (
    <>
      <TodoApp></TodoApp>
      <Summary></Summary>
    </>
  );
};

export default fetchTodo;
