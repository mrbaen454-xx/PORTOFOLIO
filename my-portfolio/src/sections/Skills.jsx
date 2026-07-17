import { motion } from "framer-motion";
import { skillCategories } from "../constants";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, staggerChildren: 0.05 } 
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 bg-noise font-outfit text-black overflow-hidden flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 sm:mb-28"
        >
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/80 mb-2">
            Technical Skills
          </span>
          <h2 className="font-syncopate text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mt-2 mb-4 uppercase text-black/90">
            My Tech Stack
          </h2>
          <p className="text-black/80 text-xs sm:text-sm font-semibold max-w-xl mx-auto leading-relaxed px-4">
            Tools and technologies I use to build robust and scalable
            applications.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-20"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={categoryVariants}
              className="flex flex-col"
            >
              {/* Category Header */}
              <div className="mb-6 sm:mb-8">
                <h3 className="font-syncopate font-bold text-base sm:text-lg uppercase tracking-tight relative inline-block text-black/90">
                  {cat.category}
                  {/* Subtle underline for the header */}
                  <span className="absolute -bottom-2 left-0 w-8 h-1 bg-black/80"></span>
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    variants={skillVariants}
                    whileHover={{ x: 5, backgroundColor: "rgba(0,0,0,0.03)" }}
                    className="py-3 px-2 border-b border-black/10 last:border-0 rounded-md transition-all duration-300"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-black/80">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
          }}
          className="mt-20 sm:mt-28 text-center px-4"
        >
          <p className="font-syncopate text-[10px] sm:text-xs font-bold uppercase tracking-widest text-black/80 mb-6 sm:mb-8">
            Always learning new technologies
          </p>
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
            }}
          >
            {[
              "Spring Security",
              "JWT (token)",
              "Microservices",
              "Eureka",
              "Thymeleaf",
              "Maven",
              "JPA/Hibernate",
            ].map((tech, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } }
                }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="inline-block text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 bg-transparent border border-black/20 rounded-full text-black/80 hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 sm:bottom-12 sm:right-16 z-10 hidden sm:block">
        <span className="font-syncopate text-lg font-bold">02</span>
      </div>
    </section>
  );
};

export default Skills;
