"use client";

import { urlFor } from "@/sanity";

export default function MediaContent({ mediaContents = [] }) {
  // Pemetaan warna aksen platform
  const getPlatformStyle = (platform = "") => {
    const p = platform.toLowerCase();
    if (p.includes("youtube"))
      return "text-red-500 bg-red-500/10 border-red-500/20";
    if (p.includes("instagram"))
      return "text-pink-500 bg-pink-500/10 border-pink-500/20";
    if (p.includes("tiktok"))
      return "text-cyan-400 bg-cyan-500/10 border-cyan-500/20";
    return "text-blue-500 bg-blue-500/10 border-blue-500/20";
  };

  return (
    <div className="w-full space-y-8 text-left py-2">
      {/* Header Seksi */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            Creative Production &amp; Media
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            Karya Media &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              Publikasi Kreatif
            </span>
          </h2>

          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
            {mediaContents.length} Konten Terbit
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Dokumentasi produksi konten multimedia, pengelolaan saluran publik,
          perancangan visual, serta strategi komunikasi digital.
        </p>
      </div>

      {/* Grid Konten Media */}
      {mediaContents.length === 0 ? (
        <div className="w-full py-16 px-6 rounded-3xl border border-dashed border-gray-200 dark:border-white/10 text-center text-xs font-mono text-gray-400 bg-white/40 dark:bg-white/[0.01]">
          Belum ada arsip konten media yang ditambahkan di Sanity Studio.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {mediaContents.map((media, idx) => (
            <a
              key={media._id || idx}
              href={media.link || "#"}
              target={media.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between bg-white/85 dark:bg-[#151923]/70 hover:bg-white dark:hover:bg-[#151923] border border-gray-200/90 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-blue-500/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
            >
              {/* Media Thumbnail */}
              <div className="w-full h-48 sm:h-52 overflow-hidden bg-gray-100 dark:bg-black/40 relative border-b border-gray-100 dark:border-white/[0.06]">
                {media.thumbnail ? (
                  <img
                    src={urlFor(media.thumbnail).url()}
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono text-xs text-gray-400">
                    Preview Media
                  </div>
                )}

                {/* Badge Platform di Sudut Kiri Atas */}
                {media.platform && (
                  <span
                    className={`absolute top-3 left-3 backdrop-blur-md px-2.5 py-1 rounded-xl border text-[10px] font-mono font-bold uppercase tracking-wider shadow-xs ${getPlatformStyle(
                      media.platform,
                    )}`}
                  >
                    {media.platform}
                  </span>
                )}

                {/* Indikator Tombol Link Melayang di Sudut Kanan Atas */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ↗
                </div>

                {/* Gradient Penutup Dasar Thumbnail */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>

              {/* Konten Detail */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                    {media.title}
                  </h3>

                  {media.description && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                      {media.description}
                    </p>
                  )}
                </div>

                {/* Footer Kartu: Peran & Akses Link */}
                <div className="pt-3 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500 dark:text-gray-400 text-[11px]">
                    Role:{" "}
                    <strong className="text-gray-800 dark:text-gray-200 font-semibold">
                      {media.role || "Content Strategist"}
                    </strong>
                  </span>

                  <span className="text-blue-600 dark:text-cyan-400 font-bold group-hover:translate-x-0.5 transition-transform duration-200 inline-flex items-center gap-1">
                    Buka Konten &rarr;
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
