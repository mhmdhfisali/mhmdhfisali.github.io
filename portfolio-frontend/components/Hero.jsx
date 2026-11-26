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
    <div className="relative w-full py-2 sm:py-6 overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute top-10 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/15 dark:bg-cyan-400/10 blur-[110px] rounded-full" />

        {/* 3D Typographic Watermark (Depth Layer behind central photo) */}
        <div className="hidden lg:flex pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none justify-center items-center z-0 w-full overflow-hidden">
          <span className="text-[110px] xl:text-[135px] font-black tracking-widest text-transparent stroke-text opacity-15 dark:opacity-20 font-mono select-none">
            HAFIS ALI
          </span>
        </div>

        {/* DESKTOP VIEW (lg:grid): Foto di Tengah, Teks Kanan & Kiri (Ala-ala 3D) */}
        <div className="relative z-10 hidden lg:grid grid-cols-12 gap-6 xl:gap-8 items-center min-h-[460px]">
          {/* SISI KIRI: Identitas, Nama, Headline & Tombol Aksi */}
          <div className="col-span-4 space-y-5 text-left animate-entrance-3d-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-medium backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>{locale === "en" ? "Software & AI Engineer" : "Mahasiswa & Software Engineer"}</span>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 font-semibold">
                {locale === "en" ? "Hello, I am" : "Halo, Saya"}
              </p>
              <h1 className="text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-tight leading-[1.08] text-gray-950 dark:text-white drop-shadow-[0_4px_20px_rgba(6,182,212,0.25)]">
                {firstName}{" "}
                {restName && (
                  <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
                    {restName}
                  </span>
                )}
              </h1>
            </div>

            {headline && (
              <p className="text-sm font-bold tracking-tight text-blue-600 dark:text-cyan-400 font-mono">
                {headline}
              </p>
            )}

            {/* Tombol Aksi Esensial (Hanya Unduh CV & GitHub) */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {profile?.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold font-mono tracking-tight shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 active:scale-95 transition-all"
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
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/90 hover:bg-gray-100 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-gray-900 dark:text-white text-xs font-semibold font-mono tracking-tight border border-gray-200 dark:border-white/10 active:scale-95 transition-all shadow-2xs"
                >
                  <span>{t.hero.github}</span>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* TENGAH: Foto Opsi 1 Terpusat dengan 3D Interactive Tilt & Halo Rim Glow */}
          <div className="col-span-4 flex justify-center items-center animate-entrance-3d-center">
            <div className="relative group/card select-none flex flex-col items-center justify-center">
              {/* Cyber Halo Glow */}
              <div className="pointer-events-none absolute -inset-8 bg-gradient-to-tr from-cyan-500/30 via-blue-600/35 to-indigo-500/30 rounded-full blur-3xl opacity-80 group-hover/card:opacity-100 transition-opacity duration-700 animate-pulse" />

              {/* Futuristic Tech Orbit Rings */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] xl:w-[320px] h-[280px] xl:h-[320px] rounded-full border border-cyan-400/25 dark:border-cyan-400/35 border-dashed animate-[spin_30s_linear_infinite] transform-gpu will-change-transform" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] xl:w-[275px] h-[240px] xl:h-[275px] rounded-full border border-blue-500/20 dark:border-blue-400/30 animate-[spin_20s_linear_infinite_reverse] transform-gpu will-change-transform" />

              {/* Interactive 3D Cutout Card */}
              <div
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: isHovered
                    ? `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg) scale(1.04)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                  transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="relative z-20 flex flex-col items-center cursor-pointer transition-all duration-300"
              >
                <div className="relative rounded-2xl xl:rounded-3xl overflow-hidden border border-cyan-500/35 dark:border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.35)] group-hover/card:shadow-[0_0_50px_rgba(6,182,212,0.6)] transition-all duration-500 bg-black/40">
                  <img
                    src="/images/hafis-cutout-var1-soft-rim.png"
                    alt={fullName || "Muhamad Hafis Ali"}
                    className="w-60 xl:w-[290px] 2xl:w-[320px] aspect-square object-contain select-none transition-all duration-500 transform-gpu group-hover/card:scale-105 filter drop-shadow-[0_0_22px_rgba(6,182,212,0.65)]"
                    draggable={false}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Riset & Rekayasa Sistem, Bio & Telemetry Metrik */}
          <div className="col-span-4 space-y-4 text-left animate-entrance-3d-right">
            <div className="p-5 rounded-2xl bg-white/75 dark:bg-white/[0.03] border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md shadow-2xs space-y-3.5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-sm bg-gradient-to-r from-blue-500 to-cyan-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-bold">
                  {locale === "en" ? "Engineering & Research" : "Riset & Rekayasa Sistem"}
                </span>
              </div>

              {bio && (
                <p className="text-xs xl:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {bio}
                </p>
              )}

              {/* Telemetry Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-gray-200/80 dark:border-white/[0.08]">
                <div className="text-left">
                  <span className="block text-base xl:text-lg font-black font-mono text-gray-900 dark:text-white leading-tight">
                    {profile?.researchPaperCount ?? "1"}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                    {t.hero.researchMetric}
                  </span>
                </div>
                <div className="text-left">
                  <span className="block text-base xl:text-lg font-black font-mono text-blue-600 dark:text-cyan-400 leading-tight">
                    {profile?.completedProjectCount ?? "10+"}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                    {t.hero.projectMetric}
                  </span>
                </div>
                <div className="text-left">
                  <span className="block text-base xl:text-lg font-black font-mono text-gray-900 dark:text-white leading-tight">
                    {profile?.environmentMetric ?? "Linux"}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                    {t.hero.workspaceMetric}
                  </span>
                </div>
              </div>

              {/* Specialization Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-mono font-medium border border-blue-500/20">
                  Mobile (Flutter)
                </span>
                <span className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-[10px] font-mono font-medium border border-cyan-500/20">
                  Fullstack (Next.js)
                </span>
                <span className="px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-mono font-medium border border-indigo-500/20">
                  AI & Vision
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET VIEW (lg:hidden): Stacking Vertikal Terpusat, Ringkas, Tidak Rame */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-4 pt-1 pb-3">
          {/* Foto Cutout Opsi 1 */}
          <div className="relative group/card select-none flex flex-col items-center justify-center animate-entrance-3d-center">
            <div className="pointer-events-none absolute -inset-5 bg-gradient-to-tr from-cyan-500/25 via-blue-600/30 to-indigo-500/25 rounded-full blur-2xl opacity-80 animate-pulse" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[240px] h-[180px] sm:h-[240px] rounded-full border border-cyan-400/25 border-dashed animate-[spin_30s_linear_infinite]" />

            <div className="relative z-20 rounded-2xl overflow-hidden border border-cyan-500/35 dark:border-cyan-400/40 shadow-[0_0_25px_rgba(6,182,212,0.35)] bg-black/40">
              <img
                src="/images/hafis-cutout-var1-soft-rim.png"
                alt={fullName || "Muhamad Hafis Ali"}
                className="w-44 sm:w-56 aspect-square object-contain select-none filter drop-shadow-[0_0_18px_rgba(6,182,212,0.6)]"
                draggable={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          {/* Nama & Peran */}
          <div className="space-y-1 animate-entrance-3d-left">
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-gray-950 dark:text-white drop-shadow-[0_2px_12px_rgba(6,182,212,0.25)]">
              {firstName}{" "}
              {restName && (
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
                  {restName}
                </span>
              )}
            </h1>
            {headline && (
              <p className="text-xs sm:text-sm font-bold tracking-tight text-blue-600 dark:text-cyan-400 font-mono">
                {headline}
              </p>
            )}
          </div>

          {/* Bio Ringkas */}
          {bio && (
            <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed max-w-md line-clamp-3 px-2">
              {bio}
            </p>
          )}

          {/* Telemetry Bar Simetris */}
          <div className="inline-flex items-center divide-x divide-gray-200/80 dark:divide-white/[0.08] rounded-xl bg-white/80 dark:bg-white/[0.02] border border-gray-200/90 dark:border-white/[0.08] p-1.5 shadow-2xs backdrop-blur-md">
            <div className="px-3 py-0.5 text-center">
              <span className="block text-sm font-black font-mono text-gray-900 dark:text-white leading-tight">
                {profile?.researchPaperCount ?? "1"}
              </span>
              <span className="text-[9px] font-mono text-gray-500 dark:text-gray-400">
                {t.hero.researchMetric}
              </span>
            </div>
            <div className="px-3 py-0.5 text-center">
              <span className="block text-sm font-black font-mono text-blue-600 dark:text-cyan-400 leading-tight">
                {profile?.completedProjectCount ?? "10+"}
              </span>
              <span className="text-[9px] font-mono text-gray-500 dark:text-gray-400">
                {t.hero.projectMetric}
              </span>
            </div>
            <div className="px-3 py-0.5 text-center">
              <span className="block text-sm font-black font-mono text-gray-900 dark:text-white leading-tight">
                {profile?.environmentMetric ?? "Linux"}
              </span>
              <span className="text-[9px] font-mono text-gray-500 dark:text-gray-400">
                {t.hero.workspaceMetric}
              </span>
            </div>
          </div>

          {/* Tombol Aksi HP: 2 Tombol Simetris (Unduh CV & GitHub) */}
          <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs pt-1">
            {profile?.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white text-xs font-bold font-mono tracking-tight shadow-md shadow-blue-500/25 active:scale-95 transition-all text-center"
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
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/90 dark:bg-white/[0.08] text-gray-900 dark:text-white text-xs font-semibold font-mono tracking-tight border border-gray-200 dark:border-white/10 active:scale-95 transition-all shadow-2xs text-center"
              >
                <span>{t.hero.github}</span>
                <svg className="w-3.5 h-3.5 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    );
}
