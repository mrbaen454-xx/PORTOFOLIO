import { motion } from "framer-motion";
import { Code2, Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const socials = [
    {
      icon: <FaGithub size={16} />,
      href: "https://github.com/mrbaen454-xx",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={16} />,
      href: "https://www.linkedin.com/in/m-saroni-383525405",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram size={16} />,
      href: "https://www.instagram.com/mchsroni",
      label: "Instagram",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020817] overflow-hidden">
      {/* Top Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      {/* Blob decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-blue-600/5 to-transparent blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 py-12">
        {/* Top Row */}
        <div className="grid sm:grid-cols-3 gap-8 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Baen<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
              Java Backend Developer & Web Developer. Building digital solutions from Bandung, Indonesia.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-4">Navigation</p>
            <nav className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="block text-sm text-slate-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-4">Connect</p>
            <div className="space-y-2.5">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
                >
                  <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all duration-200">
                    {social.icon}
                  </span>
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            © {currentYear} M. Saroni. All rights reserved. Built with
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              className="text-red-400"
            >
              <Heart size={12} fill="currentColor" />
            </motion.span>
            by Baen
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors duration-200 group"
          >
            Back to top
            <span className="w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 group-hover:text-blue-400 transition-all duration-200">
              <ArrowUp size={11} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
