import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 120;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] font-outfit">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-noise border-b border-black/10 shadow-sm py-3 z-50"
            : "bg-transparent py-6 z-50"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="flex items-center justify-between h-10 relative">

            {/* LOGO */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNavClick("home")}
              className="flex flex-col items-start cursor-pointer z-10"
            >
              <span className="text-xl sm:text-2xl font-bold leading-none tracking-tighter text-black">Baen.</span>
              <span className="text-[10px] sm:text-xs font-medium tracking-wide text-black uppercase">Station</span>
            </motion.button>

            {/* CENTER TAG - from hero */}
            <div className="hidden xl:block absolute left-1/2 -translate-x-1/2 pointer-events-none">
              <span className="text-sm font-medium tracking-widest uppercase text-black">- WEB DEVELOPER -</span>
            </div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-1 z-10">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-black font-bold"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-black/5"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
              
              {/* YEAR - from hero */}
              <div className="ml-4 pl-4 border-l border-black/20">
                <span className="text-base font-bold text-black">2026</span>
              </div>
            </div>

            {/* HAMBURGER MOBILE */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-black/5 border border-black/10 text-black z-10"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9990] md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-72 bg-white/95 backdrop-blur-xl border-l border-black/10 z-[9995] md:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.1)]"
            >
              {/* Close button in panel */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-black/10">
                <span className="text-lg font-bold text-black">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-black/5 border border-black/10 text-black/60 hover:text-black transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav Links */}
              <div className="px-4 py-6 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left font-medium transition-all duration-200 ${
                      activeSection === item.id
                        ? "bg-black/5 text-black border border-black/10"
                        : "text-black/60 hover:text-black hover:bg-black/5"
                    }`}
                  >
                    <span className="text-xs font-mono text-black/40">0{index + 1}</span>
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Footer info */}
              <div className="absolute bottom-8 left-0 right-0 px-6 text-center flex flex-col gap-2">
                <span className="text-xs font-bold tracking-widest uppercase text-black">- WEB DEVELOPER -</span>
                <p className="text-xs text-black/60">M. Saroni © 2026</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
