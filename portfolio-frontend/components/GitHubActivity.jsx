"use client";

export default function GitHubActivity({ username = "mhmdhfisali" }) {
  return (
    <div className="w-full space-y-7 text-left py-2">
      {/* Header Seksi Berukuran Besar Konsisten */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/[0.07] dark:bg-emerald-950/40 border border-emerald-500/20 dark:border-emerald-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-emerald-700 dark:text-emerald-400 uppercase">
            Live Engineering Pulse
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            Aktivitas &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-400 dark:from-blue-400 dark:via-cyan-300 dark:to-emerald-300 bg-clip-text text-transparent">
              Kontribusi GitHub
            </span>
          </h2>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-blue-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1.5 shrink-0"
          >
            <span>github.com/{username}</span>
            <span>↗</span>
          </a>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Rekaman frekuensi commit, kontribusi kode repositori publik, serta
          alur kerja otomatisasi pengujian perangkat lunak yang disinkronkan
          langsung.
        </p>
      </div>

      {/* Bento Grid GitHub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Heatmap Contribution Card */}
        <div className="lg:col-span-8 p-5 sm:p-7 rounded-3xl bg-white/85 dark:bg-[#151923]/70 border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md shadow-xs flex flex-col justify-between space-y-4 overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
              Tahun Berjalan • Commit Stream
            </span>
            <span className="text-[10px] font-mono text-emerald-500 font-semibold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              Active Commits
            </span>
          </div>

          <div className="w-full overflow-x-auto no-scrollbar py-3">
            <img
              src={`https://ghchart.rshah.org/06b6d4/${username}`}
              alt={`Grafik kontribusi GitHub ${username}`}
              className="w-full min-w-[650px] dark:opacity-90 filter"
              loading="lazy"
            />
          </div>

          <div className="pt-2 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-gray-400">
            <span>Data bersumber dari GitHub REST API</span>
            <span className="text-cyan-500">Live Synchronized</span>
          </div>
        </div>

        {/* Workflow Card */}
        <div className="lg:col-span-4 p-5 sm:p-7 rounded-3xl bg-white/85 dark:bg-[#151923]/70 border border-gray-200/90 dark:border-white/[0.08] backdrop-blur-md shadow-xs flex flex-col justify-between space-y-5">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
              Developer Workflow
            </span>
            <h3 className="text-base font-bold text-gray-950 dark:text-white">
              Siklus Rekayasa Harian
            </h3>
          </div>

          <div className="space-y-2.5 font-mono text-xs">
            <div className="p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.05] flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">VCS</span>
              <span className="font-bold text-gray-900 dark:text-gray-200">
                Git &amp; GitHub
              </span>
            </div>
            <div className="p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.05] flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">CI/CD</span>
              <span className="font-bold text-gray-900 dark:text-gray-200">
                GitHub Actions
              </span>
            </div>
            <div className="p-3 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200/60 dark:border-white/[0.05] flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400">
                Environment
              </span>
              <span className="font-bold text-cyan-500 dark:text-cyan-400">
                Linux / Hyprland
              </span>
            </div>
          </div>

          <a
            href={`https://github.com/${username}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 text-center rounded-2xl bg-gray-100 hover:bg-gray-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-gray-800 dark:text-gray-200 text-xs font-mono font-medium transition-all active:scale-95 cursor-pointer block"
          >
            Lihat Semua Repositori ↗
          </a>
        </div>
      </div>
    </div>
  );
}
