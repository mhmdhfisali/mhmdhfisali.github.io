"use client";

import { urlFor } from "@/sanity";
import { useMemo, useState } from "react";

export default function Skills({ skills = [] }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const categoryLabels = {
    frontend: "Frontend & Mobile",
    backend: "Backend & AI",
    devops: "DevOps & OS",
    tools: "Multimedia & Manajemen",
  };

  // Ekstraksi kategori unik dari Sanity
  const categories = useMemo(() => {
    const rawCategories = skills.map((s) => s.category?.trim()).filter(Boolean);
    const unique = Array.from(new Set(rawCategories));
    return ["all", ...unique];
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return skills;
    return skills.filter(
      (item) =>
        item.category?.trim().toLowerCase() === activeCategory.toLowerCase(),
    );
  }, [skills, activeCategory]);

  return (
    <div className="w-full space-y-8 text-left py-2">
      {/* Header Seksi */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            Tech Stack &amp; Capabilities
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            Keahlian &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              Teknologi
            </span>
          </h2>

          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
            Total: {skills.length} Instrumen Terdata
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Kumpulan ekosistem bahasa pemrograman, framework antarmuka, arsitektur
          backend, serta infrastruktur Linux &amp; automasi yang aktif
          digunakan.
        </p>
      </div>

      {/* Filter Kategori Dinamis */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-200/80 dark:border-white/[0.08] pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono capitalize transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/25 scale-[1.02]"
                : "bg-white/80 dark:bg-white/[0.03] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/[0.06] hover:bg-gray-100 dark:hover:bg-white/[0.08]"
            }`}
          >
            {cat === "all" ? "Semua Teknologi" : categoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Grid Kartu Skills Bento */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {filteredSkills.length === 0 ? (
          <div className="col-span-full py-16 text-center text-xs font-mono text-gray-400 bg-white/40 dark:bg-white/[0.01] border border-dashed border-gray-200 dark:border-white/10 rounded-2xl">
            Belum ada data skill di Sanity Studio untuk kategori ini.
          </div>
        ) : (
          filteredSkills.map((skill, idx) => {
            const skillName = skill.title || skill.name || "Teknologi";
            const percentage = skill.proficiency || 85;

            return (
              <div
                key={skill._id || idx}
                className="group relative p-4 rounded-2xl bg-white/80 dark:bg-[#151923]/80 border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md shadow-2xs hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gray-100 dark:bg-white/[0.05] border border-gray-200/80 dark:border-white/10 flex items-center justify-center overflow-hidden shrink-0 group-hover:border-blue-500/30 transition-colors">
                    {skill.icon ? (
                      <img
                        src={urlFor(skill.icon).url()}
                        alt={skillName}
                        className="w-5 h-5 object-contain"
                      />
                    ) : (
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                        {skillName.slice(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.05] text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-white/[0.06]">
                    {percentage >= 85 ? "Proficient" : "Familiar"}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {skillName}
                  </h3>
                  <p className="text-[11px] font-mono text-gray-500 dark:text-gray-400 truncate">
                    {categoryLabels[skill.category] ||
                      skill.category ||
                      "General"}
                  </p>
                </div>

                <div className="mt-3.5 pt-3 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-gray-400">
                    Tingkat Penguasaan
                  </span>
                  <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-cyan-400">
                    {percentage}%
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
