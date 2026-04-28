import React from 'react';
import { GlassFilter } from './components/ui/liquid-glass';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ModernLifeSection from './components/ModernLifeSection';
import CtaSection from './components/ui/CtaSection';
import Footer from './components/Footer';

const Landing = () => {
  const handleBookCall = () => {
    alert('Book Clarity Call - Integration needed');
  };

  return (
    <div className="landing-page">
      <GlassFilter />
      <HeroSection handleBookCall={handleBookCall} />
      <AboutSection />
      <FeaturesSection />
      <ModernLifeSection />
      <CtaSection handleBookCall={handleBookCall} />
      <Footer />
    </div>
  );
};

export default Landing;
