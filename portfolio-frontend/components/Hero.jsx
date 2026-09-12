"use client";

import { urlFor } from "@/sanity";
import { useState } from "react";

export default function Hero({ profile }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
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

  // Parsing nama dinamis dari backend
  const fullName = profile?.name?.trim() || "";
  const nameParts = fullName ? fullName.split(" ") : [];
  const firstName = nameParts[0] || "";
  const restName = nameParts.slice(1).join(" ");

  return (
    <div className="relative w-full py-4 sm:py-6">
      {/* Dynamic Background Glow */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-[420px] h-[420px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-transparent blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute top-10 right-0 w-80 h-80 bg-cyan-500/15 dark:bg-cyan-400/10 blur-[130px] rounded-full" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* KOLOM KIRI: Informasi Utama Dinamis */}
        <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
          {/* Status Capsule Dinamis */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-blue-500/[0.06] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-700/40 backdrop-blur-md shadow-xs">
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
                ? "AVAILABLE FOR CONTRACT & FULL-TIME"
                : "CURRENTLY COMMITTED"}
            </span>
          </div>

          {/* Heading Nama & Peran Dinamis */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.04] text-gray-950 dark:text-white">
              {firstName}{" "}
              {restName && (
                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
                  {restName}
                </span>
              )}
            </h1>

            {profile?.headline && (
              <p className="text-base sm:text-xl font-bold tracking-tight text-gray-800 dark:text-gray-200">
                <span className="text-blue-600 dark:text-cyan-400">
                  {profile.headline}
                </span>
              </p>
            )}
          </div>

          {/* Bio Naratif Dinamis */}
          {profile?.bio && (
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-normal max-w-xl">
              {profile.bio}
            </p>
          )}

          {/* Telemetry Bar Dinamis dari Sanity Studio */}
          <div className="inline-flex items-center divide-x divide-gray-200/80 dark:divide-white/[0.08] rounded-2xl bg-white/80 dark:bg-white/[0.02] border border-gray-200/90 dark:border-white/[0.08] p-2 shadow-xs backdrop-blur-md">
            <div className="px-4 py-1 text-left">
              <span className="block text-base sm:text-lg font-black font-mono text-gray-900 dark:text-white leading-tight">
                {profile?.researchPaperCount ?? "-"}
              </span>
              <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                Paper Riset
              </span>
            </div>
            <div className="px-4 py-1 text-left">
              <span className="block text-base sm:text-lg font-black font-mono text-blue-600 dark:text-cyan-400 leading-tight">
                {profile?.completedProjectCount ?? "-"}
              </span>
              <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                Proyek Selesai
              </span>
            </div>
            <div className="px-4 py-1 text-left">
              <span className="block text-base sm:text-lg font-black font-mono text-gray-900 dark:text-white leading-tight">
                {profile?.environmentMetric ?? "-"}
              </span>
              <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400">
                Linux Workspace
              </span>
            </div>
          </div>

          {/* Action Buttons Dinamis */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {profile?.githubUrl && (
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 sm:py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold font-mono tracking-tight shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                <span>GitHub Repositories</span>
                <span className="text-sm transition-transform duration-200 group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </a>
            )}

            {profile?.email && (
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-gray-50 dark:bg-[#151923] dark:hover:bg-white/[0.08] text-gray-800 dark:text-gray-200 text-xs sm:text-sm font-semibold font-mono tracking-tight border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 active:scale-95 transition-all duration-200 shadow-2xs cursor-pointer"
              >
                <span>{copied ? "✓ Tersalin" : "Salin Email"}</span>
                <span className="text-xs text-gray-400">📋</span>
              </button>
            )}
          </div>
        </div>

        {/* KOLOM KANAN: Frame Foto 3D Dinamis */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-blue-600/20 via-cyan-500/15 to-transparent rounded-[2.5rem] blur-2xl opacity-70" />

            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: isHovered
                  ? `perspective(1000px) rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg) scale(1.02)`
                  : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)",
                transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              className="group relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl p-2.5 bg-gradient-to-b from-white/90 via-white/40 to-white/10 dark:from-white/10 dark:via-white/[0.03] dark:to-transparent border border-gray-200/90 dark:border-white/10 shadow-2xl shadow-blue-500/5 dark:shadow-black/50 cursor-pointer backdrop-blur-xl"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-[#10131a] relative border border-gray-200/70 dark:border-white/10">
                {profile?.profileImage ? (
                  <img
                    src={urlFor(profile.profileImage).url()}
                    alt={fullName || "Foto Profil"}
                    className="w-full h-full object-cover select-none group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono text-xs text-gray-400">
                    Foto Profil Belum Diunggah
                  </div>
                )}

                <div className="absolute bottom-2.5 inset-x-2.5 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-gray-200">
                      Production Ready
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-300 font-medium">
                    Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
