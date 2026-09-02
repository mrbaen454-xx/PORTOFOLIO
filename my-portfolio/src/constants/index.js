// ==================== NAV LINKS ====================
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

// ==================== SKILLS DATA ====================
export const skillCategories = [
  {
    category: "Backend",
    icon: "🖥️",
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/20",
    accentColor: "text-blue-400",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "REST API", level: 85 },
      { name: "JWT Auth", level: 75 },
      { name: "Hibernate", level: 70 },
      { name: "Microservices", level: 65 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-violet-500/20 to-violet-600/10",
    borderColor: "border-violet-500/20",
    accentColor: "text-violet-400",
    skills: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "Vite", level: 75 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-cyan-500/20 to-cyan-600/10",
    borderColor: "border-cyan-500/20",
    accentColor: "text-cyan-400",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "SQL Query", level: 80 },
      { name: "DB Design", level: 70 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/20",
    accentColor: "text-emerald-400",
    skills: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 80 },
      { name: "Postman", level: 75 },
      { name: "VS Code", level: 90 },
      { name: "IntelliJ IDEA", level: 75 },
      { name: "Maven", level: 70 },
    ],
  },
];

// ==================== PROJECTS DATA ====================
export const projects = [
  {
    id: 1,
    title: "Sistem Penjualan Kuota & Pulsa (CLI)",
    category: "cli",
    description: "Sistem CLI manajemen penjualan kuota dan pulsa.",
    image: null,
    imageKey: "codeImage",
    tech: ["Bahasa C", "File I/O"],
    githubUrl: "#",
    liveUrl: null,
    featured: true,
  },
  {
    id: 5,
    title: "Baen Game",
    category: "html",
    description:
      "Website katalog game dengan layout modern dan navigasi yang smooth. Projek latihan HTML/CSS pertama saya.",
    image: null,
    imageKey: "baenGame",
    tech: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/mrbaen454-xx/Baen-Game.git",
    liveUrl: null,
    featured: false,
  },
  {
    id: 4,
    title: "BKA Access",
    category: "fullstack",
    description:
      "Website booking tiket kereta api terinspirasi dari KAI Access. Pakai Spring Boot di backend dan Thymeleaf buat tampilannya.",
    image: null,
    imageKey: "bkaAcces",
    tech: ["Java Spring Boot", "Thymeleaf", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/mrbaen454-xx/bka_access.git",
    liveUrl: null,
    featured: true,
  },
  {
    id: 7,
    title: "Baentech Store",
    category: "fullstack",
    description:
      "Website toko elektronik dengan arsitektur Microservices. Fitur utama: API Gateway, Eureka Server, payment gateway, dan login SSO.",
    image: null,
    imageKey: "baentechStore",
    tech: ["Java Spring Boot", "Microservices", "PostgreSQL", "API Gateway", "Eureka Server", "SSO", "React", "Tailwind CSS", "Vite"],
    githubUrl: "#",
    liveUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "HRFlow – HRIS Full-Stack",
    category: "fullstack",
    description: "Sistem Manajemen Sumber Daya Manusia (HRIS) Full-Stack.",
    image: null,
    imageKey: "codeImage",
    tech: ["Java Spring Boot", "React", "Tailwind CSS", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: null,
    featured: true,
  },
  {
    id: 3,
    title: "MediCall – HIS Backend",
    category: "backend",
    description: "Backend Sistem Informasi Rumah Sakit (HIS).",
    image: null,
    imageKey: "codeImage",
    tech: ["Java Spring Boot", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: null,
    featured: true,
  },
  {
    id: 6,
    title: "HIMAMI Website",
    category: "react",
    description:
      "Website resmi Himpunan Mahasiswa Manajemen Informatika (HIMAMI). Berisi info organisasi, kegiatan, struktur divisi, galeri, dan kontak.",
    image: null,
    imageKey: "himami",
    tech: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/mrbaen454-xx/HIMAMI.git",
    liveUrl: null,
    featured: true,
  },
];

// ==================== CONTACT INFO ====================
export const contactInfo = [
  {
    icon: "mail",
    title: "Email",
    value: "msaroni454@gmail.com",
    link: "mailto:msaroni454@gmail.com",
    description: "Send me an email anytime",
  },
  {
    icon: "phone",
    title: "Phone",
    value: "+62 888 2111 780",
    link: "tel:+628882111780",
    description: "Mon-Fri, 9AM - 6PM WIB",
  },
  {
    icon: "mapPin",
    title: "Location",
    value: "Bandung, Indonesia",
    link: "https://maps.app.goo.gl/HG7fb8YqkWNfe24x9",
    description: "Open to remote work",
  },
];

// ==================== SOCIALS ====================
export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/mrbaen454-xx",
    username: "@mrbaen454-xx",
    color: "hover:border-slate-400/40 hover:bg-slate-400/10",
    iconColor: "text-slate-300",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/m-saroni-383525405",
    username: "M. Saroni",
    color: "hover:border-blue-400/40 hover:bg-blue-400/10",
    iconColor: "text-blue-400",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mchsroni",
    username: "@mchsroni",
    color: "hover:border-pink-400/40 hover:bg-pink-400/10",
    iconColor: "text-pink-400",
  },
];
