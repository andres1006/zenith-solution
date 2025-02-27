import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Search, User } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Noticias, artículos y recursos sobre tecnología, desarrollo web y transformación digital
        </p>
      </div>

      {/* Artículo destacado */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[300px] lg:h-auto">
              <Image
                src="/placeholder.svg?height=800&width=1200&text=Artículo+Destacado"
                alt="Artículo destacado"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-8 flex flex-col justify-center">
              <Badge className="w-fit mb-4">Destacado</Badge>
              <h2 className="text-3xl font-bold mb-4">
                <Link href="/blog/inteligencia-artificial-empresas" className="hover:text-primary transition-colors">
                  Cómo la Inteligencia Artificial está transformando los negocios en 2023
                </Link>
              </h2>
              <p className="text-muted-foreground mb-6">
                Descubre las principales aplicaciones de la IA en el entorno empresarial y cómo puedes implementarla en
                tu negocio para obtener una ventaja competitiva.
              </p>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>15 Oct 2023</span>
                </div>
                <div className="flex items-center mr-4">
                  <User className="h-4 w-4 mr-1" />
                  <span>Carlos Rodríguez</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>8 min de lectura</span>
                </div>
              </div>
              <Button asChild>
                <Link href="/blog/inteligencia-artificial-empresas">
                  Leer artículo <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Buscador y filtros */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar artículos..." className="pl-10" />
          </div>
          <Tabs defaultValue="todos">
            <TabsList>
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="desarrollo">Desarrollo</TabsTrigger>
              <TabsTrigger value="consultoria">Consultoría</TabsTrigger>
              <TabsTrigger value="tecnologia">Tecnología</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Lista de artículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {articulos.map((articulo) => (
          <Card key={articulo.titulo} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-[200px]">
              <Image src={articulo.imagen || "/placeholder.svg"} alt={articulo.titulo} fill className="object-cover" />
            </div>
            <CardContent className="pt-6 flex-1">
              <Badge className="mb-2">{articulo.categoria}</Badge>
              <h3 className="font-bold text-xl mb-2">
                <Link href={`/blog/${articulo.slug}`} className="hover:text-primary transition-colors">
                  {articulo.titulo}
                </Link>
              </h3>
              <p className="text-muted-foreground mb-4">{articulo.extracto}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                <div className="flex items-center mr-4">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{articulo.fecha}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{articulo.tiempoLectura}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="ghost" asChild className="p-0 h-auto font-medium">
                <Link href={`/blog/${articulo.slug}`}>
                  Leer más <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Paginación */}
      <div className="flex justify-center gap-2 mb-12">
        <Button variant="outline" disabled>
          Anterior
        </Button>
        <Button variant="outline" className="bg-primary text-primary-foreground">
          1
        </Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Siguiente</Button>
      </div>

      {/* Suscripción */}
      <div className="bg-muted/50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Suscríbete a nuestro newsletter</h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto mb-6">
          Recibe los últimos artículos, noticias y recursos directamente en tu bandeja de entrada
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input placeholder="Tu email" type="email" />
          <Button>Suscribirse</Button>
        </div>
      </div>
    </div>
  )
}

const articulos = [
  {
    titulo: "10 tendencias de desarrollo web para 2023",
    slug: "tendencias-desarrollo-web-2023",
    extracto: "Descubre las tecnologías y metodologías que están definiendo el desarrollo web este año.",
    categoria: "Desarrollo",
    fecha: "20 Sep 2023",
    tiempoLectura: "5 min de lectura",
    imagen: "/placeholder.svg?height=400&width=600&text=Tendencias+Web",
  },
  {
    titulo: "Guía completa de Next.js 13",
    slug: "guia-nextjs-13",
    extracto: "Todo lo que necesitas saber sobre la última versión del framework React más popular.",
    categoria: "Desarrollo",
    fecha: "05 Oct 2023",
    tiempoLectura: "10 min de lectura",
    imagen: "/placeholder.svg?height=400&width=600&text=Next.js",
  },
  {
    titulo: "Cómo implementar una estrategia de transformación digital",
    slug: "estrategia-transformacion-digital",
    extracto: "Pasos clave para llevar a cabo una transformación digital exitosa en tu empresa.",
    categoria: "Consultoría",
    fecha: "12 Oct 2023",
    tiempoLectura: "7 min de lectura",
    imagen: "/placeholder.svg?height=400&width=600&text=Transformación+Digital",
  },
  {
    titulo: "Seguridad informática: protege tu negocio de ciberataques",
    slug: "seguridad-informatica-negocios",
    extracto: "Medidas esenciales para proteger la información sensible de tu empresa.",
    categoria: "Tecnología",
    fecha: "28 Sep 2023",
    tiempoLectura: "6 min de lectura",
    imagen: "/placeholder.svg?height=400&width=600&text=Seguridad",
  },
  {
    titulo: "El futuro del trabajo: herramientas de colaboración remota",
    slug: "futuro-trabajo-colaboracion-remota",
    extracto: "Las mejores herramientas para optimizar el trabajo en equipos distribuidos.",
    categoria: "Tecnología",
    fecha: "18 Sep 2023",
    tiempoLectura: "4 min de lectura",
    imagen: "/placeholder.svg?height=400&width=600&text=Trabajo+Remoto",
  },
  {
    titulo: "Optimización de rendimiento en aplicaciones web",
    slug: "optimizacion-rendimiento-web",
    extracto: "Técnicas y buenas prácticas para mejorar la velocidad de carga de tu sitio web.",
    categoria: "Desarrollo",
    fecha: "02 Oct 2023",
    tiempoLectura: "8 min de lectura",
    imagen: "/placeholder.svg?height=400&width=600&text=Rendimiento+Web",
  },
]

