export default function Certifications({ certifications = [] }) {
  return (
    <section className="w-full space-y-6 sm:space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20"></span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Sertifikasi &amp; Lisensi
          </h2>
        </div>
        <span className="text-[11px] sm:text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-white/[0.04] px-3 py-1 rounded-full border border-gray-200/80 dark:border-white/[0.08]">
          {certifications.length} Terverifikasi
        </span>
      </div>

      {certifications.length === 0 ? (
        <div className="w-full py-10 px-5 rounded-2xl border border-dashed border-gray-300 dark:border-gray-800 text-center bg-gray-50/50 dark:bg-white/[0.02]">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Belum ada sertifikasi yang ditambahkan.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certifications.map((cert) => (
            <div
              key={cert._id}
              className="group relative bg-white/70 dark:bg-[#151923]/60 hover:bg-white dark:hover:bg-[#151923] border border-gray-200/80 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-blue-500/40 p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 backdrop-blur-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/40 font-semibold truncate">
                    {cert.issuer || "Penerbit"}
                  </span>
                  {cert.date && (
                    <span className="text-[10px] font-mono text-gray-400 shrink-0">
                      {cert.date}
                    </span>
                  )}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
              </div>

              {cert.credentialUrl && (
                <div className="pt-3 border-t border-gray-100 dark:border-white/[0.06]">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-mono transition-colors"
                  >
                    <span>Verifikasi Kredensial</span>
                    <span className="text-[11px]">&rarr;</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
