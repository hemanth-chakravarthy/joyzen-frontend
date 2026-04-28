import React from 'react';
import { motion } from 'framer-motion';
import { GlassEffect } from './liquid-glass';

const CtaSection = ({ handleBookCall }) => {
  const UserIcon = '/assets/icons/user-icon-black.svg';
  const Group = '/assets/images/Group.webp';
  const bgImage = '/assets/images/gradient-2.webp';

  return (
    <section className="cta-section" id="contact">
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Background Gradient" className="w-full h-full object-cover object-[70%_75%]" loading="lazy" />
      </div>
      <div className="cta-content relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <GlassEffect className="rounded-[28px]">
            <div className="cta-card !bg-transparent !border-none !shadow-none">
              <div className="cta-box text-center md:text-left">
                <h2 className="text-3xl md:text-4xl">Book a clarity call</h2>
                <p className="mx-auto md:mx-0">
                  If you would like to understand your reproductive health better or learn how Joyzen
                  can support your journey, you can schedule a conversation with our care team.
                </p>
                <button className="btn-cta-secondary mx-auto md:mx-0" onClick={handleBookCall}>
                  <span>Book Clarity Call</span>
                  <img src={UserIcon} alt="Share icon" className="w-4 h-4 ml-2" />
                </button>
              </div>

              <motion.div 
                className="cta-graphic w-full md:w-56 mt-8 md:mt-0"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img src={Group} alt="Group" className="w-full h-auto max-h-[300px] md:max-h-none object-contain rounded-[24px]" loading="lazy" />
              </motion.div>
            </div>
          </GlassEffect>
        </motion.div>
      </div>

      {/* Section Divider Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] max-w-[150vw] h-[120px] bg-white/60 blur-[40px] rounded-full z-20 pointer-events-none" />
    </section>
  );
};

export default CtaSection;
