import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Calendar, UserCheck, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import '../styles/ProjectModal.css';

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  features?: string[];
  role?: string;
  year?: string;
  image?: string;
  gallery?: string[];
  githubUrl: string;
  externalUrl: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImage, setActiveImage] = useState<string | undefined>(undefined);

  // Perbarui activeImage saat projek berubah
  useEffect(() => {
    setActiveImage(project?.image);
  }, [project]);

  // Tutup modal ketika tombol ESC ditekan & kunci scroll halaman
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  // Kumpulkan semua gambar (utama + gallery)
  const allImages = project
    ? Array.from(new Set([project.image, ...(project.gallery || [])].filter(Boolean))) as string[]
    : [];

  const displayImage = activeImage || (allImages.length > 0 ? allImages[0] : undefined);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Tombol Tutup (X) */}
            <button 
              className="modal-close-btn" 
              onClick={onClose}
              aria-label="Tutup detail projek"
            >
              <X size={20} />
            </button>

            {/* Media / Banner Header */}
            <div className="modal-banner">
              {displayImage ? (
                <div className="modal-image-wrapper">
                  <a href={displayImage} target="_blank" rel="noreferrer" title="Klik untuk membuka gambar penuh">
                    <img 
                      src={displayImage} 
                      alt={project.title} 
                      className="modal-image" 
                    />
                  </a>
                  <a 
                    href={displayImage} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="modal-zoom-hint"
                    title="Buka gambar resolusi penuh di tab baru"
                  >
                    <ZoomIn size={14} />
                    <span>Perbesar Penuh</span>
                  </a>
                </div>
              ) : (
                <div className="modal-image-placeholder">
                  <div className="placeholder-pattern"></div>
                  <span className="placeholder-title">{project.title}</span>
                </div>
              )}
            </div>

            {/* Gallery Thumbnail Selector (jika ada lebih dari 1 gambar) */}
            {allImages.length > 1 && (
              <div className="modal-gallery-bar">
                <span className="gallery-label">
                  <ImageIcon size={14} /> Pratinjau Tangkapan Layar:
                </span>
                <div className="gallery-thumbnails">
                  {allImages.map((img, idx) => (
                    <button
                      key={idx}
                      className={`gallery-thumb-btn ${displayImage === img ? 'active' : ''}`}
                      onClick={() => setActiveImage(img)}
                      type="button"
                      aria-label={`Lihat gambar ke-${idx + 1}`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Konten Modal */}
            <div className="modal-body">
              {/* Meta Informasi (Role & Tahun) */}
              <div className="modal-meta">
                {project.role && (
                  <span className="meta-badge">
                    <UserCheck size={14} />
                    {project.role}
                  </span>
                )}
                {project.year && (
                  <span className="meta-badge">
                    <Calendar size={14} />
                    {project.year}
                  </span>
                )}
              </div>

              {/* Judul & Deskripsi */}
              <h2 id="modal-title" className="modal-title">
                {project.title}
              </h2>
              
              <p className="modal-description">
                {project.longDescription || project.description}
              </p>

              {/* Fitur Utama */}
              {project.features && project.features.length > 0 && (
                <div className="modal-section">
                  <h3 className="section-subtitle">
                    <CheckCircle2 size={18} color="#00d4aa" />
                    Fitur Utama
                  </h3>
                  <ul className="modal-features-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-dot"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Teknologi yang digunakan */}
              <div className="modal-section">
                <h3 className="section-subtitle">
                  <Layers size={18} color="#6c63ff" />
                  Teknologi yang Digunakan
                </h3>
                <ul className="modal-tags">
                  {project.tags.map((tag, idx) => (
                    <li key={idx} className="modal-tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tombol Aksi (Live Demo & GitHub) */}
              <div className="modal-actions">
                {project.externalUrl && project.externalUrl !== '#' ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-btn modal-btn--primary"
                  >
                    <span>Kunjungi Live Demo</span>
                    <ExternalLink size={18} />
                  </a>
                ) : (
                  <button className="modal-btn modal-btn--disabled" disabled title="Aplikasi internal / demo privat">
                    <span>Aplikasi Internal Perusahaan</span>
                    <ExternalLink size={18} />
                  </button>
                )}

                {project.githubUrl && project.githubUrl !== '#' ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="modal-btn modal-btn--secondary"
                  >
                    <GithubIcon size={18} />
                    <span>Lihat di GitHub</span>
                  </a>
                ) : (
                  <button className="modal-btn modal-btn--disabled" disabled title="Repository privat internal">
                    <GithubIcon size={18} />
                    <span>Repository Privat (Internal)</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
