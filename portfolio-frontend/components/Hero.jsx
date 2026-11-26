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
    <div className="relative w-full py-4 sm:py-8 lg:py-12 overflow-visible">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-transparent blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-400/10 blur-[130px] rounded-full" />

      {/* Floating Vertical Social Dock on the Far Left (Gaya Asyukgo) */}
      <div className="hidden xl:flex flex-col items-center gap-4 absolute -left-8 2xl:-left-14 top-1/2 -translate-y-1/2 z-30">
        {profile?.githubUrl && (
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        )}
        {profile?.email && (
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="p-2.5 rounded-full text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        )}
        {profile?.phone && (
          <a
            href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2.5 rounded-full text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
          </a>
        )}
        {profile?.instagramUrl && (
          <a
            href={profile.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 rounded-full text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        )}
        {profile?.linkedinUrl && (
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full text-gray-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        )}
      </div>

      {/* ============================================================== */}
      {/* DESKTOP VIEW (lg:flex): GAYA ASYUKGO ASLI                    */}
      {/* Kiri: "Halo, Saya" + Nama                                      */}
      {/* Tengah: Foto Cutout Frameless Besar Menempel ke Baseline       */}
      {/* Kanan: "Mahasiswa" + "Teknik & Informatika"                   */}
      {/* ============================================================== */}
      <div className="relative z-10 hidden lg:flex items-center justify-between w-full min-h-[80vh] xl:min-h-[85vh] overflow-visible pb-0">
        {/* SISI KIRI: "Halo, Saya" + Nama Besar + 2 Tombol Aksi */}
        <div className="w-[32%] text-left space-y-3 xl:space-y-4 animate-entrance-3d-left z-20">
          <p className="text-xl xl:text-2xl font-bold font-mono tracking-tight text-cyan-500 dark:text-cyan-400">
            Halo, Saya
          </p>

          <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-950 dark:text-white tracking-tighter leading-[0.98]">
            Muhamad Hafis <br />
            Ali
          </h1>

          {/* Tombol Aksi: Hanya Unduh CV & GitHub */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            {profile?.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold font-mono tracking-tight shadow-lg shadow-cyan-500/25 active:scale-95 transition-all"
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 hover:bg-gray-100 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-gray-900 dark:text-white text-xs sm:text-sm font-semibold font-mono tracking-tight border border-gray-200 dark:border-white/10 active:scale-95 transition-all shadow-2xs"
              >
                <span>{t.hero.github}</span>
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* TENGAH: FOTO CUTOUT BESAR TERPUSAT, MENEMPEL KE BAWAH BASELINE */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 flex flex-col justify-end items-center h-full z-10 pointer-events-none select-none">
          {/* Ambient Cyan Aura Halo di Belakang Figur (Tanpa orbit rings yang membatasi) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] xl:w-[620px] h-[480px] xl:h-[620px] bg-gradient-to-t from-cyan-500/35 via-blue-600/30 to-transparent rounded-full blur-[110px] opacity-90 animate-pulse" />

          {/* Figur Cutout 3D Tilt Interaktif Tanpa Box/Border, Tinggi Penuh */}
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: isHovered
                ? `perspective(1000px) rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg) scale(1.02)`
                : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
              transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
            }}
            className="pointer-events-auto relative z-20 flex flex-col items-center justify-end cursor-pointer"
          >
            <img
              src="/images/hafis-cutout-var1-soft-rim.png"
              alt={fullName || "Muhamad Hafis Ali"}
              className="h-[62vh] sm:h-[72vh] lg:h-[80vh] xl:h-[86vh] max-h-[780px] w-auto object-contain object-bottom select-none transform-gpu filter drop-shadow-[0_0_40px_rgba(6,182,212,0.55)]"
              draggable={false}
            />
          </div>
        </div>

        {/* SISI KANAN: "Mahasiswa" + "Teknik & Informatika" + Metrik */}
        <div className="w-[32%] text-left space-y-3 xl:space-y-4 animate-entrance-3d-right z-20">
          <p className="text-xl xl:text-2xl font-bold font-mono tracking-tight text-cyan-500 dark:text-cyan-400">
            Mahasiswa
          </p>

          <h2 className="text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-950 dark:text-white tracking-tighter leading-[0.98]">
            Teknik <br />
            & Informatika
          </h2>

          {/* Telemetry Ringkas di Bawah "Teknik & Informatika" */}
          <div className="pt-4 flex items-center gap-4 text-xs xl:text-sm font-mono text-gray-500 dark:text-gray-400">
            <span>
              <strong className="text-gray-900 dark:text-white font-black text-sm xl:text-base">
                {profile?.researchPaperCount ?? "1"}
              </strong>{" "}
              {t.hero.researchMetric}
            </span>
            <span>•</span>
            <span>
              <strong className="text-cyan-500 dark:text-cyan-400 font-black text-sm xl:text-base">
                {profile?.completedProjectCount ?? "10+"}
              </strong>{" "}
              {t.hero.projectMetric}
            </span>
            <span>•</span>
            <span>
              <strong className="text-gray-900 dark:text-white font-black text-sm xl:text-base">
                {profile?.environmentMetric ?? "Linux"}
              </strong>
            </span>
          </div>
        </div>

        {/* Floating Glowing Cyan Orb di Kanan (Persis Gaya Asyukgo) */}
        <div className="hidden lg:block pointer-events-none absolute -right-4 xl:right-2 top-1/2 -translate-y-1/2 w-12 xl:w-16 h-12 xl:h-16 rounded-full bg-cyan-400/35 blur-md shadow-[0_0_35px_rgba(34,211,238,0.7)] animate-pulse" />
      </div>

      {/* ============================================================== */}
      {/* MOBILE & TABLET VIEW (lg:hidden): Stacking Vertikal Terpusat  */}
      {/* Bebas Box/Border, Rapi, Simetris, Tidak Rame                   */}
      {/* ============================================================== */}
      <div className="lg:hidden flex flex-col items-center text-center space-y-4 pt-1 pb-4">
        {/* Foto Cutout Frameless Asli dengan Bottom Fadeout */}
        <div className="relative group/card select-none flex flex-col items-center justify-center animate-entrance-3d-center">
          <div className="pointer-events-none absolute -inset-6 bg-gradient-to-t from-cyan-500/25 via-blue-600/30 to-transparent rounded-full blur-2xl opacity-80 animate-pulse" />

          <img
            src="/images/hafis-cutout-var1-soft-rim.png"
            alt={fullName || "Muhamad Hafis Ali"}
            style={{
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            }}
            className="w-64 sm:w-80 h-auto object-contain select-none relative z-20 filter drop-shadow-[0_0_30px_rgba(6,182,212,0.6)]"
            draggable={false}
          />
        </div>

        {/* Teks Identitas */}
        <div className="space-y-1 animate-entrance-3d-left">
          <p className="text-xs sm:text-sm font-bold font-mono tracking-tight text-cyan-500 dark:text-cyan-400">
            Halo, Saya
          </p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-gray-950 dark:text-white drop-shadow-[0_2px_12px_rgba(6,182,212,0.25)]">
            Muhamad Hafis Ali
          </h1>
          <p className="text-xs sm:text-sm font-mono text-gray-600 dark:text-gray-300">
            Mahasiswa Teknik & Informatika
          </p>
        </div>

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

        {/* 2 Tombol Simetris: Unduh CV & GitHub */}
        <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs pt-1">
          {profile?.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white text-xs font-bold font-mono tracking-tight shadow-md shadow-cyan-500/25 active:scale-95 transition-all text-center"
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

        {/* Social Icons Strip di HP */}
        <div className="flex items-center gap-3 pt-2">
          {profile?.email && (
            <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 text-gray-500 hover:text-cyan-400">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
          {profile?.phone && (
            <a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-2 text-gray-500 hover:text-cyan-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
              </svg>
            </a>
          )}
          {profile?.instagramUrl && (
            <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 text-gray-500 hover:text-cyan-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          )}
          {profile?.linkedinUrl && (
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 text-gray-500 hover:text-cyan-400">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
