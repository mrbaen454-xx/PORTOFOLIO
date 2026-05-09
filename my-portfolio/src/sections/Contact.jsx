import { motion } from "framer-motion";
// PERHATIKAN: Tidak ada lagi 'Github', 'Linkedin', atau 'Instagram' di sini
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "msaroni454@gmail.com",
      link: "mailto:msaroni454@gmail.com",
      color: "from-blue-600/20 to-cyan-600/20",
      iconColor: "text-blue-500",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+62 888 2111 780",
      link: "tel:+628882111780",
      color: "from-purple-600/20 to-pink-600/20",
      iconColor: "text-purple-500",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "BANDUNG, INDONESIA",
      link: "https://maps.app.goo.gl/HG7fb8YqkWNfe24x9",
      color: "from-emerald-600/20 to-teal-600/20",
      iconColor: "text-emerald-500",
    },
  ];

  // Menggunakan SVG manual persis seperti di Projects agar anti-error
  const socials = [
    {
      name: "GitHub",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      url: "https://github.com/mrbaen454-xx",
      hover: "hover:text-white hover:bg-slate-800",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      url: "https://www.linkedin.com/in/m-saroni-383525405",
      hover: "hover:text-white hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      url: "https://www.instagram.com/mchsroni?igsh=ZnE1dzNpdHBpYjg=",
      hover: "hover:text-white hover:bg-pink-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 text-blue-500 mb-4"
          >
            <Sparkles size={16} />
            <span className="uppercase tracking-[0.4em] text-[10px] font-black">
              Stay in touch
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter">
            Let's <span className="text-blue-500">Connect.</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contactInfo.map((info, i) => (
            <motion.a
              key={i}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 bg-slate-900/40 border border-white/5 rounded-[2rem] hover:border-blue-500/50 transition-all duration-500 overflow-hidden relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center mb-6 border border-white/10 ${info.iconColor}`}
                >
                  {info.icon}
                </div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                  {info.title}
                </h4>
                <p className="text-xl font-bold text-white mb-4">
                  {info.value}
                </p>
                <div className="flex items-center gap-2 text-blue-500 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  Open <ExternalLink size={12} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links Bar */}
        <div className="flex flex-col items-center pt-10 border-t border-white/5">
          <p className="text-slate-600 text-xs font-black uppercase tracking-[0.3em] mb-8">
            Social Media
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={`flex items-center gap-4 px-8 py-4 bg-slate-900 border border-white/5 rounded-2xl transition-all duration-300 font-bold ${social.hover}`}
              >
                {social.icon}
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
