import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './icons/SocialIcons';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-text">Hafidz.</span>
            <p className="footer-desc">
              Building digital products, brands, and experience.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-icons">
              <a href="https://github.com/awpizcuy" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
              <a href="https://www.linkedin.com/in/hafidzfadilahtinardi/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
              <a href="https://www.instagram.com/hafidzfadilah_/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={20} /></a>
              <a href="mailto:hafidz.fadilah28@gmail.com" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Hafidz Fadilah. All rights reserved.
          </p>
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
