import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bkaAcces from "../assets/bkaAcces.png";
import pemilihanOsis from "../assets/pemilihanOsis.png";
import baenGame from "../assets/baenGame.png";
import {
  LayoutGrid,
  Star,
  Eye,
  ExternalLink,
  X,
  Code2,
  Layers,
  ArrowUpRight,
  Database,
} from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "BKA ACCESS",
      category: "fullstack",
      description:
        "BKA ACCESS is a modern railway ticket booking and travel management platform inspired by KAI Access. The application allows users to search train schedules, book tickets online.",
      image: bkaAcces,
      tech: [
        "Java Spring Boot",
        "Thymeleaf",
        "SqlYog",
        "Xampp",
        "html",
        "css",
        "js",
      ],
      demoUrl: "#",
      githubUrl: "https://github.com/mrbaen454-xx/bka_access.git",
      featured: true,
    },
    {
      id: 2,
      title: "Pemilihan Ketua Osis",
      category: "html",
      description:
        "High-performance microservices gateway for secure financial transactions and real-time auditing.",
      image: pemilihanOsis,
      tech: ["HTML", "CSS", "Javascript"],
      demoUrl:
        "https://mrbaen454-xx.github.io/ProjekanWebPemilihanKetuaOsis-simulasi-tampilan-/",
      githubUrl:
        "https://github.com/mrbaen454-xx/ProjekanWebPemilihanKetuaOsis-simulasi-tampilan-.git",
    },
    {
      id: 3,
      title: "Baen Game",
      category: "html",
      description:
        "Interactive data visualization platform with real-time AI insights and collaborative workspaces.",
      image: baenGame,
      tech: ["HTML", "CSS", "Javascript"],
      demoUrl: "https://mrbaen454-xx.github.io/Baen-Game/",
      githubUrl: "https://github.com/mrbaen454-xx/Baen-Game.git",
      featured: true,
    },
  ];

  // Filter yang diminta: All, Fullstack, Java, React
  const filters = ["all", "fullstack", "java", "react","html"];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-blue-500 mb-4">
              <Database size={20} className="animate-pulse" />
              <span className="uppercase tracking-[0.3em] text-[10px] font-black">
                Architecture & Code
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter">
              Featured <span className="text-blue-500">Projects.</span>
            </h2>
          </div>

          {/* Filter Glassmorphism */}
          <div className="flex p-1.5 bg-slate-900/40 backdrop-blur-2xl rounded-2xl border border-white/5 shadow-2xl overflow-x-auto max-w-full">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="relative px-6 py-2.5 rounded-xl text-xs font-black tracking-widest transition-all duration-500 whitespace-nowrap"
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeTabHighlight"
                    className="absolute inset-0 bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.4)] rounded-xl"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  />
                )}
                <span
                  className={`relative z-10 ${activeFilter === filter ? "text-white" : "text-slate-500 hover:text-slate-300"}`}
                >
                  {filter.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                className="group relative bg-slate-900/30 border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-2xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.8 }}
                  />

                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-1.5 bg-blue-600/20 backdrop-blur-xl border border-blue-500/30 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-slate-950/40 backdrop-blur-[3px]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="bg-white text-black px-8 py-3 rounded-2xl font-black text-xs tracking-widest flex items-center gap-2 hover:scale-105 transition-transform"
                    >
                      <Eye size={18} /> EXPLORE
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex gap-2">
                      {project.tech.slice(0, 2).map((t, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-slate-500 font-bold uppercase"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-slate-600 group-hover:text-blue-500 transition-colors"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal View */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
              />

              <motion.div
                layoutId={`card-${selectedProject.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative bg-slate-900 border border-white/10 w-full max-w-4xl rounded-[2.5rem] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row h-fit max-h-[90vh]"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-all z-20"
                >
                  <X size={20} />
                </button>

                <div className="md:w-5/12 h-64 md:h-auto overflow-hidden">
                  <img
                    src={selectedProject.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>

                <div className="md:w-7/12 p-10 md:p-14 overflow-y-auto">
                  <div className="flex items-center gap-2 text-blue-500 mb-6">
                    <Code2 size={20} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">
                      {selectedProject.category} STACK
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold mb-6 tracking-tight">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-10">
                    {selectedProject.description}
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] mb-4">
                        Core Technology
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-white/5 text-white text-[10px] font-bold rounded-xl border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={selectedProject.githubUrl}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-2xl font-black text-xs tracking-widest transition-all"
                      >
                        VIEW REPOSITORY
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
