import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      title: "Email",
      value: "msaroni454@gmail.com",
      link: "mailto:msaroni454@gmail.com",
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: <Phone size={18} />,
      title: "Phone",
      value: "+62 888 2111 780",
      link: "tel:+628882111780",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: <MapPin size={18} />,
      title: "Location",
      value: "Bandung, Indonesia",
      link: "https://maps.app.goo.gl/HG7fb8YqkWNfe24x9",
      color: "text-violet-400",
      bg: "bg-violet-500/10 border-violet-500/20",
    },
  ];

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub size={18} />,
      url: "https://github.com/mrbaen454-xx",
      username: "@mrbaen454-xx",
      color: "hover:border-slate-400/30 hover:bg-slate-400/10 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={18} />,
      url: "https://www.linkedin.com/in/m-saroni-383525405",
      username: "M. Saroni",
      color: "hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={18} />,
      url: "https://www.instagram.com/mchsroni",
      username: "@mchsroni",
      color: "hover:border-pink-400/30 hover:bg-pink-400/10 hover:text-pink-400",
    },
  ];

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate sending (no backend)
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="contact" className="relative py-24 bg-[#020817] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="blob-2 top-0 right-0 opacity-30" style={{ animationDelay: "2s" }} />
      <div className="blob-1 bottom-0 left-1/4 opacity-20" style={{ animationDelay: "5s" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

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
            <MessageSquare size={12} />
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Mau ngobrol soal project, kerja bareng, atau sekadar diskusi tech? Langsung aja hubungi saya.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto items-start">

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Contact Cards */}
            <div className="space-y-3 mb-8">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${info.bg} border backdrop-blur-sm transition-all duration-300 group`}
                >
                  <div className={`w-10 h-10 rounded-lg ${info.bg} border flex items-center justify-center flex-shrink-0 ${info.color} group-hover:scale-110 transition-transform duration-200`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-0.5">
                      {info.title}
                    </p>
                    <p className={`text-sm font-semibold ${info.color}`}>{info.value}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`w-5 h-5 rounded-full ${info.bg} border flex items-center justify-center ${info.color}`}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 7L7 1M7 1H2M7 1V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-medium mb-4">Follow me</p>
              <div className="space-y-2.5">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className={`flex items-center gap-3 p-3 rounded-xl glass-card text-slate-400 border border-white/[0.08] transition-all duration-200 group ${social.color}`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{social.name}</p>
                      <p className="text-xs text-slate-600">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
