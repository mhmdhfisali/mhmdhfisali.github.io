"use client";

export default function Posts({ posts = [] }) {
  // Fungsi penentu tautan: utamakan link eksternal jika ada, atau cek awalan http/https
  const resolvePostHref = (post) => {
    const directLink = post.link || post.externalUrl || post.url;
    if (directLink) return directLink;

    const slugStr = post.slug?.current || "";
    if (slugStr.startsWith("http://") || slugStr.startsWith("https://")) {
      return slugStr;
    }

    return slugStr ? `/posts/${slugStr}` : "#";
  };

  return (
    <div className="w-full space-y-8 text-left py-2">
      {/* Header Seksi */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            Articles &amp; Research Notes
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            Artikel &amp;{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              Publikasi Ilmiah
            </span>
          </h2>

          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
            {posts.length} Publikasi Terdata
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Tulisan analitis, dokumentasi riset komputasi, serta eksplorasi teknis
          seputar rekayasa perangkat lunak dan implementasi kecerdasan buatan.
        </p>
      </div>

      {/* Grid Post / Artikel */}
      {posts.length === 0 ? (
        <div className="w-full py-16 px-6 rounded-3xl border border-dashed border-gray-200 dark:border-white/10 text-center text-xs font-mono text-gray-400 bg-white/40 dark:bg-white/[0.01]">
          Belum ada publikasi ilmiah atau artikel yang dimuat di Sanity Studio.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {posts.map((post) => {
            const dateStr = post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })
              : "Baru Dirilis";

            const href = resolvePostHref(post);
            const isExternal =
              href.startsWith("http://") || href.startsWith("https://");

            return (
              <a
                key={post._id}
                href={href}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group relative bg-white/85 dark:bg-[#151923]/70 hover:bg-white dark:hover:bg-[#151923] border border-gray-200/90 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-blue-500/40 p-6 sm:p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer backdrop-blur-md flex justify-between items-center gap-4"
              >
                <div className="space-y-2.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 rounded-md border border-blue-100 dark:border-blue-900/40 font-semibold">
                      {dateStr}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">
                      • {post.readingTime || "Publikasi Terverifikasi"}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}
                </div>

                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 text-gray-500 group-hover:text-white transition-all duration-300 shadow-2xs">
                  <span className="text-xs group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 font-mono">
                    ↗
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
