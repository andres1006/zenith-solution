import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Zenith Solution</h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mb-8">
          Soluciones empresariales modernas para optimizar tus procesos de negocio
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/servicios">
              Nuestros Servicios <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {features.map((feature) => (
          <Card key={feature.title} className="border-border">
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {feature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href={feature.link}>Saber más</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

const features = [
  {
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos y optimizados",
    icon: CheckCircle,
    benefits: ["Diseño responsive", "Optimización SEO", "Rendimiento excepcional", "Experiencia de usuario intuitiva"],
    link: "/servicios/desarrollo-web",
  },
  {
    title: "Consultoría IT",
    description: "Asesoramiento experto para tu negocio",
    icon: CheckCircle,
    benefits: [
      "Análisis de infraestructura",
      "Optimización de procesos",
      "Estrategias de transformación digital",
      "Soluciones personalizadas",
    ],
    link: "/servicios/consultoria",
  },
  {
    title: "Soporte Técnico",
    description: "Asistencia continua para tus sistemas",
    icon: CheckCircle,
    benefits: [
      "Disponibilidad 24/7",
      "Resolución rápida de problemas",
      "Mantenimiento preventivo",
      "Actualizaciones de seguridad",
    ],
    link: "/servicios/soporte",
  },
]

