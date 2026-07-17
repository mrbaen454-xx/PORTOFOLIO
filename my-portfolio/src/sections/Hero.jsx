import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import myphoto from "../assets/myphoto.png";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Java Backend Developer",
    "Spring Boot Engineer",
    "Full Stack Developer",
    "React Developer",
  ];

  const techBadges = [
    { name: "Java", color: "from-orange-500/20 to-orange-600/10 border-orange-500/25 text-orange-300" },
    { name: "Spring Boot", color: "from-green-500/20 to-green-600/10 border-green-500/25 text-green-300" },
    { name: "React", color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/25 text-cyan-300" },
    { name: "MySQL", color: "from-blue-500/20 to-blue-600/10 border-blue-500/25 text-blue-300" },
    { name: "PostgreSQL", color: "from-indigo-500/20 to-indigo-600/10 border-indigo-500/25 text-indigo-300" },
    { name: "Tailwind", color: "from-teal-500/20 to-teal-600/10 border-teal-500/25 text-teal-300" },
  ];

  useEffect(() => {
    const currentRole = roles[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else if (isDeleting && displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        } else if (!isDeleting && displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % roles.length);
        }
      },
      isDeleting ? 35 : 70,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#020817]"
    >
      {/* ── BACKGROUND LAYER ── */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient blobs */}
      <div className="blob-1 top-0 left-0 opacity-60" />
      <div className="blob-2 bottom-0 right-0 opacity-60" style={{ animationDelay: "3s" }} />
      <div className="blob-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" style={{ animationDelay: "5s" }} />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020817] pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="section-container relative z-10 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Label badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="section-label">
                <Sparkles size={12} className="text-blue-400" />
                Available for work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-3">
                Hi, I&apos;m{" "}
                <span className="shine-text">M. Saroni</span>
              </h1>
            </motion.div>

            {/* Typing subtitle */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-medium text-slate-300">
                <span className="text-slate-500">{"<"}</span>
                <span className="text-blue-400 font-mono min-w-[260px]">
                  {displayText}
                  <span className="inline-block w-0.5 h-5 bg-blue-400 ml-0.5 animate-pulse" />
                </span>
                <span className="text-slate-500">{"/>"}</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base text-slate-400 leading-relaxed max-w-lg mb-8"
            >
              Mahasiswa D3 Manajemen Informatika di{" "}
              <span className="text-slate-300 font-medium">Universitas Nasional PASIM</span>
              . Suka ngulik backend pakai Java & Spring Boot, sambil belajar bikin tampilan web
              yang rapi pakai React. Lagi seru-serunya explore dunia programming.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToProjects}
                className="btn-primary flex items-center gap-2"
              >
                View Projects
                <ExternalLink size={15} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToContact}
                className="btn-outline flex items-center gap-2"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Tech Badges */}
            <motion.div variants={itemVariants}>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 font-medium">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {techBadges.map((badge, i) => (
                  <motion.span
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.08 }}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className={`text-xs font-medium px-3 py-1.5 rounded-lg bg-gradient-to-r ${badge.color} border backdrop-blur-sm cursor-default`}
                  >
                    {badge.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mt-8">
              <span className="text-xs text-slate-600">Find me on</span>
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://github.com/mrbaen454-xx"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                >
                  <FaGithub size={18} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/m-saroni-383525405"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/20 transition-all duration-200"
                >
                  <FaLinkedin size={18} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/30 to-violet-600/30 blur-3xl scale-110" />

              {/* Rotating ring decoration */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-dashed border-blue-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-6 rounded-full border border-dashed border-violet-500/10"
              />

              {/* Photo container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-64 sm:w-80 sm:h-80"
              >
                {/* Glass card behind */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-violet-600/20 backdrop-blur-sm border border-white/10" />

                {/* Photo */}
                <img
                  src={myphoto}
                  alt="M. Saroni - Java Backend Developer"
                  className="relative z-10 w-full h-full object-cover rounded-full border-2 border-white/10"
                  style={{ filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))" }}
                />

              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
