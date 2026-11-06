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
import pedulikitaImg from "../assets/pedulikita.jpeg";
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

    // PeduliKita
    pk_overview1: "PeduliKita adalah platform crowdfunding dan bantuan kemanusiaan yang ",
    pk_overview1Bold: "transparan",
    pk_overview1Rest: ". Platform ini memfasilitasi penggalangan dana dengan fitur verifikasi yang kuat dan pelaporan progres yang akurat.",
    pk_overview2: "Sistem melayani 3 pengguna utama (Donor, Campaigner, dan Admin) melalui arsitektur Monorepo yang terhubung ke Backend Node.js.",
    
    pk_archTitle: "Arsitektur & Konsep Inti",
    pk_archSub: "Monorepo dengan Backend (Node.js/Express) dan Frontend (React/Vite)",
    pk_archLedgerTitle: "Manajemen Kampanye",
    pk_archLedgerDesc: "Kampanye memiliki target dan tenggat waktu. Bukti transfer donasi diperlukan dan proses kampanye dilaporkan secara berkala.",
    pk_archLockTitle: "Verifikasi Dokumen",
    pk_archLockDesc: "Setiap kampanye membutuhkan dokumen (CampaignDocument) untuk verifikasi demi memastikan keabsahan dan transparansi.",
    pk_archSecTitle: "Keamanan & Autentikasi",
    pk_archSecDesc: "Menggunakan Role-Based Access Control (RBAC) dan JSON Web Token (JWT) untuk autentikasi dan otorisasi pengguna.",
    pk_archDtoTitle: "Cloud Storage",
    pk_archDtoDesc: "Mengintegrasikan Cloudinary untuk penyimpanan aset media secara cloud seperti bukti donasi dan dokumen kampanye.",

    pk_backendTitle: "Ekosistem Backend",
    pk_backendSub: "Node.js 20.x & Express 5.x",
    pk_techStackTitle: "Tech Stack",
    pk_moduleTitle: "Struktur Modul",
    pk_modAuth: "auth (register, login, me)",
    pk_modCamp: "campaign (list, my, detail, create, update, delete, close)",
    pk_modDon: "donation (submit, my, detail)",
    pk_modCat: "category (list, detail, admin create/update/delete)",
    pk_modAdmin: "admin (dashboard, pending campaigns, approve/reject, dll)",
    
    pk_dbTitle: "Skema Database Relasional",
    pk_dbSub: "Strict Relational via PostgreSQL (Neon) & Prisma ORM",
    pk_dbUserDesc: "users (id, name, email, password, phone, role, status)",
    pk_dbCampDesc: "campaigns (id, campaigner_id, category_id, title, slug, target_amount, collected_amount...)",
    pk_dbDonDesc: "donations (id, campaign_id, donor_id, amount, proof_url, status, verified_at)",
    pk_dbUpDesc: "campaign_updates & campaign_documents untuk pelaporan dan verifikasi",
    
    pk_apiTitle: "Endpoint API Lengkap",
    pk_apiSub: "RESTful Endpoints API dengan Validasi Input",

    pk_frontendTitle: "Klien Frontend & Mobile",
    pk_frontendSub: "React 19 & React Native Expo",
    pk_webDesc: "Web: Landing page dengan katalog kampanye, detail kampanye, form donasi, dan Dashboard (Campaigner, Donor, Admin).",
    pk_webLi1: "React 19, Vite, TypeScript, Tailwind CSS, Axios, Lucide React.",
    pk_mobDesc: "Mobile: Aplikasi untuk pengguna dalam genggaman dengan proteksi PIN dan simulasi QRIS.",
    pk_mobLi1: "React Native, Expo, TypeScript, React Navigation.",
    pk_mobLi2: "Keamanan JWT di AsyncStorage/SecureStore, PIN transaksi 6‑digit.",
    
    pk_footer: "Dengan perpaduan backend Node.js dan frontend React/React Native, PeduliKita membuktikan solusi platform sosial yang berfokus pada ",

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

    // PeduliKita
    pk_overview1: "PeduliKita is a ",
    pk_overview1Bold: "transparent",
    pk_overview1Rest: " crowdfunding and disaster relief platform. It facilitates fundraising with strong verification features and accurate progress reporting.",
    pk_overview2: "The system serves 3 main users (Donor, Campaigner, and Admin) through a Monorepo architecture connected to a Node.js Backend.",
    
    pk_archTitle: "Architecture & Core Concepts",
    pk_archSub: "Monorepo with Backend (Node.js/Express) and Frontend (React/Vite)",
    pk_archLedgerTitle: "Campaign Management",
    pk_archLedgerDesc: "Campaigns have targets and deadlines. Donation transfer proofs are required, and campaign progress is reported periodically.",
    pk_archLockTitle: "Document Verification",
    pk_archLockDesc: "Each campaign requires documents (CampaignDocument) for verification to ensure validity and transparency.",
    pk_archSecTitle: "Security & Authentication",
    pk_archSecDesc: "Uses Role-Based Access Control (RBAC) and JSON Web Tokens (JWT) for user authentication and authorization.",
    pk_archDtoTitle: "Cloud Storage",
    pk_archDtoDesc: "Integrates Cloudinary for cloud storage of media assets like donation proofs and campaign documents.",

    pk_backendTitle: "Backend Ecosystem",
    pk_backendSub: "Node.js 20.x & Express 5.x",
    pk_techStackTitle: "Tech Stack",
    pk_moduleTitle: "Module Structure",
    pk_modAuth: "auth (register, login, me)",
    pk_modCamp: "campaign (list, my, detail, create, update, delete, close)",
    pk_modDon: "donation (submit, my, detail)",
    pk_modCat: "category (list, detail, admin create/update/delete)",
    pk_modAdmin: "admin (dashboard, pending campaigns, approve/reject, etc)",
    
    pk_dbTitle: "Relational Database Schema",
    pk_dbSub: "Strict Relational via PostgreSQL (Neon) & Prisma ORM",
    pk_dbUserDesc: "users (id, name, email, password, phone, role, status)",
    pk_dbCampDesc: "campaigns (id, campaigner_id, category_id, title, slug, target_amount, collected_amount...)",
    pk_dbDonDesc: "donations (id, campaign_id, donor_id, amount, proof_url, status, verified_at)",
    pk_dbUpDesc: "campaign_updates & campaign_documents for reporting and verification",
    
    pk_apiTitle: "Complete API Endpoints",
    pk_apiSub: "RESTful API Endpoints with Input Validation",

    pk_frontendTitle: "Frontend & Mobile Clients",
    pk_frontendSub: "React 19 & React Native Expo",
    pk_webDesc: "Web: Landing page with campaign catalog, campaign details, donation form, and Dashboards (Campaigner, Donor, Admin).",
    pk_webLi1: "React 19, Vite, TypeScript, Tailwind CSS, Axios, Lucide React.",
    pk_mobDesc: "Mobile: User app with PIN protection and QRIS simulation.",
    pk_mobLi1: "React Native, Expo, TypeScript, React Navigation.",
    pk_mobLi2: "JWT security in AsyncStorage/SecureStore, 6‑digit transaction PIN.",
    
    pk_footer: "Combining a Node.js backend and React/React Native frontend, PeduliKita proves a social platform solution focused on ",

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
  <div className="space-y-16 sm:space-y-24 text-black font-outfit">
    
    {/* OVERVIEW */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-base sm:text-lg md:text-2xl font-medium leading-relaxed text-black/80 max-w-4xl"
    >
      <p className="mb-4 sm:mb-6">
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
      className="space-y-6 sm:space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-syncopate font-black text-black mb-1 sm:mb-2">{t.archTitle}</h2>
        <p className="text-sm md:text-base text-black/60 font-medium">{t.archSub}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/40 p-5 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
            <BookOpenIcon />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.archLedgerTitle}</h3>
          <p className="text-black/70 leading-relaxed text-xs sm:text-sm">{t.archLedgerDesc}</p>
        </div>
        
        <div className="bg-white/40 p-5 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.archLockTitle}</h3>
          <p className="text-black/70 leading-relaxed text-xs sm:text-sm">{t.archLockDesc}</p>
        </div>

        <div className="bg-white/40 p-5 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.archSecTitle}</h3>
          <p className="text-black/70 leading-relaxed text-xs sm:text-sm">{t.archSecDesc}</p>
        </div>

        <div className="bg-white/40 p-5 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
            <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.archDtoTitle}</h3>
          <p className="text-black/70 leading-relaxed text-xs sm:text-sm">{t.archDtoDesc}</p>
        </div>
      </div>
    </motion.div>

    {/* BACKEND & MODULES */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6 sm:space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-syncopate font-black text-black mb-1 sm:mb-2 flex items-center gap-2 md:gap-3">
          <Server className="w-6 h-6 md:w-8 md:h-8" /> {t.backendTitle}
        </h2>
        <p className="text-sm md:text-base text-black/60 font-medium">{t.backendSub}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="flex-1 bg-black text-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 pointer-events-none">
            <Code2 className="w-24 h-24 sm:w-40 sm:h-40" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 relative z-10">{t.techStackTitle}</h3>
          <ul className="space-y-4 relative z-10">
            {[
              { label: "Core", value: "Java 21 & Spring Boot 4.1.1" },
              { label: "Data", value: "PostgreSQL & Flyway Migrations" },
              { label: "Security", value: "Spring Security, JJWT, BCrypt" },
              { label: "Tools", value: "MapStruct, Lombok, SpringDoc OpenAPI" }
            ].map((tech, i) => (
              <li key={i} className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 sm:mt-1.5 w-1.5 h-1.5 bg-white/50 rounded-full shrink-0" />
                <div>
                  <div className="text-white/50 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{tech.label}</div>
                  <div className="font-medium text-sm sm:text-lg">{tech.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-black/5">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-black">{t.moduleTitle}</h3>
          <div className="space-y-3">
            {[
              { name: "auth", desc: t.modAuth },
              { name: "account", desc: t.modAcc },
              { name: "transaction", desc: t.modTrans },
              { name: "ledger", desc: t.modLedge },
              { name: "presentation", desc: t.modPres }
            ].map((mod, i) => (
              <div key={i} className="group p-3 sm:p-4 bg-white/50 hover:bg-white rounded-xl sm:rounded-2xl border border-black/5 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <div className="font-mono text-xs sm:text-sm font-bold bg-black/5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-black group-hover:bg-black group-hover:text-white transition-colors">
                  {mod.name}
                </div>
                <div className="text-[11px] sm:text-sm font-medium text-black/70">{mod.desc}</div>
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
      className="space-y-6 sm:space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-syncopate font-black text-black mb-1 sm:mb-2 flex items-center gap-2 md:gap-3">
          <Database className="w-6 h-6 md:w-8 md:h-8" /> {t.dbTitle}
        </h2>
        <p className="text-sm md:text-base text-black/60 font-medium">{t.dbSub}</p>
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
          <div key={i} className="bg-white/40 p-5 sm:p-6 rounded-[24px] sm:rounded-3xl border border-black/5 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3 sm:mb-4">
                <h4 className="font-mono text-sm sm:text-lg font-bold bg-black text-white px-2.5 sm:px-3 py-1 rounded-lg inline-block break-all sm:break-normal">
                  {table.title}
                </h4>
                {table.highlight && (
                  <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-black/40 bg-black/5 px-2 py-1 rounded-md shrink-0">
                    {table.highlight}
                  </span>
                )}
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-black/50 mb-3 sm:mb-4 bg-black/5 p-2.5 sm:p-3 rounded-xl border border-black/5 break-words">
                {table.fields}
              </p>
            </div>
            <p className="text-xs sm:text-sm font-medium text-black/80">{table.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* REST API ENDPOINTS */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6 sm:space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-syncopate font-black text-black mb-1 sm:mb-2 flex items-center gap-2 md:gap-3">
          <Terminal className="w-6 h-6 md:w-8 md:h-8" /> {t.apiTitle}
        </h2>
        <p className="text-sm md:text-base text-black/60 font-medium">{t.apiSub}</p>
      </div>

      <div className="space-y-4">
        {[
          { group: "Public", endpoints: [{ m: "POST", p: "/api/auth/login" }, { m: "POST", p: "/api/auth/register" }] },
          { group: "Customer Role", endpoints: [{ m: "GET", p: "/api/customer/dashboard" }, { m: "GET", p: "/api/customer/transactions" }, { m: "POST", p: "/api/customer/transfer (Requires PIN)" }, { m: "POST", p: "/api/customer/qris" }] },
          { group: "Teller Role", endpoints: [{ m: "GET", p: "/api/teller/accounts/{id}" }, { m: "POST", p: "/api/teller/deposit" }, { m: "POST", p: "/api/teller/withdraw" }] },
          { group: "Admin Role", endpoints: [{ m: "GET", p: "/api/admin/stats" }, { m: "GET", p: "/api/admin/transactions (Master Audit)" }] }
        ].map((role, i) => (
          <div key={i} className="bg-white/30 rounded-xl sm:rounded-2xl border border-black/5 overflow-hidden">
            <div className="bg-black/5 px-4 sm:px-6 py-2.5 sm:py-3 border-b border-black/5 text-xs sm:text-sm font-bold text-black uppercase tracking-widest">
              {role.group}
            </div>
            <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
              {role.endpoints.map((ep, j) => (
                <div key={j} className="flex items-start sm:items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-sm px-2 py-1.5 hover:bg-white/50 rounded-lg transition-colors overflow-hidden">
                  <span className={`w-10 sm:w-12 text-center font-bold text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-1 rounded-md shrink-0 mt-0.5 sm:mt-0 ${
                    ep.m === 'POST' ? 'bg-black text-white' : 'bg-black/10 text-black'
                  }`}>
                    {ep.m}
                  </span>
                  <span className="text-black/80 break-words leading-tight sm:leading-normal">{ep.p}</span>
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
      className="space-y-6 sm:space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-syncopate font-black text-black mb-1 sm:mb-2 flex items-center gap-2 md:gap-3">
          <Monitor className="w-6 h-6 md:w-8 md:h-8" /> {t.frontendTitle}
        </h2>
        <p className="text-sm md:text-base text-black/60 font-medium">{t.frontendSub}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white/40 p-6 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 shadow-sm">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-black">Web Dashboard</h3>
              <p className="text-xs sm:text-sm font-bold text-black/50">React 18 • Vite • Tailwind • Recharts</p>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-black/70 text-xs sm:text-sm leading-relaxed">{t.webDesc}</p>
            <ul className="space-y-2 mt-3 sm:mt-4">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-medium"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.webLi1}</li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-medium"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.webLi2}</li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-medium"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.webLi3}</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/40 p-6 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 shadow-sm">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-black">Mobile Banking</h3>
              <p className="text-xs sm:text-sm font-bold text-black/50">React Native • Expo • SecureStore</p>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-black/70 text-xs sm:text-sm leading-relaxed">{t.mobDesc}</p>
            <ul className="space-y-2 mt-3 sm:mt-4">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-medium"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.mobLi1}</li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-medium"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.mobLi2}</li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-medium"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.mobLi3}</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-black text-white p-6 sm:p-8 md:p-12 rounded-[24px] sm:rounded-[40px] text-center shadow-xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 sm:p-12 opacity-5 pointer-events-none">
        <Activity className="w-24 h-24 sm:w-[200px] sm:h-[200px]" />
      </div>
      <p className="text-sm sm:text-base md:text-xl font-medium leading-relaxed relative z-10 mx-auto max-w-3xl">
        {t.footer}
        <span className="font-bold underline underline-offset-4 decoration-white/30">{t.footerSec}</span>, <span className="font-bold underline underline-offset-4 decoration-white/30">{t.footerInt}</span>, dan <span className="font-bold underline underline-offset-4 decoration-white/30">{t.footerUx}</span>.
      </p>
    </motion.div>

  </div>
  );
};

// Helper for icon BookOpen that doesn't conflict
const BookOpenIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);

const PeduliKitaDetail = ({ lang }) => {
  const t = dict[lang];
  return (
  <div className="space-y-16 sm:space-y-24 text-black font-outfit">
    
    {/* OVERVIEW */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-base sm:text-lg md:text-2xl font-medium leading-relaxed text-black/80 max-w-4xl"
    >
      <p className="mb-4 sm:mb-6">
        {t.pk_overview1} <span className="text-black font-bold">{t.pk_overview1Bold}</span> {t.pk_overview1Rest}
      </p>
      <p>
        {t.pk_overview2}
      </p>
    </motion.div>

    {/* ARCHITECTURE BENTO GRID */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6 sm:space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-syncopate font-black text-black mb-1 sm:mb-2">{t.pk_archTitle}</h2>
        <p className="text-sm md:text-base text-black/60 font-medium">{t.pk_archSub}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white/40 p-5 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
            <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.pk_archLedgerTitle}</h3>
          <p className="text-black/70 leading-relaxed text-xs sm:text-sm">{t.pk_archLedgerDesc}</p>
        </div>
        
        <div className="bg-white/40 p-5 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.pk_archLockTitle}</h3>
          <p className="text-black/70 leading-relaxed text-xs sm:text-sm">{t.pk_archLockDesc}</p>
        </div>

        <div className="bg-white/40 p-5 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.pk_archSecTitle}</h3>
          <p className="text-black/70 leading-relaxed text-xs sm:text-sm">{t.pk_archSecDesc}</p>
        </div>

        <div className="bg-white/40 p-5 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 hover:bg-white/60 transition-colors">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
            <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{t.pk_archDtoTitle}</h3>
          <p className="text-black/70 leading-relaxed text-xs sm:text-sm">{t.pk_archDtoDesc}</p>
        </div>
      </div>
    </motion.div>

    {/* BACKEND & MODULES */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6 sm:space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-syncopate font-black text-black mb-1 sm:mb-2 flex items-center gap-2 md:gap-3">
          <Server className="w-6 h-6 md:w-8 md:h-8" /> {t.pk_backendTitle}
        </h2>
        <p className="text-sm md:text-base text-black/60 font-medium">{t.pk_backendSub}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="flex-1 bg-black text-white p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 sm:p-8 opacity-10 pointer-events-none">
            <Code2 className="w-24 h-24 sm:w-40 sm:h-40" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 relative z-10">{t.pk_techStackTitle}</h3>
          <ul className="space-y-4 relative z-10">
            {[
              { label: "Core Backend", value: "Node.js 20.x & Express 5.x" },
              { label: "Database", value: "PostgreSQL (Neon) & Prisma ORM" },
              { label: "Security", value: "Helmet, CORS, rate limit, bcrypt, JWT" },
              { label: "Storage", value: "Multer + Cloudinary" }
            ].map((tech, i) => (
              <li key={i} className="flex items-start gap-3 sm:gap-4">
                <div className="mt-1 sm:mt-1.5 w-1.5 h-1.5 bg-white/50 rounded-full shrink-0" />
                <div>
                  <div className="text-white/50 text-[10px] sm:text-xs font-bold uppercase tracking-widest">{tech.label}</div>
                  <div className="font-medium text-sm sm:text-lg">{tech.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1 bg-white/60 backdrop-blur-md p-6 sm:p-8 rounded-[24px] sm:rounded-[32px] border border-black/5">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-black">{t.pk_moduleTitle}</h3>
          <div className="space-y-3">
            {[
              { name: "auth", desc: t.pk_modAuth },
              { name: "campaign", desc: t.pk_modCamp },
              { name: "donation", desc: t.pk_modDon },
              { name: "category", desc: t.pk_modCat },
              { name: "admin", desc: t.pk_modAdmin }
            ].map((mod, i) => (
              <div key={i} className="group p-3 sm:p-4 bg-white/50 hover:bg-white rounded-xl sm:rounded-2xl border border-black/5 transition-all flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                <div className="font-mono text-xs sm:text-sm font-bold bg-black/5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-black group-hover:bg-black group-hover:text-white transition-colors">
                  {mod.name}
                </div>
                <div className="text-[11px] sm:text-sm font-medium text-black/70">{mod.desc}</div>
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
      className="space-y-6 sm:space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-syncopate font-black text-black mb-1 sm:mb-2 flex items-center gap-2 md:gap-3">
          <Database className="w-6 h-6 md:w-8 md:h-8" /> {t.pk_dbTitle}
        </h2>
        <p className="text-sm md:text-base text-black/60 font-medium">{t.pk_dbSub}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            title: "users & categories",
            fields: "id | name | role/status | timestamps",
            desc: t.pk_dbUserDesc
          },
          {
            title: "campaigns",
            fields: "target_amount | collected_amount | status | image_url",
            desc: t.pk_dbCampDesc
          },
          {
            title: "donations",
            fields: "campaign_id | donor_id | amount | proof_url",
            desc: t.pk_dbDonDesc
          },
          {
            title: "updates & documents",
            fields: "campaign_id | file_url | content | timestamps",
            desc: t.pk_dbUpDesc
          }
        ].map((table, i) => (
          <div key={i} className="bg-white/40 p-5 sm:p-6 rounded-[24px] sm:rounded-3xl border border-black/5 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3 sm:mb-4">
                <h4 className="font-mono text-sm sm:text-lg font-bold bg-black text-white px-2.5 sm:px-3 py-1 rounded-lg inline-block break-all sm:break-normal">
                  {table.title}
                </h4>
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-black/50 mb-3 sm:mb-4 bg-black/5 p-2.5 sm:p-3 rounded-xl border border-black/5 break-words">
                {table.fields}
              </p>
            </div>
            <p className="text-xs sm:text-sm font-medium text-black/80">{table.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* REST API ENDPOINTS */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6 sm:space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-syncopate font-black text-black mb-1 sm:mb-2 flex items-center gap-2 md:gap-3">
          <Terminal className="w-6 h-6 md:w-8 md:h-8" /> {t.pk_apiTitle}
        </h2>
        <p className="text-sm md:text-base text-black/60 font-medium">{t.pk_apiSub}</p>
      </div>

      <div className="space-y-4">
        {[
          { group: "Auth & Users", endpoints: [{ m: "POST", p: "/api/auth/register, /api/auth/login" }, { m: "GET", p: "/api/users, /api/auth/me" }, { m: "PUT", p: "/api/users/:id/status" }] },
          { group: "Campaigns", endpoints: [{ m: "GET", p: "/api/campaigns, /api/campaigns/my" }, { m: "POST", p: "/api/campaigns" }, { m: "PUT", p: "/api/campaigns/:id, /api/campaigns/:id/close" }] },
          { group: "Donations", endpoints: [{ m: "POST", p: "/api/donations" }, { m: "GET", p: "/api/donations/my, /api/donations/:id" }] },
          { group: "Admin", endpoints: [{ m: "GET", p: "/api/admin/dashboard, pending campaigns" }, { m: "PUT", p: "approve/reject campaign/donation" }] }
        ].map((role, i) => (
          <div key={i} className="bg-white/30 rounded-xl sm:rounded-2xl border border-black/5 overflow-hidden">
            <div className="bg-black/5 px-4 sm:px-6 py-2.5 sm:py-3 border-b border-black/5 text-xs sm:text-sm font-bold text-black uppercase tracking-widest">
              {role.group}
            </div>
            <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
              {role.endpoints.map((ep, j) => (
                <div key={j} className="flex items-start sm:items-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-sm px-2 py-1.5 hover:bg-white/50 rounded-lg transition-colors overflow-hidden">
                  <span className={`w-10 sm:w-12 text-center font-bold text-[9px] sm:text-[11px] px-1.5 sm:px-2 py-1 rounded-md shrink-0 mt-0.5 sm:mt-0 ${
                    ep.m === 'POST' ? 'bg-black text-white' : ep.m === 'PUT' ? 'bg-orange-500 text-white' : 'bg-black/10 text-black'
                  }`}>
                    {ep.m}
                  </span>
                  <span className="text-black/80 break-words leading-tight sm:leading-normal">{ep.p}</span>
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
      className="space-y-6 sm:space-y-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-syncopate font-black text-black mb-1 sm:mb-2 flex items-center gap-2 md:gap-3">
          <Monitor className="w-6 h-6 md:w-8 md:h-8" /> {t.pk_frontendTitle}
        </h2>
        <p className="text-sm md:text-base text-black/60 font-medium">{t.pk_frontendSub}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <div className="bg-white/40 p-6 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 shadow-sm">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-black">Web Platform</h3>
              <p className="text-xs sm:text-sm font-bold text-black/50">React 19 • Vite • Tailwind • TypeScript</p>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-black/70 text-xs sm:text-sm leading-relaxed">{t.pk_webDesc}</p>
            <ul className="space-y-2 mt-3 sm:mt-4">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-medium"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.pk_webLi1}</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/40 p-6 sm:p-8 rounded-[24px] sm:rounded-3xl border border-black/5 shadow-sm">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-black">Mobile App</h3>
              <p className="text-xs sm:text-sm font-bold text-black/50">React Native • Expo • TypeScript</p>
            </div>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-black/70 text-xs sm:text-sm leading-relaxed">{t.pk_mobDesc}</p>
            <ul className="space-y-2 mt-3 sm:mt-4">
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-medium"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.pk_mobLi1}</li>
              <li className="flex gap-2 sm:gap-3 text-xs sm:text-sm font-medium"><div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-black mt-1.5 shrink-0"/> {t.pk_mobLi2}</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-black text-white p-6 sm:p-8 md:p-12 rounded-[24px] sm:rounded-[40px] text-center shadow-xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-8 sm:p-12 opacity-5 pointer-events-none">
        <Activity className="w-24 h-24 sm:w-[200px] sm:h-[200px]" />
      </div>
      <p className="text-sm sm:text-base md:text-xl font-medium leading-relaxed relative z-10 mx-auto max-w-3xl">
        {t.pk_footer}
        <span className="font-bold underline underline-offset-4 decoration-white/30">{t.footerSec}</span>, <span className="font-bold underline underline-offset-4 decoration-white/30">{t.footerInt}</span>, dan <span className="font-bold underline underline-offset-4 decoration-white/30">{t.footerUx}</span>.
      </p>
    </motion.div>

  </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = dict[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectId = parseInt(id);
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#d1d5db] bg-noise flex flex-col items-center justify-center font-outfit">
        <h1 className="text-3xl sm:text-4xl font-syncopate font-bold text-black mb-4">{t.notFound}</h1>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-black/80 transition-colors text-sm sm:text-base"
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
      {(project.id === 9 || project.id === 8) && (
        <div className="w-full relative mb-8 md:mb-12">
          <img 
            src={project.id === 9 ? bankcoreImg : pedulikitaImg} 
            alt={project.title} 
            className="w-full h-auto object-cover object-center max-h-[60vh]"
          />
          {/* Fades into the background cleanly */}
          <div className="absolute inset-x-0 bottom-0 h-16 sm:h-32 bg-gradient-to-t from-[#d1d5db] to-transparent pointer-events-none" />
        </div>
      )}

      <div className={`max-w-5xl mx-auto px-4 sm:px-12 relative z-20 ${(project.id !== 9 && project.id !== 8) ? 'pt-24 md:pt-32' : ''}`}>
        
        {/* Navigation & Title */}
        <div className="mb-8 md:mb-12">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-black/60 hover:text-black font-bold mb-6 sm:mb-8 transition-colors group bg-white/40 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-black/10 text-xs sm:text-sm w-max shadow-sm"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            {t.backToPort}
          </button>
          
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="px-2 sm:px-3 py-1 bg-black text-white rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-sm">
              {project.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-syncopate font-black text-black leading-tight tracking-tighter drop-shadow-sm">
            {project.title}
          </h1>
        </div>
        
        {/* Action Buttons & Tech Stack Banner */}
        <div className="bg-white/40 backdrop-blur-md border border-white/50 shadow-xl rounded-[24px] sm:rounded-[32px] p-5 sm:p-6 md:p-8 mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6 md:gap-8">
          
          <div className="flex-1 w-full">
            <div className="text-[10px] sm:text-sm font-bold text-black/50 mb-2 sm:mb-3 uppercase tracking-widest">{t.techUsed}</div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/60 text-black font-bold rounded-lg border border-black/5 shadow-sm text-[10px] sm:text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row w-full md:w-auto items-stretch sm:items-center gap-3 sm:gap-4 shrink-0 mt-2 sm:mt-4 md:mt-0">
            {project.githubUrl && project.githubUrl !== "#" && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto flex justify-center items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-black text-white rounded-xl font-bold hover:bg-black/80 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-xs sm:text-base"
              >
                <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                {t.viewRepo}
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto flex justify-center items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-black border border-black/10 rounded-xl font-bold hover:bg-black/5 transition-all shadow-sm hover:shadow-md hover:-translate-y-1 text-xs sm:text-base"
              >
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                {t.liveDemo}
              </a>
            )}
          </div>
        </div>

        {/* Content Body */}
        {project.id === 9 ? (
          <BankCoreDetail lang={language} />
        ) : project.id === 8 ? (
          <PeduliKitaDetail lang={language} />
        ) : (
          <div className="bg-white/30 backdrop-blur-md border border-white/50 shadow-xl rounded-[24px] sm:rounded-[40px] p-8 sm:p-12 text-center text-black/50 font-bold text-base sm:text-xl h-[30vh] sm:h-[40vh] flex items-center justify-center">
            {t.writingText}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
