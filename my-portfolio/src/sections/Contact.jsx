import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ttd from "../assets/ttd.png";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-noise font-outfit text-black flex items-center justify-center p-8 md:p-16 overflow-hidden">
      
      {/* Top right floating text */}
      <div className="absolute top-8 right-8 md:top-12 md:right-16 text-sm font-medium tracking-wide">
        @m_saroni2024
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-20 md:gap-24 relative z-10 px-6 sm:px-12">
        
        {/* Left Side: Thank You */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-12 md:mt-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-gothic text-5xl sm:text-7xl md:text-[5.5rem] lg:text-[7rem] tracking-wide leading-none mb-2 text-black/90"
          >
            Thank You
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl sm:text-3xl md:text-4xl italic text-black/70 font-light"
          >
            checking these out!
          </motion.p>
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 flex flex-col mt-4 md:mt-16 md:pl-12 lg:pl-24">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-xl md:text-[1.75rem] font-bold mb-6 text-black/90">Contact</h2>
            <div className="space-y-4 text-sm md:text-[15px]">
              <a href="mailto:msaroni454@gmail.com" className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] group cursor-pointer">
                <span className="text-black/60 transition-colors group-hover:text-black">Email</span>
                <span className="font-semibold text-black/80 transition-colors group-hover:text-black group-hover:underline decoration-1 underline-offset-4">msaroni454@gmail.com</span>
              </a>
              <a href="https://wa.me/628882111780" target="_blank" rel="noopener noreferrer" className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] group cursor-pointer">
                <span className="text-black/60 transition-colors group-hover:text-black">Phone</span>
                <span className="font-semibold text-black/80 transition-colors group-hover:text-black group-hover:underline decoration-1 underline-offset-4">+62 888 2111 780</span>
              </a>
              <a href="https://maps.google.com/?q=Bandung,Indonesia" target="_blank" rel="noopener noreferrer" className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] group cursor-pointer">
                <span className="text-black/60 transition-colors group-hover:text-black">Location</span>
                <span className="font-semibold text-black/80 transition-colors group-hover:text-black group-hover:underline decoration-1 underline-offset-4">Bandung, Indonesia</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-xl md:text-[1.75rem] font-bold mb-6 text-black/90">Follow my socials</h2>
            <div className="space-y-4 text-sm md:text-[15px]">
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] group">
                <span className="text-black/60 transition-colors group-hover:text-black">GitHub</span>
                <a href="https://github.com/mrbaen454-xx" target="_blank" rel="noreferrer" className="font-semibold text-black/80 hover:underline transition-colors group-hover:text-black">github.com/mrbaen454-xx</a>
              </div>
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] group">
                <span className="text-black/60 transition-colors group-hover:text-black">LinkedIn</span>
                <a href="https://www.linkedin.com/in/m-saroni-383525405" target="_blank" rel="noreferrer" className="font-semibold text-black/80 hover:underline transition-colors group-hover:text-black">M. Saroni</a>
              </div>
              <div className="grid grid-cols-[100px_1fr] md:grid-cols-[120px_1fr] group">
                <span className="text-black/60 transition-colors group-hover:text-black">Instagram</span>
                <a href="#" className="font-semibold text-black/80 hover:underline transition-colors group-hover:text-black">@mchsroni</a>
              </div>
            </div>
          </motion.div>

          {/* Signature */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 md:mt-20 self-end flex flex-col items-center mr-4 md:-mr-8"
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
