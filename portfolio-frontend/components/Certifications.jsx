"use client";

export default function Certifications({ certifications = [] }) {
  return (
    <div className="w-full space-y-8 text-left py-2">
      {/* Header Seksi */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            Credentials &amp; Certifications
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            Sertifikasi &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              Lisensi Resmi
            </span>
          </h2>

          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
            {certifications.length} Lisensi Terdaftar
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Sertifikasi kompetensi industri, pelatihan keahlian teknis khusus, dan
          lisensi terverifikasi yang diakui oleh lembaga otoritatif.
        </p>
      </div>

      {/* Grid Kartu Sertifikasi */}
      {certifications.length === 0 ? (
        <div className="w-full py-16 px-6 rounded-3xl border border-dashed border-gray-200 dark:border-white/10 text-center text-xs font-mono text-gray-400 bg-white/40 dark:bg-white/[0.01]">
          Belum ada data sertifikasi resmi yang ditambahkan di Sanity Studio.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={cert._id || idx}
              className="group relative bg-white/85 dark:bg-[#151923]/70 hover:bg-white dark:hover:bg-[#151923] border border-gray-200/90 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-blue-500/40 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 backdrop-blur-md flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  {/* Avatar Monogram Lembaga */}
                  <div className="w-10 h-10 rounded-2xl bg-gray-100 dark:bg-white/[0.05] border border-gray-200/80 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:border-blue-500/30 transition-colors">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                      {(cert.issuer || "ID").slice(0, 2).toUpperCase()}
                    </span>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800/40 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Terverifikasi
                    </span>
                    {cert.date && (
                      <span className="text-[10px] font-mono text-gray-400 mt-1">
                        {cert.date}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-semibold block">
                    {cert.issuer || "Penyelenggara"}
                  </span>
                  <h3 className="text-base font-bold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                    {cert.title}
                  </h3>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-100 dark:border-white/[0.06]">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 font-mono transition-colors"
                  >
                    <span>Cek Kredensial Resmi</span>
                    <span className="w-6 h-6 rounded-full bg-gray-100 dark:bg-white/[0.06] flex items-center justify-center text-[10px] group-hover:bg-blue-600 group-hover:text-white transition-all">
                      ↗
                    </span>
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-gray-400">
                    Lisensi Resmi Terverifikasi
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
