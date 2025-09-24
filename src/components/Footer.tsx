import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
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
                <a href="mailto:contacto@ia-empresarial.com">contacto@ia-empresarial.com</a>
              </div>
              <div className="flex items-center text-gray-300 font-rajdhani hover:text-[#04CFFB] transition-colors">
                <Phone className="w-5 h-5 mr-3 text-[#4B32FF]" />
                <a href="tel:+1234567890">+1 (234) 567-890</a>
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
              <li className="hover:text-[#04CFFB] transition-colors cursor-pointer">IA Personalizada</li>
              <li className="hover:text-[#04CFFB] transition-colors cursor-pointer">Consultoría Tecnológica</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-2xl font-orbitron font-bold text-white mb-6">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-lg flex items-center justify-center hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-lg flex items-center justify-center hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="w-6 h-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-r from-[#4B32FF] to-[#2784FA] rounded-lg flex items-center justify-center hover:from-[#5027FE] hover:to-[#04CFFB] transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#4B32FF]/20 pt-8 text-center">
          <p className="text-gray-400 font-rajdhani">
            © 2024 IA Empresarial. Todos los derechos reservados. | Transformamos tu negocio con inteligencia artificial.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;