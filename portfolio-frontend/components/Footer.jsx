"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer({ profile = {} }) {
  const { t } = useLanguage();
  const name = profile?.name || "Muhamad Hafis Ali";

  return (
    <footer className="relative z-10 w-full border-t border-gray-200/60 dark:border-white/[0.08] mt-4 pt-6 pb-12 sm:pb-8 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500 dark:text-gray-400">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 text-center sm:text-left">
          <span className="font-semibold text-gray-800 dark:text-gray-200">
            {name}
          </span>
          <span className="text-gray-300 dark:text-white/20">•</span>
          <span>{t.footer.location}</span>
          <span className="text-gray-300 dark:text-white/20">•</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {t.footer.available}
          </span>
        </div>

        <div className="flex items-center justify-center gap-3">
          <span>© {new Date().getFullYear()}</span>
          <span className="text-gray-300 dark:text-white/20">•</span>
          <a
            href="#beranda"
            className="hover:text-blue-600 dark:text-cyan-400 transition-colors inline-flex items-center gap-1 py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-white/[0.04]"
          >
            <span>{t.footer.backToTop}</span>
            <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
