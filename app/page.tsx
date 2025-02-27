import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUp, Code, Layout, Lightbulb, MessageSquare, Monitor, Zap } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import PortfolioItem from "@/components/portfolio-item"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Zap className="h-6 w-6 text-primary" />
              <ArrowUp className="h-3 w-3 text-primary absolute -top-1 right-0" />
            </div>
            <span className="text-xl font-bold">ZENITH SOLUTION</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#servicios" className="text-sm font-medium transition-colors hover:text-primary">
              Servicios
            </Link>
            <Link href="#portafolio" className="text-sm font-medium transition-colors hover:text-primary">
              Portafolio
            </Link>
            <Link href="#nosotros" className="text-sm font-medium transition-colors hover:text-primary">
              Nosotros
            </Link>
            <Link href="#testimonios" className="text-sm font-medium transition-colors hover:text-primary">
              Testimonios
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contacto">Contáctanos</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elevamos tu negocio al cenit del éxito digital
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Desarrollo de software a medida, diseño de marketing estratégico y soluciones tecnológicas
                    innovadoras para impulsar tu crecimiento hacia la cima.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#contacto">
                      Solicita una consulta gratuita
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#portafolio">Ver nuestro trabajo</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/images/hero-tech.jpg" // Imagen de tecnología moderna y profesional
                width={550}
                height={550}
                alt="Soluciones tecnológicas de alto nivel"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-xl font-medium tracking-tight md:text-2xl">Empresas que confían en nosotros</h2>
              </div>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/logos/client-1.png"
                    alt="Cliente 1"
                    width={120}
                    height={40}
                    className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                </div>
                {/* Repite para los demás logos */}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Nuestros Servicios
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Soluciones que te llevan a la cima
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos servicios integrales de tecnología y marketing para ayudarte a alcanzar el máximo potencial
                  de tu negocio.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-12">
              <ServiceCard
                icon={<Code className="h-10 w-10" />}
                title="Desarrollo de Software"
                description="Creamos aplicaciones web y móviles personalizadas que se adaptan perfectamente a tus necesidades de negocio."
              />
              <ServiceCard
                icon={<Layout className="h-10 w-10" />}
                title="Diseño de Marketing"
                description="Estrategias de diseño y marketing digital que conectan con tu audiencia y potencian tu marca."
              />
              <ServiceCard
                icon={<Lightbulb className="h-10 w-10" />}
                title="Soluciones Tecnológicas"
                description="Implementamos tecnologías innovadoras para optimizar procesos y aumentar la eficiencia de tu empresa."
              />
              <ServiceCard
                icon={<Monitor className="h-10 w-10" />}
                title="Desarrollo Web"
                description="Sitios web modernos, rápidos y optimizados para buscadores que convierten visitantes en clientes."
              />
              <ServiceCard
                icon={<Zap className="h-10 w-10" />}
                title="Automatización"
                description="Automatizamos procesos repetitivos para que puedas enfocarte en lo que realmente importa para tu negocio."
              />
              <ServiceCard
                icon={<MessageSquare className="h-10 w-10" />}
                title="Consultoría Digital"
                description="Asesoramiento estratégico para transformar digitalmente tu empresa y mantenerte a la vanguardia."
              />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portafolio" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                  Nuestro Portafolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Proyectos que alcanzan la excelencia
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explora cómo hemos elevado empresas como la tuya hacia nuevas alturas de éxito digital.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-12">
              <PortfolioItem
                image="/images/portfolio/ecommerce.jpg"
                title="Plataforma E-commerce"
                category="Desarrollo Web"
                description="Tienda online completa con pasarela de pagos y gestión de inventario para una marca de moda premium."
              />
              <PortfolioItem
                image="/images/portfolio/app-gestion.jpg"
                title="App de Gestión"
                category="Desarrollo de Software"
                description="Aplicación móvil para la gestión de proyectos y equipos de trabajo con sincronización en tiempo real."
              />
              <PortfolioItem
                image="/placeholder.svg?height=400&width=600&text=Campana+Digital"
                title="Campaña Digital"
                category="Diseño de Marketing"
                description="Estrategia integral de marketing digital que aumentó las conversiones en un 150%."
              />
              <PortfolioItem
                image="/placeholder.svg?height=400&width=600&text=Dashboard+Analitico"
                title="Dashboard Analítico"
                category="Soluciones Tecnológicas"
                description="Panel de control personalizado para visualización de datos y toma de decisiones en tiempo real."
              />
              <PortfolioItem
                image="/placeholder.svg?height=400&width=600&text=Rediseno+Marca"
                title="Rediseño de Marca"
                category="Diseño de Marketing"
                description="Renovación completa de identidad visual y estrategia de comunicación para empresa de servicios."
              />
              <PortfolioItem
                image="/placeholder.svg?height=400&width=600&text=Sistema+Reservas"
                title="Sistema de Reservas"
                category="Desarrollo de Software"
                description="Plataforma de reservas online con integración de pagos y gestión de disponibilidad."
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" size="lg">
                Ver más proyectos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                src="/images/team.jpg"
                width={550}
                height={550}
                alt="Nuestro equipo de expertos"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Sobre Nosotros
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Expertos en elevar negocios a su máximo potencial
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Somos un equipo multidisciplinario de profesionales apasionados por la tecnología y el diseño. Desde
                    2015, hemos ayudado a más de 200 empresas a transformar sus ideas en soluciones digitales que las
                    llevan a la cima de su industria.
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <span>Más de 8 años de experiencia en el sector</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <span>Equipo de especialistas certificados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <span>Metodologías ágiles para resultados rápidos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <span>Enfoque centrado en resultados medibles</span>
                  </li>
                </ul>
                <div>
                  <Button size="lg" asChild>
                    <Link href="#contacto">
                      Conoce más sobre nosotros
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonios</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Clientes que alcanzaron la cima con nosotros
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre por qué las empresas confían en ZENITH SOLUTION para elevar sus proyectos tecnológicos y de
                  marketing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8 md:pt-12">
              <TestimonialCard
                quote="ZENITH SOLUTION transformó completamente nuestra presencia digital. Las ventas han aumentado un 200% desde que implementamos su solución e-commerce."
                author="María Rodríguez"
                position="CEO, Moda Express"
                avatar="/images/testimonials/maria.jpg"
              />
              <TestimonialCard
                quote="El equipo entendió perfectamente nuestras necesidades y entregó una aplicación que superó todas nuestras expectativas. Altamente recomendados."
                author="Carlos Méndez"
                position="Director de Operaciones, LogisTech"
                avatar="/placeholder.svg?height=100&width=100&text=Carlos+M"
              />
              <TestimonialCard
                quote="Su enfoque estratégico en marketing digital nos ayudó a posicionarnos como líderes en nuestro sector. Resultados impresionantes en tiempo récord."
                author="Laura Sánchez"
                position="CMO, Grupo Innovación"
                avatar="/placeholder.svg?height=100&width=100&text=Laura+S"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  ¿Listo para llevar tu negocio a nuevas alturas?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Agenda una consulta gratuita y descubre cómo podemos ayudarte a alcanzar el cenit de tu potencial
                  digital.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="#contacto">
                    Solicitar consulta gratuita
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Contacto</div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Hablemos sobre tu proyecto</h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas para discutir cómo
                    podemos ayudarte a alcanzar la cima.
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">info@zenithsolution.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-sm text-muted-foreground">+34 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium">Dirección</h3>
                      <p className="text-sm text-muted-foreground">Calle Tecnología 123, Madrid, España</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <ContactForm />
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Zap className="h-6 w-6 text-primary" />
              <ArrowUp className="h-3 w-3 text-primary absolute -top-1 right-0" />
            </div>
            <span className="text-lg font-bold">ZENITH SOLUTION</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2024 ZENITH SOLUTION. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              LinkedIn
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              Instagram
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

