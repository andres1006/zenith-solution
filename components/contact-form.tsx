"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, CheckCircle2, ArrowUp } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4">
        <div className="rounded-full bg-primary/10 p-3 relative">
          <CheckCircle2 className="h-8 w-8 text-primary" />
          <ArrowUp className="h-3 w-3 text-primary absolute top-1 right-2" />
        </div>
        <h3 className="text-xl font-bold">¡Mensaje enviado!</h3>
        <p className="text-muted-foreground">
          Gracias por contactar con ZENITH SOLUTION. Nos pondremos en contacto contigo lo antes posible para ayudarte a
          alcanzar el máximo potencial de tu negocio.
        </p>
        <Button variant="outline" className="mt-4" onClick={() => setIsSubmitted(false)}>
          Enviar otro mensaje
        </Button>
      </CardContent>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nombre</Label>
          <Input id="name" placeholder="Tu nombre" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="tu@email.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Teléfono (opcional)</Label>
          <Input id="phone" placeholder="+34 123 456 789" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Servicio de interés</Label>
          <select
            id="service"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            required
          >
            <option value="">Selecciona un servicio</option>
            <option value="desarrollo-software">Desarrollo de Software</option>
            <option value="diseno-marketing">Diseño de Marketing</option>
            <option value="soluciones-tecnologicas">Soluciones Tecnológicas</option>
            <option value="desarrollo-web">Desarrollo Web</option>
            <option value="automatizacion">Automatización</option>
            <option value="consultoria">Consultoría Digital</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Mensaje</Label>
          <Textarea id="message" placeholder="Cuéntanos sobre tu proyecto..." className="min-h-[120px]" required />
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </CardFooter>
    </form>
  )
}

