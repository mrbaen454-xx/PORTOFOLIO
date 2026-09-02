import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import bkaAcces from "../assets/bkaAcces.png";
import baenGame from "../assets/baenGame.png";
import himami from "../assets/himami.jpeg";
import baentechStore from "../assets/baentech-store.png";
import codeImage from "../assets/code.jpeg";

const imageMap = {
  bkaAcces,
  baenGame,
  himami,
  baentechStore,
  codeImage,
};

const projects = [
  {
    id: 1,
    title: "Sistem Penjualan Kuota dan Pulsa (CLI)",
    imageKey: "codeImage",
    tech: ["Bahasa C", "File I/O Handling"],
    githubUrl: "https://github.com/mrbaen454-xx/Penjualan-Kuota-dan-pulsa.git",
  },
  {
    id: 5,
    title: "Baen Game",
    imageKey: "baenGame",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    githubUrl: "https://github.com/mrbaen454-xx/Baen-Game.git",
  },
  {
    id: 4,
    title: "BKA Access",
    imageKey: "bkaAcces",
    tech: ["Java Spring Boot", "Thymeleaf", "MySQL", "Javascript"],
    githubUrl: "https://github.com/mrbaen454-xx/bka_access.git",
  },
  {
    id: 7,
    title: "Baentech Store",
    imageKey: "baentechStore",
    tech: ["Java Spring Boot", "React", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/mrbaen454-xx/BaenTech-Store.git",
  },
  {
    id: 2,
    title: "HRFlow – Sistem Manajemen Sumber Daya Manusia (HRIS)",
    imageKey: "codeImage",
    tech: ["Java Spring Boot", "React", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/mrbaen454-xx/HRFlow---Human-Resource-Management-System.git",
  },
  {
    id: 3,
    title: "MediCall – Sistem Informasi Rumah Sakit",
    imageKey: "codeImage",
    tech: ["Java Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/mrbaen454-xx/MediCall.git",
  },
  {
    id: 6,
    title: "HIMAMI Website",
    imageKey: "himami",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/mrbaen454-xx/HIMAMI.git",
  },
];

const Projects = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="projects" className="relative min-h-screen pt-28 md:pt-32 pb-24 bg-noise font-outfit text-black flex flex-col overflow-hidden">
      
      {/* ── HEADER ── */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 flex flex-col items-center mb-12 md:mb-16 relative justify-center">
        {/* Background Script Watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute z-0 pointer-events-none"
        >
          <span className="font-script text-[80px] sm:text-[140px] md:text-[200px] text-black/5 select-none whitespace-nowrap">
            {t.projects.title_watermark}
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-syncopate text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-black uppercase relative z-10 drop-shadow-sm hover:scale-105 transition-transform duration-700 cursor-default"
        >
          {t.projects.title}
        </motion.h2>
      </div>

      {/* ── PROJECT GRID ── */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 justify-items-center"
        >
          {projects.map((proj, idx) => {
            const translatedProject = t.projects.list.find(p => p.id === proj.id) || {};
            return (
            <motion.div 
              key={proj.id} 
              variants={itemVariants} 
              className="flex flex-col w-[280px] sm:w-[310px] h-full group cursor-pointer" 
              onClick={() => window.open(proj.githubUrl, '_blank')}
            >
              
              {/* The Card */}
              <div className="bg-white rounded-[20px] rounded-tr-[56px] rounded-bl-[56px] p-5 sm:p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] flex flex-col h-[240px] sm:h-[260px] relative transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0px_20px_40px_rgba(0,0,0,0.3)] border border-black/5">
                
                {/* Header: Title and Number */}
                <div className="flex justify-between items-start mb-4 z-20 relative">
                  <h3 className="font-bold text-base sm:text-lg text-black leading-tight pr-3 line-clamp-2">
                    {translatedProject.title || proj.title}
                  </h3>
                  <span className="font-syncopate text-2xl sm:text-3xl font-black tracking-tighter text-[#1a1a1a] shrink-0 mt-[-2px]">
                    0{idx + 1}
                  </span>
                </div>
                
                {/* Image */}
                <div className="flex-1 rounded-[12px] overflow-hidden relative border border-black/5 bg-[#fafafa]">
                  <img 
                    src={imageMap[proj.imageKey]} 
                    alt={proj.title}
                    className="w-full h-full object-contain p-1 transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* View Code Button overlay on hover */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <div className="bg-white text-black font-bold text-xs py-1.5 px-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Code
                    </div>
                  </div>
                </div>
              </div>

              {/* The List below the card */}
              <div className="mt-6 px-4 py-3 bg-black/5 backdrop-blur-md border border-black/5 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] rounded-2xl space-y-2.5">
                {proj.tech.map((techItem, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-black/40 font-bold mt-[-2px]">_</span>
                    <span className="text-sm font-semibold text-black/70">{techItem}</span>
                  </div>
                ))}
              </div>

            </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* ── SIDE CONTROLS & PAGINATION ── */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden 2xl:flex items-center justify-center w-24">
        <button className="w-12 h-12 bg-black/10 hover:bg-black text-black hover:text-white rounded-full flex items-center justify-center transition-colors duration-300 backdrop-blur-md">
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="absolute bottom-10 right-10 sm:bottom-12 sm:right-16 z-10 hidden sm:block">
        <span className="font-syncopate text-lg font-bold">03</span>
      </div>

    </section>
  );
};

export default Projects;
