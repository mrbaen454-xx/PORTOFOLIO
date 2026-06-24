import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { skillCategories } from "../constants";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="relative py-24 bg-[#020817] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="blob-1 top-0 right-1/4 opacity-25" style={{ animationDelay: "2s" }} />
      <div className="blob-3 bottom-0 left-0 opacity-20" style={{ animationDelay: "4s" }} />

      {/* Divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">
            <Cpu size={12} />
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Technologies and tools I use to build reliable backend systems and modern web applications.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`glass-card p-3 sm:p-5 bg-gradient-to-br ${cat.color} border ${cat.borderColor} transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                <h3 className={`font-bold text-[11px] sm:text-sm ${cat.accentColor}`}>{cat.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={si}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + si * 0.06 }}
                  >
                    {/* Skill Name + Level */}
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-[10px] sm:text-xs font-medium text-slate-300 truncate mr-2">{skill.name}</span>
                      <span className={`text-[10px] sm:text-xs font-semibold ${cat.accentColor}`}>{skill.level}%</span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + si * 0.08, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r`}
                        style={{
                          background: idx === 0
                            ? "linear-gradient(90deg, #3B82F6, #60A5FA)"
                            : idx === 1
                            ? "linear-gradient(90deg, #8B5CF6, #A78BFA)"
                            : idx === 2
                            ? "linear-gradient(90deg, #06B6D4, #22D3EE)"
                            : "linear-gradient(90deg, #10B981, #34D399)",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom badge row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-5 font-medium">Always learning new technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Spring Security", "Docker (Learning)", "CI/CD (Learning)", "Redis (Learning)", "Thymeleaf", "Maven", "JPA/Hibernate"].map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="skill-badge"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
