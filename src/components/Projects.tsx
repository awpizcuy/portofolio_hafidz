import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import '../styles/Projects.css';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  externalUrl: string;
}

const projectsData: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart functionality, secure checkout, and user authentication.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: '#',
    externalUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A drag-and-drop task board for teams to organize workflows, assign tasks, and track progress.',
    tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    githubUrl: '#',
    externalUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React, showcasing projects and skills with smooth animations.',
    tags: ['React', 'TypeScript', 'Framer Motion'],
    githubUrl: '#',
    externalUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather data visualization with location-based forecasts and interactive charts.',
    tags: ['React', 'API Integration', 'Chart.js'],
    githubUrl: '#',
    externalUrl: '#',
  }
];

const Projects: React.FC = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' as const }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div 
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </motion.div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} className="project-card" variants={itemVariants}>
              <div className="project-header">
                <div className="project-icon">
                  <Folder size={40} color="#6c63ff" />
                </div>
                <div className="project-links">
                  <a href={project.githubUrl} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                    <GithubIcon size={20} />
                  </a>
                  <a href={project.externalUrl} aria-label="External Link" target="_blank" rel="noreferrer">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  <a href={project.externalUrl} target="_blank" rel="noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
              </div>
              <ul className="project-tags">
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
