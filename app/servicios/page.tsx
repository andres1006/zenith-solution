import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowRight,
  Code,
  Database,
  Server,
  Shield,
  Cloud,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export default function ServiciosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Cabecera */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Nuestros Servicios
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
          Ofrecemos soluciones tecnológicas integrales para impulsar el
          crecimiento de tu negocio y optimizar tus procesos empresariales.
        </p>
      </div>

      {/* Servicios Destacados */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {serviciosDestacados.map((servicio) => (
          <Card
            key={servicio.id}
            className="border-border h-full flex flex-col"
          >
            <CardHeader>
              <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <servicio.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="flex items-center gap-2">
                {servicio.nombre}
                {servicio.destacado && (
                  <Badge variant="secondary" className="ml-2">
                    Popular
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>{servicio.descripcionCorta}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {servicio.caracteristicas.map((caracteristica) => (
                  <li key={caracteristica} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                    <span>{caracteristica}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href={`/servicios/${servicio.id}`}>
                  Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Detalles de Servicios con Tabs */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Detalles de nuestros servicios
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Conoce más sobre cada uno de nuestros servicios y cómo pueden ayudar
            a tu empresa
          </p>
        </div>

        <Tabs defaultValue="desarrollo-web" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full h-auto">
            <TabsTrigger value="desarrollo-web" className="py-3">
              Desarrollo Web
            </TabsTrigger>
            <TabsTrigger value="consultoria" className="py-3">
              Consultoría IT
            </TabsTrigger>
            <TabsTrigger value="soporte" className="py-3">
              Soporte Técnico
            </TabsTrigger>
            <TabsTrigger value="cloud" className="py-3">
              Soluciones Cloud
            </TabsTrigger>
            <TabsTrigger value="seguridad" className="py-3">
              Seguridad
            </TabsTrigger>
            <TabsTrigger value="datos" className="py-3">
              Análisis de Datos
            </TabsTrigger>
          </TabsList>

          {serviciosDetallados.map((servicio) => (
            <TabsContent key={servicio.id} value={servicio.id} className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{servicio.nombre}</h3>
                  <p className="text-muted-foreground mb-6">
                    {servicio.descripcion}
                  </p>

                  <h4 className="font-semibold text-lg mb-3">
                    Beneficios clave
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {servicio.beneficios.map((beneficio) => (
                      <li key={beneficio} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                        <span>{beneficio}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild>
                    <Link href="/contacto">Solicitar información</Link>
                  </Button>
                </div>

                <div className="bg-muted rounded-lg p-6">
                  <h4 className="font-semibold text-lg mb-4">
                    Nuestro enfoque
                  </h4>
                  <p className="mb-4">{servicio.enfoque}</p>

                  <h4 className="font-semibold text-lg mb-4">
                    Tecnologías utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {servicio.tecnologias.map((tecnologia) => (
                      <Badge key={tecnologia} variant="outline">
                        {tecnologia}
                      </Badge>
                    ))}
                  </div>

                  {servicio.casosExito && (
                    <>
                      <h4 className="font-semibold text-lg mb-4">
                        Casos de éxito
                      </h4>
                      <div className="space-y-4">
                        {servicio.casosExito.map((caso, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-primary pl-4"
                          >
                            <p className="italic mb-2">"{caso.testimonio}"</p>
                            <p className="text-sm font-medium">
                              {caso.cliente}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {caso.empresa}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Proceso de Trabajo */}
      <div className="mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Nuestro proceso de trabajo
          </h2>
          <p className="text-muted-foreground max-w-[700px] mx-auto">
            Seguimos una metodología probada para garantizar resultados
            excepcionales en todos nuestros proyectos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {procesoTrabajo.map((paso, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mb-4">
                  {index + 1}
                </div>
                <CardTitle>{paso.nombre}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{paso.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para impulsar tu negocio?
        </h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
          Contáctanos hoy mismo para discutir cómo nuestros servicios pueden
          ayudarte a alcanzar tus objetivos empresariales.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contacto">Solicitar presupuesto</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/proyectos">Ver proyectos</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

const serviciosDestacados = [
  {
    id: "desarrollo-web",
    nombre: "Desarrollo Web",
    descripcionCorta:
      "Creamos sitios web y aplicaciones a medida con las últimas tecnologías",
    caracteristicas: [
      "Diseño responsive y moderno",
      "Optimización SEO",
      "Integración con CMS",
      "Rendimiento excepcional",
    ],
    icon: Code,
    destacado: true,
  },
  {
    id: "consultoria",
    nombre: "Consultoría IT",
    descripcionCorta:
      "Asesoramiento experto para optimizar tus procesos tecnológicos",
    caracteristicas: [
      "Análisis de infraestructura",
      "Optimización de procesos",
      "Estrategias de transformación digital",
      "Soluciones personalizadas",
    ],
    icon: Database,
    destacado: false,
  },
  {
    id: "soporte",
    nombre: "Soporte Técnico",
    descripcionCorta:
      "Asistencia continua para mantener tus sistemas funcionando sin problemas",
    caracteristicas: [
      "Disponibilidad 24/7",
      "Resolución rápida de problemas",
      "Mantenimiento preventivo",
      "Actualizaciones de seguridad",
    ],
    icon: Headphones,
    destacado: false,
  },
  {
    id: "cloud",
    nombre: "Soluciones Cloud",
    descripcionCorta: "Migración y gestión de infraestructuras en la nube",
    caracteristicas: [
      "Migración a la nube",
      "Arquitectura serverless",
      "Optimización de costes",
      "Escalabilidad automática",
    ],
    icon: Cloud,
    destacado: true,
  },
  {
    id: "seguridad",
    nombre: "Seguridad Informática",
    descripcionCorta: "Protección integral para tus sistemas y datos",
    caracteristicas: [
      "Auditorías de seguridad",
      "Implementación de protocolos",
      "Gestión de identidades",
      "Protección contra amenazas",
    ],
    icon: Shield,
    destacado: false,
  },
  {
    id: "datos",
    nombre: "Análisis de Datos",
    descripcionCorta:
      "Convierte tus datos en insights accionables para tu negocio",
    caracteristicas: [
      "Business Intelligence",
      "Dashboards interactivos",
      "Procesamiento de Big Data",
      "Modelos predictivos",
    ],
    icon: Server,
    destacado: false,
  },
];

const serviciosDetallados = [
  {
    id: "desarrollo-web",
    nombre: "Desarrollo Web y Aplicaciones",
    descripcion:
      "Diseñamos y desarrollamos sitios web y aplicaciones a medida que no solo se ven bien, sino que también funcionan perfectamente. Nuestro enfoque se centra en crear experiencias digitales que conviertan visitantes en clientes.",
    beneficios: [
      "Diseño centrado en el usuario para maximizar conversiones",
      "Código limpio y optimizado para un rendimiento excepcional",
      "Soluciones escalables que crecen con tu negocio",
      "Integración perfecta con sistemas existentes",
      "Mantenimiento continuo y actualizaciones",
    ],
    enfoque:
      "Nuestro proceso de desarrollo sigue metodologías ágiles, permitiéndonos entregar resultados de alta calidad en plazos ajustados. Trabajamos en estrecha colaboración con nuestros clientes en cada etapa del proyecto.",
    tecnologias: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "AWS",
      "Vercel",
    ],
    casosExito: [
      {
        testimonio:
          "Zenith Solution transformó nuestra presencia digital con un sitio web que no solo es visualmente impresionante, sino que también ha aumentado nuestras conversiones en un 45%.",
        cliente: "Carlos Rodríguez",
        empresa: "TechInnovate S.L.",
      },
      {
        testimonio:
          "La aplicación web que desarrollaron para nosotros ha revolucionado la forma en que interactuamos con nuestros clientes. El proceso fue fluido y el resultado superó nuestras expectativas.",
        cliente: "María González",
        empresa: "DataFlex Corp",
      },
    ],
  },
  {
    id: "consultoria",
    nombre: "Consultoría IT",
    descripcion:
      "Ofrecemos asesoramiento experto para ayudarte a tomar decisiones informadas sobre tu infraestructura tecnológica. Nuestro equipo de consultores analizará tus necesidades y te proporcionará soluciones personalizadas.",
    beneficios: [
      "Reducción de costes operativos",
      "Mejora de la eficiencia de los procesos",
      "Estrategias de transformación digital a medida",
      "Optimización de recursos tecnológicos",
      "Ventaja competitiva en tu sector",
    ],
    enfoque:
      "Comenzamos con un análisis exhaustivo de tu situación actual, identificando áreas de mejora y oportunidades. Luego, desarrollamos un plan estratégico con recomendaciones concretas y medibles.",
    tecnologias: [
      "Análisis DAFO",
      "Mapeo de procesos",
      "Benchmarking",
      "KPIs",
      "Metodologías ágiles",
      "Design Thinking",
    ],
    casosExito: [
      {
        testimonio:
          "La consultoría de Zenith Solution nos ayudó a identificar ineficiencias en nuestros procesos que no habíamos detectado. Su implementación nos ha ahorrado más de 100.000€ anuales.",
        cliente: "Javier Martínez",
        empresa: "Logística Global S.A.",
      },
    ],
  },
  {
    id: "soporte",
    nombre: "Soporte Técnico",
    descripcion:
      "Proporcionamos asistencia técnica continua para garantizar que tus sistemas funcionen sin interrupciones. Nuestro equipo de soporte está disponible 24/7 para resolver cualquier incidencia.",
    beneficios: [
      "Minimización de tiempos de inactividad",
      "Resolución rápida de problemas",
      "Mantenimiento preventivo para evitar fallos",
      "Actualizaciones regulares de seguridad",
      "Soporte multicanal (teléfono, email, chat)",
    ],
    enfoque:
      "Utilizamos sistemas de monitorización proactiva para detectar y resolver problemas antes de que afecten a tu negocio. Nuestro equipo está altamente capacitado en las últimas tecnologías.",
    tecnologias: [
      "ServiceDesk",
      "Monitorización 24/7",
      "Sistemas de tickets",
      "Análisis predictivo",
      "Automatización de tareas",
    ],
    casosExito: [
      {
        testimonio:
          "Desde que contratamos el soporte técnico de Zenith Solution, nuestros tiempos de inactividad se han reducido en un 98%. Su equipo es rápido, eficiente y siempre disponible.",
        cliente: "Ana Sánchez",
        empresa: "Retail Express",
      },
    ],
  },
  {
    id: "cloud",
    nombre: "Soluciones Cloud",
    descripcion:
      "Facilitamos la migración y gestión de tu infraestructura en la nube, permitiéndote aprovechar todas las ventajas que ofrece: escalabilidad, flexibilidad y reducción de costes.",
    beneficios: [
      "Reducción significativa de costes de infraestructura",
      "Escalabilidad automática según tus necesidades",
      "Mayor seguridad y cumplimiento normativo",
      "Acceso desde cualquier lugar y dispositivo",
      "Recuperación ante desastres mejorada",
    ],
    enfoque:
      "Diseñamos una estrategia de migración a medida, minimizando riesgos y garantizando la continuidad del negocio. Optimizamos continuamente tu infraestructura para maximizar el rendimiento y controlar costes.",
    tecnologias: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Serverless",
      "Microservicios",
    ],
    casosExito: [
      {
        testimonio:
          "La migración a la nube gestionada por Zenith Solution nos permitió reducir nuestros costes de IT en un 60% mientras mejoramos la disponibilidad de nuestros servicios.",
        cliente: "Roberto Fernández",
        empresa: "FinTech Solutions",
      },
    ],
  },
  {
    id: "seguridad",
    nombre: "Seguridad Informática",
    descripcion:
      "Protegemos tus activos digitales contra amenazas cibernéticas mediante soluciones de seguridad avanzadas. Implementamos protocolos robustos para salvaguardar tus datos y sistemas.",
    beneficios: [
      "Protección integral contra ciberamenazas",
      "Cumplimiento de normativas (GDPR, ISO 27001)",
      "Detección temprana de vulnerabilidades",
      "Respuesta rápida ante incidentes",
      "Formación en seguridad para empleados",
    ],
    enfoque:
      "Realizamos auditorías exhaustivas para identificar vulnerabilidades, implementamos soluciones de seguridad multicapa y establecemos protocolos de respuesta ante incidentes.",
    tecnologias: [
      "Firewalls avanzados",
      "Sistemas IDS/IPS",
      "Cifrado de datos",
      "Autenticación multifactor",
      "Análisis de vulnerabilidades",
      "Pentesting",
    ],
    casosExito: [
      {
        testimonio:
          "Tras sufrir un ataque de ransomware, contratamos a Zenith Solution. Su implementación de seguridad ha sido impenetrable desde entonces, dándonos tranquilidad total.",
        cliente: "Elena Torres",
        empresa: "MediData Healthcare",
      },
    ],
  },
  {
    id: "datos",
    nombre: "Análisis de Datos",
    descripcion:
      "Convertimos tus datos en insights accionables que impulsan decisiones de negocio informadas. Nuestras soluciones de análisis te ayudan a descubrir patrones ocultos y oportunidades.",
    beneficios: [
      "Toma de decisiones basada en datos",
      "Identificación de tendencias y patrones",
      "Optimización de procesos empresariales",
      "Predicción de comportamientos futuros",
      "Dashboards personalizados para seguimiento de KPIs",
    ],
    enfoque:
      "Recopilamos, limpiamos y analizamos tus datos utilizando técnicas avanzadas de análisis. Creamos visualizaciones intuitivas que facilitan la comprensión y acción sobre los insights obtenidos.",
    tecnologias: [
      "Python",
      "R",
      "Power BI",
      "Tableau",
      "Machine Learning",
      "SQL",
      "NoSQL",
      "Hadoop",
      "Spark",
    ],
    casosExito: [
      {
        testimonio:
          "El análisis de datos realizado por Zenith Solution nos permitió identificar segmentos de clientes que no estábamos atendiendo adecuadamente, lo que ha resultado en un aumento del 28% en ventas.",
        cliente: "Luis Navarro",
        empresa: "Retail Innovations",
      },
    ],
  },
];

const procesoTrabajo = [
  {
    nombre: "Descubrimiento",
    descripcion:
      "Analizamos tus necesidades, objetivos y desafíos para entender completamente tu situación actual y definir el alcance del proyecto.",
  },
  {
    nombre: "Planificación",
    descripcion:
      "Desarrollamos una estrategia detallada y un plan de acción con hitos claros, plazos y entregables para garantizar el éxito del proyecto.",
  },
  {
    nombre: "Ejecución",
    descripcion:
      "Implementamos las soluciones diseñadas siguiendo metodologías ágiles, con comunicación constante y adaptándonos a cambios si es necesario.",
  },
  {
    nombre: "Evaluación",
    descripcion:
      "Medimos los resultados contra los objetivos establecidos, realizamos ajustes necesarios y proporcionamos recomendaciones para mejoras continuas.",
  },
];
