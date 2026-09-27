import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, ExternalLink, Server, Database, Smartphone, Shield, 
  Lock, Layers, Monitor, Code2, Activity, Terminal
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../constants/index";
import bankcoreImg from "../assets/BankCore.jpeg";
import { useLanguage } from "../context/LanguageContext";

const dict = {
  id: {
    overview1: "BankCore adalah sistem perbankan inti ",
    overview1Bold: "(Core Banking System)",
    overview1Rest: " berskala enterprise yang dirancang untuk menangani transaksi finansial end-to-end secara real-time. Proyek ini tidak sekadar sistem CRUD biasa, melainkan menerapkan prinsip-prinsip ",
    overview1Italic: "advanced software engineering",
    overview2: "Sistem melayani 3 role utama (Nasabah, Teller, dan Administrator) melalui antarmuka Klien Mobile dan Web yang terhubung ke Backend API terpusat.",
    
    archTitle: "Arsitektur & Konsep Inti",
    archSub: "Domain-Driven Design (DDD) & Modular Monolith",
    archLedgerTitle: "Double-Entry Ledger",
    archLedgerDesc: "Setiap transaksi menghasilkan dua entri jurnal permanen (Kredit & Debit). Saldo nasabah merupakan bentuk kalkulasi snapshot dari entri absolut mereka, memastikan akuntansi 100% presisi.",
    archLockTitle: "Optimistic Locking",
    archLockDesc: "Menghindari race condition (Double Spending) dengan kolom @Version database. Mencegah penarikan uang serentak dari perangkat berbeda di detik yang sama.",
    archSecTitle: "Stateless Security",
    archSecDesc: "Autentikasi menggunakan JSON Web Token (JWT) yang dienkripsi ketat. Klien menyimpan token terenkripsi dan API memvalidasinya secara independen di setiap request.",
    archDtoTitle: "DTO Mapping",
    archDtoDesc: "Pemisahan mutlak antara lapisan Domain Entity dan Presentasi (API) menggunakan MapStruct, memastikan isolasi data internal dari eksploitasi eksternal.",

    backendTitle: "Ekosistem Backend",
    backendSub: "Java 21 Enterprise Environment",
    techStackTitle: "Tech Stack",
    moduleTitle: "Struktur Modul",
    modAuth: "Logika Autentikasi (JWT generation, login/register)",
    modAcc: "Manajemen rekening & cek saldo snapshot",
    modTrans: "Orchestrator transaksi (validasi limit & PIN)",
    modLedge: "Single Source of Truth (jurnal riwayat mutlak)",
    modPres: "Controllers terpisah berdasar role (RBAC)",

    dbTitle: "Skema Database",
    dbSub: "Strict Entity Relationship via PostgreSQL",
    dbUserDesc: "Menyimpan kredensial sistem untuk otorisasi RBAC.",
    dbAccDesc: "Berfungsi sebagai cache saldo. Menggunakan kolom @Version untuk optimistik locking.",
    dbTransDesc: "Rekaman intensi awal (Deposit, Withdrawal, Transfer).",
    dbLedgDesc: "Dua baris (Kredit/Debit) masuk jika transaksi sukses.",
    dbHighlightDirty: "Anti Dirty-Read",
    dbHighlightAppend: "Append-Only",

    apiTitle: "RESTful API",
    apiSub: "Secured with Role-Based Access Control",
    
    frontendTitle: "Klien Frontend",
    frontendSub: "Interaksi Modern untuk Back-Office dan End-User",
    webDesc: "Platform analitik untuk Admin dan Teller, dirancang layaknya platform finansial enterprise.",
    webLi1: "Live Dashboard Analytics aset likuiditas.",
    webLi2: "Master Ledger View untuk audit aliran dana.",
    webLi3: "Antarmuka POS khusus perbankan (Respons < 100ms).",
    mobDesc: "Aplikasi native dalam genggaman nasabah dengan proteksi ganda dan performa optimal.",
    mobLi1: "Autentikasi biometrik & PIN 6-digit enkripsi.",
    mobLi2: "Simulasi E-Wallet bridging & pembayaran QRIS.",
    mobLi3: "Penyimpanan token di SecureStore terenkripsi.",

    footer: "Dengan perpaduan Spring Boot 4, arsitektur Ledger PostgreSQL yang ketat, serta ekosistem klien React Native & Web, BankCore membuktikan implementasi perangkat lunak berskala produksi (Production-Grade) yang mengutamakan ",
    footerSec: "Keamanan",
    footerInt: "Integritas",
    footerUx: "Pengalaman Pengguna",

    backToPort: "Kembali ke Portofolio",
    techUsed: "Teknologi yang Digunakan",
    viewRepo: "Lihat Repositori",
    liveDemo: "Demo Langsung",
    notFound: "Proyek Tidak Ditemukan",
    backHome: "Kembali ke Beranda",
    writingText: "Detail proyek ini sedang dalam tahap penulisan..."
  },
  en: {
    overview1: "BankCore is an enterprise-scale ",
    overview1Bold: "(Core Banking System)",
    overview1Rest: " designed to handle end-to-end financial transactions in real-time. This project is not just a standard CRUD system, but implements ",
    overview1Italic: "advanced software engineering principles",
    overview2: "The system serves 3 main roles (Customer, Teller, and Administrator) through Mobile and Web Client interfaces connected to a centralized Backend API.",
    
    archTitle: "Architecture & Core Concepts",
    archSub: "Domain-Driven Design (DDD) & Modular Monolith",
    archLedgerTitle: "Double-Entry Ledger",
    archLedgerDesc: "Every transaction generates two permanent journal entries (Credit & Debit). Customer balances are projection snapshots of their absolute entries, ensuring 100% precision accounting.",
    archLockTitle: "Optimistic Locking",
    archLockDesc: "Prevents race conditions (Double Spending) using database @Version columns. Stops simultaneous cash withdrawals from different devices at the exact same second.",
    archSecTitle: "Stateless Security",
    archSecDesc: "Authentication via strictly encrypted JSON Web Tokens (JWT). Clients store encrypted tokens and the API independently validates them on every request.",
    archDtoTitle: "DTO Mapping",
    archDtoDesc: "Absolute separation between Domain Entity and Presentation (API) layers using MapStruct, ensuring internal data isolation from external exploitation.",

    backendTitle: "Backend Ecosystem",
    backendSub: "Java 21 Enterprise Environment",
    techStackTitle: "Tech Stack",
    moduleTitle: "Module Structure",
    modAuth: "Authentication Logic (JWT generation, login/register)",
    modAcc: "Account management & balance snapshot checking",
    modTrans: "Transaction Orchestrator (limit & PIN validation)",
    modLedge: "Single Source of Truth (absolute history journal)",
    modPres: "Separate controllers based on roles (RBAC)",

    dbTitle: "Database Schema",
    dbSub: "Strict Entity Relationship via PostgreSQL",
    dbUserDesc: "Stores system credentials for RBAC authorization.",
    dbAccDesc: "Acts as a balance cache. Uses @Version column for optimistic locking.",
    dbTransDesc: "Initial intent recording (Deposit, Withdrawal, Transfer).",
    dbLedgDesc: "Two rows (Credit/Debit) are inserted if transaction succeeds.",
    dbHighlightDirty: "Anti Dirty-Read",
    dbHighlightAppend: "Append-Only",

    apiTitle: "RESTful API",
    apiSub: "Secured with Role-Based Access Control",

    frontendTitle: "Frontend Clients",
    frontendSub: "Modern Interactions for Back-Office and End-Users",
    webDesc: "Analytics platform for Admins and Tellers, designed like an enterprise financial platform.",
    webLi1: "Live Dashboard Analytics of liquidity assets.",
    webLi2: "Master Ledger View for fund flow auditing.",
    webLi3: "Banking-specific POS interface (Response < 100ms).",
    mobDesc: "Native application in the customer's hands with dual protection and optimal performance.",
    mobLi1: "Biometric authentication & encrypted 6-digit PIN.",
    mobLi2: "E-Wallet bridging simulation & QRIS payments.",
    mobLi3: "Token storage in encrypted SecureStore.",

    footer: "By combining Spring Boot 4, strict PostgreSQL Ledger architecture, and the React Native & Web client ecosystem, BankCore proves a production-grade software implementation that prioritizes ",
    footerSec: "Security",
    footerInt: "Integrity",
    footerUx: "User Experience",

    backToPort: "Back to Portfolio",
    techUsed: "Technologies Used",
    viewRepo: "View Repository",
    liveDemo: "Live Demo",
    notFound: "Project Not Found",
    backHome: "Back to Home",
    writingText: "Project details are currently being written..."
  }
};

const BankCoreDetail = ({ lang }) => {
  const t = dict[lang];
  return (
  <div className="space-y-24 text-black font-outfit">
    
    {/* OVERVIEW */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-lg md:text-2xl font-medium leading-relaxed text-black/80 max-w-4xl"
    >
      <p className="mb-6">
        {t.overview1} <span className="text-black font-bold">{t.overview1Bold}</span> {t.overview1Rest} <span className="italic">{t.overview1Italic}</span>.
      </p>
      <p>
        {t.overview2}
      </p>
    </motion.div>

    {/* ARCHITECTURE BENTO GRID */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-syncopate font-black text-black mb-2">{t.archTitle}</h2>
        <p className="text-black/60 font-medium">{t.archSub}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/40 p-8 rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
            <BookOpenIcon />
          </div>
          <h3 className="text-xl font-bold mb-3">{t.archLedgerTitle}</h3>
          <p className="text-black/70 leading-relaxed text-sm">{t.archLedgerDesc}</p>
        </div>
        
        <div className="bg-white/40 p-8 rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
            <Lock size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">{t.archLockTitle}</h3>
          <p className="text-black/70 leading-relaxed text-sm">{t.archLockDesc}</p>
        </div>

        <div className="bg-white/40 p-8 rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">{t.archSecTitle}</h3>
          <p className="text-black/70 leading-relaxed text-sm">{t.archSecDesc}</p>
        </div>

        <div className="bg-white/40 p-8 rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center mb-6">
            <Layers size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3">{t.archDtoTitle}</h3>
          <p className="text-black/70 leading-relaxed text-sm">{t.archDtoDesc}</p>
        </div>
      </div>
    </motion.div>

    {/* BACKEND & MODULES */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-syncopate font-black text-black mb-2 flex items-center gap-3">
          <Server size={32} /> {t.backendTitle}
        </h2>
        <p className="text-black/60 font-medium">{t.backendSub}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 bg-black text-white p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Code2 size={160} />
          </div>
          <h3 className="text-2xl font-bold mb-8 relative z-10">{t.techStackTitle}</h3>
          <ul className="space-y-4 relative z-10">
            {[
              { label: "Core", value: "Java 21 & Spring Boot 4.1.1" },
              { label: "Data", value: "PostgreSQL & Flyway Migrations" },
              { label: "Security", value: "Spring Security, JJWT, BCrypt" },
              { label: "Tools", value: "MapStruct, Lombok, SpringDoc OpenAPI" }
            ].map((tech, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="mt-1.5 w-1.5 h-1.5 bg-white/50 rounded-full shrink-0" />
                <div>
                  <div className="text-white/50 text-xs font-bold uppercase tracking-widest">{tech.label}</div>
                  <div className="font-medium text-lg">{tech.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-white/60 backdrop-blur-md p-8 rounded-[32px] border border-black/5">
          <h3 className="text-2xl font-bold mb-8 text-black">{t.moduleTitle}</h3>
          <div className="space-y-3">
            {[
              { name: "auth", desc: t.modAuth },
              { name: "account", desc: t.modAcc },
              { name: "transaction", desc: t.modTrans },
              { name: "ledger", desc: t.modLedge },
              { name: "presentation", desc: t.modPres }
            ].map((mod, i) => (
              <div key={i} className="group p-4 bg-white/50 hover:bg-white rounded-2xl border border-black/5 transition-all flex items-center gap-4">
                <div className="font-mono text-sm font-bold bg-black/5 px-3 py-1.5 rounded-lg text-black group-hover:bg-black group-hover:text-white transition-colors">
                  {mod.name}
                </div>
                <div className="text-sm font-medium text-black/70">{mod.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>

    {/* DATABASE SCHEMA */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-syncopate font-black text-black mb-2 flex items-center gap-3">
          <Database size={32} /> {t.dbTitle}
        </h2>
        <p className="text-black/60 font-medium">{t.dbSub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "users",
            fields: "id (UUID) | username | email | password | role | status",
            desc: t.dbUserDesc
          },
          {
            title: "accounts",
            fields: "account_number | balance | status | version",
            desc: t.dbAccDesc,
            highlight: t.dbHighlightDirty
          },
          {
            title: "transactions",
            fields: "id | type | amount | status",
            desc: t.dbTransDesc
          },
          {
            title: "ledgers",
            fields: "transaction_id | entry_type | amount | balance_after",
            desc: t.dbLedgDesc,
            highlight: t.dbHighlightAppend
          }
        ].map((table, i) => (
          <div key={i} className="bg-white/40 p-6 rounded-3xl border border-black/5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-mono text-lg font-bold bg-black text-white px-3 py-1 rounded-lg inline-block">
                  {table.title}
                </h4>
                {table.highlight && (
                  <span className="text-xs font-bold uppercase tracking-widest text-black/40 bg-black/5 px-2 py-1 rounded-md">
                    {table.highlight}
                  </span>
                )}
              </div>
              <p className="font-mono text-xs text-black/50 mb-4 bg-black/5 p-3 rounded-xl border border-black/5">
                {table.fields}
              </p>
            </div>
            <p className="text-sm font-medium text-black/80">{table.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* REST API ENDPOINTS */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-syncopate font-black text-black mb-2 flex items-center gap-3">
          <Terminal size={32} /> {t.apiTitle}
        </h2>
        <p className="text-black/60 font-medium">{t.apiSub}</p>
      </div>

      <div className="space-y-4">
        {[
          { group: "Public", endpoints: [{ m: "POST", p: "/api/auth/login" }, { m: "POST", p: "/api/auth/register" }] },
          { group: "Customer Role", endpoints: [{ m: "GET", p: "/api/customer/dashboard" }, { m: "GET", p: "/api/customer/transactions" }, { m: "POST", p: "/api/customer/transfer (Requires PIN)" }, { m: "POST", p: "/api/customer/qris" }] },
          { group: "Teller Role", endpoints: [{ m: "GET", p: "/api/teller/accounts/{id}" }, { m: "POST", p: "/api/teller/deposit" }, { m: "POST", p: "/api/teller/withdraw" }] },
          { group: "Admin Role", endpoints: [{ m: "GET", p: "/api/admin/stats" }, { m: "GET", p: "/api/admin/transactions (Master Audit)" }] }
        ].map((role, i) => (
          <div key={i} className="bg-white/30 rounded-2xl border border-black/5 overflow-hidden">
            <div className="bg-black/5 px-6 py-3 border-b border-black/5 text-sm font-bold text-black uppercase tracking-widest">
              {role.group}
            </div>
            <div className="p-4 space-y-2">
              {role.endpoints.map((ep, j) => (
                <div key={j} className="flex items-center gap-3 font-mono text-sm px-2 py-1.5 hover:bg-white/50 rounded-lg transition-colors">
                  <span className={`w-12 text-center font-bold text-[11px] px-2 py-1 rounded-md ${
                    ep.m === 'POST' ? 'bg-black text-white' : 'bg-black/10 text-black'
                  }`}>
                    {ep.m}
                  </span>
                  <span className="text-black/80">{ep.p}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>

    {/* FRONTEND ECOSYSTEM */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-syncopate font-black text-black mb-2 flex items-center gap-3">
          <Monitor size={32} /> {t.frontendTitle}
        </h2>
        <p className="text-black/60 font-medium">{t.frontendSub}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/40 p-8 rounded-3xl border border-black/5 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center">
              <Monitor size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Web Dashboard</h3>
              <p className="text-sm font-bold text-black/50">React 18 • Vite • Tailwind • Recharts</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-black/70 text-sm leading-relaxed">{t.webDesc}</p>
            <ul className="space-y-2 mt-4">
              <li className="flex gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.webLi1}</li>
              <li className="flex gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.webLi2}</li>
              <li className="flex gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.webLi3}</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/40 p-8 rounded-3xl border border-black/5 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center">
              <Smartphone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">Mobile Banking</h3>
              <p className="text-sm font-bold text-black/50">React Native • Expo • SecureStore</p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-black/70 text-sm leading-relaxed">{t.mobDesc}</p>
            <ul className="space-y-2 mt-4">
              <li className="flex gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.mobLi1}</li>
              <li className="flex gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.mobLi2}</li>
              <li className="flex gap-3 text-sm font-medium"><div className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.mobLi3}</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-black text-white p-8 md:p-12 rounded-[40px] text-center shadow-xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-12 opacity-5">
        <Activity size={200} />
      </div>
      <p className="text-lg md:text-xl font-medium leading-relaxed relative z-10 mx-auto max-w-3xl">
        {t.footer}
        <span className="font-bold underline underline-offset-4 decoration-white/30">{t.footerSec}</span>, <span className="font-bold underline underline-offset-4 decoration-white/30">{t.footerInt}</span>, dan <span className="font-bold underline underline-offset-4 decoration-white/30">{t.footerUx}</span>.
      </p>
    </motion.div>

  </div>
  );
};

// Helper for icon BookOpen that doesn't conflict
const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = dict[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectId = parseInt(id);
  // Also pass the language into the projects array if needed, but the title and category are fixed.
  // Wait, if category is in the projects array, it might not translate. We'll leave it as is for now.
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#d1d5db] bg-noise flex flex-col items-center justify-center font-outfit">
        <h1 className="text-4xl font-syncopate font-bold text-black mb-4">{t.notFound}</h1>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-black/80 transition-colors"
        >
          {t.backHome}
        </button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#d1d5db] bg-noise font-outfit pb-24"
    >
      {/* Full Width Hero Image at the very top */}
      {project.id === 9 && (
        <div className="w-full relative mb-8 md:mb-12">
          <img 
            src={bankcoreImg} 
            alt={project.title} 
            className="w-full h-auto object-cover object-center"
          />
          {/* Fades into the background cleanly */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#d1d5db] to-transparent pointer-events-none" />
        </div>
      )}

      <div className={`max-w-5xl mx-auto px-6 sm:px-12 relative z-20 ${project.id !== 9 ? 'pt-24 md:pt-32' : ''}`}>
        
        {/* Navigation & Title */}
        <div className="mb-12">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-black/60 hover:text-black font-bold mb-8 transition-colors group bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 w-max shadow-sm"
          >
            <ArrowLeft size={16} />
            {t.backToPort}
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-syncopate font-black text-black leading-tight tracking-tighter drop-shadow-sm">
            {project.title}
          </h1>
        </div>
        
        {/* Action Buttons & Tech Stack Banner */}
        <div className="bg-white/40 backdrop-blur-md border border-white/50 shadow-xl rounded-[32px] p-6 md:p-8 mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="flex-1">
            <div className="text-sm font-bold text-black/50 mb-3 uppercase tracking-widest">{t.techUsed}</div>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-white/60 text-black font-bold rounded-lg border border-black/5 shadow-sm text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-xl font-bold hover:bg-black/80 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <FaGithub size={18} />
                {t.viewRepo}
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white text-black border border-black/10 rounded-xl font-bold hover:bg-black/5 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <ExternalLink size={18} />
                {t.liveDemo}
              </a>
            )}
          </div>
        </div>

        {/* Content Body */}
        {project.id === 9 ? (
          <BankCoreDetail lang={language} />
        ) : (
          <div className="bg-white/30 backdrop-blur-md border border-white/50 shadow-xl rounded-[40px] p-12 text-center text-black/50 font-bold text-xl h-[40vh] flex items-center justify-center">
            {t.writingText}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
