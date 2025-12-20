import React from "react";
import TodoProvider from "../context/TodoProvider";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => (
  <TodoProvider>
    <h1>Todo Application</h1>
    <AddTodo />
    <TodoList />
  </TodoProvider>
);

export default Todos;
