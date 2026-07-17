import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

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
    imageKey: "bkaAcces",
    tech: ["Java Spring Boot", "Thymeleaf", "MySQL", "Javascript"],
    githubUrl: "https://github.com/mrbaen454-xx/bka_access.git",
  },
  {
    id: 2,
    title: "Baen Game",
    imageKey: "baenGame",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
    githubUrl: "https://github.com/mrbaen454-xx/Baen-Game.git",
  },
  {
    id: 3,
    title: "HIMAMI Website",
    imageKey: "himami",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/mrbaen454-xx/HIMAMI.git",
  },
  {
    id: 4,
    title: "Baentech Store",
    imageKey: "baentechStore",
    tech: ["Java Spring Boot", "React", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "https://github.com/mrbaen454-xx/BaenTech-Store.git",
  },
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="relative min-h-screen py-24 bg-noise font-outfit text-black flex flex-col justify-center overflow-hidden">
      
      {/* ── HEADER ── */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 sm:mb-20 gap-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="font-syncopate text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-black/90"
        >
          Projects
        </motion.h2>
        <motion.span 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="font-semibold text-xs sm:text-sm tracking-widest uppercase text-black/70"
        >
          @mrbaen454_xx
        </motion.span>
      </div>

      {/* ── PROJECT GRID ── */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
        >
          {projects.map((proj, idx) => (
            <motion.div key={proj.id} variants={itemVariants} className="flex flex-col h-full group cursor-pointer" onClick={() => window.open(proj.githubUrl, '_blank')}>
              
              {/* The Card */}
              <div className="bg-white rounded-3xl rounded-tr-[60px] p-4 sm:p-6 shadow-[0px_10px_30px_rgba(0,0,0,0.05)] border border-black/5 flex flex-col flex-1 relative transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0px_20px_50px_rgba(0,0,0,0.1)] group-hover:border-black/20">
                
                {/* Number inside card top-right */}
                <div className="absolute top-4 right-5 sm:top-5 sm:right-6 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="font-syncopate text-2xl sm:text-3xl font-bold tracking-tighter text-black/90">
                    0{idx + 1}
                  </span>
                </div>
                
                {/* Title */}
                <div className="mt-2 mb-4 sm:mb-6 pr-12">
                  <h3 className="font-semibold text-base sm:text-lg leading-tight text-black/90 group-hover:text-black transition-colors">
                    {proj.title}
                  </h3>
                </div>
                
                {/* Image */}
                <div className="w-full rounded-2xl overflow-hidden bg-gray-100 relative">
                  <img 
                    src={imageMap[proj.imageKey]} 
                    alt={proj.title}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="bg-white text-black font-bold text-xs px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-sm">
                      View Code
                    </span>
                  </div>
                </div>
              </div>

              {/* The List below the card */}
              <div className="mt-5 sm:mt-8 px-2 space-y-1.5 sm:space-y-2">
                {proj.tech.map((techItem, i) => (
                  <div key={i} className="flex items-start gap-2 group-hover:pl-3 transition-all duration-300 ease-out">
                    <span className="text-black/50 font-bold mt-0.5">-</span>
                    <span className="text-xs sm:text-sm font-semibold text-black/70 group-hover:text-black/90 transition-colors">{techItem}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
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
