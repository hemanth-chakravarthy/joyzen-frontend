import React from 'react';
import { motion } from 'framer-motion';

const ModernLifeSection = () => {
  const profileImage = '/assets/images/profile.webp';
  const bgImage = '/assets/images/gradient-4.webp';

  return (
    <section className="modern-life-section" id="who">
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Background Gradient" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="modern-life-content relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="modern-life-title"
        >
          <h2 className="text-solid">Built for</h2>          
          <h1 className="title-large">Modern Life</h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="modern-life-image"
        >
          <img src={profileImage} alt="Profile" loading="lazy" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="modern-life-info"
        >
          <h3>Focused on Root, Not Symptoms</h3>
          <p>
            Joyzen was built on a simple realization: life has changed, but healthcare hasn't kept up. 
            Care still begins too late, Joyzen enables earlier understanding, proactive care, and continuous guidance.
          </p>
        </motion.div>
      </div>

      {/* Section Divider Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1500px] max-w-[150vw] h-[100px] bg-white blur-[30px] rounded-full z-20 translate-y-[40%] pointer-events-none" />
    </section>
  );
};

export default ModernLifeSection;
