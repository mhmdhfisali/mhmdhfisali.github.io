"use client";

import { useState } from "react";

export default function ContactDrawer({
  email = "mhffsali@gmail.com",
  githubUrl,
  linkedinUrl,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-gradient-to-b from-transparent via-blue-500/5 to-blue-500/10 dark:via-blue-500/[0.03] dark:to-cyan-500/[0.04] border border-gray-200/80 dark:border-white/[0.08] rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-md">
      {/* Background Ambient Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-[11px] font-mono text-blue-600 dark:text-blue-400">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
          <span>GET IN TOUCH</span>
        </div>

        <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Tertarik Kolaborasi atau Punya Diskusi Teknis?
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto">
          Terbuka untuk peluang rekayasa perangkat lunak, otomatisasi arsitektur
          sistem, riset AI, atau proyek multimedia skala penuh.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {/* Tombol Copy Email */}
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#151923] border border-gray-200 dark:border-white/10 hover:border-blue-500/50 text-xs font-mono font-medium text-gray-800 dark:text-gray-200 transition-all active:scale-95 shadow-xs cursor-pointer"
          >
            <span>{copied ? "✓ Tersalin di Clipboard!" : email}</span>
          </button>

          {/* Tombol Kirim Email Langsung */}
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold font-mono transition-all shadow-md shadow-blue-600/20 active:scale-95"
          >
            <span>Kirim Pesan Langsung</span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* Bar Media Sosial */}
        {(githubUrl || linkedinUrl) && (
          <div className="flex items-center justify-center gap-4 pt-4 text-xs font-mono text-gray-500 dark:text-gray-400">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                github.com ↗
              </a>
            )}
            <span>•</span>
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                linkedin.com ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
