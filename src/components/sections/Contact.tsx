import { Card, CardContent } from "../ui/card";
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8 text-navy" />,
      title: "Nuestra Ubicación",
      content: "Av. Principal 123, Centro Histórico\nCiudad, Estado 12345",
      description: "Visita nuestras oficinas en el corazón de la ciudad"
    },
    {
      icon: <Phone className="w-8 h-8 text-navy" />,
      title: "Teléfonos",
      content: "+52 (55) 1234-5678\n+52 (55) 8765-4321",
      description: "Estamos disponibles para atender tus consultas"
    },
    {
      icon: <Mail className="w-8 h-8 text-navy" />,
      title: "Correo Electrónico",
      content: "info@gordilloarquitectos.com\nproyectos@gordilloarquitectos.com",
      description: "Envíanos tu consulta y te responderemos pronto"
    },
    {
      icon: <Clock className="w-8 h-8 text-navy" />,
      title: "Horarios de Atención",
      content: "Lunes a Viernes: 9:00 - 18:00\nSábados: 10:00 - 14:00\nDomingos: Cerrado",
      description: "Agenda tu cita dentro de nuestros horarios"
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
            Estamos listos para dar vida a tu próximo proyecto arquitectónico. 
            Ponte en contacto con nosotros para una consulta personalizada.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-glass rounded-full">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-navy mb-3 text-lg">
                    {info.title}
                  </h3>
                  <p className="text-stone-dark text-sm whitespace-pre-line mb-3 font-medium">
                    {info.content}
                  </p>
                  <p className="text-stone-dark text-xs">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Why Choose Us */}
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Building className="w-8 h-8 text-navy mr-3" />
                <h3 className="text-2xl font-semibold text-navy">
                  ¿Por qué elegirnos?
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">30+ años de experiencia</h4>
                    <p className="text-stone-dark text-sm">Trayectoria consolidada en el sector arquitectónico</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Equipo multidisciplinario</h4>
                    <p className="text-stone-dark text-sm">Profesionales especializados en cada área</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Proyectos sustentables</h4>
                    <p className="text-stone-dark text-sm">Comprometidos con el medio ambiente</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Atención personalizada</h4>
                    <p className="text-stone-dark text-sm">Cada proyecto es único y especial</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Map Section */}
        <Card className="shadow-card border-0">
          <CardContent className="p-0">
            <div className="h-96 bg-gradient-subtle rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-center text-stone-dark z-10">
                <MapPin className="w-16 h-16 mx-auto mb-6 text-navy" />
                <h3 className="text-2xl font-semibold text-navy mb-3">Nuestra Ubicación</h3>
                <p className="text-lg mb-2">Av. Principal 123, Centro Histórico</p>
                <p className="text-sm text-stone-dark">
                  Fácil acceso en transporte público y amplio estacionamiento disponible
                </p>
              </div>
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-navy/20 to-transparent"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;