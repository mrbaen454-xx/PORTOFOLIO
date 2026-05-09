import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Java Backend Developer",
    "React Developer",
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
          setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    // Kembali ke min-h-screen agar halaman tetap penuh
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-16"
    >
      {/* Background Glow tetap luas */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] z-0" />
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] z-0" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tagline Kecil */}
          <div className="flex items-center justify-center gap-2 mb-6 text-blue-400">
            <Sparkles size={14} />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
              Software Engineer
            </span>
          </div>

          {/* Name - Font Size diperkecil (text-3xl sampai text-5xl) */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              M SARONI
            </span>
          </h1>

          {/* Typing Area - Font Size diperkecil */}
          <div className="h-10 md:h-12 mb-6">
            <p className="text-lg md:text-2xl text-slate-400 font-medium tracking-wide">
              I'm a{" "}
              <span className="text-white font-bold border-r-2 border-blue-500 pr-1 animate-pulse">
                {displayText}
              </span>
            </p>
          </div>

          {/* Description - Lebih ramping dan bersih */}
          <p className="max-w-md mx-auto text-slate-500 text-sm md:text-base leading-relaxed mb-10">
            Building reliable backend systems with Java. Focus on security,
            scalability, and high-performance architecture.
          </p>

          {/* Button - Ukuran tombol lebih standar */}
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20 text-sm"
            >
              <Download
                size={16}
                className="group-hover:translate-y-0.5 transition-transform"
              />
              Download CV
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Decorator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20">
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
