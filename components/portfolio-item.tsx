import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ArrowUp } from "lucide-react"

interface PortfolioItemProps {
  image: string
  title: string
  category: string
  description: string
}

export default function PortfolioItem({ image, title, category, description }: PortfolioItemProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-4 right-4 rounded-full bg-primary p-2 text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
          <div className="relative">
            <ArrowUpRight className="h-4 w-4" />
            <ArrowUp className="h-2 w-2 absolute -top-1 right-0 opacity-0 group-hover:opacity-100" />
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-2 text-sm text-muted-foreground">{category}</div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <Link href="#" className="mt-4 inline-flex items-center text-sm font-medium text-primary">
          Ver detalles
          <ArrowUpRight className="ml-1 h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  )
}

