import React from 'react';
import { STATS } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="caracteristicas" className="py-20 bg-uach-dark text-white">
       <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {STATS.map((stat, idx) => (
                  <div key={idx} className="p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="text-4xl md:text-5xl font-bold text-uach-gold mb-2">{stat.value}</div>
                      <div className="text-xl font-medium mb-1">{stat.label}</div>
                      <div className="text-sm text-gray-400">{stat.subtext}</div>
                  </div>
              ))}
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-10">Estructura Curricular</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center">
                    <div className="text-5xl font-bold text-indigo-100 mb-2">4</div>
                    <p className="font-medium">Seminarios de Formación Específica</p>
                    <p className="text-xs text-gray-500 mt-2">Especialización temática</p>
                </div>
                <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center">
                    <div className="text-5xl font-bold text-indigo-100 mb-2">7</div>
                    <p className="font-medium">Seminarios de Tesis y Taller</p>
                    <p className="text-xs text-gray-500 mt-2">Desarrollo del proyecto</p>
                </div>
                <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center">
                    <div className="text-5xl font-bold text-indigo-100 mb-2">15</div>
                    <p className="font-medium">Cursos-Taller de Metodología</p>
                    <p className="text-xs text-gray-500 mt-2">Competencias técnicas</p>
                </div>
                <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg text-center">
                    <div className="text-5xl font-bold text-indigo-100 mb-2">4</div>
                    <p className="font-medium">Coloquios de Investigación</p>
                    <p className="text-xs text-gray-500 mt-2">Difusión y retroalimentación</p>
                </div>
            </div>
          </div>
       </div>
    </section>
  );
};

export default Features;
