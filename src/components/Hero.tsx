import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './icons/SocialIcons';
import '../styles/Hero.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      {/* Background Orbs */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>

      <div className="hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h4 variants={itemVariants} className="hero__greeting">
            Hello, Welcome to my portfolio
          </motion.h4>
          
          <motion.h1 variants={itemVariants} className="hero__title">
            Hi, I'm <span>Hafidz Fadilah</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="hero__subtitle">
            Frontend Developer & UI/UX Enthusiast
          </motion.h2>
          
          <motion.p variants={itemVariants} className="hero__description">
            I craft responsive, accessible, and visually appealing web experiences. 
            Passionate about modern web technologies and creating intuitive user interfaces that solve real-world problems.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero__actions">
            <a href="#projects" className="hero__btn hero__btn--primary">
              View Projects
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              Contact Me
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="hero__socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GithubIcon size={22} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon size={22} />
            </a>
            <a href="mailto:email@example.com" aria-label="Email">
              <Mail size={22} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
