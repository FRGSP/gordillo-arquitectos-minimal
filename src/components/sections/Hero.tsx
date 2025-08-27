import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import heroImage from "../../assets/hero-architecture.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.querySelector('#servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Arquitectura moderna"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
          Gordillo
          <span className="block font-normal">Arquitectos</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Creamos espacios excepcionales que transforman ideas en realidades arquitectónicas
        </p>
        <Button 
          onClick={scrollToServices}
          variant="outline"
          size="lg"
          className="bg-white/10 text-white border-white/30 hover:bg-white hover:text-navy transition-all duration-500 backdrop-blur-sm"
        >
          Conoce nuestros servicios
        </Button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;