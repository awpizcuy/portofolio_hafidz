import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/About.css';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image">
              <img 
                src="/profile.jpg" 
                alt="Hafidz Fadilah" 
                className="about-img" 
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div 
            className="about-text-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="about-description">
              I am an Information Systems graduate from Telkom University (GPA 3.33/4.00) with hands-on experience as an IT Business Solutions Intern at PT Pertamina Hulu Indonesia. During my internship, I specialized in building interactive Metabase analytics dashboards and integrating enterprise AI Chatbot services.
            </p>
            <p className="about-description">
              As a BNSP-certified National Web Developer, I specialize in full-stack web and mobile development using Laravel, React, and React Native. I believe in writing clean, maintainable code, solving real-world problems, and constantly striving to deliver reliable digital solutions—whether in Software Engineering or Quality Assurance roles.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
