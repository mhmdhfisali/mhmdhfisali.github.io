"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Posts({ posts = [] }) {
  const { locale, t } = useLanguage();

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
    <div className="w-full space-y-4 sm:space-y-8 text-left py-1 sm:py-2">
      {/* Header */}
      <div className="space-y-2 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            {t.posts.badge}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            {t.posts.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              {t.posts.titleHighlight}
            </span>
          </h2>

          <span className="text-[11px] sm:text-xs font-mono text-gray-500 dark:text-gray-400">
            {posts.length} {t.posts.documentedCount}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-none">
          {t.posts.subtitle}
        </p>
      </div>

      {/* Grid Post: 1 Kolom Rapi di Mobile, 2 Kolom di Desktop */}
      {posts.length === 0 ? (
        <div className="w-full py-16 px-6 rounded-2xl sm:rounded-3xl border border-dashed border-gray-200 dark:border-white/10 text-center text-xs font-mono text-gray-400 bg-white/40 dark:bg-white/[0.01]">
          {t.posts.noPosts}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
          {posts.map((post) => {
            const dateStr = post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString(
                  locale === "en" ? "en-US" : "id-ID",
                  {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  },
                )
              : t.posts.recentlyReleased;

            const href = resolvePostHref(post);
            const isExternal =
              href.startsWith("http://") || href.startsWith("https://");

            return (
              <a
                key={post._id}
                href={href}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group relative bg-white/85 dark:bg-[#151923]/70 hover:bg-white dark:hover:bg-[#151923] border border-gray-200/90 dark:border-white/[0.08] hover:border-blue-500/40 p-3.5 sm:p-6 rounded-xl sm:rounded-3xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg backdrop-blur-md flex justify-between items-center gap-3"
              >
                <div className="space-y-1.5 sm:space-y-2 flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] sm:text-[10px] font-mono text-blue-600 dark:text-cyan-400 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/40 font-semibold">
                      {dateStr}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 truncate">
                      • {locale === "en" && post.readingTimeEn ? post.readingTimeEn : (post.readingTime || "Publikasi Terverifikasi")}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug">
                    {locale === "en" && post.titleEn ? post.titleEn : post.title}
                  </h3>

                  {(post.excerpt || post.excerptEn) && (
                    <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                      {locale === "en" && post.excerptEn ? post.excerptEn : post.excerpt}
                    </p>
                  )}
                </div>

                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 text-gray-500 group-hover:text-white transition-all">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
