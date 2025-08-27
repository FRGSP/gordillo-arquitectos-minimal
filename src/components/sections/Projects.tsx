import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import projectResidential from "../../assets/project-residential.jpg";
import projectCommercial from "../../assets/project-commercial.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Casa Moderna Mediterránea",
      category: "Residencial",
      description: "Vivienda unifamiliar que integra diseño contemporáneo con elementos tradicionales mediterráneos.",
      image: projectResidential,
      area: "350 m²",
      year: "2023"
    },
    {
      title: "Centro Corporativo Norte",
      category: "Comercial",
      description: "Edificio de oficinas sostenible con certificación LEED Gold y espacios de trabajo colaborativo.",
      image: projectCommercial,
      area: "2,800 m²",
      year: "2023"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-stone-dark max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una oportunidad de crear espacios únicos que inspiran y perduran en el tiempo
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-500 border-0 overflow-hidden">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-navy mb-3">
                  {project.title}
                </h3>
                <p className="text-stone-dark mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-6 text-sm text-stone-dark">
                    <span><strong>Área:</strong> {project.area}</span>
                    <span><strong>Año:</strong> {project.year}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                  Ver detalles
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;