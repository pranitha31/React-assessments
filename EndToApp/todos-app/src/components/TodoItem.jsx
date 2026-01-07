import { Button } from "@/components/ui/button";

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  return (
    <div className="flex items-center justify-between rounded border bg-white p-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onToggle(e.target.checked)}
          className="h-4 w-4"
        />
        <span
          className={`text-sm ${
            todo.completed ? "line-through text-gray-500" : "text-gray-800"
          }`}
        >
          {todo.title}
        </span>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={onEdit}>
          Edit
        </Button>
        <Button variant="destructive" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
