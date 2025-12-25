import { Link } from "react-router-dom";

function TodoItem({ todo }) {
  return (
    <li>
      <Link to={`/todos/${todo.id}`}>
        {todo.title} - {todo.completed ? "✅" : "❌"}
      </Link>
    </li>
  );
}

export default TodoItem;
