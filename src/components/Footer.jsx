import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const joyzenLogo = '/assets/images/footer-bg.webp';

  return (
    <footer className="footer">
      <div className="footer-background">
        <img src={joyzenLogo} alt="Joyzen" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="footer-content"
      >
        <div className="footer-top-right">
          <p>Email: <a href="mailto:info@joyzenlife.com" className="hover:text-[#E67E22] transition-colors">info@joyzenlife.com</a></p>
          <p>Instagram: <a href="https://instagram.com/joyzen.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#E67E22] transition-colors">@joyzen.in</a></p>
        </div>
        
        <div className="footer-bottom-info text-black">
          <p>2026 Joyzen. Built for healthcare. Designed for trust.</p>
          <p>Designed and Developed by TIC Global Services</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
