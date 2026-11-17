"use client";

import { useLanguage } from "@/context/LanguageContext";
import { urlFor } from "@/sanity";
import { FaBrain, FaMicrochip } from "react-icons/fa6";
import {
  SiAlpinedotjs,
  SiArduino,
  SiCodeigniter,
  SiDart,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGit,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiPython,
  SiPytorch,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbDeviceLaptop } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

// Kamus Ikon Otomatis (Responsif: w-4.5 h-4.5 di HP, w-9 h-9 di Desktop)
const getAutoIcon = (title = "") => {
  const t = title.toLowerCase();
  const iconClass =
    "w-4.5 h-4.5 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-110";

  if (t.includes("laravel"))
    return <SiLaravel className={`${iconClass} text-[#FF2D20]`} />;
  if (t.includes("codeigniter"))
    return <SiCodeigniter className={`${iconClass} text-[#EF4223]`} />;
  if (t.includes("php"))
    return <SiPhp className={`${iconClass} text-[#777BB4]`} />;
  if (t.includes("flutter"))
    return <SiFlutter className={`${iconClass} text-[#02569B]`} />;
  if (t.includes("dart"))
    return <SiDart className={`${iconClass} text-[#0175C2]`} />;
  if (t.includes("react"))
    return <SiReact className={`${iconClass} text-[#61DAFB]`} />;
  if (t.includes("next"))
    return (
      <SiNextdotjs className={`${iconClass} text-black dark:text-white`} />
    );
  if (t.includes("typescript") || t.includes("ts"))
    return <SiTypescript className={`${iconClass} text-[#3178C6]`} />;
  if (t.includes("javascript") || t.includes("js"))
    return <SiJavascript className={`${iconClass} text-[#F7DF1E]`} />;
  if (t.includes("tailwind"))
    return <SiTailwindcss className={`${iconClass} text-[#06B6D4]`} />;
  if (t.includes("alpine"))
    return <SiAlpinedotjs className={`${iconClass} text-[#8BC0D0]`} />;
  if (t.includes("html") || t.includes("css"))
    return <SiHtml5 className={`${iconClass} text-[#E34F26]`} />;

  if (t.includes("python"))
    return <SiPython className={`${iconClass} text-[#3776AB]`} />;
  if (t.includes("fastapi"))
    return <SiFastapi className={`${iconClass} text-[#009688]`} />;
  if (t.includes("django"))
    return (
      <SiDjango
        className={`${iconClass} text-[#092E20] dark:text-emerald-400`}
      />
    );
  if (t.includes("node"))
    return <SiNodedotjs className={`${iconClass} text-[#339933]`} />;
  if (t.includes("express"))
    return (
      <SiExpress className={`${iconClass} text-black dark:text-gray-200`} />
    );
  if (t.includes("yolo") || t.includes("vision") || t.includes("ai"))
    return <FaBrain className={`${iconClass} text-purple-500`} />;
  if (t.includes("torch") || t.includes("tensor"))
    return <SiPytorch className={`${iconClass} text-[#EE4C2C]`} />;

  if (t.includes("firebase"))
    return <SiFirebase className={`${iconClass} text-[#FFCA28]`} />;
  if (t.includes("mysql"))
    return <SiMysql className={`${iconClass} text-[#4479A1]`} />;
  if (t.includes("postgres"))
    return <SiPostgresql className={`${iconClass} text-[#4169E1]`} />;
  if (t.includes("mongo"))
    return <SiMongodb className={`${iconClass} text-[#47A248]`} />;
  if (t.includes("sqlite"))
    return <SiSqlite className={`${iconClass} text-[#003B57]`} />;
  if (t.includes("prisma"))
    return (
      <SiPrisma className={`${iconClass} text-[#2D3748] dark:text-white`} />
    );

  if (t.includes("linux"))
    return <SiLinux className={`${iconClass} text-[#FCC624]`} />;
  if (t.includes("docker"))
    return <SiDocker className={`${iconClass} text-[#2496ED]`} />;
  if (t.includes("git"))
    return <SiGit className={`${iconClass} text-[#F05032]`} />;
  if (
    t.includes("bash") ||
    t.includes("shell") ||
    t.includes("zsh") ||
    t.includes("fish")
  )
    return <SiGnubash className={`${iconClass} text-[#4EAA25]`} />;
  if (t.includes("nginx"))
    return <SiNginx className={`${iconClass} text-[#009639]`} />;

  if (t.includes("arduino") || t.includes("esp32"))
    return <SiArduino className={`${iconClass} text-[#00979D]`} />;
  if (t.includes("iot"))
    return <FaMicrochip className={`${iconClass} text-sky-400`} />;
  if (t.includes("code") || t.includes("vscode"))
    return <VscCode className={`${iconClass} text-[#007ACC]`} />;
  if (t.includes("postman"))
    return <SiPostman className={`${iconClass} text-[#FF6C37]`} />;
  if (t.includes("figma"))
    return <SiFigma className={`${iconClass} text-[#F24E1E]`} />;

  return <TbDeviceLaptop className={`${iconClass} text-blue-500`} />;
};

const getSkillTagline = (title = "") => {
  const t = title.toLowerCase();
  if (t.includes("laravel")) return "REST API & MVC";
  if (t.includes("codeigniter")) return "MVC Engine";
  if (t.includes("php")) return "Backend Core";
  if (t.includes("flutter")) return "Mobile UI";
  if (t.includes("dart")) return "App Logic";
  if (t.includes("react")) return "Reactive Web";
  if (t.includes("next")) return "App Router";
  if (t.includes("tailwind")) return "Utility Style";
  if (t.includes("alpine")) return "DOM Engine";
  if (t.includes("python")) return "Script & Automation";
  if (t.includes("fastapi")) return "Async API";
  if (t.includes("django")) return "Enterprise";
  if (t.includes("node")) return "Node Runtime";
  if (t.includes("express")) return "Microservices";
  if (t.includes("yolo")) return "Object Vision";
  if (t.includes("pytorch")) return "Neural Train";
  if (t.includes("docker")) return "Container";
  if (t.includes("linux")) return "Core OS";
  if (t.includes("git")) return "GitOps Flow";
  if (t.includes("bash")) return "Automation";
  if (t.includes("postgres")) return "Relational DB";
  if (t.includes("mysql")) return "DB Modeling";
  if (t.includes("prisma")) return "Type ORM";
  if (t.includes("firebase")) return "Cloud Store";
  if (t.includes("arduino")) return "IoT Circuit";
  if (t.includes("postman")) return "API Testing";
  if (t.includes("figma")) return "UI/UX Spec";
  return "Tech Tool";
};

const getCategoryBadgeClass = (category = "") => {
  const c = category.toLowerCase();
  if (c.includes("frontend"))
    return "text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
  if (c.includes("backend"))
    return "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
  if (c.includes("devops"))
    return "text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20";
  return "text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20";
};

// Kartu Keahlian Responsif: Kompak & Ringan di HP, Mewah di Desktop
function SkillCard({ skill }) {
  const tagline = getSkillTagline(skill.title);

  return (
    <div className="group relative w-[130px] sm:w-[200px] h-[95px] sm:h-[140px] p-2 sm:p-3.5 rounded-2xl sm:rounded-3xl bg-white/85 dark:bg-[#151923]/75 border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-300 select-none shrink-0 flex flex-col justify-between overflow-hidden cursor-pointer shadow-2xs">
      {/* Bagian Atas: Logo & Badge */}
      <div className="flex items-start justify-between gap-1 sm:gap-1.5">
        <div className="w-7 h-7 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-gray-100/90 dark:bg-white/[0.04] border border-gray-200/70 dark:border-white/[0.06] flex items-center justify-center p-1 sm:p-1.5 shadow-2xs shrink-0 group-hover:scale-105 transition-transform">
          {skill.icon ? (
            <img
              src={urlFor(skill.icon).url()}
              alt={skill.title}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            getAutoIcon(skill.title)
          )}
        </div>

        <span
          className={`text-[7px] sm:text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded-md border uppercase tracking-wider truncate max-w-[65px] sm:max-w-none ${getCategoryBadgeClass(
            skill.category,
          )}`}
        >
          {skill.category}
        </span>
      </div>

      {/* Bagian Bawah: Judul & Dynamic Reveal on Hover */}
      <div className="space-y-0.5 sm:space-y-1 relative">
        <div className="flex items-center justify-between gap-1">
          <h3 className="text-[11px] sm:text-sm font-bold text-gray-950 dark:text-white tracking-tight truncate group-hover:text-blue-500 dark:group-hover:text-cyan-400 transition-colors">
            {skill.title}
          </h3>
          <span className="text-[8px] sm:text-[10px] font-mono font-bold text-blue-600 dark:text-cyan-400 shrink-0 sm:hidden">
            {skill.proficiency || 85}%
          </span>
        </div>

        <div className="relative h-3 sm:h-4 overflow-hidden">
          {/* Default: Tagline ringkas */}
          <div className="absolute inset-0 flex items-center gap-1 text-[8px] sm:text-[11px] font-mono text-gray-500 dark:text-gray-400 group-hover:-translate-y-6 opacity-100 group-hover:opacity-0 transition-all duration-300">
            <span className="w-1 h-1 rounded-full bg-cyan-500/60 shrink-0" />
            <span className="truncate">{tagline}</span>
          </div>

          {/* Reveal: Bar Kemahiran (Desktop) */}
          <div className="absolute inset-0 hidden sm:flex flex-col justify-center space-y-1 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-gray-500 dark:text-gray-400">Skor</span>
              <span className="font-bold text-blue-600 dark:text-cyan-400">
                {skill.proficiency || 85}%
              </span>
            </div>
            <div className="w-full h-1 rounded-full bg-gray-100 dark:bg-white/[0.08] overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 transition-all duration-500"
                style={{ width: `${skill.proficiency || 85}%` }}
              />
            </div>
          </div>
        </div>

        {/* Mini progress bar on mobile */}
        <div className="w-full h-0.5 rounded-full bg-gray-100 dark:bg-white/[0.08] overflow-hidden sm:hidden mt-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
            style={{ width: `${skill.proficiency || 85}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills({ skills = [] }) {
  const { t } = useLanguage();
  const row1 = skills.filter((_, i) => i % 2 === 0);
  const row2 = skills.filter((_, i) => i % 2 !== 0);

  // Struktur duplikasi untuk loop marquee tanpa patah (-50%)
  const doubleRow1 = [...row1, ...row1];
  const doubleRow2 = row2.length > 0 ? [...row2, ...row2] : [...row1, ...row1];

  return (
    <div className="w-full space-y-4 sm:space-y-7 text-left py-1 sm:py-2">
      {/* Header */}
      <div className="space-y-2 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            {t.skills.badge}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-3">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            {t.skills.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              {t.skills.titleHighlight}
            </span>
          </h2>

          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-white/[0.04] border border-gray-200 dark:border-white/10 text-xs font-mono shrink-0 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-gray-800 dark:text-gray-200">
              {skills.length} {t.skills.documentedCount}
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-none">
          {t.skills.subtitle}
        </p>
      </div>

      {/* Dual Infinite Marquee Stream (Running di HP & Desktop) */}
      {skills.length === 0 ? (
        <div className="w-full py-16 px-6 border border-dashed border-gray-200 dark:border-white/10 rounded-3xl text-center text-xs font-mono text-gray-400 bg-white/40 dark:bg-white/[0.01]">
          {t.skills.noSkills}
        </div>
      ) : (
        <div className="marquee-container relative w-full overflow-hidden space-y-2.5 sm:space-y-5 py-1 sm:py-2">
          {/* Fade Masking Kiri & Kanan (Halus di HP agar tidak menutup kartu) */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-6 sm:w-28 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-6 sm:w-28 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Baris 1: Aliran ke Kiri (Smooth Running Loop) */}
          <div className="overflow-hidden w-full">
            <div className="animate-marquee-left flex">
              <div className="flex gap-2.5 sm:gap-5 pr-2.5 sm:pr-5 shrink-0">
                {doubleRow1.map((skill, idx) => (
                  <SkillCard key={`row1-a-${idx}`} skill={skill} />
                ))}
              </div>
              <div className="flex gap-2.5 sm:gap-5 pr-2.5 sm:pr-5 shrink-0">
                {doubleRow1.map((skill, idx) => (
                  <SkillCard key={`row1-b-${idx}`} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Baris 2: Aliran ke Kanan (Smooth Running Loop) */}
          <div className="overflow-hidden w-full">
            <div className="animate-marquee-right flex">
              <div className="flex gap-2.5 sm:gap-5 pr-2.5 sm:pr-5 shrink-0">
                {doubleRow2.map((skill, idx) => (
                  <SkillCard key={`row2-a-${idx}`} skill={skill} />
                ))}
              </div>
              <div className="flex gap-2.5 sm:gap-5 pr-2.5 sm:pr-5 shrink-0">
                {doubleRow2.map((skill, idx) => (
                  <SkillCard key={`row2-b-${idx}`} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
