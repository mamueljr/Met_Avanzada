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
        <About />
        <Pillars />
        <Curriculum />
        <Specializations />
        <Competencies />
        <Features />
        <WhyChoose />
      </main>
      <Footer />
    </div>
  );
};

export default App;
