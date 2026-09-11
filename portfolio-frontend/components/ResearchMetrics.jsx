export default function ResearchMetrics({ researchMetrics = [] }) {
  return (
    <section className="w-full space-y-6 sm:space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20"></span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Metrik &amp; Pencapaian Riset
          </h2>
        </div>
        <span className="text-[11px] sm:text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/[0.04] px-2.5 py-1 rounded-full border border-gray-200/80 dark:border-white/[0.08]">
          {researchMetrics.length} Metrik
        </span>
      </div>

      {researchMetrics.length === 0 ? (
        <div className="w-full py-10 px-5 rounded-2xl border border-dashed border-gray-300 dark:border-gray-800 text-center bg-gray-50/50 dark:bg-white/[0.02]">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Belum ada metrik riset yang dimuat.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {researchMetrics.map((m) => (
            <div
              key={m._id}
              className="group bg-white dark:bg-[#0c0c10] hover:bg-gray-50/50 dark:hover:bg-[#111116] border border-gray-200/90 dark:border-white/[0.08] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 p-5 sm:p-6 rounded-2xl space-y-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5 relative overflow-hidden"
            >
              <div className="relative z-10 space-y-1.5">
                <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider bg-cyan-50 dark:bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-100 dark:border-cyan-900/30 inline-block">
                  {m.associatedProject || "Riset"}
                </span>
                <div className="text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight pt-1">
                  {m.metricValue}
                </div>
                <p className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">
                  {m.metricName}
                </p>
                {m.description && (
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed pt-1">
                    {m.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
