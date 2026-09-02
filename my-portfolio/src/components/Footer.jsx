import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-noise font-outfit text-black">
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-6">
        
        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-gray-500 flex items-center gap-1.5 font-medium">
            © {currentYear} M. Saroni. All rights reserved. Built by Baen
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-[13px] font-bold text-gray-500 hover:text-black transition-colors duration-200 group"
          >
            Back to top
            <span className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-200">
              <ArrowUp size={12} strokeWidth={3} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
