import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { CheckCircle, Users, Award, Target, Lightbulb } from "lucide-react"

export default function NosotrosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Sobre Nosotros</h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Conoce más sobre Zenith Solution y nuestro equipo de profesionales
        </p>
      </div>

      {/* Quiénes somos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div>
          <Badge className="mb-4">Quiénes Somos</Badge>
          <h2 className="text-3xl font-bold mb-4">Expertos en soluciones tecnológicas para empresas</h2>
          <p className="text-muted-foreground mb-6">
            Fundada en 2015, Zenith Solution nació con la misión de transformar la manera en que las empresas utilizan
            la tecnología. Somos un equipo de profesionales apasionados por la innovación y comprometidos con el éxito
            de nuestros clientes.
          </p>
          <p className="text-muted-foreground mb-6">
            Nuestra experiencia abarca desde el desarrollo web hasta la consultoría IT, ofreciendo soluciones
            personalizadas que se adaptan a las necesidades específicas de cada negocio.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Experiencia</h3>
                <p className="text-sm text-muted-foreground">+8 años en el sector</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Clientes</h3>
                <p className="text-sm text-muted-foreground">+200 empresas</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Proyectos</h3>
                <p className="text-sm text-muted-foreground">+500 completados</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Satisfacción</h3>
                <p className="text-sm text-muted-foreground">98% de clientes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=600"
            alt="Equipo de Zenith Solution"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Valores */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Nuestros Valores</Badge>
          <h2 className="text-3xl font-bold mb-4">Los principios que nos guían</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            En Zenith Solution, nuestros valores definen quiénes somos y cómo trabajamos cada día
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valores.map((valor) => (
            <Card key={valor.title} className="border-border">
              <CardContent className="pt-6">
                <valor.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-xl mb-2">{valor.title}</h3>
                <p className="text-muted-foreground">{valor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Equipo */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <Badge className="mb-4">Nuestro Equipo</Badge>
          <h2 className="text-3xl font-bold mb-4">Conoce a los profesionales</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Un equipo multidisciplinar de expertos comprometidos con la excelencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipo.map((miembro) => (
            <Card key={miembro.name} className="overflow-hidden">
              <div className="relative h-[300px]">
                <Image src={miembro.image || "/placeholder.svg"} alt={miembro.name} fill className="object-cover" />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl">{miembro.name}</h3>
                <p className="text-primary mb-2">{miembro.position}</p>
                <p className="text-muted-foreground">{miembro.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Historia */}
      <div>
        <div className="text-center mb-12">
          <Badge className="mb-4">Nuestra Historia</Badge>
          <h2 className="text-3xl font-bold mb-4">El camino recorrido</h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Desde nuestros inicios hasta hoy, un viaje de crecimiento y evolución constante
          </p>
        </div>

        <div className="space-y-12">
          {historia.map((item, index) => (
            <div key={item.year} className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4">
                <div className="bg-primary text-primary-foreground rounded-lg p-6 text-center">
                  <span className="text-3xl font-bold">{item.year}</span>
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <div className="relative h-[200px] rounded-lg overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=800&text=Zenith+${item.year}`}
                    alt={`Zenith Solution en ${item.year}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const valores = [
  {
    title: "Innovación",
    description: "Buscamos constantemente nuevas formas de mejorar y crear soluciones tecnológicas de vanguardia.",
    icon: Lightbulb,
  },
  {
    title: "Compromiso",
    description:
      "Nos comprometemos con cada proyecto como si fuera nuestro propio negocio, garantizando resultados excepcionales.",
    icon: Target,
  },
  {
    title: "Excelencia",
    description: "Nos esforzamos por alcanzar los más altos estándares de calidad en todo lo que hacemos.",
    icon: Award,
  },
  {
    title: "Colaboración",
    description:
      "Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades y superar sus expectativas.",
    icon: Users,
  },
]

const equipo = [
  {
    name: "Carlos Rodríguez",
    position: "CEO & Fundador",
    bio: "Con más de 15 años de experiencia en el sector tecnológico, Carlos fundó Zenith Solution con la visión de transformar la manera en que las empresas utilizan la tecnología.",
    image: "/placeholder.svg?height=600&width=400&text=Carlos",
  },
  {
    name: "Laura Martínez",
    position: "Directora de Tecnología",
    bio: "Especialista en arquitectura de software y desarrollo web, Laura lidera nuestro equipo técnico asegurando la excelencia en cada proyecto.",
    image: "/placeholder.svg?height=600&width=400&text=Laura",
  },
  {
    name: "Miguel Sánchez",
    position: "Director de Consultoría",
    bio: "Con amplia experiencia en transformación digital, Miguel ayuda a nuestros clientes a optimizar sus procesos de negocio a través de la tecnología.",
    image: "/placeholder.svg?height=600&width=400&text=Miguel",
  },
  {
    name: "Ana García",
    position: "Directora de Proyectos",
    bio: "Experta en gestión de proyectos, Ana asegura que cada proyecto se entregue a tiempo, dentro del presupuesto y con la máxima calidad.",
    image: "/placeholder.svg?height=600&width=400&text=Ana",
  },
  {
    name: "David López",
    position: "Desarrollador Senior",
    bio: "Especialista en desarrollo frontend y experiencia de usuario, David crea interfaces intuitivas y atractivas que mejoran la experiencia del usuario.",
    image: "/placeholder.svg?height=600&width=400&text=David",
  },
  {
    name: "Elena Torres",
    position: "Especialista en Marketing Digital",
    bio: "Con un enfoque estratégico en marketing digital, Elena ayuda a nuestros clientes a aumentar su visibilidad online y atraer nuevos clientes.",
    image: "/placeholder.svg?height=600&width=400&text=Elena",
  },
]

const historia = [
  {
    year: 2015,
    title: "Fundación de Zenith Solution",
    description:
      "Carlos Rodríguez funda Zenith Solution con la visión de ofrecer soluciones tecnológicas innovadoras para empresas de todos los tamaños.",
  },
  {
    year: 2017,
    title: "Expansión del equipo",
    description:
      "Tras el éxito inicial, ampliamos nuestro equipo y abrimos nuestra primera oficina en Madrid, comenzando a trabajar con clientes de toda España.",
  },
  {
    year: 2019,
    title: "Lanzamiento de servicios de consultoría",
    description:
      "Expandimos nuestra oferta de servicios para incluir consultoría IT, ayudando a las empresas a optimizar sus procesos de negocio a través de la tecnología.",
  },
  {
    year: 2021,
    title: "Reconocimiento internacional",
    description:
      "Recibimos varios premios por nuestros proyectos innovadores y comenzamos a trabajar con clientes internacionales, expandiendo nuestra presencia global.",
  },
  {
    year: 2023,
    title: "Innovación continua",
    description:
      "Seguimos creciendo y evolucionando, incorporando las últimas tecnologías y metodologías para ofrecer soluciones cada vez más avanzadas a nuestros clientes.",
  },
]

