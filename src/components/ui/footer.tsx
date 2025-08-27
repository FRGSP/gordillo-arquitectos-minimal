import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Gordillo Arquitectos</h3>
            <p className="text-navy-light mb-4 leading-relaxed">
              Creando espacios excepcionales que transforman ideas en realidades arquitectónicas desde 1995.
            </p>
            <div className="flex space-x-4 text-sm">
              <span className="text-navy-light">© 2024</span>
              <span className="text-navy-light">Todos los derechos reservados</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {['Servicios', 'Proyectos', 'Proceso', 'Contacto'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-navy-light hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-navy-light" />
                <span className="text-sm text-navy-light">Av. Principal 123, Centro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-navy-light" />
                <span className="text-sm text-navy-light">+52 (55) 1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-navy-light" />
                <span className="text-sm text-navy-light">info@gordilloarquitectos.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-light/30 mt-8 pt-8 text-center">
          <p className="text-sm text-navy-light">
            Diseñado y desarrollado con pasión por la arquitectura
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;