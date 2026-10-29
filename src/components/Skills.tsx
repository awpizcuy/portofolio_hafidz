import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Terminal, 
  Wrench, 
  Database,
  Globe,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categories = [
    {
      title: "Frontend Development",
      icon: <Globe className="category-icon" />,
      skills: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML5 & CSS3"]
    },
    {
      title: "Backend Development",
      icon: <Terminal className="category-icon" />,
      skills: ["Laravel", "PHP", "Node.js", "Express", "RESTful APIs"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="category-icon" />,
      skills: ["Kotlin", "Android Studio", "Flutter", "Dart", "React Native"]
    },
    {
      title: "Database & Analytics",
      icon: <Database className="category-icon" />,
      skills: ["MySQL", "PostgreSQL", "Metabase"]
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench className="category-icon" />,
      skills: ["Git", "GitHub", "Postman", "Vite", "Figma"]
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
