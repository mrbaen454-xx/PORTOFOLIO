import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 py-12 border-t border-white/5 relative overflow-hidden">
      {/* Soft Glow Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4"
        >
          {/* Main Copyright Line */}
          <p className="text-slate-400 text-sm font-medium flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Portfolio. Built with</span>
            <span className="text-red-500 animate-pulse mx-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
            </span>
            <span>by</span>
            <span className="text-white font-black tracking-tighter text-base">
              M SARONI
            </span>
          </p>

          {/* Subtitle Line */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-bold"
          >
            Crafted with Excellence • 2026
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
