import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder, ArrowRight } from 'lucide-react';
import { GithubIcon } from './icons/SocialIcons';
import ProjectModal, { type Project } from './ProjectModal';
import '../styles/Projects.css';

const projectsData: Project[] = [
  {
    title: 'Sistem Helpdesk IT & Monitoring Dashboard',
    description: 'Sistem terpadu pelaporan kendala teknis dan monitoring operasional IT instansi dengan visualisasi analitik data real-time.',
    longDescription: 'Aplikasi internal helpdesk & ticketing IT yang dibangun untuk operasional PT. Lemigas. Memfasilitasi pelaporan kendala teknis, perbaikan perangkat, pengajuan peminjaman barang, serta menyediakan analitik data real-time bagi Kepala IT untuk memantau performa teknisi dan distribusi laporan.',
    role: 'Fullstack Developer',
    year: '2025',
    image: '/projects/helpdesk-dashboard.png',
    gallery: [
      '/projects/helpdesk-dashboard.png',
      '/projects/helpdesk-landing.png'
    ],
    tags: ['Laravel', 'PHP', 'Tailwind CSS', 'Vite', 'MySQL', 'REST API'],
    features: [
      'Dashboard analitik real-time dengan grafik Donut, Line chart, dan Bar chart',
      'Manajemen tiket laporan kendala & peminjaman barang terintegrasi',
      'Sistem filter dinamis berdasarkan rentang tanggal, kategori, dan status',
      'Ekspor laporan otomatis ke dokumen PDF dan Excel',
      'Manajemen peran pengguna (Kepala IT, Teknisi, Admin Gedung)',
      'Desain modern responsif dengan tema dark mode yang ergonomis'
    ],
    githubUrl: '#',
    externalUrl: '#',
  },
  {
    title: 'EcoLife - Mobile Carbon Footprint & Simulation App',
    description: 'Aplikasi mobile pelacak dan simulasi emisi jejak karbon harian berbasis Kotlin & Android dengan backend Node.js, dilengkapi gamifikasi eco-level dan analisis multi-kategori.',
    longDescription: 'Aplikasi mobile Android yang dikembangkan sebagai projek Tugas Besar untuk mensimulasikan dan melacak jejak emisi karbon (carbon footprint) individu secara komprehensif. Terintegrasi dengan backend REST API berbasis Node.js, EcoLife memfasilitasi pengguna dalam mencatat aktivitas harian lintas kategori (transportasi, konsumsi listrik kWh, pola makan harian, dan pengelolaan sampah), melampirkan foto bukti kegiatan via kamera, serta menghitung estimasi emisi karbon (kg CO2) secara real-time. Dilengkapi sistem gamifikasi interaktif berupa perolehan poin penghargaan dan peringkat tingkatan (seperti "Eco Beginner") untuk memotivasi kebiasaan ramah lingkungan.',
    role: 'Android & Backend Developer',
    year: '2024',
    image: '/projects/ecolife-home.jpg',
    gallery: [
      '/projects/ecolife-home.jpg',
      '/projects/ecolife-profile.jpg',
      '/projects/ecolife-activity.jpg',
      '/projects/ecolife-login.jpg'
    ],
    tags: ['Kotlin', 'Android Studio', 'Node.js', 'REST API', 'Express', 'Mobile App'],
    features: [
      'Pelacakan & simulasi kalkulasi emisi jejak karbon (kg CO2) real-time berdasarkan aktivitas harian',
      'Pencatatan multi-kategori: Transportasi (jarak & jenis kendaraan), Energi Rumah (kWh listrik), Pola Makan, dan Kelola Sampah',
      'Integrasi kamera untuk pengambilan foto bukti otentik aktivitas secara langsung',
      'Sistem gamifikasi cerdas: Akumulasi poin reward dan tingkatan level pengguna (Eco Beginner, dsb.)',
      'Dashboard analitik profil untuk memantau ringkasan emisi per kategori dan capaian poin',
      'Sistem autentikasi pengguna (Login/Daftar) terintegrasi dengan REST API backend Node.js'
    ],
    githubUrl: '#',
    externalUrl: '#',
  },
  {
    title: 'Damos Mart - Mobile Koperasi App',
    description: 'Aplikasi mobile e-commerce dan sistem antrean digital untuk koperasi sekolah SMK Telkom dengan integrasi pembayaran QRIS.',
    longDescription: 'Aplikasi mobile yang dikembangkan sebagai projek Tugas Akhir untuk mendigitalisasi operasional koperasi sekolah di SMK Telkom Jakarta. Memfasilitasi siswa dengan tipe kepribadian Dominance dalam memesan barang kebutuhan sekolah, pre-order seragam batik, memantau nomor antrean secara real-time, serta memilih metode pengambilan Quick Pickup dan pembayaran digital QRIS.',
    role: 'Mobile & Fullstack Developer',
    year: '2025',
    image: '/projects/damos-home.jpg',
    gallery: [
      '/projects/damos-home.jpg',
      '/projects/damos-checkout.jpg',
      '/projects/damos-order.jpg'
    ],
    tags: ['Flutter', 'Mobile App', 'Design Thinking', 'Dominance'],
    features: [
      'Sistem antrean digital (#Nomor Antrean) dan pelacakan status pesanan real-time',
      'Fitur Pre-Order (PO) khusus seragam batik dengan estimasi produksi',
      'Metode Quick Pickup untuk pengambilan langsung yang efisien tanpa antre',
      'Multi-metode pembayaran: QRIS digital otomatis dan Bayar di Kasir',
      'Katalog produk terstruktur (makanan, minuman, atribut sekolah) & keranjang belanja'
    ],
    githubUrl: '#',
    externalUrl: '#',
  },
  {
    title: 'Dalang - Platform Bank Sampah & Daur Ulang',
    description: 'Platform web pengelolaan dan penjualan sampah daur ulang untuk Bank Sampah Induk Kota Bandung dengan Midtrans Payment Gateway dan fitur rute lokasi.',
    longDescription: 'Aplikasi web yang dikembangkan dalam mata kuliah Proyek Perangkat Lunak untuk Bank Sampah Induk Kota Bandung. Memfasilitasi masyarakat dalam menjual sampah anorganik terpilah (kertas, plastik, aluminium, logam), membeli produk kerajinan daur ulang, bertransaksi aman menggunakan Midtrans Payment Gateway, serta memetakan rute navigasi terdekat menuju lokasi bank sampah.',
    role: 'Fullstack Developer',
    year: '2024',
    image: '/projects/dalang-bank-sampah.png',
    gallery: [
      '/projects/dalang-bank-sampah.png'
    ],
    tags: ['Laravel', 'PHP', 'Midtrans API', 'Maps & Geolocation', 'MySQL', 'Bootstrap'],
    features: [
      'Platform penjualan sampah daur ulang berdasarkan kategori (Kertas, Plastik, Aluminium, Logam)',
      'Integrasi Midtrans Payment Gateway untuk transaksi pembayaran yang aman dan otomatis',
      'Peta interaktif & estimasi jarak rute navigasi terdekat menuju Bank Sampah Induk',
      'Katalog e-commerce produk kerajinan tangan hasil olahan limbah daur ulang',
      'Mendukung inisiatif gaya hidup hijau dan pilar Sustainable Development Goals (SDG)'
    ],
    githubUrl: '#',
    externalUrl: '#',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          {projectsData.map((project, index) => {
            const hasImage = Boolean(project.image);
            return (
              <motion.div 
                key={index} 
                className={`project-card ${hasImage ? 'project-card--has-image' : ''}`}
                variants={itemVariants}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                {/* Thumbnail Gambar jika ada */}
                {hasImage && (
                  <div className="project-thumbnail">
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="project-thumbnail-overlay">
                      {project.role && (
                        <span className="project-thumbnail-badge">{project.role}</span>
                      )}
                      <span className="project-preview-hint">Pratinjau ↗</span>
                    </div>
                  </div>
                )}

                <div className={hasImage ? 'project-card-body' : ''}>
                  <div className="project-header">
                    {!hasImage ? (
                      <div className="project-icon">
                        <Folder size={40} color="#6c63ff" />
                      </div>
                    ) : (
                      <div className="project-meta-pill">
                        {project.year || 'Featured'}
                      </div>
                    )}

                    <div className="project-links">
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a 
                          href={project.githubUrl} 
                          aria-label="GitHub Link" 
                          target="_blank" 
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubIcon size={20} />
                        </a>
                      )}
                      {project.externalUrl && project.externalUrl !== '#' && (
                        <a 
                          href={project.externalUrl} 
                          aria-label="External Link" 
                          target="_blank" 
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">
                      {project.title}
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

                  <div className="project-card-footer">
                    <span className="project-view-detail">
                      Lihat Detail <ArrowRight size={15} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Pop-up Modal Detail Projek */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;
