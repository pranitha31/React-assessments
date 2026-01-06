import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: "", email: "", feedback: "" })
  const [submitted, setSubmitted] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(form)
  }

  return (
    <Card className="p-4 w-400px">
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input name="name" placeholder="Name" onChange={handleChange} />
        <Input name="email" placeholder="Email" onChange={handleChange} />
        <Textarea name="feedback" placeholder="Feedback" onChange={handleChange} />
        <Button type="submit">Submit</Button>
      </form>

      {submitted && (
        <div className="mt-4">
          <h3 className="font-bold">Submitted Data:</h3>
          <p>Name: {submitted.name}</p>
          <p>Email: {submitted.email}</p>
          <p>Feedback: {submitted.feedback}</p>
        </div>
      )}
    </Card>
  )
}
