import { motion } from "framer-motion";
import { Globe, Zap, Users, Database, Server, Cpu } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: <Server size={28} />,
      title: "Backend Development",
      description: "Building robust server-side apps using Java & Spring Boot.",
      color: "bg-[#38BDF8]",
    },
    {
      icon: <Globe size={28} />,
      title: "REST API Design",
      description: "Crafting secure, scalable, and well-documented endpoints.",
      color: "bg-[#2563EB]",
    },
    {
      icon: <Database size={28} />,
      title: "DB Management",
      description:
        "Efficiently handling MySQL, PostgreSQL, and data integrity.",
      color: "bg-yellow-300",
    },
    {
      icon: <Zap size={28} />,
      title: "Optimization",
      description: "Fine-tuning backend performance for maximum speed.",
      color: "bg-[#60A5FA]",
    },
  ];

  const techStack = [
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL",
    "PostgreSQL",
    "Git",
    "Hibernate",
  ];

  return (
    <section
      id="about"
      className="relative py-24 px-4 md:px-6 bg-[#0F172A] overflow-hidden"
    >
      {/* BACKGROUND DECORATION */}
      <motion.div
        animate={{
          rotate: [0, 15, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute top-16 left-10 w-24 h-24 bg-[#38BDF8] border-[4px] border-black rounded-3xl opacity-20"
      />

      <motion.div
        animate={{
          rotate: [0, -10, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 w-20 h-20 bg-yellow-300 border-[4px] border-black rounded-full opacity-20"
      />

      <div className="max-w-6xl mx-auto">
        {/* MAIN CONTAINER */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="bg-[#F8FAFC] border-[4px] border-black rounded-[30px] p-6 md:p-10 shadow-[10px_10px_0px_#000]"
        >
          {/* HEADER */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#38BDF8] border-[3px] border-black px-4 py-2 rounded-full shadow-[4px_4px_0px_#000] mb-5"
            >
              <Cpu size={16} />

              <span className="font-black text-xs uppercase tracking-widest">
                About Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-black text-black mb-5"
            >
              My <span className="text-[#2563EB]">Journey</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto text-black text-sm md:text-base font-medium leading-relaxed"
            >
              I am a Java Backend Developer passionate about building
              high-performance systems with clean architecture, scalability, and
              maintainable code.
            </motion.p>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* JOURNEY CARD */}
              <motion.div
                whileHover={{
                  y: -5,
                  rotate: -1,
                }}
                className="bg-[#38BDF8] border-[4px] border-black rounded-[26px] p-5 shadow-[8px_8px_0px_#000]"
              >
                <div className="bg-white border-[3px] border-black rounded-2xl p-5 rotate-[-1deg]">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="bg-[#2563EB] text-white border-[3px] border-black p-3 rounded-xl shadow-[4px_4px_0px_#000]"
                    >
                      <Cpu size={22} />
                    </motion.div>

                    <h3 className="text-2xl font-black text-black">
                      My Journey
                    </h3>
                  </div>

                  <div className="space-y-4 text-black font-medium leading-relaxed text-sm md:text-[15px]">
                    <p>
                      My programming journey began in 2024 when I started
                      studying at Universitas Nasional PASIM through the PUB
                      scholarship program.
                    </p>

                    <p>
                      I focus on creating systems that are not just functional,
                      but also reliable, scalable, and easy to maintain.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* TECH STACK */}
              <motion.div
                whileHover={{
                  y: -5,
                  rotate: 1,
                }}
                className="bg-yellow-300 border-[4px] border-black rounded-[26px] p-5 shadow-[8px_8px_0px_#000]"
              >
                <div className="bg-white border-[3px] border-black rounded-2xl p-5">
                  <h4 className="text-2xl font-black text-black mb-5">
                    Tech Stack
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={index}
                        whileHover={{
                          y: -4,
                          rotate: index % 2 === 0 ? -3 : 3,
                          scale: 1.05,
                        }}
                        className="bg-[#2563EB] text-white border-[3px] border-black px-4 py-2 rounded-xl font-black text-sm shadow-[4px_4px_0px_#000]"
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="grid sm:grid-cols-2 gap-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 50,
                    rotate: 5,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                  }}
                  transition={{
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 120,
                  }}
                  whileHover={{
                    y: -8,
                    rotate: index % 2 === 0 ? -2 : 2,
                    scale: 1.03,
                  }}
                  className={`${skill.color} border-[4px] border-black rounded-[26px] p-5 shadow-[8px_8px_0px_#000]`}
                >
                  <div className="bg-white border-[3px] border-black rounded-2xl p-5 h-full">
                    {/* ICON */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="w-14 h-14 bg-[#0F172A] text-white border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_#000] mb-5"
                    >
                      {skill.icon}
                    </motion.div>

                    {/* TITLE */}
                    <h4 className="text-xl font-black text-black mb-3">
                      {skill.title}
                    </h4>

                    {/* DESCRIPTION */}
                    <p className="text-black text-sm leading-relaxed font-medium">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              {/* TEAM CARD */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                }}
                whileHover={{
                  y: -6,
                  rotate: -1,
                }}
                className="sm:col-span-2 bg-[#2563EB] border-[4px] border-black rounded-[26px] p-5 shadow-[8px_8px_0px_#000]"
              >
                <div className="bg-white border-[3px] border-black rounded-2xl p-5 flex items-start gap-4">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="bg-yellow-300 border-[3px] border-black p-3 rounded-2xl shadow-[4px_4px_0px_#000]"
                  >
                    <Users size={26} />
                  </motion.div>

                  <div>
                    <h4 className="text-xl font-black text-black mb-2">
                      Agile & Team Player
                    </h4>

                    <p className="text-black font-medium text-sm leading-relaxed">
                      Experienced in Git, collaborative workflows, and teamwork
                      to build high-quality software solutions.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
