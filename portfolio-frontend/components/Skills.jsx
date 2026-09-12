"use client";

import { urlFor } from "@/sanity";
import { useState } from "react";
import { FaBrain, FaMicrochip } from "react-icons/fa6";
import {
  SiArduino,
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
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbDeviceLaptop } from "react-icons/tb";

// Kamus Ikon Otomatis
const getAutoIcon = (title = "") => {
  const t = title.toLowerCase();

  if (t.includes("flutter"))
    return <SiFlutter className="w-7 h-7 text-[#02569B]" />;
  if (t.includes("dart")) return <SiDart className="w-7 h-7 text-[#0175C2]" />;
  if (t.includes("react"))
    return <SiReact className="w-7 h-7 text-[#61DAFB]" />;
  if (t.includes("next"))
    return <SiNextdotjs className="w-7 h-7 text-black dark:text-white" />;
  if (t.includes("typescript") || t.includes("ts"))
    return <SiTypescript className="w-7 h-7 text-[#3178C6]" />;
  if (t.includes("javascript") || t.includes("js"))
    return <SiJavascript className="w-7 h-7 text-[#F7DF1E]" />;
  if (t.includes("tailwind"))
    return <SiTailwindcss className="w-7 h-7 text-[#06B6D4]" />;
  if (t.includes("html") || t.includes("css"))
    return <SiHtml5 className="w-7 h-7 text-[#E34F26]" />;

  if (t.includes("python"))
    return <SiPython className="w-7 h-7 text-[#3776AB]" />;
  if (t.includes("fastapi"))
    return <SiFastapi className="w-7 h-7 text-[#009688]" />;
  if (t.includes("django"))
    return (
      <SiDjango className="w-7 h-7 text-[#092E20] dark:text-emerald-400" />
    );
  if (t.includes("node"))
    return <SiNodedotjs className="w-7 h-7 text-[#339933]" />;
  if (t.includes("express"))
    return <SiExpress className="w-7 h-7 text-black dark:text-gray-200" />;
  if (t.includes("yolo") || t.includes("vision") || t.includes("ai"))
    return <FaBrain className="w-7 h-7 text-purple-500" />;
  if (t.includes("torch") || t.includes("tensor"))
    return <SiPytorch className="w-7 h-7 text-[#EE4C2C]" />;
  if (t.includes("php")) return <SiPhp className="w-7 h-7 text-[#777BB4]" />;

  if (t.includes("firebase"))
    return <SiFirebase className="w-7 h-7 text-[#FFCA28]" />;
  if (t.includes("mysql"))
    return <SiMysql className="w-7 h-7 text-[#4479A1]" />;
  if (t.includes("postgres"))
    return <SiPostgresql className="w-7 h-7 text-[#4169E1]" />;
  if (t.includes("mongo"))
    return <SiMongodb className="w-7 h-7 text-[#47A248]" />;

  if (t.includes("linux"))
    return <SiLinux className="w-7 h-7 text-[#FCC624]" />;
  if (t.includes("docker"))
    return <SiDocker className="w-7 h-7 text-[#2496ED]" />;
  if (t.includes("git")) return <SiGit className="w-7 h-7 text-[#F05032]" />;
  if (t.includes("bash") || t.includes("shell"))
    return <SiGnubash className="w-7 h-7 text-[#4EAA25]" />;
  if (t.includes("nginx"))
    return <SiNginx className="w-7 h-7 text-[#009639]" />;

  if (t.includes("arduino") || t.includes("esp32"))
    return <SiArduino className="w-7 h-7 text-[#00979D]" />;
  if (t.includes("iot"))
    return <FaMicrochip className="w-7 h-7 text-sky-400" />;

  if (t.includes("figma"))
    return <SiFigma className="w-7 h-7 text-[#F24E1E]" />;
  if (t.includes("postman"))
    return <SiPostman className="w-7 h-7 text-[#FF6C37]" />;

  return <TbDeviceLaptop className="w-7 h-7 text-blue-500" />;
};

export default function Skills({ skills = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Semua Teknologi" },
    { id: "frontend", name: "Frontend & Mobile" },
    { id: "backend", name: "Backend & AI" },
    { id: "devops", name: "DevOps & OS" },
    { id: "tools", name: "Tools & Lainnya" },
  ];

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full space-y-8">
      {/* Header Seksi */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 dark:border-white/[0.08] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-mono font-medium mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
            TECH STACK &amp; CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950 dark:text-white">
            Keahlian &amp;{" "}
            <span className="text-blue-600 dark:text-cyan-400">Teknologi</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-2 max-w-xl">
            Kumpulan instrumen bahasa pemrograman, framework, arsitektur server,
            dan infrastruktur Linux yang aktif digunakan.
          </p>
        </div>

        <div className="text-xs font-mono text-gray-500 dark:text-gray-400">
          Total:{" "}
          <span className="font-bold text-gray-900 dark:text-white">
            {skills.length}
          </span>{" "}
          Instrumen Terdata
        </div>
      </div>

      {/* Filter Kategori Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono tracking-tight transition-all cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-[1.02]"
                : "bg-gray-100 dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/[0.08] border border-gray-200/80 dark:border-white/[0.06]"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grid Kartu Skill */}
      {filteredSkills.length === 0 ? (
        <div className="p-12 text-center border border-dashed border-gray-300 dark:border-white/10 rounded-2xl">
          <p className="text-sm font-mono text-gray-400">
            Belum ada data skill di Sanity Studio untuk kategori ini.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill._id || skill.title}
              className="group relative p-4 sm:p-5 rounded-2xl bg-white/70 dark:bg-[#12161f]/70 border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 shadow-xs"
            >
              <div className="flex items-center gap-3.5 mb-3">
                {/* Render Gambar Kustom JIKA ADA, Jika Kosong Gunakan SVG Otomatis */}
                <div className="w-12 h-12 rounded-xl bg-gray-100/90 dark:bg-white/[0.05] border border-gray-200/80 dark:border-white/[0.08] flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon ? (
                    <img
                      src={urlFor(skill.icon).url()}
                      alt={skill.title}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    getAutoIcon(skill.title)
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                    {skill.title}
                  </h3>
                  <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 uppercase">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Progress Bar Persentase */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-gray-500 dark:text-gray-400">
                    Kemahiran
                  </span>
                  <span className="font-bold text-blue-600 dark:text-cyan-400">
                    {skill.proficiency || 85}%
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-gray-100 dark:bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-700 ease-out"
                    style={{ width: `${skill.proficiency || 85}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
