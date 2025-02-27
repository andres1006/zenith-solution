import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function ProyectosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Nuestros Proyectos</h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Descubre algunos de los proyectos más destacados que hemos realizado para nuestros clientes
        </p>
      </div>

      <Tabs defaultValue="todos" className="mb-12">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="web">Desarrollo Web</TabsTrigger>
            <TabsTrigger value="consultoria">Consultoría</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="todos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto) => (
              <ProyectoCard key={proyecto.title} proyecto={proyecto} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="web">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos
              .filter((proyecto) => proyecto.categoria === "Desarrollo Web")
              .map((proyecto) => (
                <ProyectoCard key={proyecto.title} proyecto={proyecto} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="consultoria">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos
              .filter((proyecto) => proyecto.categoria === "Consultoría IT")
              .map((proyecto) => (
                <ProyectoCard key={proyecto.title} proyecto={proyecto} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="cloud">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos
              .filter((proyecto) => proyecto.categoria === "Soluciones Cloud")
              .map((proyecto) => (
                <ProyectoCard key={proyecto.title} proyecto={proyecto} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Proyecto destacado */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Proyecto Destacado</Badge>
          <h2 className="text-3xl font-bold mb-4">Transformación Digital para Grupo Innovación</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Un proyecto integral que revolucionó los procesos de negocio de uno de nuestros clientes más importantes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=800&width=1200&text=Proyecto+Destacado"
              alt="Proyecto Destacado"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">El desafío</h3>
            <p className="text-muted-foreground mb-6">
              Grupo Innovación, una empresa líder en su sector, necesitaba modernizar sus sistemas y procesos para
              mantenerse competitiva en un mercado cada vez más digital. Sus sistemas legacy estaban limitando su
              capacidad de crecimiento y adaptación.
            </p>
            <h3 className="text-2xl font-bold mb-4">Nuestra solución</h3>
            <p className="text-muted-foreground mb-6">
              Desarrollamos una estrategia integral de transformación digital que incluyó:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <Badge variant="outline" className="mr-2 mt-1">
                  01
                </Badge>
                <span>Implementación de una plataforma web moderna y escalable</span>
              </li>
              <li className="flex items-start">
                <Badge variant="outline" className="mr-2 mt-1">
                  02
                </Badge>
                <span>Migración de sistemas legacy a soluciones cloud</span>
              </li>
              <li className="flex items-start">
                <Badge variant="outline" className="mr-2 mt-1">
                  03
                </Badge>
                <span>Automatización de procesos clave de negocio</span>
              </li>
              <li className="flex items-start">
                <Badge variant="outline" className="mr-2 mt-1">
                  04
                </Badge>
                <span>Formación del personal en nuevas tecnologías</span>
              </li>
            </ul>
            <Button asChild>
              <Link href="/contacto">
                Quiero un proyecto similar <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Tienes un proyecto en mente?</h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto mb-6">
          Cuéntanos tu idea y te ayudaremos a hacerla realidad. Nuestro equipo de expertos está listo para trabajar
          contigo.
        </p>
        <Button asChild size="lg">
          <Link href="/contacto">Contactar ahora</Link>
        </Button>
      </div>
    </div>
  )
}

function ProyectoCard({ proyecto }) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={proyecto.imagen || "/placeholder.svg"}
          alt={proyecto.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="outline" className="text-white border-white hover:bg-white/20" asChild>
            <Link href={`/proyectos/${proyecto.slug}`}>
              Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <CardContent className="pt-6">
        <Badge className="mb-2">{proyecto.categoria}</Badge>
        <h3 className="font-bold text-xl mb-2">{proyecto.title}</h3>
        <p className="text-muted-foreground mb-4">{proyecto.descripcion}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {proyecto.tecnologias.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          {proyecto.url && (
            <Button variant="ghost" size="icon" asChild>
              <Link href={proyecto.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Visitar sitio</span>
              </Link>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

const proyectos = [
  {
    title: "E-commerce para Moda Sostenible",
    slug: "ecommerce-moda-sostenible",
    descripcion:
      "Desarrollo de una tienda online completa para una marca de moda sostenible con integración de pagos y gestión de inventario.",
    categoria: "Desarrollo Web",
    tecnologias: ["Next.js", "Stripe", "Tailwind CSS"],
    imagen: "/placeholder.svg?height=400&width=600&text=Ecommerce",
    url: "https://example.com",
  },
  {
    title: "Plataforma de Gestión Educativa",
    slug: "plataforma-educativa",
    descripcion:
      "Sistema integral para la gestión de centros educativos, incluyendo matrícula, calificaciones y comunicación con padres.",
    categoria: "Desarrollo Web",
    tecnologias: ["React", "Node.js", "MongoDB"],
    imagen: "/placeholder.svg?height=400&width=600&text=Educación",
  },
  {
    title: "Transformación Digital Bancaria",
    slug: "transformacion-bancaria",
    descripcion: "Consultoría y implementación de estrategia de transformación digital para una entidad financiera.",
    categoria: "Consultoría IT",
    tecnologias: ["Análisis", "Estrategia", "Implementación"],
    imagen: "/placeholder.svg?height=400&width=600&text=Banca",
  },
  {
    title: "App de Delivery para Restaurantes",
    slug: "app-delivery",
    descripcion: "Aplicación móvil para gestión de pedidos y entregas para una cadena de restaurantes.",
    categoria: "Desarrollo Web",
    tecnologias: ["React Native", "Firebase", "Google Maps API"],
    imagen: "/placeholder.svg?height=400&width=600&text=Delivery",
    url: "https://example.com",
  },
  {
    title: "Migración a la Nube para Aseguradora",
    slug: "migracion-nube-aseguradora",
    descripcion: "Migración de sistemas legacy a infraestructura cloud para una compañía de seguros.",
    categoria: "Soluciones Cloud",
    tecnologias: ["AWS", "Docker", "Kubernetes"],
    imagen: "/placeholder.svg?height=400&width=600&text=Cloud",
  },
  {
    title: "Portal Inmobiliario",
    slug: "portal-inmobiliario",
    descripcion:
      "Plataforma web para búsqueda y gestión de propiedades inmobiliarias con funcionalidades avanzadas de filtrado.",
    categoria: "Desarrollo Web",
    tecnologias: ["Vue.js", "Laravel", "MySQL"],
    imagen: "/placeholder.svg?height=400&width=600&text=Inmobiliaria",
    url: "https://example.com",
  },
  {
    title: "Optimización de Procesos Industriales",
    slug: "optimizacion-procesos",
    descripcion:
      "Consultoría para la optimización de procesos de producción mediante tecnologías IoT y análisis de datos.",
    categoria: "Consultoría IT",
    tecnologias: ["IoT", "Big Data", "BI"],
    imagen: "/placeholder.svg?height=400&width=600&text=Industria",
  },
  {
    title: "Sistema de Gestión Hospitalaria",
    slug: "gestion-hospitalaria",
    descripcion:
      "Plataforma integral para la gestión de centros médicos, incluyendo historias clínicas, citas y facturación.",
    categoria: "Desarrollo Web",
    tecnologias: ["Angular", "Spring Boot", "PostgreSQL"],
    imagen: "/placeholder.svg?height=400&width=600&text=Salud",
  },
  {
    title: "Infraestructura Cloud para Startup",
    slug: "infraestructura-startup",
    descripcion: "Diseño e implementación de infraestructura cloud escalable para una startup en fase de crecimiento.",
    categoria: "Soluciones Cloud",
    tecnologias: ["GCP", "Terraform", "CI/CD"],
    imagen: "/placeholder.svg?height=400&width=600&text=Startup",
  },
]

