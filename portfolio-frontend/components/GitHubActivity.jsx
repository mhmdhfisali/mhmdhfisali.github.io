"use client";

import { useLanguage } from "@/context/LanguageContext";
import { fallbackContributions } from "@/lib/fallbackContributions";
import { useEffect, useMemo, useRef, useState } from "react";

export default function GitHubActivity({ username = "mhmdhfisali" }) {
  const { locale, t } = useLanguage();
  const [data, setData] = useState(fallbackContributions);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);
  const [hoveredDay, setHoveredDay] = useState(null);
  const initialRepos = [
    {
      id: 1,
      name: "datahub",
      html_url: `https://github.com/${username}/datahub`,
      description: "Data integration and processing pipeline hub",
      language: "PHP",
      stargazers_count: 0,
    },
    {
      id: 2,
      name: "wa-bridge",
      html_url: `https://github.com/${username}/wa-bridge`,
      description: "WhatsApp automation and notification bridge",
      language: "TypeScript",
      stargazers_count: 0,
    },
    {
      id: 3,
      name: "my-docker-dashboard",
      html_url: `https://github.com/${username}/my-docker-dashboard`,
      description: "Container monitoring and service health visualizer",
      language: "HTML",
      stargazers_count: 0,
    },
    {
      id: 4,
      name: "ARTEA-Ops",
      html_url: `https://github.com/${username}/ARTEA-Ops`,
      description: "Automated workflow and operational scripts",
      language: "Shell",
      stargazers_count: 0,
    },
  ];

  const [repos, setRepos] = useState(initialRepos);
  const scrollRef = useRef(null);

  const fetchContributions = async (isManualSync = false) => {
    if (isManualSync) setSyncing(true);
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 9000);

      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=last&_t=${Date.now()}`,
        {
          signal: controller.signal,
          cache: "no-store",
          headers: {
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        }
      );
      clearTimeout(timeoutId);

      if (res.ok) {
        const json = await res.json();
        if (json?.contributions?.length > 0) {
          setData(json);
        }
      }
    } catch {
      setData((prev) => (prev?.contributions?.length ? prev : fallbackContributions));
    } finally {
      setLoading(false);
      if (isManualSync) {
        setTimeout(() => setSyncing(false), 500);
      }
    }
  };

  const fetchRepos = async () => {
    try {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=4`
      );
      if (res.ok) {
        const json = await res.json();
        if (Array.isArray(json) && json.length > 0) setRepos(json);
      }
    } catch {
      // Non-blocking fallback
    }
  };

  useEffect(() => {
    fetchContributions();
    fetchRepos();
  }, [username]);

  // Posisi track langsung ke sisi kanan saat data tersedia di mobile agar langsung melihat bulan terbaru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [data]);

  // Susun kontribusi menjadi kolom-kolom minggu (minggu = 7 hari)
  const { weeks, monthLabels, stats } = useMemo(() => {
    const rawContributions = (data?.contributions?.length > 0)
      ? data.contributions
      : fallbackContributions.contributions;
    if (rawContributions.length === 0) {
      return {
        weeks: [],
        monthLabels: [],
        stats: {
          total: 0,
          currentMonthTotal: 0,
          currentMonthName: "",
          currentStreak: 0,
          maxStreak: 0,
          activeDays: 0,
        },
      };
    }

    const weeksArr = [];
    let currentWeek = [];
    const months = [];
    let lastMonth = -1;

    let currentStreak = 0;
    let maxStreak = 0;
    let tempStreak = 0;
    let activeDaysCount = 0;

    const now = new Date();
    const currentMonthPrefix = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
    const currentMonthName = now.toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
      month: "short",
    });

    const currentMonthTotal = rawContributions
      .filter((c) => c.date.startsWith(currentMonthPrefix))
      .reduce((acc, c) => acc + (c.count || 0), 0);

    rawContributions.forEach((day, index) => {
      currentWeek.push(day);

      // Hitung streak & hari aktif
      if (day.count > 0) {
        activeDaysCount++;
        tempStreak++;
        if (tempStreak > maxStreak) maxStreak = tempStreak;
      } else {
        tempStreak = 0;
      }

      // Hitung streak aktif saat ini dari ujung terbaru
      if (index === rawContributions.length - 1) {
        let revStreak = 0;
        for (let i = rawContributions.length - 1; i >= 0; i--) {
          if (rawContributions[i].count > 0) revStreak++;
          else break;
        }
        currentStreak = revStreak;
      }

      // Deteksi pergantian bulan di awal minggu
      const dayDate = new Date(day.date);
      const dayMonth = dayDate.getMonth();
      if (currentWeek.length === 1 && dayMonth !== lastMonth) {
        const monthName = dayDate.toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
          month: "short",
        });
        months.push({ colIndex: weeksArr.length, label: monthName });
        lastMonth = dayMonth;
      }

      if (currentWeek.length === 7) {
        weeksArr.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      weeksArr.push(currentWeek);
    }

    const total = data?.total?.lastYear || rawContributions.reduce((acc, c) => acc + (c.count || 0), 0);

    return {
      weeks: weeksArr,
      monthLabels: months,
      stats: {
        total,
        currentMonthTotal,
        currentMonthName,
        currentStreak,
        maxStreak,
        activeDays: activeDaysCount,
      },
    };
  }, [data, locale]);

  // Color generator sesuai intensitas commit
  const getCellColor = (level, count) => {
    if (count === 0 || level === 0) {
      return "bg-gray-100 dark:bg-white/[0.04] border border-gray-200/60 dark:border-white/[0.03]";
    }
    if (level === 1 || count === 1) {
      return "bg-cyan-900/60 border border-cyan-700/60 text-cyan-200";
    }
    if (level === 2 || count <= 3) {
      return "bg-cyan-600 border border-cyan-500 shadow-[0_0_6px_rgba(6,182,212,0.4)]";
    }
    if (level === 3 || count <= 6) {
      return "bg-cyan-400 border border-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.6)]";
    }
    return "bg-emerald-400 border border-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.8)]";
  };

  return (
    <div className="w-full space-y-4 sm:space-y-7 text-left py-1 sm:py-2">
      {/* Header Section */}
      <div className="space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.07] dark:bg-emerald-950/40 border border-emerald-500/20 dark:border-emerald-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-emerald-700 dark:text-emerald-400 uppercase">
            {t.github?.badge || "Live Engineering Pulse"}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            {t.github?.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 dark:from-blue-400 dark:via-cyan-300 dark:to-emerald-300 bg-clip-text text-transparent">
              {t.github?.titleHighlight}
            </span>
          </h2>

          <div className="flex items-center gap-2 shrink-0">
            {/* Sync Now Button */}
            <button
              type="button"
              onClick={() => fetchContributions(true)}
              disabled={syncing}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] hover:bg-gray-200 dark:hover:bg-white/[0.1] text-gray-700 dark:text-gray-200 text-xs font-mono font-semibold transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              title="Sinkronisasi data commit langsung dari API"
            >
              <svg
                className={`w-3.5 h-3.5 text-cyan-500 ${syncing ? "animate-spin" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>{syncing ? t.github?.syncing || "Memuat..." : t.github?.syncNow || "Sinkronkan"}</span>
            </button>

            {/* GitHub Profile Interactive SVG Button */}
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-xl bg-gray-900 hover:bg-black dark:bg-white/[0.08] dark:hover:bg-white/[0.14] text-white border border-gray-800 dark:border-white/10 text-xs font-mono font-semibold transition-all shadow-sm hover:shadow-md active:scale-95 group cursor-pointer"
              title={`Buka Profil GitHub @${username}`}
            >
              <svg className="w-3.5 h-3.5 fill-current text-white group-hover:scale-110 transition-transform shrink-0" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
              <svg className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-none">
          {t.github?.subtitle}
        </p>
      </div>

      {/* Metric Counters Bento */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-[#151923]/70 border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
            {t.github?.totalContributions || "Total Kontribusi"}
          </span>
          <span className="text-lg sm:text-2xl font-black font-mono text-cyan-600 dark:text-cyan-400 mt-1 block">
            {loading ? "--" : stats.total}
          </span>
          <span className="text-[9px] font-mono text-gray-400">
            {t.github?.last12Months || "12 Bulan Terakhir"}
          </span>
        </div>

        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-[#151923]/70 border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block truncate">
            {t.github?.thisMonth || "Bulan Ini"} ({stats.currentMonthName || "Nov"})
          </span>
          <span className="text-lg sm:text-2xl font-black font-mono text-emerald-600 dark:text-emerald-400 mt-1 block">
            {loading ? "--" : stats.currentMonthTotal}
          </span>
          <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
            {t.github?.thisMonthSub || "Commit Berjalan"}
          </span>
        </div>

        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-[#151923]/70 border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
            {t.github?.activeDays || "Hari Aktif"}
          </span>
          <span className="text-lg sm:text-2xl font-black font-mono text-blue-600 dark:text-blue-400 mt-1 block">
            {loading ? "--" : stats.activeDays}
          </span>
          <span className="text-[9px] font-mono text-gray-400">
            {t.github?.activeDaysSub || "Hari dengan Commit"}
          </span>
        </div>

        <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 dark:bg-[#151923]/70 border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
            {t.github?.longestStreak || "Streak Terpanjang"}
          </span>
          <span className="text-lg sm:text-2xl font-black font-mono text-indigo-600 dark:text-indigo-400 mt-1 block">
            {loading ? "--" : `${stats.maxStreak} ${locale === "en" ? "Days" : "Hari"}`}
          </span>
          <span className="text-[9px] font-mono text-gray-400">
            {t.github?.streakSub || "Konsistensi Kode"}
          </span>
        </div>
      </div>

      {/* Main Grid: Interactive Heatmap Matrix */}
      <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/85 dark:bg-[#151923]/70 border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md shadow-2xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-[11px] font-mono text-gray-900 dark:text-white font-bold uppercase tracking-wider">
              {t.github?.commitStream || "Tahun Berjalan • Live Commit Stream"}
            </span>
            <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-semibold">
              Real-Time
            </span>
          </div>

          {/* Color Scale Legend */}
          <div className="flex items-center gap-1 text-[10px] font-mono text-gray-400">
            <span>{t.github?.less || "Kurang"}</span>
            <div className="w-2.5 h-2.5 rounded-xs bg-gray-200 dark:bg-white/[0.05]" />
            <div className="w-2.5 h-2.5 rounded-xs bg-cyan-900/60" />
            <div className="w-2.5 h-2.5 rounded-xs bg-cyan-600" />
            <div className="w-2.5 h-2.5 rounded-xs bg-cyan-400" />
            <div className="w-2.5 h-2.5 rounded-xs bg-emerald-400" />
            <span>{t.github?.more || "Banyak"}</span>
          </div>
        </div>

        {/* Heatmap Matrix Track (Horizontal Scrollable di Mobile) */}
        <div
          ref={scrollRef}
          className="w-full overflow-x-auto pb-3 pt-1 scroll-smooth no-scrollbar select-none"
        >
          <div className="inline-block min-w-max">
            {/* Baris Bulan dengan Posisi Absolut Presisi di atas Kolomnya */}
            <div className="relative w-full h-4 mb-1.5 pl-6 text-[10px] font-mono text-gray-400 select-none">
              {monthLabels.map((m, idx) => (
                <span
                  key={idx}
                  style={{
                    left: `${24 + m.colIndex * 16}px`,
                  }}
                  className="absolute whitespace-nowrap"
                >
                  {m.label}
                </span>
              ))}
            </div>

            {/* Matrix Cells Grid */}
            <div className="flex items-start gap-1">
              {/* Day of Week Labels */}
              <div className="flex flex-col justify-between h-[100px] text-[8px] font-mono text-gray-400 pr-1 select-none">
                <span className="h-[12px] leading-[12px]">{t.github?.days?.[0] || "Min"}</span>
                <span className="h-[12px] leading-[12px]">{t.github?.days?.[2] || "Sel"}</span>
                <span className="h-[12px] leading-[12px]">{t.github?.days?.[4] || "Kam"}</span>
                <span className="h-[12px] leading-[12px]">{t.github?.days?.[6] || "Sab"}</span>
              </div>

              {/* Weeks Columns */}
              {loading && weeks.length === 0 ? (
                <div className="flex gap-1 animate-pulse">
                  {Array.from({ length: 48 }).map((_, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-1">
                      {Array.from({ length: 7 }).map((_, rowIdx) => (
                        <div
                          key={rowIdx}
                          className="w-3 h-3 rounded-xs bg-gray-200 dark:bg-white/[0.04]"
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex gap-1">
                  {weeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1">
                      {week.map((day) => {
                        const isHovered = hoveredDay?.date === day.date;
                        return (
                          <div
                            key={day.date}
                            onMouseEnter={() => setHoveredDay(day)}
                            onMouseLeave={() => setHoveredDay(null)}
                            onClick={() => setHoveredDay(day)}
                            className={`w-3 h-3 rounded-xs transition-all duration-150 cursor-pointer ${getCellColor(
                              day.level,
                              day.count
                            )} ${isHovered ? "scale-125 z-20 ring-2 ring-white dark:ring-cyan-300" : ""}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex sm:hidden items-center justify-between text-[9px] font-mono text-gray-400 px-1 -mt-1">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3 text-cyan-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <span>{locale === "en" ? "Swipe to explore earlier commits" : "Geser ke kiri untuk riwayat sebelumnya"}</span>
          </span>
          <span className="text-cyan-500 font-semibold">{locale === "en" ? "Live REST" : "Real-time"}</span>
        </div>

        {/* Hover Tooltip Info Banner */}
        <div className="pt-2 border-t border-gray-100 dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
          <div className="text-gray-700 dark:text-gray-300 min-h-[20px] flex items-center gap-1.5">
            {hoveredDay ? (
              <>
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
                <span className="font-bold text-gray-950 dark:text-white">
                  {t.github?.commitsOn ? t.github.commitsOn(hoveredDay.count, hoveredDay.date) : `${hoveredDay.count} contributions on ${hoveredDay.date}`}
                </span>
              </>
            ) : (
              <span className="text-gray-400 text-[11px]">
                {t.github?.hoverTip || "Arahkan kursor atau sentuh kotak untuk melihat rincian tanggal & commit."}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 text-[10px] text-gray-400">
            <span>{t.github?.timeZone || "Zona Waktu: WIB (UTC+7)"}</span>
            <span>•</span>
            <span className="text-cyan-500 font-semibold">{t.github?.liveSync || "Live Synchronized"}</span>
          </div>
        </div>
      </div>

      {/* Live Active Repositories */}
      <div className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/85 dark:bg-[#151923]/70 border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {locale === "en" ? "Recent Active Repositories" : "Repositori Aktif Terkini"}
            </span>
          </div>
          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1 font-semibold"
          >
            <span>{t.github?.viewAllRepos || "Lihat Semua"}</span>
            <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {repos.length > 0 ? (
            repos.slice(0, 4).map((r) => (
              <a
                key={r.id}
                href={r.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl sm:rounded-2xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.06] hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-mono font-bold text-gray-900 dark:text-white truncate block group-hover:text-cyan-400">
                      {r.name}
                    </span>
                    <svg className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  {r.description && (
                    <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1 mb-2 font-sans">
                      {r.description}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between mt-2 pt-1.5 text-[10px] font-mono text-gray-400 border-t border-gray-100 dark:border-white/[0.04]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{r.language || "Code"}</span>
                  </span>
                  {r.stargazers_count > 0 && (
                    <span className="flex items-center gap-0.5 text-amber-500">
                      <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                      <span>{r.stargazers_count}</span>
                    </span>
                  )}
                </div>
              </a>
            ))
          ) : (
            <div className="col-span-4 text-center py-3 text-[11px] font-mono text-gray-400">
              Memuat repositori aktif...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
