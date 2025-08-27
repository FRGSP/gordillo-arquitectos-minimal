import { Card, CardContent } from "../ui/card";
import { Ruler, Building2, MapPin, Home, Wrench, Users, Leaf } from "lucide-react";
import serviceDesign from "../../assets/service-design.jpg";
import serviceManagement from "../../assets/service-management.jpg";
import serviceUrban from "../../assets/service-urban.jpg";
import serviceInterior from "../../assets/service-interior.jpg";
import serviceRenovation from "../../assets/service-renovation.jpg";
import serviceConsulting from "../../assets/service-consulting.jpg";
import serviceSustainable from "../../assets/service-sustainable.jpg";

const Services = () => {
  const services = [
    {
      icon: <Ruler className="w-8 h-8 text-navy" />,
      title: "Diseño Arquitectónico",
      description: "Proyectos residenciales y comerciales con diseños innovadores y funcionales que reflejan tu visión.",
      image: serviceDesign,
      items: [
        "Anteproyectos arquitectónicos",
        "Proyectos ejecutivos",
        "Renders y visualizaciones 3D",
        "Planos constructivos detallados"
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-navy" />,
      title: "Gestión de Proyectos",
      description: "Supervisión completa desde la planificación hasta la entrega, garantizando calidad y tiempos.",
      image: serviceManagement,
      items: [
        "Dirección arquitectónica de obra",
        "Supervisión de construcción",
        "Control de calidad",
        "Coordinación de especialidades"
      ]
    },
    {
      icon: <MapPin className="w-8 h-8 text-navy" />,
      title: "Planificación Urbana",
      description: "Desarrollo sostenible de espacios urbanos que mejoran la calidad de vida comunitaria.",
      image: serviceUrban,
      items: [
        "Planes maestros urbanos",
        "Zonificación y uso de suelo",
        "Espacios públicos",
        "Desarrollo inmobiliario"
      ]
    },
    {
      icon: <Home className="w-8 h-8 text-navy" />,
      title: "Interiorismo",
      description: "Diseño de interiores que combina estética, funcionalidad y bienestar en cada espacio.",
      image: serviceInterior,
      items: [
        "Diseño de mobiliario",
        "Selección de materiales",
        "Iluminación arquitectónica",
        "Decoración y ambientación"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8 text-navy" />,
      title: "Renovación y Restauración",
      description: "Rehabilitación de espacios existentes conservando el valor histórico y mejorando la funcionalidad.",
      image: serviceRenovation,
      items: [
        "Restauración de edificios históricos",
        "Remodelaciones integrales",
        "Adaptación a nuevos usos",
        "Conservación patrimonial"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-navy" />,
      title: "Consultoría Arquitectónica",
      description: "Asesoramiento especializado en todas las etapas del desarrollo de proyectos arquitectónicos.",
      image: serviceConsulting,
      items: [
        "Estudios de factibilidad",
        "Asesoría técnica especializada",
        "Peritajes arquitectónicos",
        "Gestión de permisos y licencias"
      ]
    },
    {
      icon: <Leaf className="w-8 h-8 text-navy" />,
      title: "Arquitectura Sustentable",
      description: "Diseños eco-eficientes que minimizan el impacto ambiental y maximizan el confort.",
      image: serviceSustainable,
      items: [
        "Certificaciones LEED y BREEAM",
        "Eficiencia energética",
        "Uso de materiales sostenibles",
        "Sistemas de captación pluvial"
      ]
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-stone-dark leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm text-stone-dark">
                      <span className="w-1.5 h-1.5 bg-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;