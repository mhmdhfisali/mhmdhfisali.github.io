"use client";

import { useState } from "react";
import { urlFor } from "@/sanity";

export default function Hero({ profile }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      <div className="lg:col-span-7 xl:col-span-8 space-y-6 text-center lg:text-left order-2 lg:order-1">
        {/* Status Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/40 text-blue-700 dark:text-blue-300 text-xs font-mono shadow-xs backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span>AVAILABLE FOR CONTRACT & FULL-TIME ROLES</span>
        </div>

        {/* Title Name */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-gray-900 dark:text-white">
          {profile?.name || "Muhamad Hafis Ali"}
        </h1>

        {/* Headline */}
        <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
          {profile?.headline ||
            "Software, AI & Mobile Developer | System Administrator"}
        </p>

        {/* Bio Copy */}
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          {profile?.bio ||
            "Fokus membangun produk perangkat lunak tangguh, implementasi arsitektur cloud terkelola, dan otomatisasi model AI cerdas dari tahap riset komputasi hingga implementasi siap pakai."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
          {profile?.githubUrl && (
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-950 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-950 text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <span>GitHub Repositories</span>
              <span className="text-xs">&rarr;</span>
            </a>
          )}
          {profile?.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg shadow-blue-600/25 active:scale-95"
            >
              <span>Download Resume (CV)</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* 3D Tilt Image Frame */}
      <div className="lg:col-span-5 xl:col-span-4 w-full flex justify-center order-1 lg:order-2">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transition: "transform 0.15s ease-out",
          }}
          className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl p-2 bg-gradient-to-tr from-blue-500/30 via-transparent to-cyan-500/30 border border-gray-200/80 dark:border-white/10 shadow-2xl cursor-pointer"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden bg-[#151923] relative">
            {profile?.profileImage ? (
              <img
                src={urlFor(profile.profileImage).url()}
                alt={profile.name || "Foto Profil"}
                className="w-full h-full object-cover select-none"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center font-mono text-xs text-gray-500">
                Belum ada foto
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
