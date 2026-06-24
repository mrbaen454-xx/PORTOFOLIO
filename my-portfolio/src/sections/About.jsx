import { motion } from "framer-motion";
import { User, Code2, Database, Zap, Users, BookOpen, MapPin, GraduationCap } from "lucide-react";
import myphoto1 from "../assets/myphoto1.jpeg";

const About = () => {
  const stats = [
    { value: "4+", label: "Projects Built", icon: <Code2 size={16} /> },
    { value: "2+", label: "Years Learning", icon: <BookOpen size={16} /> },
    { value: "10+", label: "Technologies", icon: <Zap size={16} /> },
    { value: "100%", label: "Commitment", icon: <Users size={16} /> },
  ];

  const highlights = [
    {
      icon: <GraduationCap size={20} />,
      title: "Education",
      desc: "D3 Manajemen Informatika – Universitas Nasional PASIM, Bandung (2024 – present)",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: <Code2 size={20} />,
      title: "Focus",
      desc: "Java Backend Development with Spring Boot, REST API, JWT Security, and Microservices architecture",
      color: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
    },
    {
      icon: <Database size={20} />,
      title: "Database",
      desc: "Efficient data management with MySQL and PostgreSQL. Strong understanding of relational DB design",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      icon: <Users size={20} />,
      title: "Collaboration",
      desc: "Experienced with Git, GitHub workflows, and team collaboration to build high-quality software",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="relative py-24 bg-[#020817] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="blob-2 top-1/4 right-0 opacity-30" />
      <div className="blob-1 bottom-0 left-0 opacity-25" style={{ animationDelay: "3s" }} />

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
            <User size={12} />
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Passionate developer focused on building reliable, scalable backend systems and elegant web interfaces.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT: Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Photo + Identity Card */}
            <div className="glass-card p-6 mb-6">
              <div className="flex items-start gap-5">
                {/* Photo */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl overflow-hidden border border-white/10">
                    <img
                      src={myphoto1}
                      alt="M. Saroni"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Identity */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">M. Saroni (Baen)</h3>
                  <p className="text-sm text-blue-400 font-medium mb-2">Java Backend Developer</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin size={11} />
                    <span>Bandung, Indonesia</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="mt-5 pt-5 border-t border-white/[0.06]">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Perjalanan saya di dunia programming dimulai pada tahun <span className="text-slate-300 font-medium">2024</span>{" "}
                  melalui beasiswa PUB di Universitas Nasional PASIM. Saya fokus pada
                  Java backend development dengan passion pada clean architecture, scalability,
                  dan maintainable code. Saat ini aktif mengembangkan skill di bidang{" "}
                  <span className="text-blue-400 font-medium">Spring Boot</span>,{" "}
                  <span className="text-violet-400 font-medium">React</span>, dan{" "}
                  <span className="text-cyan-400 font-medium">database management</span>.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="glass-card p-4 text-center hover:bg-white/[0.07] transition-all duration-300 border-white/[0.08] hover:border-white/[0.15]"
                >
                  <div className="flex items-center justify-center gap-1.5 text-blue-400 mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold gradient-text-bv mb-1">{stat.value}</p>
                  <p className="text-xs text-slate-500 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Highlight Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 4, scale: 1.01 }}
                className={`flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r ${item.bg} border backdrop-blur-sm transition-all duration-300 cursor-default`}
              >
                <div className={`w-10 h-10 rounded-lg ${item.bg} border flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className={`text-sm font-semibold ${item.color} mb-1`}>{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Quote card */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-5 mt-2"
            >
              <div className="flex gap-3 items-start">
                <span className="text-4xl text-blue-500/40 font-serif leading-none mt-1">&ldquo;</span>
                <div>
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    I focus on creating systems that are not just functional, but also reliable,
                    scalable, and easy to maintain. Every line of code matters.
                  </p>
                  <p className="text-xs text-slate-500 mt-3 font-medium">— M. Saroni</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
