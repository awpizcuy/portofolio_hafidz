import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Share2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './icons/SocialIcons';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Hafidz,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hafidz.fadilah28@gmail.com?subject=${subject}&body=${body}`;
    setIsSent(true);
    setTimeout(() => setIsSent(false), 8000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div 
          className="section-heading centered"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="info-card">
              <Mail className="info-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:hafidz.fadilah28@gmail.com">hafidz.fadilah28@gmail.com</a>
              </div>
            </div>
            
            <div className="info-card">
              <MapPin className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>

            <div className="info-card">
              <Share2 className="info-icon" />
              <div>
                <h4>Social Profiles</h4>
                <div className="social-links-contact">
                  <a href="https://github.com/awpizcuy" target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
                  <a href="https://www.linkedin.com/in/hafidzfadilahtinardi/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
                  <a href="https://www.instagram.com/hafidzfadilah_/" target="_blank" rel="noreferrer" aria-label="Instagram"><InstagramIcon size={20} /></a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
              {isSent && (
                <p className="form-feedback-notice">
                  Opening your email client... If it doesn't open automatically, you can email directly to <a href="mailto:hafidz.fadilah28@gmail.com">hafidz.fadilah28@gmail.com</a>.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
