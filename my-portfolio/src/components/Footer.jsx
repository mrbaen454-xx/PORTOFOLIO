import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] py-10 px-4 md:px-6 relative overflow-hidden">
      {/* TOP LINE */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "90%" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[4px] bg-[#2563EB] border-b-[3px] border-black rounded-full"
      />

      {/* FLOATING SHAPES */}
      <motion.div
        animate={{
          rotate: [0, 10, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-6 left-10 w-10 h-10 bg-[#38BDF8] border-[3px] border-black rounded-xl opacity-20"
      />

      <motion.div
        animate={{
          rotate: [0, -10, 0],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-6 right-10 w-10 h-10 bg-yellow-300 border-[3px] border-black rounded-full opacity-20"
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            type: "spring",
          }}
          whileHover={{
            y: -4,
          }}
          className="bg-[#F8FAFC] border-[4px] border-black rounded-[28px] px-6 py-8 shadow-[8px_8px_0px_#000] transition-all"
        >
          {/* CONTENT */}
          <div className="flex flex-col items-center text-center gap-4">
            {/* COPYRIGHT */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-black text-sm md:text-base font-bold flex flex-wrap items-center justify-center gap-2"
            >
              <span>© {currentYear} Portfolio. Built with</span>

              {/* HEART */}
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
                className="text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </motion.span>

              <span>by</span>

              {/* NAME */}
              <motion.span
                whileHover={{
                  rotate: -3,
                  scale: 1.08,
                }}
                className="bg-[#2563EB] text-white px-3 py-1 border-[3px] border-black rounded-xl font-black shadow-[3px_3px_0px_#000] rotate-[-2deg]"
              >
                M SARONI
              </motion.span>
            </motion.p>

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.4,
                type: "spring",
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-black text-black bg-yellow-300 border-[3px] border-black px-4 py-2 rounded-full shadow-[3px_3px_0px_#000]"
            >
              Crafted with Excellence • 2026
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
