"use client";

import { useState, useEffect, useRef } from "react";

export default function Navbar({ profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const navItems = [
    { name: "Beranda", link: "#beranda" },
    { name: "Keahlian", link: "#skills" },
    { name: "Proyek", link: "#projects" },
    { name: "Pengalaman", link: "#experience" },
    { name: "Media", link: "#media" },
  ];

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <div
      ref={navRef}
      className="fixed top-4 inset-x-0 z-50 flex flex-col items-center px-4 sm:px-8 pointer-events-none"
    >
      <header
        className={`pointer-events-auto w-full max-w-6xl bg-white/80 dark:bg-[#151923]/80 backdrop-blur-xl border border-gray-200/80 dark:border-white/[0.08] rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] scale-[0.99] border-gray-300 dark:border-white/[0.14]"
            : "shadow-xs scale-100"
        }`}
      >
        {/* LOGO */}
        <a
          href="#beranda"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span
            className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"
            title="Online"
          />
          <span className="font-extrabold text-sm sm:text-base tracking-tight text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">
            hafis<span className="text-blue-500">.</span>ali
          </span>
          <span className="text-[10px] font-mono text-gray-400 border border-gray-200 dark:border-white/10 px-1.5 py-0.5 rounded hidden sm:inline-block">
            dev
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100/60 dark:bg-white/[0.03] p-1 rounded-full border border-gray-200/50 dark:border-white/[0.05]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="px-4 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-white/[0.08] transition-all"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CONTROLS */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-gray-100/80 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors cursor-pointer active:scale-90"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Contact CTA */}
          <a
            href={
              profile?.email
                ? `mailto:${profile.email}`
                : "mailto:mhffsali@gmail.com"
            }
            className="hidden sm:inline-flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all active:scale-95 shadow-xs"
          >
            <span>Hubungi</span>
            <span className="text-xs">&rarr;</span>
          </a>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-gray-100/80 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-700 dark:text-gray-200 cursor-pointer"
            aria-label="Menu"
          >
            <div className="w-4 h-3 flex flex-col justify-between items-center">
              <span
                className={`h-0.5 w-full bg-current rounded transition-all ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`md:hidden pointer-events-auto w-full max-w-sm mt-2 transition-all duration-200 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 dark:bg-[#151923]/95 backdrop-blur-2xl border border-gray-200 dark:border-white/[0.08] rounded-3xl p-3 shadow-2xl space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-500 rounded-2xl transition-colors"
            >
              <span>{item.name}</span>
              <span className="text-gray-400">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
