import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-navy" />,
      title: "Dirección",
      content: "Av. Principal 123, Centro Histórico\nCiudad, Estado 12345"
    },
    {
      icon: <Phone className="w-6 h-6 text-navy" />,
      title: "Teléfono",
      content: "+52 (55) 1234-5678\n+52 (55) 8765-4321"
    },
    {
      icon: <Mail className="w-6 h-6 text-navy" />,
      title: "Email",
      content: "info@gordilloarquitectos.com\nproyectos@gordilloarquitectos.com"
    },
    {
      icon: <Clock className="w-6 h-6 text-navy" />,
      title: "Horarios",
      content: "Lunes a Viernes: 9:00 - 18:00\nSábados: 10:00 - 14:00"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-6">
            Contacto
          </h2>
          <p className="text-xl text-stone-dark max-w-3xl mx-auto leading-relaxed">
            Estamos listos para dar vida a tu próximo proyecto arquitectónico
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-navy mb-6">
                Solicita una consulta
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Nombre"
                    className="border-border focus:border-navy transition-colors duration-300"
                  />
                  <Input 
                    placeholder="Apellido"
                    className="border-border focus:border-navy transition-colors duration-300"
                  />
                </div>
                <Input 
                  type="email"
                  placeholder="Email"
                  className="border-border focus:border-navy transition-colors duration-300"
                />
                <Input 
                  placeholder="Teléfono"
                  className="border-border focus:border-navy transition-colors duration-300"
                />
                <Input 
                  placeholder="Tipo de proyecto"
                  className="border-border focus:border-navy transition-colors duration-300"
                />
                <Textarea 
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={5}
                  className="border-border focus:border-navy transition-colors duration-300 resize-none"
                />
                <Button className="w-full bg-navy hover:bg-navy-light transition-colors duration-300">
                  Enviar consulta
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info and Map */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-2 bg-glass rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy mb-2">
                          {info.title}
                        </h4>
                        <p className="text-stone-dark text-sm whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Map Placeholder */}
            <Card className="shadow-card border-0">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center">
                  <div className="text-center text-stone-dark">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-navy" />
                    <p className="text-lg font-medium">Mapa interactivo</p>
                    <p className="text-sm">Ubicación de nuestras oficinas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;