"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { urlFor } from "@/sanity";

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
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
    >
      {/* Lebar dinaikkan ke max-w-6xl (lebar +28%) */}
      <div
        className="bg-white dark:bg-[#151923] border border-gray-200/90 dark:border-white/[0.08] rounded-3xl w-full max-w-6xl h-[92vh] sm:h-[88vh] flex flex-col shadow-2xl relative overflow-hidden text-gray-900 dark:text-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal Bar */}
        <div className="px-6 sm:px-10 py-4 sm:py-5 border-b border-gray-100 dark:border-white/[0.08] flex items-center justify-between bg-white/95 dark:bg-[#151923]/95 backdrop-blur-md z-20 shrink-0">
          <div className="min-w-0 pr-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-mono font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-md border border-blue-100 dark:border-blue-900/40">
                {project.role || "Lead Developer"}
              </span>
              <span className="text-[10px] font-mono text-gray-400 hidden sm:inline">
                • Case Study Detail
              </span>
            </div>
            <h2 className="text-lg sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight mt-1 truncate">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-gray-100 dark:bg-white/[0.06] border border-gray-200/80 dark:border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer shrink-0 active:scale-95"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>

        {/* Konten Scroll Modal */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 custom-scrollbar">
          {/* Pratinjau Gambar Landscape Utama */}
          {project.thumbnail && (
            <div className="w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/[0.08] bg-gray-100 dark:bg-black/50 relative shadow-sm">
              <img
                src={urlFor(project.thumbnail).url()}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Ringkasan & Tech Stack */}
          <div className="space-y-4 bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06] p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xs font-mono text-blue-600 dark:text-blue-400 uppercase tracking-widest font-semibold">
              Ringkasan &amp; Arsitektur Proyek
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-5xl">
              {project.summary ||
                "Penjelasan detail arsitektur teknis, implementasi sistem, fungsionalitas, serta metrik performa."}
            </p>
            {project.techStack?.length > 0 && (
              <div className="pt-2">
                <p className="text-[11px] font-mono text-gray-400 mb-2">
                  Teknologi yang digunakan:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white dark:bg-white/[0.05] text-gray-700 dark:text-gray-200 text-[10px] sm:text-xs px-2.5 py-1 rounded-md border border-gray-200 dark:border-white/[0.08] font-mono shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dokumentasi & Fitur Utama */}
          <div className="space-y-6 pt-2 border-t border-gray-100 dark:border-white/[0.06]">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest font-medium">
                Alur Tahapan &amp; Implementasi Teknis
              </h4>
            </div>

            {project.caseStudyPhases && project.caseStudyPhases.length > 0 ? (
              <div className="space-y-5">
                {project.caseStudyPhases.map((phase, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-gray-50/60 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06] p-6 rounded-2xl"
                  >
                    <div className="md:col-span-5 w-full">
                      <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.08] bg-gray-100 dark:bg-black/40 flex items-center justify-center text-gray-400 font-mono text-xs">
                        {phase.previewImage ? (
                          <img
                            src={urlFor(phase.previewImage).url()}
                            alt={phase.title || `Fase ${idx + 1}`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <span>[{phase.phaseName || `Fase 0${idx + 1}`}]</span>
                        )}
                      </div>
                    </div>
                    <div className="md:col-span-7 space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/40 font-semibold">
                          {phase.phaseName || `Fase 0${idx + 1}`}
                        </span>
                        {phase.topic && (
                          <span className="text-xs font-mono text-gray-400">
                            {phase.topic}
                          </span>
                        )}
                      </div>
                      <h5 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                        {phase.title}
                      </h5>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-gray-50/60 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06] p-6 rounded-2xl">
                  <div className="md:col-span-5 w-full">
                    <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.08] bg-gray-100 dark:bg-black/40 flex items-center justify-center text-gray-400 font-mono text-xs">
                      {project.thumbnail ? (
                        <img
                          src={urlFor(project.thumbnail).url()}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span>[Fase 01 Preview]</span>
                      )}
                    </div>
                  </div>
                  <div className="md:col-span-7 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/40 font-semibold">
                        Fase 01
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        Arsitektur &amp; Antarmuka
                      </span>
                    </div>
                    <h5 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      Desain Antarmuka &amp; Responsivitas
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Menitikberatkan pada arsitektur komponen yang modular,
                      waktu render yang optimal di perangkat seluler, serta
                      integrasi visual yang konsisten.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-gray-50/60 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06] p-6 rounded-2xl">
                  <div className="md:col-span-5 w-full">
                    <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.08] bg-gray-100 dark:bg-black/40 flex items-center justify-center text-gray-400 font-mono text-xs">
                      <span className="font-mono text-[11px] text-gray-500">
                        [System Pipeline]
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-7 space-y-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-100 dark:border-cyan-900/40 font-semibold">
                        Fase 02
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        Integrasi &amp; Pipeline
                      </span>
                    </div>
                    <h5 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                      Pemrosesan Data &amp; Integrasi Layanan
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Konfigurasi endpoint yang efisien, optimasi pemrosesan
                      latar belakang, serta pengujian stabilitas untuk performa
                      sistem yang konsisten.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-gray-100 dark:border-white/[0.06] flex flex-wrap items-center justify-end gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-gray-800 dark:text-gray-100 text-xs font-semibold font-mono transition-all active:scale-95"
              >
                <span>Lihat Live Demo</span>
                <span>↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold font-mono transition-all shadow-md shadow-blue-600/20 active:scale-95"
              >
                <span>Akses GitHub Repository</span>
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
