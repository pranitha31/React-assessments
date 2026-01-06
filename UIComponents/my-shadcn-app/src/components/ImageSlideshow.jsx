import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
]

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0)

  const nextImage = () => setIndex((index + 1) % images.length)
  const prevImage = () => setIndex((index - 1 + images.length) % images.length)

  return (
    <Card className="p-4 w-350px text-center">
      <img src={images[index]} alt="slideshow" className="mb-3 rounded" />
      <div className="flex justify-between">
        <Button onClick={prevImage}>Previous</Button>
        <Button onClick={nextImage}>Next</Button>
      </div>
    </Card>
  )
}
