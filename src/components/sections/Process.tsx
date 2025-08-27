import { Card, CardContent } from "../ui/card";
import { Search, PenTool, Hammer, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-navy" />,
      title: "Análisis y Consulta",
      description: "Estudiamos tus necesidades, el terreno y las normativas para crear una propuesta personalizada.",
      duration: "1-2 semanas"
    },
    {
      icon: <PenTool className="w-12 h-12 text-navy" />,
      title: "Diseño y Desarrollo",
      description: "Creamos los planos arquitectónicos, renders 3D y toda la documentación técnica necesaria.",
      duration: "4-8 semanas"
    },
    {
      icon: <Hammer className="w-12 h-12 text-navy" />,
      title: "Construcción",
      description: "Supervisamos la obra para garantizar que se ejecute según los planos y estándares de calidad.",
      duration: "Variable"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-navy" />,
      title: "Entrega",
      description: "Realizamos la entrega final con todos los acabados y documentación de garantías.",
      duration: "1 semana"
    }
  ];

  return (
    <section id="proceso" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-navy mb-6">
            Nuestro Proceso
          </h2>
          <p className="text-xl text-stone-dark max-w-3xl mx-auto leading-relaxed">
            Un enfoque metodológico que garantiza resultados excepcionales en cada etapa del proyecto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-elegant transition-all duration-500 border-0 bg-white text-center">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              
              <CardContent className="p-8 pt-12">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-stone-dark mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="inline-block px-3 py-1 bg-glass rounded-full text-sm text-navy font-medium">
                  {step.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Process Flow Line */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl">
          <div className="relative h-px bg-gradient-to-r from-transparent via-navy/30 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Process;