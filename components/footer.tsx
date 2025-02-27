import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="font-bold text-2xl">
              Zenith<span className="text-primary">Solution</span>
            </Link>
            <p className="text-muted-foreground">
              Soluciones empresariales modernas para optimizar tus procesos de negocio
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-foreground transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicios/desarrollo-web"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/consultoria"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Consultoría IT
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/soporte"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Soporte Técnico
                </Link>
              </li>
              <li>
                <Link href="/servicios/cloud" className="text-muted-foreground hover:text-foreground transition-colors">
                  Soluciones Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/seguridad"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Seguridad Informática
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Suscríbete</h3>
            <p className="text-muted-foreground mb-4">Recibe nuestras últimas noticias y ofertas</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Tu email" required />
              <Button type="submit" className="w-full">
                Suscribirse
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Zenith Solution. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

