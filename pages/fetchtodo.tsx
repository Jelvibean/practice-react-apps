import React from "react";

import { TodoApp } from "../src/components/TodoApp";
import { Summary } from "../src/components/Summary";

const fetchTodo = () => {
  return (
    <>
      <TodoApp></TodoApp>
      <Summary></Summary>
    </>
  );
};

export default fetchTodo;
