import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, FolderGit2, Users } from 'lucide-react';
import '../styles/About.css';

const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: <Briefcase className="stat-icon" />,
      value: "2+",
      label: "Years Experience"
    },
    {
      icon: <FolderGit2 className="stat-icon" />,
      value: "10+",
      label: "Projects Completed"
    },
    {
      icon: <Users className="stat-icon" />,
      value: "5+",
      label: "Happy Clients"
    }
  ];

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
              <div className="image-placeholder"></div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text-wrapper"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="about-description">
              Hello! I'm a passionate developer who loves building digital experiences. My journey in web development started a few years ago, and since then, I've been continuously learning and exploring new technologies.
            </p>
            <p className="about-description">
              I specialize in creating modern, responsive, and user-friendly interfaces using React and TypeScript. I believe in writing clean, maintainable code and always strive to deliver the best possible solution for any given problem.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  {stat.icon}
                  <div className="stat-info">
                    <h3 className="stat-value">{stat.value}</h3>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
