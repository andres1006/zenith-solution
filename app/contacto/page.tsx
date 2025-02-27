import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contacto</h1>
        <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
          Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader className="text-center">
            <Phone className="w-10 h-10 mx-auto text-primary mb-2" />
            <CardTitle>Teléfono</CardTitle>
            <CardDescription>Llámanos directamente</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg">+34 912 345 678</p>
            <p className="text-muted-foreground">Lun-Vie: 9:00 - 18:00</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <Mail className="w-10 h-10 mx-auto text-primary mb-2" />
            <CardTitle>Email</CardTitle>
            <CardDescription>Escríbenos un mensaje</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg">info@zenithsolution.com</p>
            <p className="text-muted-foreground">Respondemos en 24h</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <MapPin className="w-10 h-10 mx-auto text-primary mb-2" />
            <CardTitle>Oficina</CardTitle>
            <CardDescription>Visítanos personalmente</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg">Calle Principal 123</p>
            <p className="text-muted-foreground">Madrid, España</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Envíanos un mensaje</CardTitle>
            <CardDescription>
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="Asunto de tu mensaje" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} required />
              </div>
              <Button type="submit" className="w-full">
                Enviar mensaje
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="h-[400px] lg:h-auto rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38440883752!2d-3.819623!3d40.4381311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1645564562986!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa de ubicación"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

