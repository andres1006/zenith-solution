import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  ArrowLeft,
  Users,
  BarChart,
  Clock,
  Zap,
  Shield,
  Database,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Definición de tipos para TypeScript
type Servicio = {
  id: string;
  nombre: string;
  descripcion: string;
  descripcionLarga: string;
  beneficios: string[];
  caracteristicas: {
    titulo: string;
    descripcion: string;
    icon: any;
  }[];
  fases: {
    nombre: string;
    descripcion: string;
  }[];
  preguntas: {
    pregunta: string;
    respuesta: string;
  }[];
  tecnologias: string[];
  proyectosRelacionados: {
    nombre: string;
    descripcion: string;
    imagen: string;
  }[];
};

// Datos de servicios
const servicios: Servicio[] = [
  {
    id: "desarrollo-web",
    nombre: "Desarrollo Web y Aplicaciones",
    descripcion:
      "Diseñamos y desarrollamos sitios web y aplicaciones a medida que no solo se ven bien, sino que también funcionan perfectamente.",
    descripcionLarga:
      "En Zenith Solution, nos especializamos en crear experiencias digitales excepcionales que combinan diseño atractivo con funcionalidad robusta. Nuestro equipo de desarrolladores expertos trabaja con las últimas tecnologías para construir soluciones web que no solo cumplen con tus requisitos actuales, sino que también están preparadas para crecer con tu negocio. Desde sitios web corporativos hasta complejas aplicaciones web, tenemos la experiencia para llevar tu visión digital a la realidad.",
    beneficios: [
      "Diseño centrado en el usuario para maximizar conversiones",
      "Código limpio y optimizado para un rendimiento excepcional",
      "Soluciones escalables que crecen con tu negocio",
      "Integración perfecta con sistemas existentes",
      "Mantenimiento continuo y actualizaciones",
      "Optimización SEO para mejorar la visibilidad en buscadores",
      "Experiencia de usuario intuitiva y atractiva",
    ],
    caracteristicas: [
      {
        titulo: "Diseño Responsive",
        descripcion:
          "Creamos interfaces que se adaptan perfectamente a cualquier dispositivo, garantizando una experiencia óptima para todos los usuarios.",
        icon: Zap,
      },
      {
        titulo: "Rendimiento Optimizado",
        descripcion:
          "Desarrollamos con un enfoque en la velocidad y eficiencia, asegurando tiempos de carga rápidos y una experiencia fluida.",
        icon: Clock,
      },
      {
        titulo: "Experiencia de Usuario",
        descripcion:
          "Diseñamos pensando en tus usuarios, creando interfaces intuitivas que facilitan la navegación y mejoran la satisfacción.",
        icon: Users,
      },
      {
        titulo: "Análisis y Métricas",
        descripcion:
          "Implementamos herramientas de análisis para que puedas medir el rendimiento de tu sitio y tomar decisiones basadas en datos.",
        icon: BarChart,
      },
    ],
    fases: [
      {
        nombre: "Descubrimiento y Planificación",
        descripcion:
          "Analizamos tus necesidades, objetivos y público objetivo para definir la estrategia y alcance del proyecto.",
      },
      {
        nombre: "Diseño UX/UI",
        descripcion:
          "Creamos wireframes y prototipos interactivos para visualizar la estructura y flujo de la aplicación antes del desarrollo.",
      },
      {
        nombre: "Desarrollo Frontend y Backend",
        descripcion:
          "Construimos la interfaz de usuario y la lógica del servidor utilizando las tecnologías más adecuadas para tu proyecto.",
      },
      {
        nombre: "Pruebas y Control de Calidad",
        descripcion:
          "Realizamos pruebas exhaustivas para garantizar la funcionalidad, usabilidad y seguridad de la aplicación.",
      },
      {
        nombre: "Despliegue y Lanzamiento",
        descripcion:
          "Implementamos la solución en el entorno de producción y realizamos las configuraciones necesarias para su correcto funcionamiento.",
      },
      {
        nombre: "Mantenimiento y Mejora Continua",
        descripcion:
          "Ofrecemos soporte continuo, actualizaciones y optimizaciones para mantener tu aplicación funcionando de manera óptima.",
      },
    ],
    preguntas: [
      {
        pregunta: "¿Cuánto tiempo tarda en desarrollarse un sitio web?",
        respuesta:
          "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web informativo puede estar listo en 4-6 semanas, mientras que una aplicación web compleja puede llevar 3-6 meses. Durante nuestra fase de planificación, estableceremos un cronograma detallado para tu proyecto específico.",
      },
      {
        pregunta: "¿Qué tecnologías utilizan para el desarrollo?",
        respuesta:
          "Trabajamos con un amplio stack tecnológico que incluye React, Next.js, Node.js, TypeScript, y bases de datos como MongoDB y PostgreSQL. Seleccionamos las tecnologías más adecuadas según los requisitos específicos de cada proyecto, priorizando rendimiento, escalabilidad y mantenibilidad.",
      },
      {
        pregunta: "¿Ofrecen mantenimiento después del lanzamiento?",
        respuesta:
          "Sí, ofrecemos planes de mantenimiento continuo que incluyen actualizaciones de seguridad, corrección de errores, mejoras de rendimiento y pequeñas actualizaciones de contenido. También disponemos de servicios de soporte técnico para resolver cualquier incidencia que pueda surgir.",
      },
      {
        pregunta: "¿Cómo garantizan que el sitio sea seguro?",
        respuesta:
          "Implementamos las mejores prácticas de seguridad en todas nuestras soluciones, incluyendo cifrado SSL, protección contra inyecciones SQL, autenticación segura y actualizaciones regulares. Además, realizamos auditorías de seguridad periódicas para identificar y mitigar posibles vulnerabilidades.",
      },
    ],
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
    proyectosRelacionados: [
      {
        nombre: "Portal E-commerce Premium",
        descripcion:
          "Plataforma de comercio electrónico con integración de pagos, gestión de inventario y panel de administración personalizado.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
      {
        nombre: "Dashboard Analítico",
        descripcion:
          "Aplicación web para visualización de datos empresariales con gráficos interactivos y reportes personalizados.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
      {
        nombre: "Plataforma Educativa",
        descripcion:
          "Sistema de gestión de aprendizaje con cursos online, evaluaciones y seguimiento de progreso de estudiantes.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "consultoria",
    nombre: "Consultoría IT",
    descripcion:
      "Asesoramiento experto para optimizar tus procesos tecnológicos y potenciar tu negocio.",
    descripcionLarga:
      "Nuestro servicio de consultoría IT proporciona asesoramiento estratégico para ayudarte a tomar decisiones informadas sobre tu infraestructura tecnológica. Analizamos tus procesos actuales, identificamos áreas de mejora y desarrollamos estrategias personalizadas para optimizar tus recursos tecnológicos y alinearlos con tus objetivos de negocio. Nuestro enfoque se centra en proporcionar soluciones prácticas y medibles que generen un impacto real en tu organización.",
    beneficios: [
      "Reducción de costes operativos",
      "Mejora de la eficiencia de los procesos",
      "Estrategias de transformación digital a medida",
      "Optimización de recursos tecnológicos",
      "Ventaja competitiva en tu sector",
      "Alineación de IT con objetivos de negocio",
      "Identificación de oportunidades de innovación",
    ],
    caracteristicas: [
      {
        titulo: "Análisis Estratégico",
        descripcion:
          "Evaluamos tu infraestructura actual y desarrollamos un plan estratégico alineado con tus objetivos de negocio.",
        icon: BarChart,
      },
      {
        titulo: "Optimización de Procesos",
        descripcion:
          "Identificamos ineficiencias en tus procesos IT y proponemos mejoras para aumentar la productividad y reducir costes.",
        icon: Zap,
      },
      {
        titulo: "Gestión del Cambio",
        descripcion:
          "Te acompañamos en la implementación de nuevas tecnologías, asegurando una transición suave y minimizando resistencias.",
        icon: Users,
      },
      {
        titulo: "Medición de Resultados",
        descripcion:
          "Establecemos KPIs claros y realizamos seguimiento continuo para medir el impacto de nuestras recomendaciones.",
        icon: Clock,
      },
    ],
    fases: [
      {
        nombre: "Diagnóstico Inicial",
        descripcion:
          "Realizamos una evaluación exhaustiva de tu infraestructura IT, procesos y necesidades de negocio.",
      },
      {
        nombre: "Análisis y Planificación",
        descripcion:
          "Identificamos oportunidades de mejora y desarrollamos un plan estratégico con recomendaciones concretas.",
      },
      {
        nombre: "Presentación de Soluciones",
        descripcion:
          "Exponemos nuestras recomendaciones con un análisis detallado de costes, beneficios y plazos de implementación.",
      },
      {
        nombre: "Implementación",
        descripcion:
          "Apoyamos en la ejecución del plan estratégico, coordinando recursos y supervisando el progreso.",
      },
      {
        nombre: "Seguimiento y Optimización",
        descripcion:
          "Realizamos un seguimiento continuo para medir resultados y realizar ajustes necesarios para maximizar el retorno de inversión.",
      },
    ],
    preguntas: [
      {
        pregunta: "¿Qué diferencia vuestra consultoría IT de otras?",
        respuesta:
          "Nos distinguimos por nuestro enfoque práctico y orientado a resultados. No nos limitamos a entregar informes teóricos, sino que nos involucramos en la implementación y medición de resultados. Además, nuestro equipo combina experiencia técnica con visión de negocio, lo que nos permite proporcionar recomendaciones que realmente impactan en tu cuenta de resultados.",
      },
      {
        pregunta: "¿Cómo se estructura el proceso de consultoría?",
        respuesta:
          "Nuestro proceso comienza con un diagnóstico exhaustivo de tu situación actual, seguido de un análisis detallado y la elaboración de un plan estratégico. Posteriormente, te acompañamos en la implementación de las recomendaciones y realizamos un seguimiento continuo para medir resultados y realizar ajustes si es necesario.",
      },
      {
        pregunta: "¿Cuánto tiempo dura típicamente un proyecto de consultoría?",
        respuesta:
          "La duración varía según el alcance y complejidad del proyecto. Una consultoría básica puede completarse en 4-6 semanas, mientras que proyectos más complejos de transformación digital pueden extenderse durante varios meses. En cualquier caso, establecemos hitos claros y entregables definidos para cada fase.",
      },
      {
        pregunta: "¿Trabajáis con empresas de cualquier tamaño y sector?",
        respuesta:
          "Sí, adaptamos nuestros servicios a las necesidades específicas de cada cliente, independientemente de su tamaño o sector. Tenemos experiencia trabajando tanto con startups como con grandes corporaciones en diversos sectores como finanzas, salud, retail, manufactura y servicios profesionales.",
      },
    ],
    tecnologias: [
      "Análisis DAFO",
      "Mapeo de procesos",
      "Benchmarking",
      "KPIs",
      "Metodologías ágiles",
      "Design Thinking",
      "Business Process Management",
      "Enterprise Architecture",
    ],
    proyectosRelacionados: [
      {
        nombre: "Transformación Digital Retail",
        descripcion:
          "Estrategia integral de transformación digital para cadena de retail con 50+ tiendas físicas.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
      {
        nombre: "Optimización Infraestructura IT",
        descripcion:
          "Rediseño de infraestructura tecnológica para empresa de servicios financieros, reduciendo costes operativos en un 40%.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
      {
        nombre: "Estrategia Cloud First",
        descripcion:
          "Desarrollo e implementación de estrategia de migración a la nube para empresa industrial con sistemas legacy.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  // Datos simplificados para otros servicios
  {
    id: "soporte",
    nombre: "Soporte Técnico",
    descripcion:
      "Asistencia continua para mantener tus sistemas funcionando sin problemas.",
    descripcionLarga:
      "Nuestro servicio de soporte técnico proporciona asistencia continua para garantizar que tus sistemas funcionen sin interrupciones. Contamos con un equipo de expertos disponible 24/7 para resolver cualquier incidencia y mantener tu infraestructura tecnológica en óptimas condiciones.",
    beneficios: [
      "Minimización de tiempos de inactividad",
      "Resolución rápida de problemas",
      "Mantenimiento preventivo",
      "Actualizaciones de seguridad",
      "Soporte multicanal",
    ],
    caracteristicas: [
      {
        titulo: "Disponibilidad 24/7",
        descripcion:
          "Nuestro equipo está disponible todos los días del año para resolver cualquier incidencia en el momento que ocurra.",
        icon: Clock,
      },
      {
        titulo: "Respuesta Rápida",
        descripcion:
          "Garantizamos tiempos de respuesta mínimos según la severidad del incidente para minimizar el impacto en tu negocio.",
        icon: Zap,
      },
      {
        titulo: "Monitorización Proactiva",
        descripcion:
          "Supervisamos continuamente tus sistemas para detectar y resolver problemas antes de que afecten a tu operativa.",
        icon: BarChart,
      },
      {
        titulo: "Soporte Multicanal",
        descripcion:
          "Ofrecemos asistencia a través de múltiples canales: teléfono, email, chat y sistema de tickets.",
        icon: Users,
      },
    ],
    fases: [
      {
        nombre: "Diagnóstico",
        descripcion:
          "Identificamos la causa raíz del problema mediante análisis detallado.",
      },
      {
        nombre: "Resolución",
        descripcion:
          "Implementamos la solución más adecuada para resolver el incidente.",
      },
      {
        nombre: "Verificación",
        descripcion:
          "Comprobamos que el problema ha sido resuelto completamente.",
      },
      {
        nombre: "Documentación",
        descripcion:
          "Registramos el incidente y su resolución para futuras referencias.",
      },
      {
        nombre: "Seguimiento",
        descripcion:
          "Realizamos seguimiento para asegurar que no se repita el problema.",
      },
    ],
    preguntas: [
      {
        pregunta: "¿Qué tipos de sistemas soportáis?",
        respuesta:
          "Damos soporte a una amplia gama de sistemas, incluyendo infraestructura de servidores, redes, aplicaciones empresariales, sistemas operativos, bases de datos y entornos cloud.",
      },
      {
        pregunta: "¿Cuáles son vuestros tiempos de respuesta?",
        respuesta:
          "Nuestros tiempos de respuesta varían según la severidad del incidente: para incidentes críticos respondemos en menos de 15 minutos, para incidentes graves en menos de 1 hora, y para incidentes menores en menos de 4 horas.",
      },
    ],
    tecnologias: [
      "ServiceDesk",
      "Monitorización 24/7",
      "Sistemas de tickets",
      "Análisis predictivo",
      "Automatización de tareas",
    ],
    proyectosRelacionados: [
      {
        nombre: "Soporte IT Corporativo",
        descripcion:
          "Servicio integral de soporte para empresa multinacional con 500+ empleados.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
      {
        nombre: "Help Desk Especializado",
        descripcion:
          "Implementación de sistema de help desk para sector sanitario con atención prioritaria.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "cloud",
    nombre: "Soluciones Cloud",
    descripcion:
      "Migración y gestión de infraestructuras en la nube para mayor flexibilidad y eficiencia.",
    descripcionLarga:
      "Facilitamos la migración y gestión de tu infraestructura en la nube, permitiéndote aprovechar todas las ventajas que ofrece: escalabilidad, flexibilidad y reducción de costes. Diseñamos arquitecturas cloud optimizadas para tus necesidades específicas.",
    beneficios: [
      "Reducción de costes de infraestructura",
      "Escalabilidad automática",
      "Mayor seguridad",
      "Acceso desde cualquier lugar",
      "Recuperación ante desastres",
    ],
    caracteristicas: [
      {
        titulo: "Arquitectura Optimizada",
        descripcion:
          "Diseñamos arquitecturas cloud eficientes y escalables adaptadas a tus necesidades específicas.",
        icon: BarChart,
      },
      {
        titulo: "Migración Segura",
        descripcion:
          "Garantizamos una migración sin interrupciones con mínimo impacto en tu operativa diaria.",
        icon: Zap,
      },
      {
        titulo: "Optimización de Costes",
        descripcion:
          "Implementamos estrategias para maximizar el rendimiento mientras minimizamos el gasto en recursos cloud.",
        icon: Clock,
      },
      {
        titulo: "Gestión Continua",
        descripcion:
          "Monitorizamos y gestionamos tu infraestructura cloud para garantizar disponibilidad y rendimiento óptimos.",
        icon: Users,
      },
    ],
    fases: [
      {
        nombre: "Evaluación",
        descripcion:
          "Analizamos tu infraestructura actual y definimos la estrategia de migración.",
      },
      {
        nombre: "Planificación",
        descripcion:
          "Diseñamos la arquitectura cloud y establecemos el plan de migración.",
      },
      {
        nombre: "Migración",
        descripcion: "Ejecutamos la migración de forma controlada y segura.",
      },
      {
        nombre: "Optimización",
        descripcion:
          "Ajustamos la configuración para maximizar rendimiento y minimizar costes.",
      },
      {
        nombre: "Gestión",
        descripcion:
          "Proporcionamos monitorización y gestión continua de tu infraestructura cloud.",
      },
    ],
    preguntas: [
      {
        pregunta: "¿Qué proveedores cloud utilizáis?",
        respuesta:
          "Trabajamos principalmente con AWS, Microsoft Azure y Google Cloud Platform, seleccionando el proveedor más adecuado según tus necesidades específicas y tu ecosistema tecnológico actual.",
      },
      {
        pregunta: "¿Cuánto tiempo lleva migrar a la nube?",
        respuesta:
          "El tiempo de migración depende de la complejidad de tu infraestructura actual. Una migración básica puede completarse en 4-8 semanas, mientras que migraciones complejas pueden llevar varios meses. Siempre realizamos la migración por fases para minimizar riesgos.",
      },
    ],
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
    proyectosRelacionados: [
      {
        nombre: "Migración a AWS",
        descripcion:
          "Migración completa de infraestructura on-premise a AWS para empresa de e-commerce.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
      {
        nombre: "Arquitectura Serverless",
        descripcion:
          "Implementación de arquitectura serverless para aplicación de procesamiento de datos en tiempo real.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "seguridad",
    nombre: "Seguridad Informática",
    descripcion:
      "Protección integral para tus sistemas y datos contra amenazas cibernéticas.",
    descripcionLarga:
      "Protegemos tus activos digitales contra amenazas cibernéticas mediante soluciones de seguridad avanzadas. Implementamos protocolos robustos para salvaguardar tus datos y sistemas, garantizando la continuidad de tu negocio.",
    beneficios: [
      "Protección contra ciberamenazas",
      "Cumplimiento normativo",
      "Detección temprana de vulnerabilidades",
      "Respuesta rápida ante incidentes",
      "Formación en seguridad",
    ],
    caracteristicas: [
      {
        titulo: "Auditorías de Seguridad",
        descripcion:
          "Evaluamos exhaustivamente tu infraestructura para identificar vulnerabilidades y riesgos potenciales.",
        icon: BarChart,
      },
      {
        titulo: "Protección Multicapa",
        descripcion:
          "Implementamos soluciones de seguridad en múltiples niveles para una protección integral.",
        icon: Shield,
      },
      {
        titulo: "Monitorización Continua",
        descripcion:
          "Supervisamos tu entorno 24/7 para detectar y responder rápidamente a amenazas potenciales.",
        icon: Clock,
      },
      {
        titulo: "Formación y Concienciación",
        descripcion:
          "Capacitamos a tu equipo para reconocer y prevenir amenazas de seguridad comunes.",
        icon: Users,
      },
    ],
    fases: [
      {
        nombre: "Evaluación de Riesgos",
        descripcion:
          "Identificamos y evaluamos los riesgos de seguridad en tu organización.",
      },
      {
        nombre: "Implementación de Controles",
        descripcion:
          "Desplegamos soluciones de seguridad adaptadas a tus necesidades específicas.",
      },
      {
        nombre: "Monitorización",
        descripcion:
          "Establecemos sistemas de monitorización continua para detectar amenazas.",
      },
      {
        nombre: "Respuesta a Incidentes",
        descripcion:
          "Definimos protocolos de respuesta ante posibles brechas de seguridad.",
      },
      {
        nombre: "Mejora Continua",
        descripcion:
          "Actualizamos regularmente las medidas de seguridad para adaptarnos a nuevas amenazas.",
      },
    ],
    preguntas: [
      {
        pregunta: "¿Qué normativas de seguridad cubrís?",
        respuesta:
          "Ayudamos a cumplir con diversas normativas incluyendo GDPR, ISO 27001, PCI DSS, HIPAA y otras regulaciones específicas de cada sector y región.",
      },
      {
        pregunta: "¿Cómo respondéis ante un incidente de seguridad?",
        respuesta:
          "Contamos con un protocolo de respuesta a incidentes que incluye contención, erradicación, recuperación y análisis post-incidente. Nuestro equipo está disponible 24/7 para responder rápidamente ante cualquier brecha de seguridad.",
      },
    ],
    tecnologias: [
      "Firewalls avanzados",
      "Sistemas IDS/IPS",
      "Cifrado de datos",
      "Autenticación multifactor",
      "Análisis de vulnerabilidades",
      "Pentesting",
    ],
    proyectosRelacionados: [
      {
        nombre: "Implementación SOC",
        descripcion:
          "Creación de Centro de Operaciones de Seguridad para monitorización continua de amenazas.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
      {
        nombre: "Cumplimiento GDPR",
        descripcion:
          "Proyecto integral de adecuación a GDPR para empresa multinacional del sector financiero.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
  {
    id: "datos",
    nombre: "Análisis de Datos",
    descripcion:
      "Convierte tus datos en insights accionables para impulsar decisiones de negocio informadas.",
    descripcionLarga:
      "Convertimos tus datos en insights accionables que impulsan decisiones de negocio informadas. Nuestras soluciones de análisis te ayudan a descubrir patrones ocultos y oportunidades para optimizar tus procesos y estrategias.",
    beneficios: [
      "Toma de decisiones basada en datos",
      "Identificación de tendencias",
      "Optimización de procesos",
      "Predicción de comportamientos",
      "Dashboards personalizados",
    ],
    caracteristicas: [
      {
        titulo: "Integración de Datos",
        descripcion:
          "Unificamos datos de múltiples fuentes para crear una visión completa de tu negocio.",
        icon: Database,
      },
      {
        titulo: "Análisis Avanzado",
        descripcion:
          "Aplicamos técnicas estadísticas y de machine learning para descubrir patrones y tendencias.",
        icon: BarChart,
      },
      {
        titulo: "Visualización Intuitiva",
        descripcion:
          "Creamos dashboards interactivos que facilitan la comprensión y análisis de datos complejos.",
        icon: Zap,
      },
      {
        titulo: "Predicción y Forecasting",
        descripcion:
          "Desarrollamos modelos predictivos para anticipar tendencias y comportamientos futuros.",
        icon: Clock,
      },
    ],
    fases: [
      {
        nombre: "Recopilación de Datos",
        descripcion:
          "Identificamos y recopilamos datos relevantes de diversas fuentes.",
      },
      {
        nombre: "Limpieza y Preparación",
        descripcion:
          "Procesamos los datos para asegurar su calidad y consistencia.",
      },
      {
        nombre: "Análisis y Modelado",
        descripcion:
          "Aplicamos técnicas analíticas para extraer insights valiosos.",
      },
      {
        nombre: "Visualización",
        descripcion:
          "Creamos representaciones visuales intuitivas de los resultados.",
      },
      {
        nombre: "Implementación",
        descripcion:
          "Integramos las soluciones analíticas en tus procesos de negocio.",
      },
    ],
    preguntas: [
      {
        pregunta: "¿Qué tipos de datos podéis analizar?",
        respuesta:
          "Podemos trabajar con prácticamente cualquier tipo de datos estructurados y no estructurados, incluyendo datos transaccionales, comportamiento de usuarios, datos de sensores, texto, imágenes y más.",
      },
      {
        pregunta: "¿Necesito tener un equipo de datos interno?",
        respuesta:
          "No es necesario. Podemos actuar como tu departamento de datos externo, proporcionando todas las capacidades analíticas que necesitas sin la necesidad de contratar personal especializado.",
      },
    ],
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
    proyectosRelacionados: [
      {
        nombre: "Análisis Predictivo de Ventas",
        descripcion:
          "Implementación de modelo predictivo para forecast de ventas con 95% de precisión.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
      {
        nombre: "Dashboard Ejecutivo",
        descripcion:
          "Creación de dashboard interactivo para visualización de KPIs empresariales en tiempo real.",
        imagen: "/placeholder.svg?height=200&width=300",
      },
    ],
  },
];

export default function ServicioPage({ params }: { params: { id: string } }) {
  // Buscar el servicio por ID
  const servicio = servicios.find((s) => s.id === params.id);

  // Si no se encuentra el servicio, mostrar 404
  if (!servicio) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Botón de regreso */}
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/servicios">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a servicios
          </Link>
        </Button>
      </div>

      {/* Cabecera */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {servicio.nombre}
        </h1>
        <p className="text-xl text-muted-foreground max-w-[800px]">
          {servicio.descripcionLarga}
        </p>
      </div>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Beneficios clave</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {servicio.beneficios.map((beneficio, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0" />
                <span>{beneficio}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">
            Características del servicio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {servicio.caracteristicas.map((caracteristica, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <caracteristica.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {caracteristica.titulo}
                  </h3>
                  <p className="text-muted-foreground">
                    {caracteristica.descripcion}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Nuestro proceso</h2>
          <div className="relative mb-10">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-border"></div>
            <div className="space-y-8">
              {servicio.fases.map((fase, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{fase.nombre}</h3>
                  <p className="text-muted-foreground">{fase.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Proyectos relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {servicio.proyectosRelacionados.map((proyecto, index) => (
              <Card key={index} className="border-border overflow-hidden">
                <img
                  src={proyecto.imagen || "/placeholder.svg"}
                  alt={proyecto.nombre}
                  className="w-full h-40 object-cover"
                />
                <CardContent className="pt-4">
                  <h3 className="font-semibold mb-2">{proyecto.nombre}</h3>
                  <p className="text-sm text-muted-foreground">
                    {proyecto.descripcion}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-muted rounded-lg p-6 mb-8 sticky top-8">
            <h3 className="text-xl font-bold mb-4">
              ¿Interesado en este servicio?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contáctanos para discutir cómo podemos ayudarte con tus
              necesidades específicas.
            </p>
            <Button className="w-full mb-4" asChild>
              <Link href="/contacto">Solicitar información</Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/contacto">Agendar una llamada</Link>
            </Button>
          </div>

          <div className="bg-muted rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {servicio.tecnologias.map((tecnologia, index) => (
                <Badge key={index} variant="secondary">
                  {tecnologia}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Preguntas frecuentes</h3>
            <div className="space-y-6">
              {servicio.preguntas.map((pregunta, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2">{pregunta.pregunta}</h4>
                  <p className="text-muted-foreground">{pregunta.respuesta}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
        <p className="text-muted-foreground max-w-[700px] mx-auto mb-8">
          Contáctanos hoy mismo para discutir cómo nuestro servicio de{" "}
          {servicio.nombre.toLowerCase()} puede ayudarte a alcanzar tus
          objetivos.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contacto">Contactar ahora</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/servicios">Explorar otros servicios</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
