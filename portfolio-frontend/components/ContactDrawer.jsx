"use client";

import { useState } from "react";

export default function ContactDrawer({ profile = {} }) {
  const [copied, setCopied] = useState(false);

  const email = profile?.email || "mhffsali@gmail.com";
  const github = profile?.githubUrl || "https://github.com";
  const linkedin =
    profile?.linkedinUrl || "https://www.linkedin.com/in/mhmdhfisali";
  const instagram = profile?.instagramUrl || "https://instagram.com";
  const whatsapp = profile?.phone
    ? `https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`
    : "https://wa.me/6285945720329";
  const telegram = profile?.telegramUrl || null;

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    {
      name: "GitHub",
      handle: "@mhmdhfisali",
      desc: "Repositori kode & proyek",
      url: github,
      badge: "Code",
      hoverClass: "group-hover:text-blue-500 dark:group-hover:text-cyan-400",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      handle: "in/mhmdhfisali",
      desc: "Jejaring karier profesional",
      url: linkedin,
      badge: "Karier",
      hoverClass: "group-hover:text-[#0A66C2]",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    ...(whatsapp
      ? [
          {
            name: "WhatsApp",
            handle: "Direct Chat",
            desc: "Pesan instan & respons cepat",
            url: whatsapp,
            badge: "Fast",
            hoverClass: "group-hover:text-[#25D366]",
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            ),
          },
        ]
      : []),
    {
      name: "Instagram",
      handle: "@mhmdhfisali",
      desc: "Aktivitas & pembaruan personal",
      url: instagram,
      badge: "Social",
      hoverClass: "group-hover:text-[#E4405F]",
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    ...(telegram
      ? [
          {
            name: "Telegram",
            handle: "Direct Message",
            desc: "Komunikasi teks terenkripsi",
            url: telegram,
            badge: "Chat",
            hoverClass: "group-hover:text-[#229ED9]",
            icon: (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
              </svg>
            ),
          },
        ]
      : []),
  ];

  return (
    <div className="w-full space-y-6 text-left py-2">
      {/* 1. Header Seksi */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            Saluran Komunikasi
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            Mulai{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              Kolaborasi
            </span>
          </h2>

          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            Terbuka untuk Diskusi
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Tersedia untuk peluang rekayasa perangkat lunak, pengembangan aplikasi
          seluler dan web, maupun kolaborasi proyek teknis.
        </p>
      </div>

      {/* 2. Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Kolom Kiri: Kartu Utama Email & Status Kerja */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-3xl bg-white/85 dark:bg-[#151923]/70 border border-gray-200/90 dark:border-white/[0.08] shadow-xs backdrop-blur-md flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-bold">
                Jalur Resmi Utama
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                Active Mailbox
              </span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-950 dark:text-white font-mono break-all">
                {email}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                Jalur tercepat untuk proposal proyek, tawaran pekerjaan
                profesional, atau konsultasi arsitektur sistem.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${email}`}
                className="flex-1 py-3 px-4 text-center rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-semibold transition-all shadow-md shadow-blue-600/25 active:scale-95"
              >
                Kirim Email Langsung &rarr;
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="px-4 py-3 rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-gray-800 dark:text-gray-200 text-xs font-mono font-medium transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
                title="Salin Email"
              >
                <span>{copied ? "✓" : "📋"}</span>
                <span>{copied ? "Tersalin" : "Salin"}</span>
              </button>
            </div>

            <div className="pt-4 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400">
              <span>Lokasi: Jakarta, Indonesia</span>
              <span>Zona: GMT+7 (WIB)</span>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Semua Kanal Terpusat */}
        <div className="lg:col-span-6 p-4 sm:p-5 rounded-3xl bg-white/85 dark:bg-[#151923]/70 border border-gray-200/90 dark:border-white/[0.08] shadow-xs backdrop-blur-md flex flex-col justify-between">
          <div className="px-3 pt-2 pb-3 flex items-center justify-between border-b border-gray-100 dark:border-white/[0.06]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 font-semibold">
              Kanal Terverifikasi
            </span>
            <span className="text-[10px] font-mono text-gray-400">
              {channels.length} Terhubung
            </span>
          </div>

          <div className="divide-y divide-gray-100 dark:divide-white/[0.04]">
            {channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/[0.03] transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-xl bg-gray-100 dark:bg-white/[0.05] border border-gray-200/70 dark:border-white/[0.06] flex items-center justify-center text-gray-600 dark:text-gray-300 group-hover:scale-105 transition-transform shrink-0">
                    {channel.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h4
                        className={`text-xs sm:text-sm font-bold text-gray-900 dark:text-gray-100 transition-colors ${channel.hoverClass}`}
                      >
                        {channel.name}
                      </h4>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/[0.06] text-gray-500 dark:text-gray-400">
                        {channel.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">
                      {channel.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 pl-2 shrink-0">
                  <span className="text-xs font-mono text-gray-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="px-3 pt-3 border-t border-gray-100 dark:border-white/[0.06] text-[10px] font-mono text-gray-400 text-center">
            Pilih platform di atas untuk membuka tautan resmi
          </div>
        </div>
      </div>
    </div>
  );
}
