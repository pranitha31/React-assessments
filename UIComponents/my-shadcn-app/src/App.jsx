import FeedbackForm from "./components/FeedbackForm"
import ImageSlideshow from "./components/ImageSlideshow"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="flex flex-col gap-6 items-center p-6">
      <FeedbackForm />
      <ImageSlideshow />
      <TodoList />
    </div>
  )
}

export default App
