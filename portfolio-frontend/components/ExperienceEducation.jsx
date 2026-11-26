"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef, useState } from "react";

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
  const { t, locale } = useLanguage();
  const containerRef = useRef(null);
  const expBarRef = useRef(null);
  const eduBarRef = useRef(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const totalDist = rect.height + windowHeight * 0.4;
            const currentDist = windowHeight - rect.top;
            const ratio = Math.min(Math.max(currentDist / totalDist, 0), 1);
            const heightPercent = `${ratio * 100}%`;
            if (expBarRef.current) expBarRef.current.style.height = heightPercent;
            if (eduBarRef.current) eduBarRef.current.style.height = heightPercent;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full space-y-4 sm:space-y-10 text-left py-1 sm:py-2"
    >
      {/* Header */}
      <div className="space-y-2 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            {t.experience.badge}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            {t.experience.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              {t.experience.titleHighlight}
            </span>
          </h2>

          <span className="text-[11px] sm:text-xs font-mono text-gray-500 dark:text-gray-400">
            {t.experience.summaryCount(experiences.length, educations.length)}
          </span>
        </div>

        <p className="hidden sm:block text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          {t.experience.subtitle}
        </p>
      </div>

      {/* Grid 2 Kolom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12 pt-1">
        {/* PENGALAMAN KERJA */}
        <section className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between pb-2.5 border-b border-gray-200/80 dark:border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <h3 className="text-base sm:text-xl font-bold tracking-tight text-gray-950 dark:text-white">
                {t.experience.profTitle}
              </h3>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/40">
              {t.experience.careerBadge}
            </span>
          </div>

          <div className="relative pl-5 sm:pl-7 space-y-4 sm:space-y-6">
            <div className="absolute left-[7px] sm:left-[11px] top-3 bottom-3 w-[2px] bg-gray-200/90 dark:bg-white/[0.08]" />
            <div
              ref={expBarRef}
              style={{ height: "0%" }}
              className="absolute left-[7px] sm:left-[11px] top-3 w-[2px] bg-gradient-to-b from-blue-600 via-cyan-400 to-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)] will-change-[height]"
            />

            {experiences.length === 0 ? (
              <div className="py-8 px-4 border border-dashed border-gray-200 dark:border-white/10 rounded-xl text-center text-xs font-mono text-gray-400">
                {t.experience.noExp}
              </div>
            ) : (
              experiences.map((exp, idx) => {
                const rawDesc = locale === "en" && exp.descriptionEn ? exp.descriptionEn : exp.description;
                const descText = renderDescription(rawDesc);
                const jobTitle = locale === "en" && exp.jobTitleEn ? exp.jobTitleEn : exp.jobTitle;
                const startDate = locale === "en" && exp.startDateEn ? exp.startDateEn : exp.startDate;
                const rawEndDate = locale === "en" && exp.endDateEn ? exp.endDateEn : exp.endDate;
                const endDateDisplay = exp.isCurrent
                  ? t.experience.present
                  : rawEndDate || t.experience.completed;

                return (
                  <div key={exp._id || idx} className="group relative">
                    <div className="absolute -left-[24px] sm:-left-[32px] top-2.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#12161f] border-2 border-blue-600 group-hover:scale-125 transition-all" />

                    <div className="bg-white/95 dark:bg-[#151923] hover:bg-white dark:hover:bg-[#1a202c] border border-gray-200/90 dark:border-white/[0.08] hover:border-blue-500/40 p-4 sm:p-5 rounded-2xl shadow-2xs transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                          {jobTitle}
                        </h4>
                        <span className="self-start sm:self-auto text-[9px] sm:text-[10px] font-mono font-medium text-blue-600 dark:text-cyan-300 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/40 shrink-0">
                          {startDate} — {endDateDisplay}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </p>

                      {descText && (
                        <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed whitespace-pre-line">
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
        <section className="space-y-4 sm:space-y-6">
          <div className="flex items-center justify-between pb-2.5 border-b border-gray-200/80 dark:border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              <h3 className="text-base sm:text-xl font-bold tracking-tight text-gray-950 dark:text-white">
                {t.experience.eduTitle}
              </h3>
            </div>
            <span className="text-[10px] sm:text-[11px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-100 dark:border-cyan-900/40">
              {t.experience.academicBadge}
            </span>
          </div>

          <div className="relative pl-5 sm:pl-7 space-y-4 sm:space-y-6">
            <div className="absolute left-[7px] sm:left-[11px] top-3 bottom-3 w-[2px] bg-gray-200/90 dark:bg-white/[0.08]" />
            <div
              ref={eduBarRef}
              style={{ height: "0%" }}
              className="absolute left-[7px] sm:left-[11px] top-3 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-400 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)] will-change-[height]"
            />

            {educations.length === 0 ? (
              <div className="py-8 px-4 border border-dashed border-gray-200 dark:border-white/10 rounded-xl text-center text-xs font-mono text-gray-400">
                {t.experience.noEdu}
              </div>
            ) : (
              educations.map((edu, idx) => {
                const degree = locale === "en" && edu.degreeEn ? edu.degreeEn : edu.degree;
                const desc = locale === "en" && edu.descriptionEn ? edu.descriptionEn : edu.description;
                const startDate = locale === "en" && edu.startDateEn ? edu.startDateEn : edu.startDate;
                const rawEndDate = locale === "en" && edu.endDateEn ? edu.endDateEn : edu.endDate;
                const endDateDisplay = rawEndDate || t.experience.present;

                return (
                  <div key={edu._id || idx} className="group relative">
                    <div className="absolute -left-[24px] sm:-left-[32px] top-2.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-[#12161f] border-2 border-cyan-500 group-hover:scale-125 transition-all" />

                    <div className="bg-white/95 dark:bg-[#151923] hover:bg-white dark:hover:bg-[#1a202c] border border-gray-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 p-4 sm:p-5 rounded-2xl shadow-2xs transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {degree}
                        </h4>
                        <span className="self-start sm:self-auto text-[9px] sm:text-[10px] font-mono font-medium text-cyan-600 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-100 dark:border-cyan-900/40 shrink-0">
                          {startDate} — {endDateDisplay}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {edu.institution}
                      </p>

                      {desc && (
                        <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                          {desc}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
