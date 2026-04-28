import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const doctorImage = '/assets/images/doctor.webp';
  const nurseImage = '/assets/images/nurse.webp';
  const joyzenLogo = '/assets/icons/joyzen-icon.svg';
  const bgImage = '/assets/images/gradient-2.webp';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="features-section" id="programs">
      <div className="absolute inset-0 z-0">
        <img src={bgImage} alt="Background Gradient" className="w-full h-full object-cover object-[center_100%]" />
      </div>
      <div className="features-content relative z-10">
        <div className="features-wrapper">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="features-layout"
          >
            {/* Row 1 */}
            <motion.div variants={itemVariants} className="feature-card card-large card-tl justify-end">
              <div>
                <h3>Beyond Visits</h3>
                <p>Traditional care treats moments. Joyzen manages the entire journey continuously, not occasionally.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="feature-card card-mid card-tc justify-end">
              <div>
                <h3>Integrated Care</h3>
                <p>Doctors, lifestyle, and emotional support, working together as one system.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="feature-card card-large card-tr image-card">
              <img src={doctorImage} alt="Doctor consultation" loading="lazy" />
            </motion.div>

            {/* Row 2 (Logo Center) */}
            <motion.div variants={itemVariants} className="feature-card card-large card-ml justify-end">
              <div>
                <h3>Focused on Root, Not Symptoms</h3>
                <p>Hormones, lifestyle, fertility, long-term health, everything connected, everything managed.</p>
              </div>
            </motion.div>

            <div className="logo-center !p-0 -translate-y-[60%]">
              <img src={joyzenLogo} alt="Joyzen logo" className="w-64 h-auto block" loading="lazy" />
            </div>

            <motion.div variants={itemVariants} className="feature-card card-large card-mr justify-end">
              <div>
                <h3>Designed for Better Outcomes</h3>
                <p>Not more visits. Not more confusion. Clear direction. Continuous support. Real results.</p>
              </div>
            </motion.div>

            {/* Row 3 */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: "var(--nurse-y, -32%)", 
                  transition: { duration: 0.8, ease: "easeOut" } 
                }
              }} 
              className="feature-card card-mid card-bc image-card"
            >
              <img src={nurseImage} alt="Healthcare professional" loading="lazy" />
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Section Divider Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1500px] max-w-[150vw] h-[100px] bg-white blur-[30px] rounded-full z-20 translate-y-[40%] pointer-events-none" />
    </section>
  );
};

export default FeaturesSection;
