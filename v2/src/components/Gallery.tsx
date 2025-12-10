import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { GALLERY_ITEMS } from '../constants';

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const selectedImage = selectedImageIndex !== null ? GALLERY_ITEMS[selectedImageIndex] : null;

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImageIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-serif">
            Nuestras <span className="text-uach-gold">Instalaciones</span>
          </h2>
          <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12 lg:mb-20">
            Explora los espacios que hacen de nuestra facultad un lugar único para aprender y crecer.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <RevealOnScroll key={item.id} delay={index * 0.1}>
              <div 
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group cursor-pointer relative"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-uach-gold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImageIndex(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 text-white hover:text-uach-gold transition-colors z-[60]"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={32} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white bg-black/50 px-4 py-2 rounded-full text-sm font-medium z-[60]">
            {selectedImageIndex !== null && `${selectedImageIndex + 1} / ${GALLERY_ITEMS.length}`}
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-uach-gold transition-colors z-[60] bg-black/30 hover:bg-black/50 rounded-full p-3"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-uach-gold transition-colors z-[60] bg-black/30 hover:bg-black/50 rounded-full p-3"
          >
            <ChevronRight size={32} />
          </button>
          
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-2xl font-bold text-uach-gold">{selectedImage.title}</h3>
              <p className="text-gray-300 mt-2">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
