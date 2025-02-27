import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter, User, ArrowRight } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // En un caso real, aquí buscaríamos el artículo por su slug
  // Para este ejemplo, usamos un artículo de muestra
  const articulo = {
    titulo: "Cómo la Inteligencia Artificial está transformando los negocios en 2023",
    slug: "inteligencia-artificial-empresas",
    contenido: `
      <p>La inteligencia artificial (IA) ha dejado de ser un concepto futurista para convertirse en una realidad que está transformando radicalmente el panorama empresarial. En 2023, las empresas de todos los tamaños y sectores están aprovechando el poder de la IA para optimizar procesos, mejorar la toma de decisiones y crear nuevas oportunidades de negocio.</p>
      
      <h2>El impacto de la IA en diferentes sectores</h2>
      
      <p>La adopción de la inteligencia artificial está revolucionando industrias tan diversas como la salud, las finanzas, el comercio minorista y la manufactura. En el sector sanitario, por ejemplo, los algoritmos de IA están ayudando a diagnosticar enfermedades con mayor precisión y a desarrollar tratamientos personalizados. En el ámbito financiero, la IA está mejorando la detección de fraudes y automatizando procesos de análisis de riesgos.</p>
      
      <p>El comercio minorista también está experimentando una transformación significativa gracias a la IA, con sistemas de recomendación personalizados y chatbots que mejoran la experiencia del cliente. Por su parte, en el sector manufacturero, la IA está optimizando las cadenas de producción y permitiendo el mantenimiento predictivo de maquinaria.</p>
      
      <h2>Principales aplicaciones de la IA en el entorno empresarial</h2>
      
      <p>Entre las aplicaciones más destacadas de la inteligencia artificial en el ámbito empresarial se encuentran:</p>
      
      <ul>
        <li><strong>Automatización de procesos:</strong> La IA permite automatizar tareas repetitivas y de bajo valor añadido, liberando tiempo para que los empleados se centren en actividades más estratégicas.</li>
        <li><strong>Análisis de datos:</strong> Los algoritmos de machine learning pueden procesar grandes volúmenes de datos y extraer insights valiosos para la toma de decisiones.</li>
        <li><strong>Personalización de la experiencia del cliente:</strong> La IA permite ofrecer experiencias y recomendaciones personalizadas a cada cliente, mejorando su satisfacción y fidelidad.</li>
        <li><strong>Optimización de operaciones:</strong> Mediante el análisis predictivo, la IA ayuda a optimizar inventarios, rutas de distribución y otros aspectos operativos.</li>
        <li><strong>Desarrollo de nuevos productos y servicios:</strong> La IA está facilitando la creación de productos y servicios innovadores que antes no eran posibles.</li>
      </ul>
      
      <h2>Desafíos en la implementación de la IA</h2>
      
      <p>A pesar de sus numerosos beneficios, la implementación de la IA en el entorno empresarial no está exenta de desafíos. Algunos de los principales obstáculos incluyen:</p>
      
      <ul>
        <li><strong>Falta de talento especializado:</strong> Existe una escasez de profesionales con conocimientos en IA y ciencia de datos.</li>
        <li><strong>Calidad de los datos:</strong> La efectividad de los algoritmos de IA depende en gran medida de la calidad de los datos utilizados para su entrenamiento.</li>
        <li><strong>Consideraciones éticas y de privacidad:</strong> El uso de la IA plantea importantes cuestiones éticas y de privacidad que las empresas deben abordar.</li>
        <li><strong>Integración con sistemas existentes:</strong> La integración de soluciones de IA con la infraestructura tecnológica existente puede resultar compleja.</li>
      </ul>
      
      <h2>Cómo implementar la IA en tu negocio</h2>
      
      <p>Si estás considerando implementar soluciones de inteligencia artificial en tu empresa, te recomendamos seguir estos pasos:</p>
      
      <ol>
        <li><strong>Identifica problemas específicos</strong> que la IA podría ayudar a resolver en tu negocio.</li>
        <li><strong>Evalúa la calidad y disponibilidad de tus datos</strong>, ya que son el combustible que alimenta los algoritmos de IA.</li>
        <li><strong>Comienza con proyectos piloto</strong> de alcance limitado antes de realizar grandes inversiones.</li>
        <li><strong>Forma a tu equipo</strong> o considera la posibilidad de colaborar con expertos externos.</li>
        <li><strong>Establece métricas claras</strong> para evaluar el éxito de tus iniciativas de IA.</li>
      </ol>
      
      <h2>El futuro de la IA en el entorno empresarial</h2>
      
      <p>De cara al futuro, se espera que la inteligencia artificial siga evolucionando y ofreciendo nuevas oportunidades para las empresas. Tecnologías emergentes como el procesamiento del lenguaje natural avanzado, la visión por computadora y los sistemas de IA generativa prometen transformar aún más el panorama empresarial en los próximos años.</p>
      
      <p>Las empresas que sepan adaptarse y aprovechar el potencial de la IA estarán mejor posicionadas para prosperar en un entorno cada vez más competitivo y digitalizado. Por el contrario, aquellas que ignoren esta tendencia corren el riesgo de quedarse rezagadas.</p>
      
      <p>En Zenith Solution, contamos con un equipo de expertos en inteligencia artificial que puede ayudarte a identificar oportunidades y a implementar soluciones de IA adaptadas a las necesidades específicas de tu negocio. No dudes en contactarnos para más información.</p>
    `,
    categoria: "Tecnología",
    fecha: "15 Oct 2023",
    tiempoLectura: "8 min de lectura",
    autor: {
      nombre: "Carlos Rodríguez",
      cargo: "CEO & Fundador",
      imagen: "/placeholder.svg?height=200&width=200&text=Carlos",
    },
    imagen: "/placeholder.svg?height=800&width=1200&text=IA+en+Empresas",
    articulosRelacionados: [
      {
        titulo: "El futuro del trabajo: herramientas de colaboración remota",
        slug: "futuro-trabajo-colaboracion-remota",
        imagen: "/placeholder.svg?height=400&width=600&text=Trabajo+Remoto",
      },
      {
        titulo: "Cómo implementar una estrategia de transformación digital",
        slug: "estrategia-transformacion-digital",
        imagen: "/placeholder.svg?height=400&width=600&text=Transformación+Digital",
      },
      {
        titulo: "Seguridad informática: protege tu negocio de ciberataques",
        slug: "seguridad-informatica-negocios",
        imagen: "/placeholder.svg?height=400&width=600&text=Seguridad",
      },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al blog
          </Link>
        </Button>

        <div className="mb-8">
          <Badge className="mb-4">{articulo.categoria}</Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-4">{articulo.titulo}</h1>
          <div className="flex items-center text-muted-foreground mb-6">
            <div className="flex items-center mr-4">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{articulo.fecha}</span>
            </div>
            <div className="flex items-center mr-4">
              <User className="h-4 w-4 mr-1" />
              <span>{articulo.autor.nombre}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{articulo.tiempoLectura}</span>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image src={articulo.imagen || "/placeholder.svg"} alt={articulo.titulo} fill className="object-cover" />
        </div>

        <div className="flex gap-4 mb-8">
          <Button variant="outline" size="icon" asChild>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Compartir en Twitter</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Compartir en Facebook</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">Compartir en LinkedIn</span>
            </Link>
          </Button>
        </div>

        <article
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: articulo.contenido }}
        />

        <Separator className="mb-8" />

        <div className="flex items-center gap-4 mb-12">
          <div className="relative h-16 w-16 rounded-full overflow-hidden">
            <Image
              src={articulo.autor.imagen || "/placeholder.svg"}
              alt={articulo.autor.nombre}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold">{articulo.autor.nombre}</h3>
            <p className="text-muted-foreground">{articulo.autor.cargo}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articulo.articulosRelacionados.map((relacionado) => (
              <Card key={relacionado.slug} className="overflow-hidden">
                <div className="relative h-[150px]">
                  <Image
                    src={relacionado.imagen || "/placeholder.svg"}
                    alt={relacionado.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-bold mb-2">
                    <Link href={`/blog/${relacionado.slug}`} className="hover:text-primary transition-colors">
                      {relacionado.titulo}
                    </Link>
                  </h3>
                  <Button variant="ghost" asChild className="p-0 h-auto font-medium">
                    <Link href={`/blog/${relacionado.slug}`}>
                      Leer artículo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

