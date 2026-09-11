"use client";

import { urlFor } from "@/sanity";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#11141c] border border-gray-200/90 dark:border-white/[0.1] rounded-3xl w-full max-w-5xl h-[92vh] sm:h-[88vh] flex flex-col shadow-2xl relative overflow-hidden text-gray-900 dark:text-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Header */}
        <div className="px-6 sm:px-8 py-4 border-b border-gray-100 dark:border-white/[0.08] flex items-center justify-between bg-white/95 dark:bg-[#11141c]/95 backdrop-blur-md z-20 shrink-0">
          <div className="min-w-0 pr-4 space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                {project.category || "Case Study Architecture"}
              </span>
              <span className="text-gray-300 dark:text-white/20">•</span>
              <span className="text-[10px] font-mono text-gray-400">
                {project.role || "Lead Engineer"}
              </span>
            </div>
            <h2 className="text-base sm:text-xl font-extrabold text-gray-950 dark:text-white tracking-tight truncate">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-cyan-400 text-xs font-mono font-semibold border border-blue-200/80 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              >
                <span>Live Demo</span>
                <span>↗</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer active:scale-95 text-xs font-mono"
              aria-label="Tutup Modal"
            >
              <span className="hidden sm:inline text-[10px] text-gray-400">
                ESC
              </span>
              <span>✕</span>
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8 custom-scrollbar text-left">
          {/* Top Section: Split Media Preview & Summary Specs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Thumbnail Box */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/[0.08] bg-gray-100 dark:bg-black/40 relative group">
              {project.thumbnail ? (
                <img
                  src={urlFor(project.thumbnail).url()}
                  alt={project.title}
                  className="w-full h-56 sm:h-72 lg:h-80 object-cover group-hover:scale-102 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-56 sm:h-72 lg:h-80 flex items-center justify-center font-mono text-xs text-gray-400">
                  Pratinjau Media Belum Diunggah
                </div>
              )}
            </div>

            {/* Arsitektur & Quick Specs Bento */}
            <div className="lg:col-span-5 space-y-4 p-5 sm:p-6 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06]">
              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-bold">
                  Overview Sistem
                </span>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                  {project.summary ||
                    "Penjelasan komprehensif mengenai arsitektur perangkat lunak, perancangan basis data, integrasi fungsional, dan performa sistem."}
                </p>
              </div>

              {project.techStack?.length > 0 && (
                <div className="pt-2 border-t border-gray-200/60 dark:border-white/[0.06] space-y-2">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                    Tech Stack Terpasang
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white dark:bg-white/[0.05] text-gray-800 dark:text-gray-200 text-[11px] font-mono px-2.5 py-1 rounded-md border border-gray-200/80 dark:border-white/[0.08] shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Timeline Implementasi & Case Study Phases */}
          <div className="space-y-5 pt-3 border-t border-gray-100 dark:border-white/[0.06]">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-gray-950 dark:text-white tracking-tight">
                  Alur Tahapan &amp; Implementasi Teknis
                </h4>
                <p className="text-xs font-mono text-gray-400 mt-0.5">
                  Langkah sistematis dari riset awal, pemrosesan data, hingga
                  integrasi rilis.
                </p>
              </div>
            </div>

            {project.caseStudyPhases && project.caseStudyPhases.length > 0 ? (
              <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-cyan-400 before:to-transparent">
                {project.caseStudyPhases.map((phase, idx) => (
                  <div key={idx} className="relative group">
                    {/* Node Dot Timeline */}
                    <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-5 h-5 rounded-full bg-white dark:bg-[#11141c] border-2 border-blue-500 flex items-center justify-center text-[9px] font-mono font-bold text-blue-600 dark:text-cyan-400 shadow-sm">
                      {idx + 1}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center p-5 rounded-2xl bg-gray-50/70 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06] hover:border-blue-500/30 transition-colors">
                      {/* Image Preview Phase */}
                      <div className="md:col-span-5 w-full">
                        <div className="w-full h-40 sm:h-48 rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.08] bg-gray-100 dark:bg-black/40 flex items-center justify-center text-gray-400 font-mono text-xs">
                          {phase.previewImage ? (
                            <img
                              src={urlFor(phase.previewImage).url()}
                              alt={phase.title || `Fase ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-[11px] text-gray-400">
                              [{phase.phaseName || `Phase 0${idx + 1}`}]
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Detail Deskripsi Phase */}
                      <div className="md:col-span-7 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/40 font-semibold">
                            {phase.phaseName || `Phase 0${idx + 1}`}
                          </span>
                          {phase.topic && (
                            <span className="text-xs font-mono text-gray-400">
                              {phase.topic}
                            </span>
                          )}
                        </div>

                        <h5 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white">
                          {phase.title}
                        </h5>

                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl border border-dashed border-gray-200 dark:border-white/10 text-center text-xs font-mono text-gray-400 bg-gray-50/50 dark:bg-white/[0.01]">
                Belum ada rincian tahapan fase yang diatur untuk studi kasus ini
                di Sanity Studio.
              </div>
            )}
          </div>

          {/* Action Links Footer */}
          <div className="pt-4 border-t border-gray-100 dark:border-white/[0.06] flex flex-wrap items-center justify-end gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-gray-800 dark:text-gray-100 text-xs font-semibold font-mono transition-all active:scale-95"
              >
                <span>Kunjungi Live Demo</span>
                <span>↗</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold font-mono transition-all shadow-md shadow-blue-600/25 active:scale-95"
              >
                <span>Akses Source Code (GitHub)</span>
                <span>&rarr;</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
