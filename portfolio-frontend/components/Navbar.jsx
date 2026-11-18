"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef, useState } from "react";

export default function Navbar({ profile = {} }) {
  const { locale, toggleLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("#home");
  const [isDark, setIsDark] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const rawName = profile?.name || "Muhamad Hafis Ali";

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
    {
      name: t.nav.home || t.nav.beranda || "Home",
      link: "#home",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: t.nav.skills,
      link: "#skills",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      name: t.nav.activity || t.nav.github || "Activity",
      link: "#activity",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: t.nav.projects,
      link: "#projects",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      name: t.nav.experience,
      link: "#experience",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: t.nav.certifications,
      link: "#certifications",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      name: t.nav.articles || t.nav.posts || "Articles",
      link: "#articles",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      name: t.nav.contact || t.nav.kontak || "Contact",
      link: "#contact",
      icon: (
        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
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

    const savedMute = localStorage.getItem("sound_muted") === "true";
    setIsMuted(savedMute);

    const sectionIds = [
      "home",
      "skills",
      "activity",
      "projects",
      "experience",
      "certifications",
      "articles",
      "contact",
    ];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));

      const scrollPos = window.scrollY + 220;
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveSection("#contact");
        return;
      }

      let current = "#home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = `#${id}`;
          }
        }
      }
      setActiveSection(current);
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);
    handleScroll();

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

  const toggleSound = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    localStorage.setItem("sound_muted", String(nextMute));
  };

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveSection(link);
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
        className={`relative pointer-events-auto w-full max-w-7xl bg-white/85 dark:bg-[#12161f]/85 backdrop-blur-xl border border-gray-200/90 dark:border-white/[0.08] rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "shadow-lg shadow-black/5 dark:shadow-black/40 scale-[0.99] border-gray-300 dark:border-white/[0.14]"
            : "shadow-2xs scale-100"
        }`}
      >
        {/* SISI KIRI: LOGO INISIAL & STATUS */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 group cursor-pointer shrink-0 z-10"
        >
          <span
            className="w-2 h-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"
            title={t.nav.available}
          />

          <span className="font-extrabold text-sm sm:text-base tracking-wider font-mono text-gray-950 dark:text-white group-hover:text-blue-500 transition-colors">
            {initials}
            <span className="text-blue-500">.</span>
          </span>

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

        {/* TENGAH PRESISI: DESKTOP NAV (KUNCI DI SUMBU TENGAH LAYAR) DENGAN SCROLLSPY RUNNING INDICATOR */}
        <nav className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2 bg-gray-100/70 dark:bg-white/[0.03] p-1 rounded-full border border-gray-200/60 dark:border-white/[0.06] z-0 shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.link;
            return (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => handleNavClick(e, item.link)}
                className={`relative px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-white dark:bg-white/[0.12] text-blue-600 dark:text-cyan-300 font-bold shadow-xs scale-[1.03]"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-950 dark:hover:text-white"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* SISI KANAN: CONTROLS */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 z-10 pl-2 sm:pl-4">
          {/* Audio Mute/Unmute Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-100/80 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors cursor-pointer active:scale-90"
            title={isMuted ? t.nav.toggleSoundOn : t.nav.toggleSoundOff}
            aria-label="Toggle Sound"
          >
            {isMuted ? (
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
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
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
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>
            )}
          </button>

          {/* Language Toggle: ID / EN */}
          <button
            type="button"
            onClick={toggleLocale}
            className="h-8 sm:h-9 px-2.5 sm:px-3 rounded-full bg-gray-100/80 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center gap-1.5 text-[11px] font-mono font-bold text-gray-700 dark:text-gray-200 hover:text-blue-500 hover:border-blue-500/40 transition-all cursor-pointer active:scale-95 shadow-2xs"
            title={locale === "id" ? "Switch to English" : "Ubah ke Bahasa Indonesia"}
            aria-label="Toggle Language"
          >
            <svg
              className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"
              />
            </svg>
            <span className="tracking-wider uppercase">{locale}</span>
          </button>

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

          {/* Contact CTA: ditampilkan di tablet & wide desktop; di compact desktop disembunyikan agar tidak mepet dengan nav Contact */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:inline-flex lg:hidden xl:inline-flex items-center gap-1.5 bg-gray-950 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-950 px-3.5 xl:px-4 py-1.5 xl:py-2 rounded-full text-xs font-semibold tracking-tight transition-all active:scale-95 shadow-xs cursor-pointer whitespace-nowrap"
          >
            <span>{t.nav.contactCta}</span>
          </a>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-8 h-8 rounded-full bg-gray-100/80 dark:bg-white/[0.06] border border-gray-200 dark:border-white/[0.08] flex items-center justify-center text-gray-700 dark:text-gray-200 cursor-pointer"
            aria-label="Menu"
          >
            <div className="w-3.5 h-2.5 flex flex-col justify-between items-center">
              <span
                className={`h-0.5 w-full bg-current rounded transition-all ${mobileMenuOpen ? "rotate-45 translate-y-1" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-current rounded transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Real-time Reading / Scroll Progress Bar */}
        <div className="absolute inset-x-6 bottom-0 h-[2px] bg-transparent overflow-hidden rounded-full pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div
        className={`lg:hidden pointer-events-auto w-full max-w-sm mt-2 transition-all duration-200 ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 dark:bg-[#151923]/95 backdrop-blur-2xl border border-gray-200 dark:border-white/[0.08] rounded-3xl p-3 shadow-2xl space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.link;
            return (
              <a
                key={item.name}
                href={item.link}
                onClick={(e) => handleNavClick(e, item.link)}
                className={`flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold rounded-2xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-300 font-bold border border-blue-200 dark:border-blue-900/50 shadow-xs"
                    : "text-gray-700 dark:text-gray-200 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`${
                      isActive
                        ? "text-blue-600 dark:text-cyan-400"
                        : "text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </div>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-cyan-400" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
