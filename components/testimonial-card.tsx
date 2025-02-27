import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
  avatar: string
}

export default function TestimonialCard({ quote, author, position, avatar }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <Quote className="h-8 w-8 text-primary/20 mb-4" />
        <p className="flex-1 text-muted-foreground mb-6">"{quote}"</p>
        <div className="flex items-center gap-4">
          <Image
            src={avatar || "/placeholder.svg"}
            alt={author}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium">{author}</h4>
            <p className="text-sm text-muted-foreground">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

