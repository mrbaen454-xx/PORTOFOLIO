import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const scrollToProjects = () => {
    navigate("/projects");
  };

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-80px)] sm:h-[calc(100vh-96px)] flex flex-col justify-between overflow-hidden bg-noise font-outfit text-black"
    >


      {/* ── CENTER CONTENT ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-4">

        <div className="relative flex flex-col items-center text-center -mt-8 sm:-mt-12 md:-mt-16">
          {/* Gothic Welcome Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="z-20 mb-6 sm:mb-8"
          >
            <h2 className="font-gothic text-3xl sm:text-5xl md:text-6xl tracking-wide text-black/80">
              {t.hero.welcome}
            </h2>
          </motion.div>

          {/* Big Portfolio Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="z-20"
          >
            <h1 className="font-syncopate text-4xl sm:text-6xl md:text-8xl lg:text-[120px] font-extrabold tracking-tighter leading-tight text-black drop-shadow-sm hover:scale-105 transition-transform duration-700 cursor-default">
              {t.hero.portfolio}
            </h1>
          </motion.div>

          {/* Background Script Watermark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full"
          >
            <span className="font-script text-[100px] sm:text-[160px] lg:text-[240px] text-black/10 select-none pointer-events-none whitespace-nowrap">
              {t.hero.portfolio_watermark}
            </span>
          </motion.div>
        </div>
      </div>



      {/* ── BOTTOM NAV / FOOTER AREA ── */}
      <div className="relative z-10 w-full pb-8 px-8 sm:px-16 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6 sm:gap-0">
        {/* Social Links (Left) */}
        <div className="flex flex-col items-center sm:items-start text-xs sm:text-sm font-medium">
          <a href="https://github.com/mrbaen454-xx" target="_blank" rel="noreferrer" className="hover:underline">
            {t.hero.github}
          </a>
          <a href="https://www.linkedin.com/in/m-saroni-383525405" target="_blank" rel="noreferrer" className="hover:underline text-black/60">
            {t.hero.linkedin}
          </a>
        </div>

        {/* Creator Info (Center) */}
        <div className="flex flex-col items-center text-xs sm:text-sm font-medium">
          <span className="text-black/60">{t.hero.createdBy}</span>
          <span>M. SARONI</span>
        </div>

        {/* Contact Info (Right) */}
        <div className="flex flex-col items-center sm:items-end text-xs sm:text-sm font-medium">
          <span>+62 888 2111 780</span>
          <a href="mailto:msaroni454@gmail.com" className="hover:underline text-black/60">
            @msaroni454
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
