import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Sparkles, ArrowUpRight } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "msaroni454@gmail.com",
      link: "mailto:msaroni454@gmail.com",
      color: "bg-[#38BDF8]",
    },

    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+62 888 2111 780",
      link: "tel:+628882111780",
      color: "bg-yellow-300",
    },

    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Bandung, Indonesia",
      link: "https://maps.app.goo.gl/HG7fb8YqkWNfe24x9",
      color: "bg-[#2563EB]",
    },
  ];

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/mrbaen454-xx",
      color: "bg-[#38BDF8]",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="22"
          width="22"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
    },

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/m-saroni-383525405",
      color: "bg-yellow-300",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="22"
          width="22"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },

    {
      name: "Instagram",
      url: "https://www.instagram.com/mchsroni",
      color: "bg-[#2563EB]",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="22"
          width="22"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 px-4 md:px-6 bg-[#0F172A] overflow-hidden"
    >
      {/* BACKGROUND SHAPES */}
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
          rotate: [0, -15, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 w-20 h-20 bg-yellow-300 border-[4px] border-black rounded-full opacity-20"
      />

      <div className="max-w-6xl mx-auto">
        {/* MAIN BOX */}
        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.9,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="bg-[#F8FAFC] border-[4px] border-black rounded-[30px] p-6 md:p-10 shadow-[10px_10px_0px_#000]"
        >
          {/* HEADER */}
          <div className="text-center mb-14">
            <motion.div
              whileHover={{
                rotate: -3,
                scale: 1.05,
              }}
              className="inline-flex items-center gap-2 bg-[#38BDF8] border-[3px] border-black px-4 py-2 rounded-full shadow-[4px_4px_0px_#000] mb-5"
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
                <Sparkles size={16} />
              </motion.div>

              <span className="font-black text-xs uppercase tracking-widest">
                Contact Me
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-black text-black mb-5">
              Let's <span className="text-[#2563EB]">Connect</span>
            </h2>

            <p className="max-w-2xl mx-auto text-black font-medium text-sm md:text-base leading-relaxed">
              Feel free to contact me for collaboration, projects, or just a
              friendly conversation.
            </p>
          </div>

          {/* CONTACT CARDS */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
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
                  y: -10,
                  rotate: index % 2 === 0 ? -2 : 2,
                  scale: 1.03,
                }}
                className={`${info.color} border-[4px] border-black rounded-[28px] p-4 shadow-[8px_8px_0px_#000]`}
              >
                <div className="bg-white border-[3px] border-black rounded-2xl p-6 h-full">
                  {/* ICON */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="w-16 h-16 bg-[#0F172A] text-white border-[3px] border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_#000] mb-5"
                  >
                    {info.icon}
                  </motion.div>

                  {/* TEXT */}
                  <p className="text-[11px] font-black uppercase tracking-widest text-[#2563EB] mb-2">
                    {info.title}
                  </p>

                  <h3 className="text-xl font-black text-black leading-snug mb-4">
                    {info.value}
                  </h3>

                  {/* LINK */}
                  <div className="flex items-center gap-2 text-black font-black text-sm">
                    Open
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* SOCIAL SECTION */}
          <div className="border-t-[4px] border-black pt-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-black mb-3">
                Social Media
              </h3>

              <p className="text-black font-medium text-sm">
                Follow me on social media platforms.
              </p>
            </div>

            {/* SOCIAL BUTTONS */}
            <div className="flex flex-wrap justify-center gap-5">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -8,
                    rotate: index % 2 === 0 ? -4 : 4,
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={`${social.color} border-[4px] border-black rounded-[24px] p-3 shadow-[6px_6px_0px_#000]`}
                >
                  <div className="bg-white border-[3px] border-black rounded-2xl px-6 py-4 flex items-center gap-4">
                    {/* ICON */}
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                      className="bg-[#0F172A] text-white border-[3px] border-black p-3 rounded-xl shadow-[3px_3px_0px_#000]"
                    >
                      {social.icon}
                    </motion.div>

                    {/* TEXT */}
                    <div>
                      <p className="font-black text-black text-lg">
                        {social.name}
                      </p>

                      <p className="text-black text-xs font-medium">
                        Visit Profile
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
