"use client";

import { useLanguage } from "@/context/LanguageContext";
import { fallbackProfile } from "@/lib/fallbackData";
import { urlFor } from "@/sanity";
import { useState } from "react";

export default function Hero({ profile }) {
  const { t, locale } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleCopyEmail = () => {
    if (!profile?.email) return;
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fullName = profile?.name?.trim() || "";
  const nameParts = fullName ? fullName.split(" ") : [];
  const firstName = nameParts[0] || "";
  const restName = nameParts.slice(1).join(" ");

  const headline =
    locale === "en" && (profile?.headlineEn || fallbackProfile.headlineEn)
      ? (profile?.headlineEn || fallbackProfile.headlineEn)
      : (profile?.headline || fallbackProfile.headline);

  const bio =
    locale === "en" && (profile?.bioEn || fallbackProfile.bioEn)
      ? (profile?.bioEn || fallbackProfile.bioEn)
      : (profile?.bio || fallbackProfile.bio);

  return (
    <div className="relative w-full py-2 sm:py-6">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-10 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/15 dark:bg-cyan-400/10 blur-[110px] rounded-full" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
        {/* KOLOM KANAN: FRAMELESS FLOATING CUTOUT PROFILE TERPUSAT (TANPA KOTAK, TANPA CHIPS) */}
        <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 pt-2 sm:pt-4">
          <div className="relative group/card select-none flex flex-col items-center justify-center mx-auto">
            {/* Multi-layer Cyber Glow Halo */}
            <div className="pointer-events-none absolute -inset-6 sm:-inset-10 bg-gradient-to-tr from-cyan-500/25 via-blue-600/30 to-indigo-500/25 rounded-full blur-3xl opacity-75 group-hover/card:opacity-100 transition-opacity duration-700 animate-pulse" />

            {/* Futuristic Orbit Tech Rings - Terpusat Presisi di Balik Foto */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[300px] lg:w-[340px] h-[180px] sm:h-[300px] lg:h-[340px] rounded-full border border-cyan-400/20 dark:border-cyan-400/30 border-dashed animate-[spin_30s_linear_infinite] transform-gpu will-change-transform" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[145px] sm:w-[250px] lg:w-[290px] h-[145px] sm:h-[250px] lg:h-[290px] rounded-full border border-blue-500/20 dark:border-blue-400/30 animate-[spin_20s_linear_infinite_reverse] transform-gpu will-change-transform" />

            {/* Main Interactive Frameless Cutout Image with Glowing Colored Rim */}
            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: isHovered
                  ? `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg) scale(1.03)`
                  : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="relative z-20 flex flex-col items-center cursor-pointer transition-all duration-300 mx-auto"
            >
              {/* Cutout Photo with Cyber Colored Rim Dropshadow (Ukuran pas di HP & terpusat) */}
              <img
                src="/images/hafis-cutout.png"
                alt={fullName || "Muhamad Hafis Ali"}
                className="w-36 sm:w-56 md:w-64 lg:w-[300px] max-h-[210px] sm:max-h-[380px] lg:max-h-[440px] object-contain select-none transition-all duration-500 filter drop-shadow-[0_0_18px_rgba(6,182,212,0.5)] group-hover/card:drop-shadow-[0_0_28px_rgba(6,182,212,0.8)] mx-auto transform-gpu"
                draggable={false}
              />

              {/* Floating Verified HUD Pill at Bottom */}
              <div className="relative -mt-3.5 sm:-mt-6 z-30 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 flex items-center gap-1.5 sm:gap-2 text-white shadow-xl shadow-cyan-950/50">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[8px] sm:text-[11px] font-mono font-semibold tracking-wider text-emerald-300 uppercase">
                    {t.hero.readyBadge}
                  </span>
                </div>
                <span className="text-white/20">|</span>
                <div className="flex items-center gap-1 text-[8px] sm:text-[11px] font-mono text-cyan-300 font-bold">
                  <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                  <span>{t.hero.verifiedBadge}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KOLOM KIRI: Teks & Metrik */}
        <div className="lg:col-span-7 space-y-3.5 sm:space-y-6 text-left order-2 lg:order-1">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.06] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-700/40 backdrop-blur-md shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span
                className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  profile?.isAvailableForWork !== false
                    ? "bg-emerald-400"
                    : "bg-amber-400"
                }`}
              />
              <span
                className={`relative inline-flex rounded-full h-2 w-2 ${
                  profile?.isAvailableForWork !== false
                    ? "bg-emerald-500"
                    : "bg-amber-500"
                }`}
              />
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono font-medium tracking-wide text-blue-700 dark:text-blue-300">
              {profile?.isAvailableForWork !== false
                ? t.hero.availableBadge
                : t.hero.committedBadge}
            </span>
          </div>

          {/* Nama & Peran */}
          <div className="space-y-1.5 sm:space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-gray-950 dark:text-white">
              {firstName}{" "}
              {restName && (
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
                  {restName}
                </span>
              )}
            </h1>

            {headline && (
              <p className="text-sm sm:text-lg font-bold tracking-tight text-blue-600 dark:text-cyan-400">
                {headline}
              </p>
            )}
          </div>

          {/* Bio */}
          {bio && (
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
              {bio}
            </p>
          )}

          {/* Telemetry Bar (Rapi & Responsif) */}
          <div className="inline-flex items-center divide-x divide-gray-200/80 dark:divide-white/[0.08] rounded-xl sm:rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-gray-200/90 dark:border-white/[0.08] p-1.5 sm:p-2 shadow-2xs backdrop-blur-md">
            <div className="px-2.5 sm:px-4 py-0.5 text-left">
              <span className="block text-sm sm:text-lg font-black font-mono text-gray-900 dark:text-white leading-tight">
                {profile?.researchPaperCount ?? "-"}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 dark:text-gray-400">
                {t.hero.researchMetric}
              </span>
            </div>
            <div className="px-2.5 sm:px-4 py-0.5 text-left">
              <span className="block text-sm sm:text-lg font-black font-mono text-blue-600 dark:text-cyan-400 leading-tight">
                {profile?.completedProjectCount ?? "-"}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 dark:text-gray-400">
                {t.hero.projectMetric}
              </span>
            </div>
            <div className="px-2.5 sm:px-4 py-0.5 text-left">
              <span className="block text-sm sm:text-lg font-black font-mono text-gray-900 dark:text-white leading-tight">
                {profile?.environmentMetric ?? "Linux"}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-gray-500 dark:text-gray-400">
                {t.hero.workspaceMetric}
              </span>
            </div>
          </div>

          {/* Tombol Aksi: Terstruktur 2-Baris Rapi di HP, Flex Inline di Desktop */}
          <div className="pt-1">
            {/* Tampilan Mobile: Grid 2x2 Simetris */}
            <div className="grid grid-cols-2 gap-2 sm:hidden w-full">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white text-[11px] font-bold font-mono tracking-tight shadow-md shadow-blue-500/25 active:scale-95 transition-all text-center"
              >
                <span>{locale === "en" ? "Explore" : "Proyek"}</span>
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              {profile?.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/90 dark:bg-white/[0.08] text-gray-900 dark:text-white text-[11px] font-semibold font-mono tracking-tight border border-gray-200 dark:border-white/10 active:scale-95 transition-all shadow-2xs text-center"
                >
                  <span>{t.hero.downloadCv}</span>
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
                  </svg>
                </a>
              )}

              {profile?.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gray-100 dark:bg-white/[0.06] text-gray-900 dark:text-white text-[11px] font-semibold font-mono tracking-tight border border-gray-200 dark:border-white/10 active:scale-95 transition-all text-center"
                >
                  <svg className="w-3.5 h-3.5 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>{t.hero.github}</span>
                </a>
              )}

              {profile?.email && (
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-[#151923] text-gray-800 dark:text-gray-200 text-[11px] font-semibold font-mono border border-gray-200 dark:border-white/10 active:scale-95 transition-all cursor-pointer shadow-2xs text-center"
                >
                  {copied ? (
                    <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                  <span>{copied ? t.hero.copiedEmail : t.hero.copyEmail}</span>
                </button>
              )}
            </div>

            {/* Tampilan Desktop: Inline Flex Row Elegan */}
            <div className="hidden sm:flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold font-mono tracking-tight shadow-md shadow-blue-500/25 active:scale-95 transition-all"
              >
                <span>{locale === "en" ? "Explore Projects" : "Eksplorasi Proyek"}</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              {profile?.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/90 hover:bg-gray-100 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-gray-900 dark:text-white text-xs font-semibold font-mono tracking-tight border border-gray-200 dark:border-white/10 active:scale-95 transition-all shadow-2xs"
                >
                  <span>{t.hero.downloadCv}</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
                  </svg>
                </a>
              )}

              {profile?.githubUrl && (
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-gray-900 dark:text-white text-xs font-semibold font-mono tracking-tight border border-gray-200 dark:border-white/10 active:scale-95 transition-all"
                >
                  <span>{t.hero.github}</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}

              {profile?.email && (
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white hover:bg-gray-50 dark:bg-[#151923] dark:hover:bg-white/[0.08] text-gray-800 dark:text-gray-200 text-xs font-semibold font-mono border border-gray-200 dark:border-white/10 active:scale-95 transition-all cursor-pointer shadow-2xs"
                >
                  {copied ? (
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                  <span>{copied ? t.hero.copiedEmail : t.hero.copyEmail}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
