import React from 'react';
import { MagicText } from './ui/magic-text';

const AboutSection = () => {
  const bgImage = '/assets/images/gradient-1.webp';

  return (
    <section className="about-section" id="about">
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Background Gradient" className="w-full h-full object-cover object-[center_70%]" loading="lazy" />
      </div>
      <div className="about-content relative z-10">
        <MagicText 
          text="Joyzen replaces fragmented care with a continuous system where hormones, fertility, and long-term health are managed together. Online or in clinic, it's the same person guiding your care. Tracking your progress. Adjusting your treatment. Moving you forward. Joyzen connects you to the right doctor and keeps your care continuous across every step. Always accessible speak to your doctor anytime not just during appointment."
        />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1500px] max-w-[150vw] h-[160px] bg-white blur-[40px] rounded-full z-20 translate-y-[40%] pointer-events-none" />
    </section>
  );
};

export default AboutSection;
