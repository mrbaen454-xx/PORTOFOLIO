import { motion } from "framer-motion";
import myphoto1 from "../assets/myphoto.png";
import { FaJava, FaReact, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSpringboot, SiPostgresql } from "react-icons/si";
import { Phone, Mail } from "lucide-react";

// Helper component for the dot rating
const DotRating = ({ rating }) => {
  return (
    <div className="flex gap-1 mt-1 justify-center">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-1.5 h-1.5 rounded-full ${dot <= rating ? "bg-black" : "border border-black bg-transparent"
            }`}
        />
      ))}
    </div>
  );
};


const About = () => {
  return (
    <section id="about" className="relative min-h-screen py-24 bg-noise font-outfit text-black flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full relative">
        <div className="grid lg:grid-cols-[3fr_4fr_3fr] gap-16 lg:gap-24 items-start">

          {/* ── LEFT COLUMN: Photo Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-[3/4] bg-white rounded-3xl overflow-hidden shadow-2xl border border-black/5"
          >


            {/* Photo */}
            <div className="absolute inset-0 bg-gray-200">
              <img
                src={myphoto1}
                alt="M. Saroni"
                className="w-full h-full object-cover grayscale-[20%] contrast-125"
              />
            </div>

            {/* Signature Overlay */}
            <div className="absolute bottom-6 right-6 z-20 rotate-[-10deg]">
              <span className="font-script text-5xl text-white drop-shadow-md">Baen</span>
            </div>
            {/* Subtle inner shadow for the card */}
            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.2)] pointer-events-none" />
          </motion.div>

          {/* ── MIDDLE COLUMN: Bio & Education ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            {/* Greeting */}
            <h2 className="font-syncopate text-4xl sm:text-5xl font-bold tracking-tighter mb-6 text-black/90">
              Hello!!
            </h2>

            {/* Bio Paragraph */}
            <p className="text-xs sm:text-sm font-semibold leading-relaxed text-black/80 mb-6 text-justify">
              My name is M. Saroni, also known as &quot;Baen&quot;. I am a Java Backend Developer with a deep passion for building robust logic and efficient databases. My goal is to transform complex requirements into clean, scalable backend systems. With experience in Spring Boot, REST APIs, and database design, I believe every application must achieve a perfect balance between performance and maintainability.
            </p>

            <p className="text-xs sm:text-sm font-bold mb-10 text-black/90">
              hope you enjoy my portfolio!
            </p>

            {/* Education */}
            <h3 className="font-syncopate text-xl sm:text-2xl font-bold tracking-tighter mb-4 text-black/90">
              EDUCATION
            </h3>

            <div className="mb-4 group">
              <p className="text-xs sm:text-sm font-bold transition-colors duration-300 group-hover:text-black/50">2024-Present : Universitas Nasional PASIM</p>
              <p className="text-[10px] sm:text-xs text-black/80 font-semibold mt-1">Pursuing a Degree in D3 Manajemen Informatika</p>
            </div>
            <div className="mb-10 group">
              <p className="text-xs sm:text-sm font-bold transition-colors duration-300 group-hover:text-black/50">2024 : PUB Scholarship</p>
              <p className="text-[10px] sm:text-xs text-black/80 font-semibold mt-1">Awarded full academic scholarship</p>
            </div>

            {/* Contact Info (Bottom of Middle Column) */}
            <div className="flex flex-wrap items-center gap-6 mt-auto">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                  <Phone size={12} fill="currentColor" />
                </div>
                <span className="text-xs font-bold">0888 2111 780</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center">
                  <Mail size={12} fill="currentColor" />
                </div>
                <span className="text-xs font-bold">@msaroni454</span>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Skills, Experience, Language ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col h-full"
          >
            {/* SOFTWARE / TECH STACK */}
            <h3 className="font-syncopate text-xl sm:text-2xl font-bold tracking-tighter mb-4 uppercase text-black/90">
              SOFTWARE
            </h3>
            <div className="flex flex-wrap gap-4 mb-10">
              <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black text-white rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-1 shadow-lg">
                  <FaJava />
                </div>
                <DotRating rating={4} />
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black text-white rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-1 shadow-lg">
                  <SiSpringboot />
                </div>
                <DotRating rating={4} />
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black text-white rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-1 shadow-lg">
                  <FaReact />
                </div>
                <DotRating rating={3} />
              </motion.div>
              <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-black text-white rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-1 shadow-lg">
                  <SiPostgresql />
                </div>
                <DotRating rating={4} />
              </motion.div>
            </div>

            {/* EXPERIENCE */}
            <h3 className="font-syncopate text-xl sm:text-2xl font-bold tracking-tighter mb-4 text-black/90">
              EXPERIENCE
            </h3>
            <div className="mb-4 group">
              <p className="text-xs sm:text-sm font-bold transition-colors duration-300 group-hover:text-black/50">2024 - Present :</p>
              <p className="text-[10px] sm:text-xs text-black/80 font-semibold mt-1">Java Backend Developer</p>
            </div>
            <div className="mb-10 group">
              <p className="text-xs sm:text-sm font-bold transition-colors duration-300 group-hover:text-black/50">2024 - Present :</p>
              <p className="text-[10px] sm:text-xs text-black/80 font-semibold mt-1">Web Developer ( Freelance )</p>
            </div>


            {/* Social Links (Bottom of Right Column) */}
            <div className="flex items-center gap-6 mt-auto lg:justify-end">
              <a href="https://github.com/mrbaen454-xx" target="_blank" rel="noreferrer" className="flex items-center gap-2 group">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaGithub size={14} />
                </div>
                <span className="text-[10px] font-bold group-hover:underline leading-tight">mrbaen454-xx</span>
              </a>
              <a href="https://www.linkedin.com/in/m-saroni-383525405" target="_blank" rel="noreferrer" className="flex items-center gap-2 group">
                <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaLinkedin size={12} />
                </div>
                <span className="text-[10px] font-bold group-hover:underline leading-tight">M. Saroni</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Page Number (Bottom Right corner of the section) */}
      <div className="absolute bottom-10 right-10 sm:bottom-12 sm:right-16 z-10 hidden sm:block">
        <span className="font-syncopate text-lg font-bold">01</span>
      </div>
    </section>
  );
};

export default About;
