import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="que-es" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-uach-purple mb-4">
            ¿Qué es el Doctorado en Metodología Avanzada?
          </h2>
          <div className="w-24 h-1 bg-uach-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                    src="https://picsum.photos/800/600" 
                    alt="Estudiantes de doctorado colaborando" 
                    className="w-full h-auto object-cover"
                />
            </div>
            <div className="space-y-8">
                <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <Target size={24} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Enfoque Único</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Un programa totalmente en línea que combina rigor metodológico con especialización temática. 
                            A diferencia de los doctorados tradicionales que se enfocan solo en el contenido disciplinar, 
                            nuestro programa te garantiza el dominio profundo de las herramientas metodológicas y analíticas.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <Users size={24} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Para Profesionales de</h3>
                        <ul className="grid grid-cols-2 gap-2 text-gray-600">
                            <li className="flex items-center"><span className="w-2 h-2 bg-uach-gold rounded-full mr-2"></span>Educación</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-uach-gold rounded-full mr-2"></span>Psicología</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-uach-gold rounded-full mr-2"></span>Salud</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-uach-gold rounded-full mr-2"></span>Cultura Física</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-uach-gold rounded-full mr-2"></span>Sociología</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-uach-gold rounded-full mr-2"></span>Disciplinas afines</li>
                        </ul>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <TrendingUp size={24} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Relevancia Actual</h3>
                        <p className="text-gray-600 leading-relaxed">
                            En un mundo donde la investigación de calidad es fundamental para tomar decisiones basadas en evidencia, 
                            dominar metodologías avanzadas te convierte en un profesional altamente valorado por organizaciones 
                            académicas, gubernamentales, privadas y de la sociedad civil.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
