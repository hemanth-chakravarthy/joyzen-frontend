import { motion } from 'framer-motion';
import Navbar from './Navbar';

const HeroSection = ({ handleBookCall }) => {
  const heroImage = '/assets/images/hero.webp';

  return (
    <section className="hero-section relative">
      
      {/* Background */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="hero-background"
      >
        <img src={heroImage} alt="Hero background" className="hero-image brightness-75" />
        <div className="hero-overlay"></div>
      </motion.div>

      {/* Navbar */}
      <Navbar handleBookCall={handleBookCall} />

      {/* Content */}
      <div className="hero-content relative z-10 flex flex-col justify-end h-full pb-32 md:pb-40">
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero-title max-w-none whitespace-nowrap"
        >
          A New Health System
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="hero-subtitle mt-4"
        >
          Joyzen is not a clinic.<br />
          It's a new way of delivering reproductive healthcare.
        </motion.p>

      </div>

      {/* Section Divider Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1500px] max-w-[150vw] h-[160px] bg-white blur-[40px] rounded-full z-20 translate-y-[40%] pointer-events-none" />
    </section>
  );
};

export default HeroSection;