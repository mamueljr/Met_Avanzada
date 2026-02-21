import React from 'react';
import { GRADUATION_CAPABILITIES } from '../constants';
import { Globe, MapPin, Award, ArrowRight } from 'lucide-react';

const WhyChoose: React.FC = () => {
   return (
      <>
         {/* Why Choose */}
         <section id="por-que" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
               <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-uach-purple mb-4">
                     ¿Por Qué Elegir Esta Especialidad?
                  </h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                     { title: 'Formación Metodológica', desc: 'Dominio metodológico como eje central. Aplicarás técnicas avanzadas en tu propio proyecto.' },
                     { title: 'Publicación Continua', desc: 'Diseñado para que publiques múltiples artículos.' },
                     { title: 'Flexibilidad Total', desc: '100% en línea. Estudia desde cualquier lugar sin descuidar responsabilidades.' },
                     { title: 'Profesorado de Excelencia', desc: 'Investigadores con trayectoria reconocida y publicaciones de alto impacto.' },
                     { title: 'Red Interdisciplinaria', desc: 'Construirás una red profesional con compañeros de diversas disciplinas.' },
                     { title: 'Impacto Real', desc: 'Generarás conocimiento que influye en políticas públicas y prácticas profesionales.' }
                  ].map((item, i) => (
                     <div key={i} className="p-8 rounded-2xl bg-slate-50 hover:bg-indigo-50 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-uach-purple mb-3">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Graduation Outcomes */}
         <section id="graduacion" className="py-20 bg-indigo-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
               <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">¿Qué Podrás Hacer al Graduarte?</h2>
                  <p className="text-indigo-200 text-lg">Preparación integral para la excelencia investigadora</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {GRADUATION_CAPABILITIES.map((cap, idx) => (
                     <div key={idx} className="flex items-start gap-3 p-4 rounded-lg hover:bg-white/5 transition-colors">
                        <ArrowRight className="text-uach-gold flex-shrink-0 mt-1" size={20} />
                        <p className="text-gray-200 leading-relaxed">{cap}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Impact */}
         <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-serif font-bold text-uach-purple mb-6">Tu Impacto Potencial</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-8 border border-gray-100 rounded-2xl shadow-lg hover-lift glow-border">
                     <div className="w-16 h-16 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <MapPin size={32} />
                     </div>
                     <h4 className="text-xl font-bold mb-4">Nivel Local</h4>
                     <p className="text-gray-600">Generarás evidencia relevante para tu comunidad y región, informando políticas públicas y prácticas profesionales locales.</p>
                  </div>
                  <div className="text-center p-8 border border-gray-100 rounded-2xl shadow-lg transform md:-translate-y-4 bg-white z-10 hover-lift glow-border pulse-on-hover">
                     <div className="w-16 h-16 mx-auto bg-uach-gold/20 text-uach-gold rounded-full flex items-center justify-center mb-6">
                        <Award size={32} />
                     </div>
                     <h4 className="text-xl font-bold mb-4">Nivel Nacional</h4>
                     <p className="text-gray-600">Contribuirás al avance científico de México, fortaleciendo la investigación en ciencias sociales, humanidades, educación y salud.</p>
                  </div>
                  <div className="text-center p-8 border border-gray-100 rounded-2xl shadow-lg hover-lift glow-border">
                     <div className="w-16 h-16 mx-auto bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                        <Globe size={32} />
                     </div>
                     <h4 className="text-xl font-bold mb-4">Nivel Internacional</h4>
                     <p className="text-gray-600">Publicarás en revistas de alcance global, posicionando tu investigación en el escenario científico mundial.</p>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default WhyChoose;
