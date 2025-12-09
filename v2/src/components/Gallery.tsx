import React from 'react';
import RevealOnScroll from './RevealOnScroll';

// 1. Importa las nuevas imágenes desde la carpeta de assets
import imgAlberca from '../assets/fccf-alberca.jpg';
import imgExplanada from '../assets/fccf-explanada.jpg';
import imgGym from '../assets/fccf-gym.jpg';

// 2. Organiza la información de la galería en un array para que sea fácil de manejar
const galleryItems = [
  {
    src: imgExplanada,
    alt: 'Mural en la explanada de la FCCF',
    title: 'Explanada Principal',
    description: 'El corazón de la facultad, adornado con un mural vibrante que representa la cultura y el deporte.'
  },
  {
    src: imgGym,
    alt: 'Gimnasio de la FCCF',
    title: 'Gimnasio',
    description: 'Instalaciones equipadas para el desarrollo físico y la práctica de diversas disciplinas deportivas.'
  },
  {
    src: imgAlberca,
    alt: 'Alberca olímpica de la FCCF',
    title: 'Alberca Olímpica',
    description: 'Una alberca de primer nivel para la natación y actividades acuáticas.'
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-serif">
            Nuestras <span className="text-uach-gold">Instalaciones</span>
          </h2>
          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12 lg:mb-20">
            Explora los espacios que hacen de nuestra facultad un lugar único para aprender y crecer.
          </p>
        </RevealOnScroll>

        {/* 3. Crea una cuadrícula (grid) responsiva para las imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 0.1}>
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group transform transition-transform duration-300 hover:scale-105">
                <img src={item.src} alt={item.alt} className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-uach-gold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;