import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function TodoList() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState("")

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, done: false }])
      setTask("")
    }
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].done = !newTodos[index].done
    setTodos(newTodos)
  }

  return (
    <Card className="p-4 w-400px">
      <div className="flex gap-2 mb-3">
        <Input value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a todo" />
        <Button onClick={addTodo}>Add</Button>
      </div>

      <div className="space-y-2">
        {todos.map((todo, i) => (
          <div key={i} className="flex items-center gap-2">
            <Checkbox checked={todo.done} onCheckedChange={() => toggleTodo(i)} />
            <span className={todo.done ? "line-through" : ""}>{todo.text}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
