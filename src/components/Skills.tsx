import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Terminal, 
  Wrench, 
  Database,
  Globe,
  CheckCircle2
} from 'lucide-react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categories = [
    {
      title: "Frontend",
      icon: <Globe className="category-icon" />,
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: <Terminal className="category-icon" />,
      skills: ["Node.js", "Express", "REST APIs"]
    },
    {
      title: "Database",
      icon: <Database className="category-icon" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="category-icon" />,
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Vite"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="section-header"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
        </motion.div>

        <div className="skills-content" ref={ref}>
          {categories.map((category, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <div className="category-header">
                {category.icon}
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div 
                    key={skillIdx} 
                    className="skill-card"
                    variants={itemVariants}
                  >
                    <CheckCircle2 className="skill-icon" />
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
