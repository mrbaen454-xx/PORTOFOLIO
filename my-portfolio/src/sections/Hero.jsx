import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";

import myphoto from "../assets/myphoto.png";

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
          setTextIndex((prev) => (prev + 1) % roles.length);
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4 md:px-6 pt-28 pb-16 overflow-hidden relative"
    >
      {/* BACKGROUND ANIMATION */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-24 left-10 w-24 h-24 bg-[#38BDF8] border-[4px] border-black rounded-3xl opacity-30"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-20 h-20 bg-yellow-300 border-[4px] border-black rounded-full opacity-30"
      />

      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            rotate: -0.5,
          }}
          className="bg-[#F8FAFC] border-[4px] border-black rounded-[28px] p-6 md:p-10 shadow-[10px_10px_0px_#000]"
        >
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-start mb-6"
          >
            <motion.div
              whileHover={{
                rotate: -3,
                scale: 1.05,
              }}
              className="flex items-center gap-2 bg-[#38BDF8] border-[3px] border-black px-3 py-2 rounded-full shadow-[4px_4px_0px_#000]"
            >
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Sparkles size={14} className="text-black" />
              </motion.div>

              <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-black">
                Software Engineer
              </span>
            </motion.div>
          </motion.div>

          {/* MAIN CONTENT */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1 className="text-3xl md:text-5xl font-black leading-tight text-black mb-5">
                Hello, I'm <br />
                <motion.span
                  whileHover={{
                    rotate: -3,
                    scale: 1.03,
                  }}
                  className="bg-[#2563EB] text-white px-3 py-1 inline-block border-[3px] border-black rounded-xl"
                >
                  M SARONI
                </motion.span>
              </motion.h1>

              {/* TYPING TEXT */}
              <motion.div
                whileHover={{
                  y: -3,
                  rotate: 1,
                }}
                className="bg-white border-[3px] border-black rounded-2xl px-4 py-3 shadow-[5px_5px_0px_#000] mb-5"
              >
                <p className="text-base md:text-xl font-bold text-black">
                  I'm a{" "}
                  <span className="text-[#2563EB] border-r-[3px] border-black pr-1 animate-pulse">
                    {displayText}
                  </span>
                </p>
              </motion.div>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-black font-medium leading-relaxed mb-6 text-sm md:text-[15px]"
              >
                Building reliable backend systems with Java. Focus on security,
                scalability, and high-performance architecture.
              </motion.p>

              {/* BUTTON */}
              <motion.button
                whileHover={{
                  y: -5,
                  rotate: -2,
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="flex items-center gap-2 bg-[#2563EB] text-white border-[3px] border-black px-5 py-3 rounded-2xl font-black shadow-[5px_5px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all text-sm"
              >
                <motion.div
                  animate={{
                    y: [0, 2, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                >
                  <Download size={16} />
                </motion.div>
                Download CV
              </motion.button>
            </motion.div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: 60, rotate: 10 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{
                delay: 0.4,
                type: "spring",
                stiffness: 120,
              }}
              className="relative flex justify-center items-center"
            >
              {/* FLOATING ANIMATION */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* MAIN CARD */}
                <motion.div
                  whileHover={{
                    rotate: 2,
                    scale: 1.02,
                  }}
                  className="bg-[#38BDF8] border-[4px] border-black rounded-[24px] p-4 md:p-5 shadow-[8px_8px_0px_#000] rotate-2"
                >
                  {/* INNER FRAME */}
                  <div className="relative bg-[#F8FAFC] border-[3px] border-black rounded-2xl px-4 pt-6 pb-3 rotate-[-2deg] overflow-hidden">
                    {/* DECORATIVE CIRCLE */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="absolute top-3 right-3 w-12 h-12 bg-[#2563EB] border-[3px] border-black rounded-full"
                    />

                    {/* DECORATIVE BOX */}
                    <motion.div
                      animate={{
                        rotate: [12, -5, 12],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                      className="absolute bottom-2 left-2 w-8 h-8 bg-yellow-300 border-[3px] border-black"
                    />

                    {/* PHOTO */}
                    <motion.img
                      src={myphoto}
                      alt="My Photo"
                      whileHover={{
                        scale: 1.08,
                        y: -5,
                      }}
                      className="relative z-10 w-[140px] md:w-[180px] object-contain mx-auto drop-shadow-[5px_5px_0px_rgba(0,0,0,0.8)] transition-all duration-300"
                    />

                    {/* BOTTOM TAG */}
                    <motion.div
                      whileHover={{
                        rotate: -3,
                        scale: 1.05,
                      }}
                      className="mt-3 flex justify-center"
                    >
                      <div className="bg-[#2563EB] text-white border-[3px] border-black px-3 py-2 rounded-xl shadow-[4px_4px_0px_#000] rotate-[-2deg]">
                        <p className="font-black text-xs md:text-sm">
                          JAVA DEVELOPER
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* FLOATING BADGE */}
              <motion.div
                animate={{
                  rotate: [6, 0, 6],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -top-3 -right-1 bg-white border-[3px] border-black rounded-2xl px-3 py-2 shadow-[4px_4px_0px_#000]"
              >
                <span className="font-black text-xs md:text-sm text-black">
                  ⚡ Creative Dev
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
