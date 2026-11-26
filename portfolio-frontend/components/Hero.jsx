"use client";

import { useLanguage } from "@/context/LanguageContext";
import { fallbackProfile } from "@/lib/fallbackData";
import { urlFor } from "@/sanity";
import { useState } from "react";

export default function Hero({ profile }) {
  const { t, locale } = useLanguage();
  const [copied, setCopied] = useState(false);

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
    <div className="relative w-full py-2 sm:py-4 lg:py-0 overflow-visible">
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

      {/* 3D Typographic Watermark (Deep Background Layer z-0) */}
      <div className="hidden lg:flex pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none justify-center items-center z-0 w-full overflow-hidden">
        <span className="text-[140px] xl:text-[180px] font-black tracking-widest text-transparent stroke-text opacity-15 dark:opacity-20 font-mono select-none">
          HAFIS ALI
        </span>
      </div>

      {/* ============================================================== */}
      {/* DESKTOP VIEW (lg:flex): 3D LAYERED EDITORIAL LAYOUT           */}
      {/* Layer 1 (z-10): Teks Nama & Bidang Proporsional di Belakang Figur */}
      {/* Layer 2 (z-20): Figur Raksasa Menjulang Gagah di Depan Teks   */}
      {/* Layer 3 (z-30): Tombol Aksi & Kontrol Interaktif di Depan      */}
      {/* ============================================================== */}
      <div className="relative hidden lg:flex items-start justify-between w-full h-[calc(100dvh-5rem)] overflow-visible pb-0">
        {/* LAYER 1 (z-10): TEKS PROPORSI BESAR & ELEGAN DI BELAKANG FIGUR */}
        <div className="relative z-10 w-full flex items-start justify-between pointer-events-none pt-14 xl:pt-18 2xl:pt-22">
          {/* SISI KIRI: "Halo, Saya" + "Muhamad Hafis Ali" */}
          <div className="w-[46%] xl:w-[44%] text-left select-none pr-4 xl:pr-10 animate-entrance-3d-left flex flex-col justify-start">
            <p className="text-lg sm:text-xl xl:text-2xl font-bold font-mono tracking-tight text-cyan-500 dark:text-cyan-400 mb-2">
              {t.hero.greeting || (locale === "en" ? "Hello, I'm" : "Halo, Saya")}
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-950 dark:text-white tracking-tight leading-[1.05] drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              Muhamad Hafis <br />
              Ali
            </h1>

            {/* Tombol Aksi di Layer Depan (z-30) */}
            <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-3.5 relative z-30 pointer-events-auto">
              {profile?.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold font-mono tracking-tight shadow-xl shadow-cyan-500/25 active:scale-95 transition-all"
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
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/90 hover:bg-gray-100 dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-gray-900 dark:text-white text-xs sm:text-sm font-semibold font-mono tracking-tight border border-gray-200 dark:border-white/10 active:scale-95 transition-all shadow-2xs backdrop-blur-md"
                >
                  <span>{t.hero.github}</span>
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* SISI KANAN: "Mahasiswa" + "Teknik & Informatika" */}
          <div className="w-[46%] xl:w-[44%] text-left select-none pl-12 sm:pl-16 lg:pl-20 xl:pl-28 animate-entrance-3d-right flex flex-col justify-start">
            <p className="text-lg sm:text-xl xl:text-2xl font-bold font-mono tracking-tight text-cyan-500 dark:text-cyan-400 mb-2">
              {t.hero.roleLabel || (locale === "en" ? "Student of" : "Mahasiswa")}
            </p>

            <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-gray-950 dark:text-white tracking-tight leading-[1.05] drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              {t.hero.fieldLine1 || (locale === "en" ? "Informatics" : "Teknik")} <br />
              {t.hero.fieldLine2 || (locale === "en" ? "& Engineering" : "& Informatika")}
            </h2>

            {/* Telemetry Ringkas di Layer Depan (z-30) */}
            <div className="pt-6 sm:pt-8 flex items-center gap-4 text-xs xl:text-sm font-mono text-gray-400 dark:text-gray-400 relative z-30 pointer-events-auto">
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
        </div>

        {/* LAYER 2 (z-20): FOTO CUTOUT RAKSASA MENJULANG TINGGI (OVERLAPPING 3D) */}
        <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-start items-center z-20 pointer-events-none select-none overflow-visible">
          {/* Ambient Cyan Aura Halo di Belakang Figur (Versi Asli yang Disukai) */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] xl:w-[950px] h-[700px] xl:h-[950px] bg-gradient-to-t from-cyan-500/35 via-blue-600/30 to-transparent rounded-full blur-[140px] opacity-90 animate-pulse" />


          {/* Figur Cutout Frameless Asli Raksasa (Static, Solid, Batas Bawah Sejajar Bawah Tangan, Bebas Box) */}
          <div
            style={{
              maskImage: "linear-gradient(to bottom, black 82%, rgba(0,0,0,0.5) 92%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 82%, rgba(0,0,0,0.5) 92%, transparent 100%)",
            }}
            className="pointer-events-auto relative z-20 flex flex-col items-center justify-start h-full w-full origin-top transform-gpu scale-[1.14] xl:scale-[1.16] 2xl:scale-[1.18]"
          >
            <img
              src="/images/hafis-hero-portrait.png"
              alt={fullName || "Muhamad Hafis Ali"}
              className="h-full w-auto max-h-[calc(100dvh-5.5rem)] object-contain object-top select-none filter drop-shadow-[0_15px_40px_rgba(6,182,212,0.45)]"
              draggable={false}
            />
          </div>
        </div>

        {/* Floating Glowing Cyan Orb di Kanan (Gaya Asyukgo) */}
        <div className="hidden lg:block pointer-events-none absolute -right-4 xl:right-2 top-1/2 -translate-y-1/2 w-14 xl:w-20 h-14 xl:h-20 rounded-full bg-cyan-400/40 blur-md shadow-[0_0_45px_rgba(34,211,238,0.8)] animate-pulse z-10" />
      </div>

      {/* ============================================================== */}
      {/* MOBILE & TABLET VIEW (lg:hidden): Heroic 3D Visual Layout       */}
      {/* Figur Raksasa, Aura Vibrant, Rapi, Bebas Kotak & Bebayang Hitam */}
      {/* ============================================================== */}
      <div className="lg:hidden flex flex-col items-center justify-between text-center min-h-[calc(100dvh-5.5rem)] w-full relative overflow-visible pb-1 space-y-2 sm:space-y-3">
        {/* Mobile 3D Watermark Text */}
        <div className="pointer-events-none absolute left-1/2 top-28 -translate-x-1/2 -translate-y-1/2 select-none justify-center items-center z-0 w-full overflow-hidden">
          <span className="text-[64px] sm:text-[84px] font-black tracking-widest text-transparent stroke-text opacity-15 dark:opacity-20 font-mono select-none">
            HAFIS ALI
          </span>
        </div>

        {/* Teks Identitas di Atas (Pas di bawah navbar) */}
        <div className="relative z-10 space-y-0.5 animate-entrance-3d-left pt-0">
          <p className="text-xs sm:text-sm font-bold font-mono tracking-tight text-cyan-500 dark:text-cyan-400">
            {t.hero.greeting || (locale === "en" ? "Hello, I'm" : "Halo, Saya")}
          </p>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-gray-950 dark:text-white drop-shadow-[0_2px_12px_rgba(6,182,212,0.25)]">
            Muhamad Hafis Ali
          </h1>
          <p className="text-xs sm:text-sm font-mono text-gray-600 dark:text-gray-300">
            {t.hero.mobileRole || (locale === "en" ? "Informatics & Engineering Student" : "Mahasiswa Teknik & Informatika")}
          </p>
        </div>

        {/* Foto Cutout Raksasa di HP dengan Vibrant Cyan Aura & Bottom Fadeout (Persis Gambar 5) */}
        <div className="relative w-full flex flex-col items-center justify-center my-0 select-none animate-entrance-3d-center">
          {/* Ambient Cyan Aura Halo di Belakang Figur HP (Versi Asli yang Disukai) */}
          <div className="pointer-events-none absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-t from-cyan-500/35 via-blue-600/30 to-transparent rounded-full blur-[65px] opacity-90 animate-pulse" />

          {/* Figur Cutout Frameless Besar di HP (Bebas Potongan Kotak) */}
          <div
            style={{
              maskImage: "linear-gradient(to bottom, black 82%, rgba(0,0,0,0.5) 92%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 82%, rgba(0,0,0,0.5) 92%, transparent 100%)",
            }}
            className="w-full flex justify-center relative z-20"
          >
            <img
              src="/images/hafis-hero-portrait.png"
              alt={fullName || "Muhamad Hafis Ali"}
              className="w-[88vw] max-w-[360px] sm:max-w-[420px] h-auto object-contain select-none filter drop-shadow-[0_10px_35px_rgba(6,182,212,0.45)]"
              draggable={false}
            />
          </div>
        </div>

        {/* Bagian Bawah: Telemetry, Tombol & Kontak Mentok ke Bawah Layar */}
        <div className="w-full flex flex-col items-center space-y-2 sm:space-y-2.5 pt-0 pb-1 z-20">
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
          <div className="grid grid-cols-2 gap-2.5 w-full max-w-xs">
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

          {/* Social Icons Strip di HP - Mentok ke Bawah Layar */}
          <div className="flex items-center gap-3 pt-0.5 pb-0">
            {profile?.email && (
              <a href={`mailto:${profile.email}`} aria-label="Email" className="p-1.5 text-gray-500 hover:text-cyan-400">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            )}
            {profile?.phone && (
              <a href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="p-1.5 text-gray-500 hover:text-cyan-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </a>
            )}
            {profile?.instagramUrl && (
              <a href={profile.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 text-gray-500 hover:text-cyan-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            )}
            {profile?.linkedinUrl && (
              <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1.5 text-gray-500 hover:text-cyan-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
