import { Card, CardContent } from "../ui/card";
import { Ruler, Building2, MapPin, Home } from "lucide-react";
import serviceDesign from "../../assets/service-design.jpg";
import serviceManagement from "../../assets/service-management.jpg";
import serviceUrban from "../../assets/service-urban.jpg";
import serviceInterior from "../../assets/service-interior.jpg";

const Services = () => {
  const services = [
    {
      icon: <Ruler className="w-8 h-8 text-navy" />,
      title: "Diseño Arquitectónico",
      description: "Proyectos residenciales y comerciales con diseños innovadores y funcionales que reflejan tu visión.",
      image: serviceDesign
    },
    {
      icon: <Building2 className="w-8 h-8 text-navy" />,
      title: "Gestión de Proyectos",
      description: "Supervisión completa desde la planificación hasta la entrega, garantizando calidad y tiempos.",
      image: serviceManagement
    },
    {
      icon: <MapPin className="w-8 h-8 text-navy" />,
      title: "Planificación Urbana",
      description: "Desarrollo sostenible de espacios urbanos que mejoran la calidad de vida comunitaria.",
      image: serviceUrban
    },
    {
      icon: <Home className="w-8 h-8 text-navy" />,
      title: "Interiorismo",
      description: "Diseño de interiores que combina estética, funcionalidad y bienestar en cada espacio.",
      image: serviceInterior
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-stone-dark max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones arquitectónicas integrales adaptadas a las necesidades específicas de cada proyecto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-500 border-0 bg-white overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/20 transition-colors duration-500"></div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-navy ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-stone-dark leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;