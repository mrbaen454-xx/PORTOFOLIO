import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);

    const element = document.getElementById(id);

    if (element) {
      const offset = 80;

      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;

      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] px-4 py-5">
      <motion.nav
        initial={{ y: -120, opacity: 0, rotate: -2 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 120,
        }}
        className={`max-w-6xl mx-auto border-[4px] border-black rounded-[24px] transition-all duration-300 ${
          scrolled
            ? "bg-[#F8FAFC] shadow-[10px_10px_0px_#000]"
            : "bg-[#38BDF8] shadow-[8px_8px_0px_#000]"
        }`}
      >
        <div className="flex items-center justify-between px-5 md:px-8 py-4">
          {/* LOGO */}
          <motion.div
            whileHover={{
              rotate: -3,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick("home")}
            className="flex items-center gap-3 cursor-pointer"
          >
            {/* ICON BOX */}
            <div className="bg-[#2563EB] border-[3px] border-black p-2 rounded-xl shadow-[4px_4px_0px_#000]">
              <Code2 size={22} className="text-white" />
            </div>

            {/* TEXT */}
            <h1 className="text-xl md:text-2xl font-black text-black uppercase tracking-wide">
              Mr Baen
              <span className="text-[#2563EB]">.</span>
            </h1>
          </motion.div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -4,
                  rotate: index % 2 === 0 ? -2 : 2,
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white border-[3px] border-black px-5 py-2 rounded-xl font-black text-black shadow-[4px_4px_0px_#000] hover:shadow-[2px_2px_0px_#000] transition-all"
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden bg-white border-[3px] border-black p-2 rounded-xl shadow-[4px_4px_0px_#000]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className="text-black" />
            ) : (
              <Menu size={24} className="text-black" />
            )}
          </motion.button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-5 pb-5 flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    initial={{
                      x: -40,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white border-[3px] border-black rounded-xl py-3 font-black text-black shadow-[4px_4px_0px_#000]"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
