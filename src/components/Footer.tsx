import { Mail, Phone, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handlePrivacyPolicyClick = () => {
    navigate('/politica-privacidad');
  };
  return (
    <footer className="bg-gradient-to-b from-[#0a0a2e] to-[#000018] border-t border-[#4B32FF]/20 px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300 font-rajdhani hover:text-[#04CFFB] transition-colors">
                <Mail className="w-5 h-5 mr-3 text-[#4B32FF]" />
                <a href="mailto:jaravenasabugo@gmail.com">nexom2025ai@gmail.com</a>
              </div>
              <div className="flex items-center text-gray-300 font-rajdhani hover:text-[#04CFFB] transition-colors">
                <Phone className="w-5 h-5 mr-3 text-[#4B32FF]" />
                <a href="tel:+569 96767524">+569 96767524</a>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
              Servicios
            </h3>
            <ul className="space-y-3 text-gray-300 font-rajdhani">
              <li className="hover:text-[#04CFFB] transition-colors cursor-pointer">Automatización de Procesos</li>
              <li className="hover:text-[#04CFFB] transition-colors cursor-pointer">Integración de Sistemas</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nexom.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-lg flex items-center justify-center hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61581352422042&locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-lg flex items-center justify-center hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://wa.me/56971555426?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20los%20servicios%20de%20automatización%20de%20Nexom%20AI"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-lg flex items-center justify-center hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#4B32FF]/20 pt-8 text-center">
          <p className="text-gray-400 font-rajdhani mb-4">
            © 2025 Nexom AI. Todos los derechos reservados. | Transformamos tu negocio con automatizaciones a la medida.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={handlePrivacyPolicyClick}
              className="text-[#04CFFB] font-rajdhani hover:underline transition-all duration-300 hover:text-white cursor-pointer"
            >
              Política de Privacidad de Nexom AI
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;