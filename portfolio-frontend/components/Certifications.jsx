"use client";

import { useLanguage } from "@/context/LanguageContext";
import { urlFor } from "@/sanity";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function Certifications({ certifications = [] }) {
  const { t } = useLanguage();
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
      if (selectedCert && selectedCert.images?.length > 1) {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
      }
    };

    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert, activeImageIndex]);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setActiveImageIndex(0);
  };

  const nextImage = () => {
    if (!selectedCert?.images?.length) return;
    setActiveImageIndex((prev) =>
      prev === selectedCert.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    if (!selectedCert?.images?.length) return;
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedCert.images.length - 1 : prev - 1,
    );
  };

  return (
    <div className="w-full space-y-4 sm:space-y-8 text-left py-1 sm:py-2">
      {/* Header */}
      <div className="space-y-2 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            {t.certifications.badge}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            {t.certifications.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              {t.certifications.titleHighlight}
            </span>
          </h2>

          <span className="text-[11px] sm:text-xs font-mono text-gray-500 dark:text-gray-400">
            {certifications.length} {t.certifications.documentedCount}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-none">
          {t.certifications.subtitle}
        </p>
      </div>

      {/* Grid Kartu Sertifikasi: 1 Kolom Rapi di Ponsel, 2 di Tablet, 3 di Desktop */}
      {certifications.length === 0 ? (
        <div className="w-full py-16 px-6 rounded-2xl sm:rounded-3xl border border-dashed border-gray-200 dark:border-white/10 text-center text-xs font-mono text-gray-400 bg-white/40 dark:bg-white/[0.01]">
          {t.certifications.noCerts}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert, idx) => {
            const hasImages = cert.images && cert.images.length > 0;
            return (
              <div
                key={cert._id || idx}
                onClick={() => openModal(cert)}
                className="group relative bg-white/85 dark:bg-[#151923]/70 hover:bg-white dark:hover:bg-[#151923] border border-gray-200/90 dark:border-white/[0.08] hover:border-blue-500/40 rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 backdrop-blur-md flex flex-col justify-between cursor-pointer"
              >
                {/* Thumbnail Sertifikat */}
                {hasImages && (
                  <div className="w-full aspect-[16/10] bg-gray-100/90 dark:bg-[#0c0f17] overflow-hidden relative border-b border-gray-100 dark:border-white/[0.06] flex items-center justify-center p-2.5 sm:p-3">
                    <img
                      src={urlFor(cert.images[0]).url()}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-20 pointer-events-none scale-110"
                    />

                    <img
                      src={urlFor(cert.images[0]).url()}
                      alt={cert.title}
                      className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain rounded-md sm:rounded-lg shadow-sm group-hover:scale-[1.02] transition-transform duration-300"
                    />

                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-2.5 sm:p-3 text-white text-[10px] sm:text-[11px] font-mono pointer-events-none">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                        <span>{t.certifications.previewDoc}</span>
                      </span>
                      {cert.images.length > 1 && (
                        <span className="bg-blue-600 px-2 py-0.5 rounded-full text-[9px] sm:text-[10px]">
                          +{cert.images.length - 1} {t.certifications.attachments}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gray-100 dark:bg-white/[0.05] border border-gray-200/80 dark:border-white/10 flex items-center justify-center shrink-0">
                        <span className="text-[11px] sm:text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                          {(cert.issuer || "ID").slice(0, 2).toUpperCase()}
                        </span>
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/40 font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {t.certifications.verifiedBadge}
                        </span>
                        {cert.date && (
                          <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 mt-0.5">
                            {cert.date}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-semibold block">
                        {cert.issuer || "Penyelenggara"}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-2.5 sm:pt-3 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between text-[11px] sm:text-xs font-mono text-gray-600 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-cyan-400 font-semibold">
                      {t.certifications.viewCredential}
                    </span>
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-100 dark:bg-white/[0.06] flex items-center justify-center text-[10px] sm:text-[11px] group-hover:bg-blue-600 group-hover:text-white transition-all">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal Detail Sertifikat */}
      {selectedCert &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center p-2.5 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md transition-all duration-300 animate-in fade-in"
            onClick={() => setSelectedCert(null)}
          >
            <div
              className="bg-white dark:bg-[#11141c] border border-gray-200/90 dark:border-white/[0.1] rounded-2xl sm:rounded-3xl w-full max-w-4xl max-h-[94vh] sm:max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden text-gray-900 dark:text-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Modal */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 dark:border-white/[0.08] flex items-center justify-between bg-white/95 dark:bg-[#11141c]/95 backdrop-blur-md z-20 shrink-0">
                <div className="min-w-0 pr-3 space-y-0.5">
                  <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
                    <span>{selectedCert.issuer}</span>
                    {selectedCert.date && (
                      <>
                        <span className="text-gray-300 dark:text-white/20">
                          •
                        </span>
                        <span className="text-gray-400">
                          {selectedCert.date}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white tracking-tight truncate">
                    {selectedCert.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] text-gray-500 hover:text-white transition-colors cursor-pointer"
                  aria-label="Tutup"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body Modal */}
              <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 space-y-4 sm:space-y-5 custom-scrollbar">
                {selectedCert.images && selectedCert.images.length > 0 ? (
                  <div className="relative w-full h-56 sm:h-96 md:h-[400px] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 dark:bg-black/50 border border-gray-200 dark:border-white/[0.08] flex items-center justify-center p-2 group">
                    <img
                      src={urlFor(selectedCert.images[activeImageIndex]).url()}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-20 pointer-events-none scale-110"
                    />

                    <img
                      src={urlFor(selectedCert.images[activeImageIndex]).url()}
                      alt={selectedCert.title}
                      className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-md"
                    />

                    {selectedCert.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={prevImage}
                          aria-label="Sebelumnya"
                          className="absolute left-2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all"
                        >
                          &#10094;
                        </button>
                        <button
                          type="button"
                          onClick={nextImage}
                          aria-label="Berikutnya"
                          className="absolute right-2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 flex items-center justify-center transition-all"
                        >
                          &#10095;
                        </button>

                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                          {selectedCert.images.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setActiveImageIndex(i)}
                              className={`h-1.5 rounded-full transition-all ${
                                i === activeImageIndex
                                  ? "bg-blue-500 w-4"
                                  : "bg-white/40 w-1.5"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-36 rounded-xl border border-dashed border-gray-200 dark:border-white/10 flex items-center justify-center text-xs font-mono text-gray-400">
                    Berkas visual sertifikat belum diunggah.
                  </div>
                )}

                <div className="space-y-2 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-200/80 dark:border-white/[0.06]">
                  <span className="text-[9px] sm:text-[10px] font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider font-bold">
                    Informasi &amp; Kualifikasi
                  </span>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-normal whitespace-pre-line">
                    {selectedCert.description ||
                      `Sertifikasi kelulusan resmi yang diselenggarakan oleh ${selectedCert.issuer} sebagai validasi kompetensi teknis di bidang terkait.`}
                  </p>
                </div>
              </div>

              {/* Footer Modal */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between gap-2 shrink-0">
                <span className="text-[11px] sm:text-xs font-mono text-gray-400 truncate">
                  {selectedCert.images?.length > 1
                    ? `${activeImageIndex + 1} dari ${selectedCert.images.length} Berkas`
                    : "Dokumen Resmi"}
                </span>

                <div className="flex items-center gap-2">
                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold font-mono shadow-xs active:scale-95"
                    >
                      <span>Verifikasi</span>
                      <span>↗</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-xs font-semibold font-mono"
                  >
                    {t.certifications.closeModal}
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
