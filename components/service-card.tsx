import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { ReactNode } from "react"
import { ArrowUp } from "lucide-react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-6">
        <div className="mb-2 text-primary relative">
          {icon}
          <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUp className="h-3 w-3 text-primary" />
          </div>
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <div className="absolute inset-0 border-2 border-transparent transition-all group-hover:border-primary/20 rounded-lg" />
    </Card>
  )
}

