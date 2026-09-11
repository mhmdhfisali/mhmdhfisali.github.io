export default function Posts({ posts = [] }) {
  return (
    <section className="w-full space-y-6 sm:space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20"></span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Artikel &amp; Publikasi Ilmiah
          </h2>
        </div>
        <span className="text-[11px] sm:text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-white/[0.04] px-3 py-1 rounded-full border border-gray-200/80 dark:border-white/[0.08]">
          {posts.length} Publikasi
        </span>
      </div>

      {posts.length === 0 ? (
        <div className="w-full py-10 px-5 rounded-2xl border border-dashed border-gray-300 dark:border-gray-800 text-center bg-gray-50/50 dark:bg-white/[0.02]">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Belum ada publikasi yang dimuat.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {posts.map((post) => (
            <div
              key={post._id}
              className="group relative bg-white/70 dark:bg-[#151923]/60 hover:bg-white dark:hover:bg-[#151923] border border-gray-200/80 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-blue-500/40 p-5 sm:p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer backdrop-blur-xs flex justify-between items-center gap-4"
            >
              <div className="space-y-2.5 flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  {post.publishedAt && (
                    <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/30">
                      {new Date(post.publishedAt).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-gray-400">
                    • Publikasi Terkini
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
              </div>

              {/* Action Button Bubble */}
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white text-gray-400 transition-all duration-300 shadow-xs">
                <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 font-mono">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
