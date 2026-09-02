import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ttd from "../assets/ttd.png";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="relative w-full pt-28 pb-16 md:pt-32 md:pb-24 bg-noise font-outfit text-black flex items-center justify-center px-6 sm:px-12 overflow-hidden">
      


      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-16 lg:gap-24 relative z-10 px-6 sm:px-12">
        
        {/* Left Side: Thank You */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-12 md:mt-20">
          <div className="relative">
            {/* Background Script Watermark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="absolute left-0 top-[-10px] sm:top-[-20px] md:top-[-40px] z-0 pointer-events-none -ml-2 sm:-ml-4"
            >
              <span className="font-script text-[60px] sm:text-[100px] md:text-[120px] lg:text-[150px] text-black/5 select-none whitespace-nowrap leading-none">
                {t.contact.title_watermark}
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-gothic text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] tracking-wide leading-none mb-2 text-black/90 relative z-10 drop-shadow-sm hover:scale-105 transition-transform duration-700 cursor-default"
            >
              {t.contact.title}
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl sm:text-3xl md:text-4xl italic text-black/70 font-light"
          >
            {t.contact.subtitle}
          </motion.p>
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 flex flex-col mt-0">
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-black/5 backdrop-blur-md border border-black/5 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] rounded-3xl p-6 sm:p-8 mb-8"
          >
            <h2 className="text-xl md:text-[1.75rem] font-bold mb-6 text-black/90">{t.contact.contact_title}</h2>
            <div className="space-y-4 text-sm md:text-[15px]">
              <a href="mailto:msaroni454@gmail.com" className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] group cursor-pointer">
                <span className="text-black/60 transition-colors group-hover:text-black">{t.contact.email}</span>
                <span className="font-semibold text-black/80 transition-colors group-hover:text-black group-hover:underline decoration-1 underline-offset-4 break-all">msaroni454@gmail.com</span>
              </a>
              <a href="https://wa.me/628882111780" target="_blank" rel="noopener noreferrer" className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] group cursor-pointer">
                <span className="text-black/60 transition-colors group-hover:text-black">{t.contact.phone}</span>
                <span className="font-semibold text-black/80 transition-colors group-hover:text-black group-hover:underline decoration-1 underline-offset-4 break-words">+62 888 2111 780</span>
              </a>
              <a href="https://maps.google.com/?q=Bandung,Indonesia" target="_blank" rel="noopener noreferrer" className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] group cursor-pointer">
                <span className="text-black/60 transition-colors group-hover:text-black">{t.contact.location}</span>
                <span className="font-semibold text-black/80 transition-colors group-hover:text-black group-hover:underline decoration-1 underline-offset-4 break-words">{t.contact.location_value}</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-black/5 backdrop-blur-md border border-black/5 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] rounded-3xl p-6 sm:p-8"
          >
            <h2 className="text-xl md:text-[1.75rem] font-bold mb-6 text-black/90">{t.contact.social_title}</h2>
            <div className="space-y-4 text-sm md:text-[15px]">
              <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] group">
                <span className="text-black/60 transition-colors group-hover:text-black">GitHub</span>
                <a href="https://github.com/mrbaen454-xx" target="_blank" rel="noreferrer" className="font-semibold text-black/80 hover:underline transition-colors group-hover:text-black break-all">github.com/mrbaen454-xx</a>
              </div>
              <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] group">
                <span className="text-black/60 transition-colors group-hover:text-black">LinkedIn</span>
                <a href="https://www.linkedin.com/in/m-saroni-383525405" target="_blank" rel="noreferrer" className="font-semibold text-black/80 hover:underline transition-colors group-hover:text-black break-words">M. Saroni</a>
              </div>
              <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] group">
                <span className="text-black/60 transition-colors group-hover:text-black">Instagram</span>
                <a href="#" className="font-semibold text-black/80 hover:underline transition-colors group-hover:text-black break-words">@mchsroni</a>
              </div>
            </div>
          </motion.div>

          {/* Signature */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 self-end flex flex-col items-center mr-4 md:-mr-8"
          >
            <img 
              src={ttd} 
              alt="M. Saroni Signature" 
              className="w-40 sm:w-48 mb-2 opacity-90 object-contain mix-blend-multiply"
            />
            <span className="font-bold text-sm tracking-wide text-center">M. Saroni</span>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-10 right-10 sm:bottom-12 sm:right-16 z-10 hidden sm:block">
        <span className="font-syncopate text-lg font-bold">04</span>
      </div>
    </section>
  );
};

export default Contact;
