import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Pillars from './components/Pillars';
import Curriculum from './components/Curriculum';
import Specializations from './components/Specializations';
import Competencies from './components/Competencies';
import Features from './components/Features';
import WhyChoose from './components/WhyChoose';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="h-16 bg-gradient-to-r from-uach-purple/5 via-uach-gold/20 to-transparent" aria-hidden="true" />
        <About />
        <div className="h-12 bg-gradient-to-r from-uach-gold/20 via-transparent to-uach-purple/5" aria-hidden="true" />
        <Pillars />
        <div className="h-12 bg-gradient-to-r from-uach-purple/5 via-white to-uach-gold/10" aria-hidden="true" />
        <Curriculum />
        <div className="h-12 bg-gradient-to-r from-uach-gold/20 via-transparent to-uach-purple/5" aria-hidden="true" />
        <Specializations />
        <div className="h-12 bg-gradient-to-r from-uach-purple/5 via-white to-uach-gold/10" aria-hidden="true" />
        <Competencies />
        <div className="h-12 bg-gradient-to-r from-uach-gold/20 via-transparent to-uach-purple/5" aria-hidden="true" />
        <Features />
        <div className="h-12 bg-gradient-to-r from-uach-purple/5 via-white to-uach-gold/10" aria-hidden="true" />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  );
};

export default App;
