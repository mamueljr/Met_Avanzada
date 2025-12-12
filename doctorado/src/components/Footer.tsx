import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-uach-purple py-20">
        <div className="container mx-auto px-4 text-center max-w-4xl">
           <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">¿Listo para Transformar tu Carrera Investigadora?</h2>
           <p className="text-xl text-indigo-100 mb-8">
             Únete al Doctorado en Metodología Avanzada y conviértete en el investigador de excelencia que el mundo necesita.
           </p>
           <p className="text-lg text-white/80 mb-10 leading-relaxed font-light">
            Este programa doctoral está diseñado para formar investigadores de excelencia que contribuyan significativamente al avance del conocimiento en Ciencias Sociales, Humanidades, Educación y Salud.
           </p>
           {/*<button className="bg-uach-gold text-uach-purple font-bold py-4 px-12 rounded-full text-lg hover:bg-white transition-all shadow-lg hover:scale-105">
             Solicitar Información
           </button>*/}
        </div>
      </div>

      <div className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
           <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="font-bold text-lg">Universidad Autónoma de Chihuahua</h3>
              <p className="text-gray-400 text-sm">Facultad de Ciencias de la Cultura Física</p>
           </div>
           <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Aviso de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a>
           </div>
        </div>
        <div className="text-center mt-8 text-gray-600 text-xs">
          &copy; {new Date().getFullYear()} UACH. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
