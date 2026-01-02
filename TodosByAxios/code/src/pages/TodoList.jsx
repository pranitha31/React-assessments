import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data.slice(0, 20)); // show first 20 for simplicity
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>
              {todo.title} - {todo.completed ? "✅ Completed" : "❌ Pending"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
