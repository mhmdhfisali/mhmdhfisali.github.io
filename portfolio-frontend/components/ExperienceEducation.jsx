"use client";

import { useEffect, useRef, useState } from "react";

// Helper agar deskripsi baik string biasa maupun array block dari Sanity terbaca rapi
function renderDescription(desc) {
  if (!desc) return null;
  if (typeof desc === "string") return desc;
  if (Array.isArray(desc)) {
    return desc
      .map((block) => block.children?.map((child) => child.text).join("") || "")
      .filter(Boolean)
      .join("\n");
  }
  return null;
}

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
      const totalDist = rect.height + windowHeight * 0.4;
      const currentDist = windowHeight - rect.top;
      const ratio = Math.min(Math.max(currentDist / totalDist, 0), 1);
      setScrollRatio(ratio);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="w-full space-y-10 text-left py-2">
      {/* Header Utama Seksi */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            Career &amp; Academic Timeline
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            Pengalaman &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              Pendidikan
            </span>
          </h2>

          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
            {experiences.length} Pengalaman • {educations.length} Jenjang Studi
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Rekam jejak kontribusi profesional, implementasi teknologi harian,
          serta fondasi keilmuan akademis yang ditempuh.
        </p>
      </div>

      {/* Dua Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-2">
        {/* PENGALAMAN KERJA */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200/80 dark:border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.7)]" />
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-gray-950 dark:text-white">
                Pengalaman Profesional
              </h3>
            </div>
            <span className="text-[11px] font-mono text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 rounded-md border border-blue-100 dark:border-blue-900/40">
              Karier
            </span>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-6">
            <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-[2px] bg-gray-200/90 dark:bg-white/[0.08]" />
            <div
              style={{ height: `${scrollRatio * 100}%` }}
              className="absolute left-[11px] sm:left-[15px] top-3 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)] transition-all duration-150 ease-out"
            />

            {experiences.length === 0 ? (
              <div className="py-12 px-6 border border-dashed border-gray-200 dark:border-white/10 rounded-2xl text-center text-xs font-mono text-gray-400">
                Belum ada data pengalaman kerja di Sanity Studio.
              </div>
            ) : (
              experiences.map((exp, idx) => {
                const descText = renderDescription(exp.description);
                const endDateDisplay = exp.isCurrent
                  ? "Sekarang"
                  : exp.endDate || "Sekarang";

                return (
                  <div
                    key={exp._id || idx}
                    className="group relative transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="absolute -left-[30px] sm:-left-[39px] top-2.5 w-4 h-4 rounded-full bg-white dark:bg-[#12161f] border-2 border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.6)] group-hover:scale-125 group-hover:bg-blue-600 transition-all duration-300" />

                    <div className="bg-white/85 dark:bg-[#151923]/70 hover:bg-white dark:hover:bg-[#151923] backdrop-blur-md border border-gray-200/90 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-blue-500/40 p-5 sm:p-6 rounded-2xl shadow-2xs hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1.5">
                        <h4 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                          {exp.jobTitle}
                        </h4>
                        <span className="self-start sm:self-auto text-[10px] font-mono font-medium text-blue-600 dark:text-cyan-300 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-md border border-blue-100 dark:border-blue-900/40 shrink-0">
                          {exp.startDate} — {endDateDisplay}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </p>

                      {descText && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed font-normal whitespace-pre-line">
                          {descText}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>

        {/* PENDIDIKAN AKADEMIK */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-gray-200/80 dark:border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.7)]" />
              <h3 className="text-lg sm:text-xl font-extrabold tracking-tight text-gray-950 dark:text-white">
                Riwayat Akademik
              </h3>
            </div>
            <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-2.5 py-0.5 rounded-md border border-cyan-100 dark:border-cyan-900/40">
              Studi
            </span>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-6">
            <div className="absolute left-[11px] sm:left-[15px] top-3 bottom-3 w-[2px] bg-gray-200/90 dark:bg-white/[0.08]" />
            <div
              style={{ height: `${scrollRatio * 100}%` }}
              className="absolute left-[11px] sm:left-[15px] top-3 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-400 to-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.9)] transition-all duration-150 ease-out"
            />

            {educations.length === 0 ? (
              <div className="py-12 px-6 border border-dashed border-gray-200 dark:border-white/10 rounded-2xl text-center text-xs font-mono text-gray-400">
                Belum ada data riwayat pendidikan di Sanity Studio.
              </div>
            ) : (
              educations.map((edu, idx) => (
                <div
                  key={edu._id || idx}
                  className="group relative transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="absolute -left-[30px] sm:-left-[39px] top-2.5 w-4 h-4 rounded-full bg-white dark:bg-[#12161f] border-2 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.6)] group-hover:scale-125 group-hover:bg-cyan-500 transition-all duration-300" />

                  <div className="bg-white/85 dark:bg-[#151923]/70 hover:bg-white dark:hover:bg-[#151923] backdrop-blur-md border border-gray-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 p-5 sm:p-6 rounded-2xl shadow-2xs hover:shadow-xl hover:shadow-cyan-500/5 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1.5">
                      <h4 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <span className="self-start sm:self-auto text-[10px] font-mono font-medium text-cyan-600 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/50 px-2.5 py-0.5 rounded-md border border-cyan-100 dark:border-cyan-900/40 shrink-0">
                        {edu.startDate} — {edu.endDate || "Sekarang"}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                      {edu.institution}
                    </p>

                    {edu.description && (
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed font-normal">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
