"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          Zenith<span className="text-primary">Solution</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/servicios" className="text-muted-foreground hover:text-foreground transition-colors">
            Servicios
          </Link>
          <Link href="/nosotros" className="text-muted-foreground hover:text-foreground transition-colors">
            Nosotros
          </Link>
          <Link href="/proyectos" className="text-muted-foreground hover:text-foreground transition-colors">
            Proyectos
          </Link>
          <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button asChild>
            <Link href="/contacto">Solicitar Presupuesto</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-4 md:hidden">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/servicios"
                  className="text-foreground py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Servicios
                </Link>
                <Link
                  href="/nosotros"
                  className="text-foreground py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Nosotros
                </Link>
                <Link
                  href="/proyectos"
                  className="text-foreground py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Proyectos
                </Link>
                <Link
                  href="/blog"
                  className="text-foreground py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/contacto"
                  className="text-foreground py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </Link>
                <Button className="mt-4" asChild>
                  <Link href="/contacto" onClick={() => setIsOpen(false)}>
                    Solicitar Presupuesto
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

