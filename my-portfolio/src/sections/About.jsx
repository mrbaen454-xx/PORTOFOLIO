import { motion } from "framer-motion";
import { GraduationCap, Users, User, Code, BookOpen, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { skillCategories, projects } from "../constants/index";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  // Extract specific projects for the PUB section
  const getProject = (id) => projects.find((p) => p.id === id);

  const pubCoursesMapped = t.about.pub_courses.map((course, index) => {
    // Map corresponding projects
    let project = null;
    if (index === 0) project = getProject(1); // Logika Algoritma -> GedeClimb/BK Access
    else if (index === 2) project = getProject(5); // Web -> Baen Game (D'Kost etc)
    else if (index === 4) project = getProject(4); // Java Fund -> BKA Access/Game
    else if (index === 5) project = getProject(7); // Java Lanjut -> Baentech
    
    return { ...course, project };
  });

  return (
    <section id="about" className="relative min-h-screen pt-28 md:pt-32 pb-24 bg-noise font-outfit text-black">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-12 w-full relative">
        
        {/* Title */}
        <div className="mb-12 md:mb-16 text-center relative flex justify-center items-center">
          {/* Background Script Watermark */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="absolute z-0 pointer-events-none"
          >
            <span className="font-script text-[80px] sm:text-[140px] md:text-[200px] text-black/5 select-none whitespace-nowrap">
              {t.about.title_watermark}
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-syncopate text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter text-black uppercase relative z-10 drop-shadow-sm hover:scale-105 transition-transform duration-700 cursor-default"
          >
            {t.about.title}
          </motion.h1>
        </div>

        {/* ── SEQUENTIAL LAYOUT ── */}
        <div className="flex flex-col gap-12 sm:gap-16 max-w-5xl mx-auto">
          
          {/* Hello / Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-black/90" />
              <h3 className="font-syncopate text-2xl sm:text-3xl font-bold text-black/90 tracking-tighter">
                {t.about.bio_title}
              </h3>
            </div>
            <div className="bg-black/5 backdrop-blur-md border border-black/5 shadow-sm rounded-3xl p-6 sm:p-8 w-full">
              <p className="text-sm sm:text-base font-semibold leading-relaxed text-black/80 mb-4 text-justify">
                {t.about.bio_desc}
              </p>
              <p className="text-sm sm:text-base font-bold text-black/90">
                {t.about.bio_hope}
              </p>
            </div>
          </motion.div>
          
          {/* Pendidikan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-black/90" />
              <h3 className="font-syncopate text-2xl sm:text-3xl font-bold text-black/90 tracking-tighter">
                {t.about.education_title}
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              {t.about.education_list.map((edu, idx) => (
                <div key={idx} className="bg-black/5 backdrop-blur-md border border-black/5 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] rounded-3xl p-6 sm:p-8 w-full">
                  <h4 className="text-lg sm:text-xl font-bold text-black/90">{edu.degree}</h4>
                  <p className="text-sm sm:text-base font-semibold text-black/80 mt-1">{edu.school}</p>
                  <p className="text-xs sm:text-sm font-bold text-black/60 mt-3">{edu.period}</p>
                  <p className="text-sm sm:text-base font-semibold text-black/80 mt-3">
                    {edu.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Pengalaman */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-7 h-7 sm:w-9 sm:h-9 text-black/90" />
              <h3 className="font-syncopate text-2xl sm:text-3xl font-bold text-black/90 tracking-tighter">
                {t.about.experience_title}
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {t.about.experience_list.map((exp, idx) => (
                <div key={idx} className="bg-black/5 backdrop-blur-md border border-black/5 p-6 sm:p-8 rounded-3xl shadow-[0px_10px_30px_rgba(0,0,0,0.15)] group transition-all duration-500 hover:bg-black/[0.07] hover:shadow-[0px_20px_40px_rgba(0,0,0,0.25)]">
                  <h4 className="text-base sm:text-lg font-bold text-black/90 group-hover:text-black transition-colors mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-xs sm:text-sm font-bold text-black/60 mb-4">
                    {exp.period}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-black/80 mb-3">{exp.company}</p>
                  {Array.isArray(exp.desc) ? (
                    <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm font-semibold text-black/80 leading-relaxed">
                      {exp.desc.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs sm:text-sm font-semibold text-black/80 leading-relaxed">
                      {exp.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Keterampilan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 sm:w-10 sm:h-10 text-black/90" />
              <h3 className="font-syncopate text-2xl sm:text-3xl font-bold text-black/90 tracking-tighter">
                {t.about.skills_title}
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((cat, idx) => {
                let catName = cat.category;
                if (cat.category.toLowerCase() === 'frontend') catName = t.about.skills_categories.frontend;
                if (cat.category.toLowerCase() === 'backend') catName = t.about.skills_categories.backend;
                if (cat.category.toLowerCase() === 'tools') catName = t.about.skills_categories.tools;

                return (
                <div key={idx} className="bg-black/5 backdrop-blur-md border border-black/5 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] rounded-3xl p-6 sm:p-8">
                  <h4 className="text-base sm:text-lg font-bold text-black/90 mb-4 pb-2 border-b border-black/10">
                    {catName}
                  </h4>
                  <ul className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-sm font-semibold text-black/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black/40"></span>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              );
              })}
            </div>
          </motion.div>

          {/* Beasiswa PUB */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-black/90" />
              <h3 className="font-syncopate text-2xl sm:text-3xl font-bold text-black/90 tracking-tighter">
                {t.about.pub_title}
              </h3>
            </div>
            <p className="text-sm sm:text-base font-semibold text-black/80 mb-8 max-w-4xl">
              {t.about.pub_desc}
            </p>

            <div className="flex flex-col gap-6">
              {pubCoursesMapped.map((course, idx) => (
                <div key={idx} className="bg-black/5 backdrop-blur-md border border-black/5 shadow-[0px_10px_30px_rgba(0,0,0,0.15)] rounded-3xl p-6 sm:p-8">
                  <h4 className="text-lg sm:text-xl font-bold text-black/90 mb-1">{course.title}</h4>
                  <p className="text-xs sm:text-sm font-bold text-black/50 mb-4">{course.date}</p>
                  <p className="text-sm font-semibold text-black/80 mb-4">{course.desc}</p>
                  
                  {/* Single Project */}
                  {course.project && (
                    <div className="mt-4">
                      <p className="text-sm font-bold text-black/90 mb-3">{t.about.pub_projects}:</p>
                      <div className="bg-white/40 border border-black/10 rounded-2xl p-5 hover:bg-black/5 transition-colors">
                        <div className="flex justify-between items-start gap-4 mb-3">
                          <h5 className="font-bold text-black/90">{course.project.title}</h5>
                          <div className="flex gap-3">
                            {course.project.githubUrl && course.project.githubUrl !== "#" && (
                              <a href={course.project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-black/70 hover:text-black">
                                <FaGithub className="w-4 h-4" /> <span className="hidden sm:inline">Kode</span>
                              </a>
                            )}
                            {course.project.liveUrl && course.project.liveUrl !== "#" && (
                              <a href={course.project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-black/70 hover:text-black">
                                <ExternalLink className="w-4 h-4" /> <span className="hidden sm:inline">Demo</span>
                              </a>
                            )}
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-black/80 mb-4">{course.project.description || course.project.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {course.project.tech.map((t, i) => (
                            <span key={i} className="text-[10px] font-bold bg-white border border-black/10 px-2.5 py-1 rounded-md text-black/70">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Multiple Projects */}
                  {course.projectList && (
                    <div className="mt-4">
                      <p className="text-sm font-bold text-black/90 mb-3">Proyek:</p>
                      <div className="flex flex-col gap-4">
                        {course.projectList.map((proj, pIdx) => (
                          <div key={pIdx} className="bg-white/40 border border-black/10 rounded-2xl p-5 hover:bg-black/5 transition-colors">
                            <div className="flex justify-between items-start gap-4 mb-3">
                              <h5 className="font-bold text-black/90">{proj.title}</h5>
                              <div className="flex gap-3">
                                {proj.githubUrl && (
                                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-black/70 hover:text-black">
                                    <FaGithub className="w-4 h-4" /> <span className="hidden sm:inline">Kode</span>
                                  </a>
                                )}
                              </div>
                            </div>
                            <p className="text-xs sm:text-sm font-semibold text-black/80 mb-4">{proj.description || proj.desc}</p>
                            <div className="flex flex-wrap gap-2">
                              {proj.tech.map((t, i) => (
                                <span key={i} className="text-[10px] font-bold bg-white border border-black/10 px-2.5 py-1 rounded-md text-black/70">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Page Number */}
      <div className="absolute bottom-10 right-10 sm:bottom-12 sm:right-16 z-10 hidden sm:block">
        <span className="font-syncopate text-lg font-bold">01</span>
      </div>
    </section>
  );
};

export default About;
