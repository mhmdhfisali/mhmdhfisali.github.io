"use client";

import { useEffect, useRef, useState } from "react";

export default function ExperienceEducation({
  experiences = [],
  educations = [],
}) {
  const containerRef = useRef(null);
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Hitung sejauh mana seksi ini sudah dilewati scroll
      const totalDist = rect.height + windowHeight * 0.5;
      const currentDist = windowHeight - rect.top;
      const ratio = Math.min(Math.max(currentDist / totalDist, 0), 1);
      setScrollRatio(ratio);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
    >
      {/* SECTION PENGALAMAN */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Jejak Karier & Riset
            </h2>
          </div>
          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/[0.04] px-3 py-1 rounded-full border border-gray-200 dark:border-white/[0.08]">
            {experiences.length} Posisi
          </span>
        </div>

        <div className="relative pl-6 sm:pl-8 space-y-8">
          {/* Garis Dasar */}
          <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-[2px] bg-gray-200 dark:bg-white/[0.06]" />

          {/* Garis Dinamis yang Mengisi Mengikuti Scroll */}
          <div
            style={{ height: `${scrollRatio * 100}%` }}
            className="absolute left-[11px] sm:left-[15px] top-3 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all duration-150 ease-out"
          />

          {experiences.map((exp, idx) => (
            <div
              key={exp._id || idx}
              className="group relative transition-all duration-300 hover:-translate-y-1"
            >
              {/* Node Bercahaya */}
              <div className="absolute -left-[30px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-white dark:bg-[#151923] border-2 border-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.7)] group-hover:scale-125 group-hover:bg-blue-500 transition-all duration-300" />

              <div className="bg-white/80 dark:bg-[#151923]/70 backdrop-blur-md border border-gray-200/90 dark:border-white/[0.08] group-hover:border-blue-500/40 p-5 sm:p-6 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:shadow-blue-500/5 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
                    {exp.jobTitle}
                  </h3>
                  <span className="self-start sm:self-auto text-[11px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-md border border-blue-100 dark:border-blue-900/40 shrink-0">
                    {exp.startDate} — {exp.endDate || "Sekarang"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {exp.company}
                </p>
                {exp.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2.5 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION PENDIDIKAN */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Riwayat Akademik
            </h2>
          </div>
          <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/[0.04] px-3 py-1 rounded-full border border-gray-200 dark:border-white/[0.08]">
            {educations.length} Jenjang
          </span>
        </div>

        <div className="relative pl-6 sm:pl-8 space-y-8">
          {/* Garis Dasar */}
          <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-[2px] bg-gray-200 dark:bg-white/[0.06]" />

          {/* Garis Dinamis yang Mengisi Mengikuti Scroll */}
          <div
            style={{ height: `${scrollRatio * 100}%` }}
            className="absolute left-[11px] sm:left-[15px] top-3 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-400 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-all duration-150 ease-out"
          />

          {educations.map((edu, idx) => (
            <div
              key={edu._id || idx}
              className="group relative transition-all duration-300 hover:-translate-y-1"
            >
              {/* Node Bercahaya */}
              <div className="absolute -left-[30px] sm:-left-[39px] top-2 w-4 h-4 rounded-full bg-white dark:bg-[#151923] border-2 border-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.7)] group-hover:scale-125 group-hover:bg-cyan-500 transition-all duration-300" />

              <div className="bg-white/80 dark:bg-[#151923]/70 backdrop-blur-md border border-gray-200/90 dark:border-white/[0.08] group-hover:border-cyan-500/40 p-5 sm:p-6 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:shadow-cyan-500/5 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4 mb-2">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {edu.degree}
                  </h3>
                  <span className="self-start sm:self-auto text-[11px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 px-2.5 py-0.5 rounded-md border border-cyan-100 dark:border-cyan-900/40 shrink-0">
                    {edu.startDate} — {edu.endDate || "Sekarang"}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {edu.institution}
                </p>
                {edu.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2.5 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
