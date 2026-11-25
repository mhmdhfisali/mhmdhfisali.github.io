"use client";

import { useLanguage } from "@/context/LanguageContext";
import { getImageUrl, urlFor } from "@/sanity";
import { useEffect, useMemo, useRef, useState } from "react";
import ProjectModal from "./ProjectModal";

function ProjectCard({ project, isActive, onClick }) {
  const { locale, t } = useLanguage();

  const title = locale === "en" && project.titleEn ? project.titleEn : project.title;
  const summary = locale === "en" && project.summaryEn ? project.summaryEn : project.summary;
  const role = locale === "en" && project.roleEn ? project.roleEn : project.role;

  const isCompany = project.projectType === "company";
  const isInternal = project.deploymentStatus === "internal";
  const isLive = project.deploymentStatus === "live";
  const isResearch = project.deploymentStatus === "research";

  const formatCategory = (cat = "") => {
    const c = cat.toLowerCase();
    if (c === "web") return "Web App";
    if (c === "mobile") return "Mobile App";
    if (c === "system") return "System & Architecture";
    return cat;
  };

  const thumbUrl = getImageUrl(project.thumbnail);

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`relative flex flex-col justify-between rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer backdrop-blur-md transition-all duration-300 h-full select-none outline-none ${
        isActive
          ? "bg-white/95 dark:bg-[#151923]/95 border-2 border-cyan-400 dark:border-cyan-400 shadow-xl shadow-cyan-500/20 ring-2 sm:ring-4 ring-cyan-500/20"
          : "bg-white/60 dark:bg-[#12161f]/50 border border-gray-200/70 dark:border-white/[0.06] hover:border-gray-300 dark:hover:border-white/20 shadow-xs"
      }`}
    >
      {/* Thumbnail Header: Rasio Ergonomis di HP */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-gray-100/90 dark:bg-[#0c0f17] border-b border-gray-100 dark:border-white/[0.06] flex items-center justify-center p-1.5 sm:p-2.5 pointer-events-none">
        {thumbUrl ? (
          <>
            <img
              src={thumbUrl}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover blur-xl scale-110 transition-opacity duration-300 ${
                isActive ? "opacity-35 dark:opacity-45" : "opacity-15"
              }`}
            />
            <img
              src={thumbUrl}
              alt={title || "Project Preview"}
              className={`relative z-10 max-h-full max-w-full w-auto h-auto object-contain rounded-md sm:rounded-lg shadow-sm transition-transform duration-300 ${
                isActive ? "scale-[1.02]" : "scale-95"
              }`}
            />
          </>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-3 sm:p-4 text-center overflow-hidden rounded-md sm:rounded-lg bg-gradient-to-br from-blue-950/40 via-cyan-950/20 to-slate-900 border border-white/5">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]" />
            <div className="relative z-10 flex flex-col items-center space-y-1">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                {isCompany ? (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ) : isLive ? (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )}
              </div>
              <span className="font-mono font-bold text-[9px] sm:text-xs text-cyan-300 tracking-wider uppercase truncate max-w-[200px]">
                {isCompany ? (project.company || "PT Sinar Meadow Int. Indonesia") : "Personal Project"}
              </span>
              <span className="text-[8px] sm:text-[9px] font-mono text-gray-400 truncate max-w-[180px]">
                {title}
              </span>
            </div>
          </div>
        )}

        {/* Badge Status Ringkas */}
        <div className="absolute top-1.5 inset-x-1.5 sm:top-2.5 sm:inset-x-2.5 flex items-center justify-between z-20">
          {isCompany ? (
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[7px] sm:text-[9px] font-mono font-bold px-1.5 py-0.5 rounded sm:rounded-lg shadow-sm flex items-center gap-1">
              <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>{project.company ? (project.company.includes("Sinar Meadow") ? "SMII" : project.company.split(" ").slice(0, 2).join(" ")) : "SMII"}</span>
            </span>
          ) : isLive ? (
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-[7px] sm:text-[9px] font-mono font-bold px-1.5 py-0.5 rounded sm:rounded-lg shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>LIVE</span>
            </span>
          ) : isActive ? (
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[7px] sm:text-[9px] font-mono font-bold px-1.5 py-0.5 rounded sm:rounded-lg shadow-sm">
              {t.projects.reviewedBadge}
            </span>
          ) : (
            <span />
          )}

          {role && (
            <span className="bg-black/75 dark:bg-[#10131a]/85 backdrop-blur-md px-1.5 py-0.5 rounded sm:rounded-lg border border-white/10 text-[7px] sm:text-[9px] font-mono text-white dark:text-cyan-300 font-semibold truncate max-w-[120px] sm:max-w-[150px]">
              {role}
            </span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-4 sm:h-6 bg-gradient-to-t from-black/20 to-transparent z-10" />
      </div>

      {/* Body Konten */}
      <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3 text-left pointer-events-none">
        <div className="space-y-1 sm:space-y-1.5">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.category && (
              <div className="flex items-center gap-1">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isActive ? "bg-cyan-400" : "bg-gray-400"
                  }`}
                />
                <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-gray-400">
                  {formatCategory(project.category)}
                </span>
              </div>
            )}

            <span className="text-gray-300 dark:text-white/20 text-[8px]">•</span>

            {/* Deployment badge */}
            <span
              className={`text-[7px] sm:text-[9px] font-mono px-1 py-0.5 rounded border inline-flex items-center gap-1 ${
                isInternal
                  ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                  : isLive
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                  : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
              }`}
            >
              {isInternal ? (
                <>
                  <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Internal</span>
                </>
              ) : isLive ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live</span>
                </>
              ) : isResearch ? (
                <>
                  <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Riset</span>
                </>
              ) : (
                <span>Dev</span>
              )}
            </span>
          </div>

          <h3
            className={`text-xs sm:text-base font-bold tracking-tight transition-colors line-clamp-1 ${
              isActive
                ? "text-blue-600 dark:text-cyan-300"
                : "text-gray-900 dark:text-white"
            }`}
          >
            {title}
          </h3>

          {summary && (
            <p className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
              {summary}
            </p>
          )}
        </div>

        {/* Tech Stack & Action Link */}
        <div className="pt-1.5 sm:pt-3 border-t border-gray-100 dark:border-white/[0.06] space-y-1.5 sm:space-y-2">
          {project.techStack?.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {project.techStack.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-white/[0.05] text-gray-700 dark:text-gray-300 text-[8px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded font-mono border border-gray-200/70 dark:border-white/[0.06]"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="text-[8px] sm:text-[9px] font-mono text-gray-400 py-0.5 px-0.5">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
          )}

          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-semibold pt-0.5">
            <span
              className={`inline-flex items-center gap-1 transition-colors ${
                isActive
                  ? "text-blue-600 dark:text-cyan-400 font-bold"
                  : "text-gray-400"
              }`}
            >
              {isActive ? (
                <>
                  <span>{t.projects.viewCaseStudy}</span>
                  <svg className="w-3 h-3 text-blue-600 dark:text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              ) : (
                locale === "en" ? "Click to Center" : "Geser ke Tengah"
              )}
            </span>

            {isCompany && (
              <span className="text-[8px] sm:text-[9px] font-mono text-amber-600 dark:text-amber-400 font-semibold truncate max-w-[100px] sm:max-w-[130px] inline-flex items-center gap-1">
                <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>{project.company ? (project.company.includes("Sinar Meadow") ? "SMII" : project.company) : "SMII"}</span>
              </span>
            )}
            {!isCompany && project.demoUrl && (
              <span className="text-[8px] sm:text-[9px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold inline-flex items-center gap-0.5">
                <span>live</span>
                <svg className="w-2.5 h-2.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects = [] }) {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [projectTypeFilter, setProjectTypeFilter] = useState("all");
  const [selectedCompany, setSelectedCompany] = useState("all");
  const [filter, setFilter] = useState("all");
  const [layoutMode, setLayoutMode] = useState("carousel");
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeoutRef = useRef(null);
  const modalTimerRef = useRef(null);

  // Ekstraksi daftar unik perusahaan secara dinamis untuk skalabilitas jangka panjang
  const availableCompanies = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => {
      if (p.projectType === "company" && p.company?.trim()) {
        set.add(p.company.trim());
      }
    });
    return Array.from(set);
  }, [projects]);

  const companyProjectsCount = useMemo(() => {
    return projects.filter((p) => p.projectType === "company").length;
  }, [projects]);

  const typeTabs = useMemo(() => {
    return [
      { id: "all", label: t.projects.typeFilter.all, type: "all" },
      { id: "personal", label: t.projects.typeFilter.personal, type: "personal" },
      { id: "company", label: t.projects.typeFilter.company, type: "company" },
    ];
  }, [t]);

  const categoryTabs = useMemo(() => {
    return [
      { id: "all", label: t.projects.categoryFilter.all },
      { id: "web", label: t.projects.categoryFilter.web },
      { id: "mobile", label: t.projects.categoryFilter.mobile },
      { id: "system", label: t.projects.categoryFilter.system },
    ];
  }, [t]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // 1. Filter project type (company vs personal)
      const matchesType =
        projectTypeFilter === "all"
          ? true
          : projectTypeFilter === "company"
          ? p.projectType === "company"
          : p.projectType === "personal" || (!p.projectType && p.projectType !== "company");

      // 1b. Filter dynamic company jika tab Perusahaan aktif
      const matchesCompany =
        projectTypeFilter !== "company" || selectedCompany === "all"
          ? true
          : (p.company || "PT Sinar Meadow International Indonesia").trim().toLowerCase() === selectedCompany.trim().toLowerCase();

      // 2. Filter platform category
      const matchesCategory =
        filter === "all"
          ? true
          : (p.category || "").toLowerCase() === filter.toLowerCase();

      // 3. Search query
      const searchStr =
        `${p.title || ""} ${p.titleEn || ""} ${p.company || ""} ${p.role || ""} ${p.roleEn || ""} ${p.summary || ""} ${p.summaryEn || ""} ${(p.techStack || []).join(" ")}`.toLowerCase();
      const matchesSearch = searchStr.includes(searchQuery.toLowerCase().trim());

      return matchesType && matchesCompany && matchesCategory && matchesSearch;
    });
  }, [projects, projectTypeFilter, selectedCompany, filter, searchQuery]);

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container || filteredProjects.length === 0) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    } else {
      setScrollProgress(100);
    }

    if (isProgrammaticScroll.current) return;

    const containerRect = container.getBoundingClientRect();
    const viewportCenter = containerRect.left + containerRect.width / 2;

    let closestIdx = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const dist = Math.abs(viewportCenter - cardCenter);

      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  };

  useEffect(() => {
    handleScroll();
    const el = carouselRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (modalTimerRef.current) clearTimeout(modalTimerRef.current);
    };
  }, [filteredProjects, layoutMode]);

  const scrollToCard = (index, smooth = true) => {
    if (index < 0 || index >= filteredProjects.length) return;
    const container = carouselRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    setActiveIndex(index);
    isProgrammaticScroll.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 500);

    const maxScroll = container.scrollWidth - container.clientWidth;
    const targetLeft = card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2;

    container.scrollTo({
      left: Math.max(0, Math.min(maxScroll, targetLeft)),
      behavior: smooth ? "smooth" : "auto",
    });
  };

  const isFirstRender = useRef(true);

  // Pusatkan proyek di tengah secara seimbang sejak awal buka maupun saat ganti filter
  useEffect(() => {
    if (filteredProjects.length === 0) return;
    const mid = Math.floor(filteredProjects.length / 2);
    setActiveIndex(mid);

    const timer = setTimeout(() => {
      scrollToCard(mid, !isFirstRender.current);
      isFirstRender.current = false;
    }, isFirstRender.current ? 80 : 30);

    return () => clearTimeout(timer);
  }, [projectTypeFilter, selectedCompany, filter, searchQuery]);

  const handleCardClick = (project, index) => {
    if (layoutMode === "carousel") {
      if (index !== activeIndex) {
        // Klik kartu samping (kiri / kanan): HANYA geser kartu ke posisi tengah
        // Tidak membuka modal pada klik pertama
        scrollToCard(index);
      } else {
        // Kartu yang diklik SUDAH berada di posisi tengah/aktif:
        // Buka modal detail studi kasus
        setSelectedProject(project);
      }
    } else {
      // Mode grid: langsung buka modal
      setSelectedProject(project);
    }
  };

  const navigatePrev = () => scrollToCard(activeIndex - 1);
  const navigateNext = () => scrollToCard(activeIndex + 1);

  return (
    <div className="w-full space-y-5 sm:space-y-7 text-left py-2">
      {/* Header */}
      <div className="space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            {t.projects.badge}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            {t.projects.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              {t.projects.titleHighlight}
            </span>
          </h2>

          {/* Toggle Mode: Slider vs Grid */}
          <div className="hidden sm:inline-flex items-center p-1 rounded-2xl bg-gray-100/90 dark:bg-[#121622]/90 border border-gray-200/80 dark:border-white/[0.08] text-xs font-mono shadow-inner">
            <button
              type="button"
              onClick={() => setLayoutMode("carousel")}
              className={`px-3 py-1 rounded-xl transition-all cursor-pointer ${
                layoutMode === "carousel"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-md shadow-blue-500/25"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {t.projects.sliderMode}
            </button>
            <button
              type="button"
              onClick={() => setLayoutMode("grid")}
              className={`px-3 py-1 rounded-xl transition-all cursor-pointer ${
                layoutMode === "grid"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-md shadow-blue-500/25"
                  : "text-gray-500 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {t.projects.gridMode}
            </button>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          {t.projects.subtitle}
        </p>
      </div>

      {/* FILTER BARIS 1: TAB PEMISAH PROYEK (PERUSAHAAN VS PRIBADI) */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <div className="inline-flex p-1 rounded-2xl bg-gray-100/90 dark:bg-[#121622]/90 border border-gray-200/80 dark:border-white/[0.08] shadow-inner text-xs font-mono overflow-x-auto max-w-full">
          {typeTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setProjectTypeFilter(tab.id);
              }}
              className={`px-3.5 py-1.5 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap active:scale-95 flex items-center gap-1.5 ${
                projectTypeFilter === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-md shadow-blue-500/20"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {tab.type === "all" && (
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              )}
              {tab.type === "company" && (
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              )}
              {tab.type === "personal" && (
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              )}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <span className="text-[11px] font-mono text-gray-400 pl-1">
          ({filteredProjects.length} {t.hero.projectMetric})
        </span>
      </div>

      {/* SUB-FILTER PERUSAHAAN (DINAMIS UNTUK MULTI-COMPANY / JANGKA PANJANG) */}
      {projectTypeFilter === "company" && availableCompanies.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-0.5 animate-in fade-in duration-200">
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 pl-1 shrink-0">
            <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>{t.projects.selectCompany || "Perusahaan"}:</span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 max-w-full">
            <button
              type="button"
              onClick={() => {
                setSelectedCompany("all");
              }}
              className={`px-3 py-1 rounded-xl text-[11px] font-mono transition-all duration-200 shrink-0 cursor-pointer ${
                selectedCompany === "all"
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-xs"
                  : "bg-white/80 dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/[0.06]"
              }`}
            >
              {t.projects.allCompanies || "Semua"} ({companyProjectsCount})
            </button>

            {availableCompanies.map((comp) => {
              const count = projects.filter(
                (p) =>
                  p.projectType === "company" &&
                  (p.company || "PT Sinar Meadow International Indonesia").trim().toLowerCase() === comp.toLowerCase()
              ).length;
              return (
                <button
                  key={comp}
                  type="button"
                  onClick={() => {
                    setSelectedCompany(comp);
                  }}
                  className={`px-3 py-1 rounded-xl text-[11px] font-mono transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    selectedCompany.toLowerCase() === comp.toLowerCase()
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-xs"
                      : "bg-white/80 dark:bg-white/[0.04] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/[0.06]"
                  }`}
                >
                  <span>{comp}</span>
                  <span className="text-[9px] opacity-80 font-semibold">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* FILTER BARIS 2: PENCARIAN & KATEGORI PLATFORM */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pb-2 border-b border-gray-200/80 dark:border-white/[0.08]">
        {/* Search Input */}
        <div className="relative w-full sm:w-64 md:w-72 shrink-0">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-blue-600 dark:text-cyan-400"
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.projects.searchPlaceholder}
            className="w-full pl-8.5 pr-8 py-1.5 sm:py-2 text-xs font-mono rounded-xl bg-white/90 dark:bg-[#121622]/90 border border-gray-200 dark:border-white/[0.08] focus:border-cyan-400 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 outline-none transition-all shadow-2xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-700 dark:hover:text-white cursor-pointer"
              aria-label="Hapus Pencarian"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Filter Kategori 1 Baris Geser */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setFilter(tab.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-mono capitalize transition-all duration-200 cursor-pointer shrink-0 whitespace-nowrap active:scale-95 ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-xs"
                    : "bg-white/80 dark:bg-white/[0.03] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/[0.06]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Daftar Kartu Proyek */}
      {filteredProjects.length === 0 ? (
        <div className="w-full py-16 px-6 border border-dashed border-gray-200 dark:border-white/10 rounded-3xl text-center text-gray-400 text-xs font-mono bg-white/40 dark:bg-white/[0.01]">
          {t.projects.noProjectsFound} &quot;{searchQuery}&quot;.
        </div>
      ) : layoutMode === "carousel" ? (
        /* Carousel Track */
        <div className="space-y-5 relative group/track">
          {/* Tombol Panah Desktop */}
          {activeIndex > 0 && (
            <button
              type="button"
              onClick={navigatePrev}
              aria-label="Proyek Sebelumnya"
              className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 dark:bg-[#151923]/95 backdrop-blur-md border border-gray-200/90 dark:border-white/15 text-gray-800 dark:text-white items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {activeIndex < filteredProjects.length - 1 && (
            <button
              type="button"
              onClick={navigateNext}
              aria-label="Proyek Berikutnya"
              className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 dark:bg-[#151923]/95 backdrop-blur-md border border-gray-200/90 dark:border-white/15 text-gray-800 dark:text-white items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div
            ref={carouselRef}
            className="flex items-stretch gap-3.5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory sm:snap-none pt-1 pb-3.5 sm:pt-2 sm:pb-5 px-[8vw] sm:px-[calc(50%_-_175px)] md:px-[calc(50%_-_185px)] no-scrollbar [&::-webkit-scrollbar]:hidden"
          >
            {filteredProjects.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={project._id}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className={`w-[84vw] max-w-[310px] sm:w-[350px] md:w-[370px] shrink-0 snap-center transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-100 z-20"
                      : "opacity-60 hover:opacity-90 scale-[0.96] z-10 hover:scale-[0.98]"
                  }`}
                >
                  <ProjectCard
                    project={project}
                    isActive={isActive}
                    onClick={() => handleCardClick(project, idx)}
                  />
                </div>
              );
            })}
          </div>

          {/* Scrubber Progress Bar */}
          <div className="max-w-md mx-auto p-1.5 sm:p-2 rounded-2xl bg-white/90 dark:bg-[#121622]/90 border border-gray-200 dark:border-white/10 backdrop-blur-xl shadow-xs flex items-center gap-2.5 sm:gap-3">
            <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-300 font-bold pl-2 shrink-0">
              {String(activeIndex + 1).padStart(2, "0")}{" "}
              <span className="text-gray-400 font-normal">/</span>{" "}
              {String(filteredProjects.length).padStart(2, "0")}
            </span>

            {/* Progress Track */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const ratio = clickX / rect.width;
                const targetIdx = Math.round(ratio * (filteredProjects.length - 1));
                scrollToCard(targetIdx);
              }}
              className="relative flex-1 h-2 bg-gray-200/80 dark:bg-white/[0.08] rounded-full overflow-hidden cursor-pointer"
            >
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 rounded-full transition-all duration-150 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                style={{ width: `${Math.max(scrollProgress, 8)}%` }}
              />
            </div>

            <span className="text-[9px] font-mono text-blue-600 dark:text-cyan-400 pr-2 shrink-0 font-bold uppercase tracking-wider truncate max-w-[140px] inline-flex items-center gap-1">
              {filteredProjects[activeIndex]?.projectType === "company" ? (
                <>
                  <svg className="w-3 h-3 shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span>{filteredProjects[activeIndex]?.company ? (filteredProjects[activeIndex].company.includes("Sinar Meadow") ? "PT SMII" : filteredProjects[activeIndex].company) : "PT SMII"}</span>
                </>
              ) : (
                filteredProjects[activeIndex]?.category || "Project"
              )}
            </span>
          </div>
        </div>
      ) : (
        /* Mode Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              isActive={true}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}

      {/* Modal Detail Studi Kasus */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
