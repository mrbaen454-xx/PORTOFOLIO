import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FolderKanban,
  ExternalLink,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import bkaAcces from "../assets/bkaAcces.png";
import baenGame from "../assets/baenGame.png";
import himami from "../assets/himami.jpeg";
import baentechStore from "../assets/baentech-store.png";

const imageMap = {
  bkaAcces,
  baenGame,
  himami,
  baentechStore,
};

const projects = [
  {
    id: 1,
    title: "BKA Access",
    category: "fullstack",
    categoryLabel: "Full Stack",
    description:
      "Website booking tiket kereta api terinspirasi dari KAI Access. Pakai Spring Boot di backend dan Thymeleaf buat tampilannya.",
    imageKey: "bkaAcces",
    tech: ["Java Spring Boot", "Thymeleaf", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/mrbaen454-xx/bka_access.git",
    liveUrl: null,
    featured: true,
    accentColor: "from-blue-600/20 to-blue-700/10",
    borderGlow: "hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  },
  {
    id: 3,
    title: "Baen Game",
    category: "html",
    categoryLabel: "HTML / CSS",
    description:
      "Website katalog game dengan layout modern dan navigasi yang smooth. Projek latihan HTML/CSS pertama saya.",
    imageKey: "baenGame",
    tech: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/mrbaen454-xx/Baen-Game.git",
    liveUrl: null,
    featured: false,
    accentColor: "from-violet-600/20 to-violet-700/10",
    borderGlow: "hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  },
  {
    id: 4,
    title: "HIMAMI Website",
    category: "react",
    categoryLabel: "React",
    description:
      "Website resmi Himpunan Mahasiswa Manajemen Informatika (HIMAMI). Berisi info organisasi, kegiatan, struktur divisi, galeri, dan kontak.",
    imageKey: "himami",
    tech: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/mrbaen454-xx/HIMAMI.git",
    liveUrl: null,
    featured: true,
    accentColor: "from-cyan-600/20 to-cyan-700/10",
    borderGlow: "hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  {
    id: 5,
    title: "Baentech Store",
    category: "fullstack",
    categoryLabel: "Full Stack",
    description:
      "Website toko elektronik dengan arsitektur Microservices. Fitur utama: API Gateway, Eureka Server, payment gateway, dan login SSO.",
    imageKey: "baentechStore",
    tech: ["Java Spring Boot", "Microservices", "PostgreSQL", "API Gateway", "Eureka Server", "SSO", "React", "Tailwind CSS", "Vite"],
    githubUrl: "#",
    liveUrl: null,
    featured: true,
    accentColor: "from-emerald-600/20 to-emerald-700/10",
    borderGlow: "hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
  { key: "react", label: "React" },
  { key: "html", label: "HTML/CSS" },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <section id="projects" className="relative py-24 bg-[#020817] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="blob-1 top-0 left-0 opacity-30" style={{ animationDelay: "1s" }} />
      <div className="blob-2 bottom-0 right-0 opacity-25" style={{ animationDelay: "4s" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-4 inline-flex">
            <FolderKanban size={12} />
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            What I&apos;ve <span className="gradient-text">Built</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            A showcase of projects built with Java, Spring Boot, React, and modern web technologies.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.35)]"
                  : "glass-card text-slate-400 hover:text-white hover:bg-white/[0.08]"
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 gap-3 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ y: -6 }}
                className={`glass-card overflow-hidden bg-gradient-to-br ${project.accentColor} border border-white/[0.08] ${project.borderGlow} transition-all duration-300 cursor-pointer group`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-32 sm:h-52">
                  <img
                    src={imageMap[project.imageKey]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                    <span className={`text-[9px] sm:text-xs font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border backdrop-blur-md ${project.badgeColor}`}>
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 backdrop-blur-md">
                        <Sparkles size={10} />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Hover reveal button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-2.5 text-white text-sm font-medium flex items-center gap-2">
                      View Details
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-5">
                  <h3 className="text-sm sm:text-lg font-bold text-white mb-1.5 sm:mb-2 group-hover:gradient-text transition-all duration-200 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-slate-400 leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.slice(0, 4).map((tech, ti) => (
                      <span key={ti} className="skill-badge text-[10px] px-2 py-1">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[10px] text-slate-500 px-2 py-1">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-medium px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                    >
                      <FaGithub size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span className="hidden sm:inline">GitHub</span>
                    </motion.a>
                    <motion.button
                      onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className={`flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-medium px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg border backdrop-blur-sm transition-all duration-200 ${project.badgeColor}`}
                    >
                      <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                      <span className="hidden sm:inline">Details</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[20000] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.6)] z-10"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <X size={16} />
              </button>

              {/* Image */}
              <div className="relative h-52 sm:h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={imageMap[selectedProject.imageKey]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />

                {/* Category */}
                <div className="absolute bottom-4 left-5">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur-md ${selectedProject.badgeColor}`}>
                    {selectedProject.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="skill-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300"
                  >
                    <FaGithub size={16} />
                    View on GitHub
                    <ExternalLink size={13} />
                  </motion.a>
                  {selectedProject.liveUrl && (
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
