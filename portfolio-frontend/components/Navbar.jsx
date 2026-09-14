"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar({ profile = {} }) {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Ambil nama dari backend Sanity atau gunakan nama default
  const rawName = profile?.name || "Muhamad Hafis Ali";

  // Fungsi pembuat inisial otomatis (Contoh: "Muhamad Hafis Ali" -> "MHA")
  const getInitials = (name) => {
    if (!name) return "MHA";
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return parts
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const initials = getInitials(rawName);

  const navItems = [
    { name: "Beranda", link: "#beranda" },
    { name: "Keahlian", link: "#skills" },
    { name: "Proyek", link: "#projects" },
    { name: "Pengalaman", link: "#experience" },
    { name: "Sertifikasi", link: "#certifications" },
    { name: "Artikel", link: "#posts" },
    { name: "Kontak", link: "#kontak" },
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

  const handleNavClick = (e, link) => {
    e.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", link);
    }
    setMobileMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <div
      ref={navRef}
      className="fixed top-4 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-6 pointer-events-none"
    >
      <header
        className={`pointer-events-auto w-full max-w-6xl bg-white/85 dark:bg-[#12161f]/85 backdrop-blur-xl border border-gray-200/90 dark:border-white/[0.08] rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "shadow-lg shadow-black/5 dark:shadow-black/40 scale-[0.99] border-gray-300 dark:border-white/[0.14]"
            : "shadow-2xs scale-100"
        }`}
      >
        {/* LOGO DENGAN INISIAL DINAMIS & BADGE SVG </> */}
        <a
          href="#beranda"
          onClick={(e) => handleNavClick(e, "#beranda")}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0"
        >
          {/* Active Status Indicator */}
          <span
            className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"
            title="Tersedia untuk Pekerjaan"
          />

          {/* Inisial Otomatis */}
          <span className="font-extrabold text-sm sm:text-base tracking-wider font-mono text-gray-950 dark:text-white group-hover:text-blue-500 transition-colors">
            {initials}
            <span className="text-blue-500">.</span>
          </span>

          {/* Badge SVG Icon </> */}
          <span className="inline-flex items-center justify-center px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-white/[0.06] border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 group-hover:border-blue-500/30 transition-colors">
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1 bg-gray-100/70 dark:bg-white/[0.03] p-1 rounded-full border border-gray-200/60 dark:border-white/[0.06]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => handleNavClick(e, item.link)}
              className="px-3 lg:px-3.5 py-1.5 text-[11px] lg:text-xs font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white rounded-full hover:bg-white dark:hover:bg-white/[0.08] transition-all whitespace-nowrap cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* CONTROLS */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100/80 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors cursor-pointer active:scale-90"
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
            href="#kontak"
            onClick={(e) => handleNavClick(e, "#kontak")}
            className="hidden sm:inline-flex items-center gap-1.5 bg-gray-950 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-950 px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all active:scale-95 shadow-xs cursor-pointer"
          >
            <span>Hubungi</span>
            <span className="text-xs">&rarr;</span>
          </a>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full bg-gray-100/80 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-700 dark:text-gray-200 cursor-pointer"
            aria-label="Menu"
          >
            <div className="w-3.5 h-2.5 flex flex-col justify-between items-center">
              <span
                className={`h-0.5 w-full bg-current rounded transition-all ${
                  mobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-all ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-all ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
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
              onClick={(e) => handleNavClick(e, item.link)}
              className="flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:text-blue-500 rounded-2xl transition-colors cursor-pointer"
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
