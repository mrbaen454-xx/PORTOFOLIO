import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

import logikaImage from "../assets/D3-SARONI Logika Algoritma.png";
import dataStrukturImage from "../assets/D3-SARONI Struktur Data.png";
import dataBaseImage from "../assets/D3-SARONI Data Base.png";
import webDasarImage from "../assets/D3 SARONI Web.png";
import githubImage from "../assets/D3 SARONI GitHub.png";
import javaFundImage from "../assets/D3 SARONI Java Fundamental.png";

const certificatesData = [
  {
    id: 1,
    title: "Logika Algoritma (Bahasa C)",
    category: "Pelatihan",
    issuer: "Beasiswa PUB",
    year: "2025",
    desc: "Pelatihan fundamental pemrograman dan algoritma dasar menggunakan C.",
    image: logikaImage,
    available: true,
  },
  {
    id: 2,
    title: "Struktur Data",
    category: "Pelatihan",
    issuer: "Beasiswa PUB",
    year: "2025",
    desc: "Pelatihan struktur data C lanjutan.",
    image: dataStrukturImage,
    available: true,
  },
  {
    id: 3,
    title: "Database Management System (DBMS)",
    category: "Pelatihan",
    issuer: "Beasiswa PUB",
    year: "2025",
    desc: "Pelatihan fundamental database MySQL.",
    image: dataBaseImage,
    available: true,
  },
  {
    id: 4,
    title: "Pelatihan WEB Dasar",
    category: "Pelatihan",
    issuer: "Beasiswa PUB",
    year: "2025",
    desc: "Pelatihan fundamental web dengan HTML, CSS, dan JavaScript.",
    image: webDasarImage,
    available: true,
  },
  {
    id: 5,
    title: "Git & GitHub",
    category: "Pelatihan",
    issuer: "Beasiswa PUB",
    year: "2026",
    desc: "Pelatihan version control dan alur kerja kolaboratif.",
    image: githubImage,
    available: true,
  },
  {
    id: 6,
    title: "Java Fundamental",
    category: "Pelatihan",
    issuer: "Beasiswa PUB",
    year: "2026",
    desc: "Pelatihan Object-Oriented Programming (OOP) dan inti Java.",
    image: javaFundImage,
    available: true,
  },
  {
    id: 7,
    title: "Java Lanjutan (Spring Boot)",
    category: "Pelatihan",
    issuer: "Beasiswa PUB",
    year: "2026",
    desc: "Pelatihan membangun RESTful API dengan framework Spring Boot.",
    image: null,
    available: false,
  },
];

const Certificates = () => {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

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
    <section id="certificates" className="relative min-h-screen pt-28 md:pt-32 pb-24 bg-noise font-outfit text-black flex flex-col overflow-hidden">
      
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
          <span className="font-script text-[60px] sm:text-[100px] md:text-[150px] lg:text-[180px] text-black/5 select-none whitespace-nowrap leading-none">
            {t.certificates.title_watermark}
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-syncopate text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-black uppercase relative z-10 drop-shadow-sm hover:scale-105 transition-transform duration-700 cursor-default text-center"
        >
          {t.certificates.title}
        </motion.h2>
      </div>

      {/* ── CERTIFICATES GRID ── */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 relative z-10 flex-grow">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-12 justify-items-center"
        >
          {certificatesData.map((cert) => {
            const translatedCert = t.certificates.list.find(c => c.id === cert.id) || {};
            return (
            <motion.div 
              key={cert.id} 
              variants={itemVariants}
              className="w-full flex"
            >
              <div className="bg-black/5 backdrop-blur-md border border-black/5 rounded-3xl p-6 sm:p-8 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] flex flex-col h-full group transition-all duration-500 hover:bg-black/[0.07] hover:shadow-[0px_20px_40px_rgba(0,0,0,0.25)] w-full">
                
                {/* Header tags */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs sm:text-sm font-bold text-black/60 uppercase tracking-widest">{translatedCert.category || cert.category}</span>
                  <span className="text-xs sm:text-sm font-bold text-black/90 bg-white/50 px-3 py-1 rounded-full border border-black/10">{cert.year}</span>
                </div>
                
                {/* Title and Issuer */}
                <h3 className="font-bold text-lg sm:text-xl text-black leading-tight mb-2 group-hover:text-black transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-black/70 mb-4">{cert.issuer}</p>
                
                {/* Description */}
                <p className="text-sm font-semibold text-black/80 leading-relaxed mb-8 flex-grow">
                  {translatedCert.desc || cert.desc}
                </p>
                
                {/* Action Button */}
                <div className="mt-auto pt-4 border-t border-black/10">
                  {cert.available ? (
                    <button 
                      onClick={() => setSelectedCert(cert)}
                      className="w-full flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:bg-black/80 hover:shadow-lg active:scale-95"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t.certificates.view_btn}
                    </button>
                  ) : (
                    <div className="w-full flex items-center justify-center gap-2 bg-black/5 text-black/40 px-4 py-3 rounded-xl font-bold text-sm border border-black/5 cursor-not-allowed">
                      {t.certificates.unavailable_btn}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )})}
        </motion.div>
      </div>

      {/* ── IMAGE LIGHTBOX MODAL ── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 sm:p-6 border-b border-black/10 bg-black/5">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-black">{selectedCert.title}</h3>
                  <p className="text-xs sm:text-sm font-semibold text-black/60">{selectedCert.issuer} • {selectedCert.year}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-black/10 text-black hover:bg-black/5 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* Image Container */}
              <div className="flex-grow overflow-auto p-4 sm:p-8 bg-[#fafafa] flex items-center justify-center">
                <img 
                  src={selectedCert.image} 
                  alt={`Sertifikat ${selectedCert.title}`}
                  className="max-w-full max-h-[70vh] object-contain shadow-lg rounded-xl border border-black/10"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Certificates;
