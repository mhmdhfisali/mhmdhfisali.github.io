import { urlFor } from "@/sanity";

export default function MediaContent({ mediaContents = [] }) {
  return (
    <section id="media" className="w-full space-y-6 sm:space-y-8 scroll-mt-28">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20"></span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Portofolio Media &amp; Kreatif
          </h2>
        </div>
        <span className="text-[11px] sm:text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-white/[0.04] px-3 py-1 rounded-full border border-gray-200/80 dark:border-white/[0.08]">
          {mediaContents.length} Konten
        </span>
      </div>

      {mediaContents.length === 0 ? (
        <div className="w-full py-10 px-5 rounded-2xl border border-dashed border-gray-300 dark:border-gray-800 text-center bg-gray-50/50 dark:bg-white/[0.02]">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Belum ada portofolio media.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {mediaContents.map((media) => (
            <a
              key={media._id}
              href={media.link || "#"}
              target={media.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group bg-white/70 dark:bg-[#151923]/60 hover:bg-white dark:hover:bg-[#151923] border border-gray-200/80 dark:border-white/[0.08] hover:border-blue-500/40 dark:hover:border-blue-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col backdrop-blur-xs"
            >
              {/* Media Thumbnail */}
              <div className="w-full h-44 sm:h-48 overflow-hidden border-b border-gray-100 dark:border-white/[0.06] relative bg-gray-100 dark:bg-black/50">
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
                {media.platform && (
                  <span className="absolute top-3 left-3 bg-white/90 dark:bg-[#151923]/90 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-gray-200/80 dark:border-white/10 text-[10px] font-mono text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider shadow-xs">
                    {media.platform}
                  </span>
                )}
              </div>

              {/* Konten & Peran */}
              <div className="p-5 sm:p-6 space-y-3 flex-1 flex flex-col justify-between">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 leading-snug">
                  {media.title}
                </h3>

                <div className="pt-2 border-t border-gray-100 dark:border-white/[0.06] flex items-center justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400">
                    Peran:{" "}
                    <strong className="text-gray-700 dark:text-gray-200 font-medium">
                      {media.role || "Kreator"}
                    </strong>
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-1 transition-transform duration-200">
                    Lihat &rarr;
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
