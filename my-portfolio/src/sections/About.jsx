import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Zap,
  Globe,
  Users,
  Database,
  Server,
  Cpu,
} from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Server className="text-blue-400" />,
      title: "Backend Development",
      description: "Building robust server-side apps using Java & Spring Boot.",
      color: "blue",
    },
    {
      icon: <Globe className="text-emerald-400" />,
      title: "REST API Design",
      description: "Crafting secure, scalable, and well-documented endpoints.",
      color: "emerald",
    },
    {
      icon: <Database className="text-amber-400" />,
      title: "DB Management",
      description:
        "Efficiently handling MySQL, PostgreSQL, and data integrity.",
      color: "amber",
    },
    {
      icon: <Zap className="text-purple-400" />,
      title: "Optimization",
      description: "Fine-tuning backend performance for maximum speed.",
      color: "purple",
    },
  ];

  const techStack = [
    { name: "Java", color: "#f89820" },
    { name: "Spring Boot", color: "#59666C" },
    { name: "React", color: "#59666C" },
    { name: "JavaScript", color: "#6DB33F" },
    { name: "HTML", color: "#6DB33F" },
    { name: "CSS", color: "#6DB33F" },
    { name: "MySQL", color: "#4479A1" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "Git", color: "#F05032" },
    { name: "Maven", color: "#C71A36" },
    { name: "Hibernate", color: "#59666C" },
  ];

  // Varian animasi untuk container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Varian animasi untuk item (muncul dari bawah)
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Dekorasi Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              About <span className="text-blue-500">Me</span>
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"
            />
            <motion.p
              variants={itemVariants}
              className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed"
            >
              I am a Java Backend Developer passionate about building
              high-performance systems. My journey is fueled by a commitment to
              clean code and scalable architecture.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* KIRI: My Journey & Tech Stack */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-5 space-y-8"
            >
              <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Cpu className="text-blue-500" size={24} /> My Journey
                </h3>
                <div className="text-slate-400 space-y-4 leading-relaxed">
                  <p>
                    My programming journey began in 2024 when I started studying
                    at Universitas Nasional PASIM through the PUB scholarship
                    program. During this opportunity, I received intensive
                    training in programming and software development.
                  </p>
                  <p>
                    I focus on creating systems that aren't just functional, but
                    also
                    <span className="text-blue-400"> reliable</span> and{" "}
                    <span className="text-blue-400">maintainable</span>.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-4 text-lg">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-sm font-medium hover:border-blue-500/50 transition-colors"
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* KANAN: What I Do (Bento Grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group p-6 bg-slate-900/40 border border-slate-800 rounded-3xl hover:bg-slate-800/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              ))}

              {/* Extra Card untuk Team Collab */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-2 p-6 bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 rounded-3xl flex items-center gap-6"
              >
                <div className="hidden sm:flex w-14 h-14 rounded-full bg-blue-600/20 items-center justify-center text-blue-400 shrink-0">
                  <Users size={28} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Agile & Team Player
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Experienced in Git, Jira, and collaborative workflows to
                    deliver high-quality software.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
