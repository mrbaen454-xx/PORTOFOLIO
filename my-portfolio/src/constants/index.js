// ==================== NAV LINKS ====================
export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
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
      { name: "Antigravity", level: 75 },
      { name: "Maven", level: 70 },
    ],
  },
];

// ==================== PROJECTS DATA ====================
export const projects = [
  {
    id: 1,
    title: "BKA Access",
    category: "fullstack",
    description:
      "Modern railway ticket booking and travel management platform inspired by KAI Access. Built with Java Spring Boot backend and Thymeleaf templating.",
    image: null, // Will use imported asset in component
    imageKey: "bkaAcces",
    tech: ["Java Spring Boot", "Thymeleaf", "MySQL", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/mrbaen454-xx/bka_access.git",
    liveUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "Pemilihan Ketua OSIS",
    category: "html",
    description:
      "Interactive school election website with modern UI design. Simulates a complete digital voting system with candidate display and responsive design.",
    image: null,
    imageKey: "pemilihanOsis",
    tech: ["HTML5", "CSS3", "JavaScript"],
    githubUrl:
      "https://github.com/mrbaen454-xx/ProjekanWebPemilihanKetuaOsis-simulasi-tampilan-.git",
    liveUrl: null,
    featured: false,
  },
  {
    id: 3,
    title: "Baen Game",
    category: "html",
    description:
      "Game showcase website with modern layout and responsive experience. Features smooth navigation and game catalog display.",
    image: null,
    imageKey: "baenGame",
    tech: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/mrbaen454-xx/Baen-Game.git",
    liveUrl: null,
    featured: false,
  },
  {
    id: 4,
    title: "HIMAMI Website",
    category: "react",
    description:
      "Official website of the Informatics Management Student Association (HIMAMI). Central hub for organizational info, activities, division structure, gallery, and contact details.",
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
