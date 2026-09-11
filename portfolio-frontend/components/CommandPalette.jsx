"use client";

import { useEffect, useState } from "react";

export default function CommandPalette({ profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const actions = [
    {
      name: "Ke Beranda",
      shortcut: "H",
      href: "#beranda",
      category: "Navigasi",
    },
    {
      name: "Lihat Keahlian & Tech Stack",
      shortcut: "S",
      href: "#skills",
      category: "Navigasi",
    },
    {
      name: "Katalog Proyek Unggulan",
      shortcut: "P",
      href: "#projects",
      category: "Navigasi",
    },
    {
      name: "Jejak Pengalaman & Riwayat",
      shortcut: "E",
      href: "#experience",
      category: "Navigasi",
    },
    {
      name: "Portofolio Media & Kreatif",
      shortcut: "M",
      href: "#media",
      category: "Navigasi",
    },
    {
      name: "Hubungi / Kontak",
      shortcut: "C",
      href: "#kontak",
      category: "Aksi",
    },
    {
      name: "Buka GitHub Repository",
      shortcut: "G",
      external: profile?.githubUrl || "https://github.com/mhmdhfisali",
      category: "Eksternal",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filtered = actions.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSelect = (item) => {
    setIsOpen(false);
    setQuery("");
    if (item.external) {
      window.open(item.external, "_blank");
    } else if (item.href) {
      const target = document.querySelector(item.href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-[#151923]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 text-xs font-mono shadow-lg hover:border-blue-500/50 hover:text-blue-500 transition-all cursor-pointer group"
      >
        <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-ping" />
        <span>Pencarian Cepat</span>
        <kbd className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-[10px] text-gray-600 dark:text-gray-300 font-semibold">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[999999] bg-black/70 backdrop-blur-sm flex items-start justify-center pt-24 px-4 transition-all"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl bg-white dark:bg-[#151923] border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden text-gray-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input Bar */}
        <div className="p-4 border-b border-gray-100 dark:border-white/10 flex items-center gap-3">
          <svg
            className="w-5 h-5 text-gray-400 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Ketik perintah atau tuju seksi..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent outline-none text-sm font-medium placeholder:text-gray-400 font-sans"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-mono bg-gray-100 dark:bg-white/10 rounded text-gray-400">
            ESC
          </kbd>
        </div>

        {/* Action List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1 custom-scrollbar">
          {filtered.length === 0 ? (
            <p className="p-4 text-center text-xs font-mono text-gray-400">
              Tidak ada hasil yang cocok.
            </p>
          ) : (
            filtered.map((action, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(action)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-600/10 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors group text-xs sm:text-sm"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5">
                    {action.category}
                  </span>
                  <span className="font-medium">{action.name}</span>
                </div>
                <span className="text-xs text-gray-400 group-hover:translate-x-1 transition-transform font-mono">
                  &rarr;
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
