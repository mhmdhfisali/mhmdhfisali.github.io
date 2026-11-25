"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getImageUrl, urlFor } from "@/sanity";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

export default function ProjectModal({ project, onClose }) {
  const { locale, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (activeImage) {
          setActiveImage(null);
        } else {
          onClose();
        }
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, activeImage]);

  const architectureFlow = useMemo(() => {
    if (!project) return null;
    const id = project._id || "";
    const pTitle = (project.title || "").toLowerCase();

    if (id.includes("ppic") || pTitle.includes("ppic")) {
      return {
        badge: "ENTERPRISE SYSTEM ARCHITECTURE",
        steps: [
          { node: "Jadwal Shift Pabrik", sub: "Production Personnel" },
          { node: "PPIC Core Engine", sub: "Laravel & MySQL Relational" },
          { node: "Work Orders Otomatis", sub: "< 5 Mnt / Zero Overlap" },
        ],
      };
    }
    if (id.includes("ipc") || pTitle.includes("ipc")) {
      return {
        badge: "QUALITY ASSURANCE DATAFLOW",
        steps: [
          { node: "Sampling Lab Mutu", sub: "Multi-parameter Form" },
          { node: "IPC Validation Engine", sub: "Automated Tolerance Checks" },
          { node: "Paperless QC Ledger", sub: "35% Faster Lab Validation" },
        ],
      };
    }
    if (id.includes("dashboard") || pTitle.includes("dashboard")) {
      return {
        badge: "TELEMETRY & KPI PIPELINE",
        steps: [
          { node: "Data Agregasi Lini", sub: "Packaging & Process Units" },
          { node: "Analytic Query Engine", sub: "Fast Aggregation Logic" },
          { node: "Executive KPI View", sub: "Real-time Machine Metrics" },
        ],
      };
    }
    if (id.includes("absensi") || pTitle.includes("absensi")) {
      return {
        badge: "MOBILE GEOFENCING ARCHITECTURE",
        steps: [
          { node: "Flutter Mobile GPS", sub: "Android & iOS Client" },
          { node: "Haversine Distance Check", sub: "Anti-Fake GPS (<5m)" },
          { node: "Firebase Cloud Sync", sub: "99.8% Real-Time Attendance" },
        ],
      };
    }
    if (id.includes("absolute") || pTitle.includes("absolutestore")) {
      return {
        badge: "HIGH-CONCURRENCY E-COMMERCE",
        steps: [
          { node: "Client Storefront", sub: "Next.js & Responsive UI" },
          { node: "Order & Webhook Engine", sub: "HMAC Signed Settlement" },
          { node: "Instant Delivery", sub: "< 3s Automated QRIS Top-Up" },
        ],
      };
    }
    return {
      badge: "ENGINEERING ARCHITECTURE BLUEPRINT",
      steps: [
        { node: "Data Intake", sub: "Client Input / Ingestion" },
        { node: "Core Logic Unit", sub: "Business Rules & Service Layer" },
        { node: "Validated Output", sub: "Secure Output & Logging" },
      ],
    };
  }, [project]);

  if (!project || !mounted) return null;

  const title = locale === "en" && project.titleEn ? project.titleEn : project.title;
  const summary = locale === "en" && project.summaryEn ? project.summaryEn : project.summary;
  const role = locale === "en" && project.roleEn ? project.roleEn : project.role;

  const isCompany = project.projectType === "company";
  const isInternal = project.deploymentStatus === "internal";
  const isLive = project.deploymentStatus === "live";
  const isResearch = project.deploymentStatus === "research";

  return createPortal(
    <>
      {/* MODAL UTAMA */}
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-[99999] flex items-center justify-center p-2.5 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
        onClick={onClose}
      >
        <div
          className="bg-white dark:bg-[#11141c] border border-gray-200/90 dark:border-white/[0.1] rounded-2xl sm:rounded-3xl w-full max-w-5xl h-[94vh] sm:h-[88vh] flex flex-col shadow-2xl relative overflow-hidden text-gray-900 dark:text-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Modal */}
          <div className="px-4 sm:px-8 py-3 sm:py-4 border-b border-gray-100 dark:border-white/[0.08] flex items-center justify-between bg-white/95 dark:bg-[#11141c]/95 backdrop-blur-md z-20 shrink-0">
            <div className="min-w-0 pr-3 space-y-0.5 sm:space-y-1">
              <div className="flex flex-wrap items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>{project.category || "Case Study"}</span>
                {isCompany && (
                  <>
                    <span className="text-gray-300 dark:text-white/20">•</span>
                    <span className="text-amber-600 dark:text-amber-400 font-bold truncate inline-flex items-center gap-1">
                      <svg
                        className="w-3 h-3 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <span>{project.company || "PT Sinar Meadow International Indonesia"}</span>
                    </span>
                  </>
                )}
                {role && (
                  <>
                    <span className="text-gray-300 dark:text-white/20">•</span>
                    <span className="text-gray-400 truncate">{role}</span>
                  </>
                )}
              </div>
              <h2 className="text-sm sm:text-lg font-black text-gray-950 dark:text-white tracking-tight truncate">
                {title}
              </h2>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {project.ursUrl && (
                <a
                  href={project.ursUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-cyan-400 text-[10px] sm:text-xs font-mono font-semibold border border-blue-200/80 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  title="User Requirement Specification (URS)"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>URS Doc</span>
                </a>
              )}

              {project.manualBookUrl && (
                <a
                  href={project.manualBookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-[10px] sm:text-xs font-mono font-semibold border border-amber-200/80 dark:border-amber-800/50 hover:bg-amber-100 dark:hover:bg-amber-900/50 transition-colors"
                  title="Manual Book IPC"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Manual Book</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-cyan-400 text-[11px] sm:text-xs font-mono font-semibold border border-blue-200/80 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <span>Demo</span>
                  <svg
                    className="w-3 h-3 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                aria-label={t.projectModal.closeModal}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Body Modal */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-5 sm:space-y-7 custom-scrollbar text-left">
            {/* Split Media & Specs */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
              {/* Thumbnail Box */}
              <div
                onClick={() => {
                  const tUrl = getImageUrl(project.thumbnail);
                  if (tUrl) {
                    setActiveImage({
                      url: tUrl,
                      title: title,
                    });
                  }
                }}
                className={`lg:col-span-7 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/80 dark:border-white/[0.08] bg-gray-100 dark:bg-[#0b0e14] relative group h-52 sm:h-80 lg:h-96 flex items-center justify-center p-2.5 ${
                  getImageUrl(project.thumbnail) ? "cursor-zoom-in" : ""
                }`}
              >
                {getImageUrl(project.thumbnail) ? (
                  <>
                    <img
                      src={getImageUrl(project.thumbnail)}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 dark:opacity-30 pointer-events-none scale-110"
                    />
                    <img
                      src={getImageUrl(project.thumbnail)}
                      alt={title}
                      className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-md group-hover:scale-[1.02] transition-transform duration-300"
                    />
                    <div className="absolute bottom-2 right-2 z-20 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-white text-[9px] font-mono flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>{t.projectModal.zoomImage}</span>
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full flex flex-col justify-between p-4 sm:p-6 rounded-xl bg-gradient-to-br from-[#0c1017] via-[#0f141f] to-[#121927] border border-cyan-500/20 overflow-hidden select-none">
                    {/* Background Blueprint Grid */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                    <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Top Blueprint Bar */}
                    <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider text-cyan-300 uppercase">
                          {architectureFlow?.badge || "SYSTEM ARCHITECTURE DATAFLOW"}
                        </span>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        {isCompany ? (project.company || "PT Sinar Meadow Int. Indonesia") : "Architecture Flow"}
                      </span>
                    </div>

                    {/* Architecture Node Dataflow */}
                    <div className="relative z-10 py-2 sm:py-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 w-full">
                      {architectureFlow?.steps?.map((step, idx) => (
                        <div key={step.node} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
                          <div className="p-2 sm:p-2.5 rounded-xl bg-white/[0.04] border border-cyan-500/20 backdrop-blur-md flex flex-col items-center text-center w-full sm:w-32 md:w-40 shadow-lg shadow-black/40">
                            <span className="text-[9px] font-mono text-cyan-400/80 mb-0.5 uppercase tracking-wider font-semibold">
                              STEP 0{idx + 1}
                            </span>
                            <span className="text-[11px] sm:text-xs font-bold text-white tracking-tight leading-snug">
                              {step.node}
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 mt-0.5 line-clamp-1">
                              {step.sub}
                            </span>
                          </div>
                          {idx < architectureFlow.steps.length - 1 && (
                            <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0 rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Bottom Blueprint Footer */}
                    <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-2 text-[9px] sm:text-[10px] font-mono text-gray-400">
                      <span className="flex items-center gap-1.5 truncate">
                        <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="truncate">{title}</span>
                      </span>
                      <span className="text-cyan-400 shrink-0 font-bold uppercase">
                        Verified Architecture
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bento Specs */}
              <div className="lg:col-span-5 space-y-3 sm:space-y-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06]">
                <div className="space-y-1">
                  <span className="text-[9px] sm:text-[10px] font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-bold">
                    {t.projectModal.overviewTitle}
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {summary || "Implementasi arsitektur sistem, pemodelan data, dan integrasi antarmuka pengguna."}
                  </p>
                </div>

                {/* Company / Status Alert for Enterprise */}
                {isInternal && (
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-[11px] font-mono space-y-1">
                    <div className="flex items-center gap-1.5 font-bold">
                      <svg
                        className="w-3.5 h-3.5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                      <span>{t.projectModal.confidentialityNotice}</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-amber-800/85 dark:text-amber-200/85 leading-relaxed font-sans">
                      {t.projectModal.internalNotice}
                    </p>
                  </div>
                )}

                {/* Official System Documentation Card */}
                {(project.ursUrl || project.manualBookUrl) && (
                  <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-transparent border border-blue-500/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] sm:text-[10px] font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-bold inline-flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>{locale === "en" ? "Official System Documents" : "Dokumen Resmi Sistem"}</span>
                      </span>
                      <span className="text-[9px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-200 dark:border-cyan-800/40">
                        PDF Verified
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                      {project.ursUrl && (
                        <a
                          href={project.ursUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded-lg bg-white/90 dark:bg-white/[0.04] border border-blue-200/80 dark:border-white/10 hover:border-blue-400 dark:hover:border-cyan-400 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-cyan-300 transition-all group"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div className="min-w-0 text-left">
                              <p className="text-[10px] sm:text-[11px] font-bold font-mono truncate">Dokumen URS</p>
                              <p className="text-[8px] sm:text-[9px] text-gray-400 truncate">12 Halaman (QA/QM)</p>
                            </div>
                          </div>
                          <svg className="w-3 h-3 text-gray-400 group-hover:text-blue-500 dark:group-hover:text-cyan-400 shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}

                      {project.manualBookUrl && (
                        <a
                          href={project.manualBookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 rounded-lg bg-white/90 dark:bg-white/[0.04] border border-amber-200/80 dark:border-white/10 hover:border-amber-400 dark:hover:border-amber-400 text-gray-900 dark:text-gray-100 hover:text-amber-600 dark:hover:text-amber-300 transition-all group"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <div className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                              </svg>
                            </div>
                            <div className="min-w-0 text-left">
                              <p className="text-[10px] sm:text-[11px] font-bold font-mono truncate">Manual Book</p>
                              <p className="text-[8px] sm:text-[9px] text-gray-400 truncate">Panduan Operasional</p>
                            </div>
                          </div>
                          <svg className="w-3 h-3 text-gray-400 group-hover:text-amber-500 dark:group-hover:text-amber-400 shrink-0 ml-1 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                {project.techStack?.length > 0 && (
                  <div className="pt-2 border-t border-gray-200/60 dark:border-white/[0.06] space-y-1.5">
                    <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                      {t.projectModal.techStackTitle}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-white dark:bg-white/[0.05] text-gray-800 dark:text-gray-200 text-[10px] font-mono px-2 py-0.5 rounded border border-gray-200/80 dark:border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Impact Metrics Banner / Highlights */}
            {project.impactMetrics && project.impactMetrics.length > 0 && (
              <div className="space-y-2.5 pt-2 border-t border-gray-100 dark:border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] sm:text-[11px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-bold">
                    {locale === "en" ? "Key Business & Engineering Impact" : "Dampak Bisnis & Efisiensi Sistem"}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {project.impactMetrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-3.5 rounded-xl bg-emerald-500/[0.04] dark:bg-emerald-950/20 border border-emerald-500/20 dark:border-emerald-800/30 flex flex-col justify-between"
                    >
                      <span className="text-base sm:text-xl font-black font-mono text-emerald-600 dark:text-emerald-400 tracking-tight">
                        {metric.value}
                      </span>
                      <span className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 font-medium leading-relaxed mt-1">
                        {locale === "en" && metric.labelEn ? metric.labelEn : metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline Fase Studi Kasus */}
            <div className="space-y-4 pt-2 border-t border-gray-100 dark:border-white/[0.06]">
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-gray-950 dark:text-white tracking-tight">
                  {t.projectModal.phasesTitle}
                </h4>
                <p className="text-[11px] sm:text-xs font-mono text-gray-400 mt-0.5">
                  {t.projectModal.phasesSubtitle}
                </p>
              </div>

              {project.caseStudyPhases && project.caseStudyPhases.length > 0 ? (
                <div className="relative pl-5 sm:pl-7 space-y-4 sm:space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-cyan-400 before:to-transparent">
                  {project.caseStudyPhases.map((phase, idx) => {
                    const phaseTitle = locale === "en" && phase.titleEn ? phase.titleEn : phase.title;
                    const phaseDesc = locale === "en" && phase.descriptionEn ? phase.descriptionEn : phase.description;
                    const phaseName = locale === "en" && phase.phaseNameEn ? phase.phaseNameEn : phase.phaseName;
                    const topic = locale === "en" && phase.topicEn ? phase.topicEn : phase.topic;

                    return (
                      <div key={idx} className="relative group">
                        <div className="absolute -left-[23px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-[#11141c] border-2 border-blue-500 flex items-center justify-center text-[8px] font-mono font-bold text-blue-600 dark:text-cyan-400 shadow-xs">
                          {idx + 1}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-5 items-center p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gray-50/70 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06] hover:border-blue-500/30 transition-colors">
                          {phase.previewImage ? (
                            <div className="md:col-span-5 w-full">
                              <div
                                onClick={() => {
                                  const pUrl = getImageUrl(phase.previewImage);
                                  if (pUrl) {
                                    setActiveImage({
                                      url: pUrl,
                                      title: phaseTitle || `Phase ${idx + 1}`,
                                    });
                                  }
                                }}
                                className="w-full aspect-[16/10] rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 dark:border-white/[0.08] bg-gray-100/90 dark:bg-[#0c0f17] relative flex items-center justify-center p-1.5 group/img cursor-zoom-in"
                              >
                                <img
                                  src={getImageUrl(phase.previewImage)}
                                  alt=""
                                  aria-hidden="true"
                                  className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 pointer-events-none"
                                />
                                <img
                                  src={getImageUrl(phase.previewImage)}
                                  alt={phaseTitle || `Phase ${idx + 1}`}
                                  className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain rounded shadow-xs group-hover/img:scale-[1.02] transition-transform duration-300"
                                />
                                <div className="absolute bottom-1.5 right-1.5 z-20 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-white text-[8px] font-mono flex items-center gap-1 opacity-0 group-hover/img:opacity-100 transition-opacity">
                                  <span>{t.projectModal.zoomImage}</span>
                                </div>
                              </div>
                            </div>
                          ) : null}

                          <div className={phase.previewImage ? "md:col-span-7 space-y-1.5" : "md:col-span-12 space-y-1.5"}>
                            <div className="flex items-center gap-1.5">
                              <span className="text-[9px] font-mono text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/50 px-1.5 py-0.5 rounded border border-blue-100 dark:border-blue-900/40 font-semibold">
                                {phaseName || `Phase 0${idx + 1}`}
                              </span>
                              {topic && (
                                <span className="text-[11px] font-mono text-gray-400 truncate">
                                  {topic}
                                </span>
                              )}
                            </div>

                            <h5 className="text-xs sm:text-sm font-bold text-gray-950 dark:text-white">
                              {phaseTitle}
                            </h5>

                            <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                              {phaseDesc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="p-6 rounded-xl border border-dashed border-gray-200 dark:border-white/10 text-center text-xs font-mono text-gray-400">
                  {t.projectModal.noPhases}
                </div>
              )}
            </div>

            {/* Galeri Tangkapan Layar / Mockup Antarmuka */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-white/[0.06]">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-gray-950 dark:text-white tracking-tight">
                      {locale === "en" ? "Interface & Technical Gallery" : "Galeri Antarmuka & Alur Sistem"}
                    </h4>
                    <p className="text-[11px] sm:text-xs font-mono text-gray-400 mt-0.5">
                      {locale === "en" ? "Click any screenshot to zoom in full resolution" : "Klik gambar untuk memperbesar resolusi penuh"}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-200 dark:border-cyan-800/40 font-semibold">
                    {project.galleryImages.length} {locale === "en" ? "Screenshots" : "Dokumentasi Alur"}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {project.galleryImages.map((imgItem, idx) => {
                    const imgUrl = getImageUrl(imgItem);
                    const caption = locale === "en" && imgItem.captionEn ? imgItem.captionEn : imgItem.caption;
                    return (
                      <div
                        key={idx}
                        onClick={() =>
                          imgUrl &&
                          setActiveImage({
                            url: imgUrl,
                            title: caption || `${title} Preview ${idx + 1}`,
                          })
                        }
                        className="group/gal relative aspect-[16/10] rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0c0f17] cursor-zoom-in shadow-xs hover:border-cyan-400/50 transition-all"
                      >
                        {imgUrl && (
                          <img
                            src={imgUrl}
                            alt={caption || "Screenshot"}
                            className="w-full h-full object-cover group-hover/gal:scale-105 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/10 text-white text-[8px] font-mono">
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                        {caption && (
                          <div className="absolute inset-x-0 bottom-0 p-1.5 bg-black/75 backdrop-blur-md text-white text-[8px] sm:text-[9px] font-mono line-clamp-1 group-hover/gal:line-clamp-2 transition-all">
                            {caption}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Action Links Footer Modal */}
            <div className="pt-3 border-t border-gray-100 dark:border-white/[0.06] flex flex-wrap items-center justify-end gap-2 sm:gap-3">
              {project.ursUrl && (
                <a
                  href={project.ursUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold font-mono transition-all shadow-xs"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Buka URS Doc (PDF)</span>
                </a>
              )}

              {project.manualBookUrl && (
                <a
                  href={project.manualBookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-semibold font-mono transition-all shadow-xs"
                >
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Buka Manual Book (PDF)</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold font-mono transition-all shadow-xs"
                >
                  <span>{t.projectModal.liveDemo}</span>
                  <svg
                    className="w-3 h-3 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-gray-800 dark:text-gray-100 text-xs font-semibold font-mono transition-all"
                >
                  <span>{t.projectModal.sourceCode}</span>
                  <svg
                    className="w-3 h-3 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-gray-600 dark:text-gray-300 text-xs font-mono transition-all cursor-pointer"
              >
                {t.projectModal.closeModal}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* LIGHTBOX POPUP GAMBAR */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100000] flex flex-col items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="w-full max-w-4xl flex items-center justify-between pb-2 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs font-mono truncate text-gray-300">
              {activeImage.title}
            </p>
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono transition-colors cursor-pointer"
            >
              <span>{t.projectModal.closeModal}</span>
            </button>
          </div>

          <div
            className="relative max-w-4xl max-h-[82vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.url}
              alt={activeImage.title || "Detail Gambar"}
              className="max-h-[80vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10 select-none"
            />
          </div>
        </div>
      )}
    </>,
    document.body,
  );
}
