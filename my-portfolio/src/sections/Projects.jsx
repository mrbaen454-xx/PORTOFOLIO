import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import bkaAcces from "../assets/bkaAcces.png";
import pemilihanOsis from "../assets/pemilihanOsis.png";
import baenGame from "../assets/baenGame.png";

import {
  Eye,
  X,
  ArrowUpRight,
  Database,
  Sparkles,
  Code2,
  GitBranch,
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
        "Modern railway ticket booking and travel management platform inspired by KAI Access.",
      image: bkaAcces,
      tech: [
        "Java Spring Boot",
        "Thymeleaf",
        "MySQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      githubUrl: "https://github.com/mrbaen454-xx/bka_access.git",
      color: "bg-[#38BDF8]",
    },

    {
      id: 2,
      title: "Pemilihan Ketua Osis",
      category: "html",
      description:
        "Interactive school election website with modern UI and responsive design.",
      image: pemilihanOsis,
      tech: ["HTML", "CSS", "JavaScript"],
      githubUrl:
        "https://github.com/mrbaen454-xx/ProjekanWebPemilihanKetuaOsis-simulasi-tampilan-.git",
      color: "bg-yellow-300",
    },

    {
      id: 3,
      title: "Baen Game",
      category: "html",
      description:
        "Game showcase website with modern layout and responsive experience.",
      image: baenGame,
      tech: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/mrbaen454-xx/Baen-Game.git",
      color: "bg-[#2563EB]",
    },
  ];

  const filters = ["all", "fullstack", "java","reactc","html"];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 md:px-6 bg-[#0F172A] overflow-hidden"
    >
      {/* BACKGROUND DECORATION */}
      <motion.div
        animate={{
          rotate: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute top-20 left-10 w-24 h-24 bg-[#38BDF8] border-[4px] border-black rounded-3xl opacity-20"
      />

      <motion.div
        animate={{
          rotate: [0, -15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 w-20 h-20 bg-yellow-300 border-[4px] border-black rounded-full opacity-20"
      />

      <div className="max-w-6xl mx-auto">
        {/* MAIN CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="bg-[#F8FAFC] border-[4px] border-black rounded-[30px] p-6 md:p-10 shadow-[10px_10px_0px_#000]"
        >
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
            <div>
              <motion.div
                whileHover={{
                  rotate: -3,
                  scale: 1.05,
                }}
                className="inline-flex items-center gap-2 bg-[#38BDF8] border-[3px] border-black px-4 py-2 rounded-full shadow-[4px_4px_0px_#000] mb-5"
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Database size={16} />
                </motion.div>

                <span className="font-black text-xs uppercase tracking-widest">
                  Featured Projects
                </span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-black text-black mb-4">
                My <span className="text-[#2563EB]">Projects</span>
              </h2>

              <p className="text-black font-medium max-w-xl text-sm md:text-base leading-relaxed">
                Here are some projects I have built using Java, Spring Boot,
                HTML, CSS, JavaScript, and React.
              </p>
            </div>

            {/* FILTER */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter, index) => (
                <motion.button
                  key={index}
                  whileHover={{
                    y: -3,
                    rotate: index % 2 === 0 ? -2 : 2,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-3 border-[3px] border-black rounded-2xl font-black uppercase text-xs shadow-[4px_4px_0px_#000] transition-all ${
                    activeFilter === filter
                      ? "bg-[#2563EB] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </div>

          {/* PROJECT GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{
                    opacity: 0,
                    y: 50,
                    rotate: 5,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    y: -10,
                    rotate: index % 2 === 0 ? -2 : 2,
                    scale: 1.02,
                  }}
                  className={`${project.color} border-[4px] border-black rounded-[28px] p-4 shadow-[8px_8px_0px_#000]`}
                >
                  <div className="bg-white border-[3px] border-black rounded-2xl overflow-hidden h-full">
                    {/* IMAGE */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        whileHover={{
                          scale: 1.08,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        src={project.image}
                        alt={project.title}
                        className="w-full h-52 object-cover"
                      />

                      {/* CATEGORY */}
                      <div className="absolute top-3 left-3">
                        <div className="bg-[#0F172A] text-white border-[3px] border-black px-3 py-1 rounded-xl text-[10px] font-black uppercase shadow-[3px_3px_0px_#000]">
                          {project.category}
                        </div>
                      </div>

                      {/* FLOATING ICON */}
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute bottom-3 right-3 bg-yellow-300 border-[3px] border-black p-2 rounded-xl shadow-[3px_3px_0px_#000]"
                      >
                        <Sparkles size={16} />
                      </motion.div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-5">
                      <h3 className="text-2xl font-black text-black mb-3">
                        {project.title}
                      </h3>

                      <p className="text-black text-sm leading-relaxed font-medium mb-5">
                        {project.description}
                      </p>

                      {/* TECH */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 3).map((tech, i) => (
                          <motion.div
                            key={i}
                            whileHover={{
                              rotate: i % 2 === 0 ? -3 : 3,
                              y: -3,
                            }}
                            className="bg-[#2563EB] text-white border-[3px] border-black px-3 py-1 rounded-xl text-[10px] font-black shadow-[3px_3px_0px_#000]"
                          >
                            {tech}
                          </motion.div>
                        ))}
                      </div>

                      {/* BUTTON */}
                      <motion.button
                        whileHover={{
                          y: -3,
                          scale: 1.02,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        onClick={() => setSelectedProject(project)}
                        className="w-full flex items-center justify-center gap-2 bg-[#0F172A] text-white border-[3px] border-black px-4 py-3 rounded-2xl font-black shadow-[5px_5px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all"
                      >
                        <Eye size={18} />
                        VIEW PROJECT
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* MODAL CONTENT */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: 5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.7,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
              }}
              className="relative max-w-4xl w-full bg-[#38BDF8] border-[4px] border-black rounded-[30px] p-5 shadow-[10px_10px_0px_#000] z-10"
            >
              <div className="bg-white border-[3px] border-black rounded-2xl overflow-hidden">
                {/* CLOSE BUTTON */}
                <motion.button
                  whileHover={{
                    rotate: 90,
                    scale: 1.1,
                  }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 bg-red-500 text-white border-[3px] border-black p-2 rounded-xl shadow-[4px_4px_0px_#000]"
                >
                  <X size={18} />
                </motion.button>

                {/* IMAGE */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover border-b-[3px] border-black"
                />

                {/* CONTENT */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Code2 size={18} />

                    <span className="font-black uppercase text-xs tracking-widest">
                      {selectedProject.category} Project
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-black mb-4">
                    {selectedProject.title}
                  </h2>

                  <p className="text-black font-medium leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {selectedProject.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          y: -3,
                          rotate: i % 2 === 0 ? -3 : 3,
                        }}
                        className="bg-yellow-300 border-[3px] border-black px-4 py-2 rounded-xl font-black text-sm shadow-[4px_4px_0px_#000]"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>

                  {/* ACTION BUTTON */}
                  <motion.a
                    whileHover={{
                      y: -4,
                      rotate: -1,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-[#2563EB] text-white border-[3px] border-black px-6 py-4 rounded-2xl font-black shadow-[5px_5px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all"
                  >
                    <GitBranch size={18} />
                    VIEW REPOSITORY
                    <ArrowUpRight size={18} />
                  </motion.a>
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
