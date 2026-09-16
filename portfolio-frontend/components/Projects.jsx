"use client";

import { urlFor } from "@/sanity";
import { useEffect, useMemo, useRef, useState } from "react";
import ProjectModal from "./ProjectModal";

function ProjectCard({ project, isActive, onClick }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!isActive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isActive
          ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
          : undefined,
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`relative flex flex-col justify-between rounded-3xl overflow-hidden cursor-pointer backdrop-blur-md transition-all duration-500 h-full select-none ${
        isActive
          ? "bg-white/95 dark:bg-[#151923]/95 border-2 border-cyan-400/80 dark:border-cyan-400 shadow-2xl shadow-cyan-500/25 ring-4 ring-cyan-500/20"
          : "bg-white/60 dark:bg-[#12161f]/50 border border-gray-200/60 dark:border-white/[0.05] hover:border-gray-300 dark:hover:border-white/20 shadow-xs"
      }`}
    >
      {/* Thumbnail Header */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100/90 dark:bg-[#0c0f17] border-b border-gray-100 dark:border-white/[0.06] flex items-center justify-center p-2.5">
        {project.thumbnail ? (
          <>
            <img
              src={urlFor(project.thumbnail).url()}
              alt=""
              aria-hidden="true"
              className={`absolute inset-0 w-full h-full object-cover blur-xl pointer-events-none scale-110 transition-opacity duration-500 ${
                isActive ? "opacity-35 dark:opacity-45" : "opacity-15"
              }`}
            />
            <img
              src={urlFor(project.thumbnail).url()}
              alt={project.title}
              className={`relative z-10 max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-sm transition-transform duration-500 ${
                isActive ? "scale-[1.03]" : "scale-95"
              }`}
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-gray-400">
            Preview Media Tidak Tersedia
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-20 pointer-events-none">
          {isActive ? (
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-lg shadow-md shadow-cyan-500/30 animate-pulse">
              ★ Ditinjau
            </span>
          ) : (
            <span />
          )}

          {project.role && (
            <span className="bg-black/75 dark:bg-[#10131a]/85 backdrop-blur-md px-2 py-0.5 rounded-lg border border-white/10 text-[9px] font-mono text-white dark:text-cyan-300 font-semibold shadow-xs">
              {project.role}
            </span>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
      </div>

      {/* Konten Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                isActive ? "bg-cyan-400 animate-ping" : "bg-gray-400"
              }`}
            />
            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
              {project.category || "Software Project"}
            </span>
          </div>

          <h3
            className={`text-base sm:text-lg font-black tracking-tight transition-colors line-clamp-1 ${
              isActive
                ? "text-blue-600 dark:text-cyan-300"
                : "text-gray-900 dark:text-white"
            }`}
          >
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
            {project.summary ||
              "Deskripsi implementasi arsitektur perangkat lunak dan fitur sistem."}
          </p>
        </div>

        {/* Tech Stack & Action Link */}
        <div className="pt-3 border-t border-gray-100 dark:border-white/[0.06] space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack?.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="bg-gray-100 dark:bg-white/[0.05] text-gray-700 dark:text-gray-300 text-[10px] px-2 py-0.5 rounded-md font-mono border border-gray-200/70 dark:border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.techStack?.length > 3 && (
              <span className="text-[10px] font-mono text-gray-400 py-0.5 px-1">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between text-xs font-mono font-semibold pt-1">
            <span
              className={`inline-flex items-center gap-1.5 transition-colors ${
                isActive
                  ? "text-blue-600 dark:text-cyan-400 font-bold"
                  : "text-gray-400"
              }`}
            >
              {isActive ? "Buka Studi Kasus →" : "Pilih Kartu"}
            </span>
            <span className="text-[10px] font-mono text-gray-400 font-normal">
              {isActive ? "Focused" : "Tap"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [layoutMode, setLayoutMode] = useState("carousel");
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const carouselRef = useRef(null);
  const cardRefs = useRef([]);

  const tabs = useMemo(() => {
    const rawCategories = projects
      .map((p) => p.category?.trim())
      .filter(Boolean);
    const unique = Array.from(new Set(rawCategories));

    if (unique.length > 0) {
      return [
        { id: "all", label: "Semua Proyek" },
        ...unique.map((cat) => ({ id: cat.toLowerCase(), label: cat })),
      ];
    }

    return [
      { id: "all", label: "Semua Proyek" },
      { id: "web", label: "Web App" },
      { id: "mobile", label: "Mobile" },
      { id: "system", label: "System & AI" },
    ];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        filter === "all"
          ? true
          : (p.category || "").toLowerCase() === filter.toLowerCase();

      const searchStr =
        `${p.title || ""} ${p.role || ""} ${p.summary || ""} ${(p.techStack || []).join(" ")}`.toLowerCase();
      const matchesSearch = searchStr.includes(
        searchQuery.toLowerCase().trim(),
      );

      return matchesCategory && matchesSearch;
    });
  }, [projects, filter, searchQuery]);

  // Kalkulasi kartu yang paling dekat dengan titik tengah kontainer
  const handleScrollUpdates = () => {
    const container = carouselRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScroll = scrollWidth - clientWidth;

    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    } else {
      setScrollProgress(100);
    }

    const containerCenter = scrollLeft + clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  };

  useEffect(() => {
    handleScrollUpdates();
    const el = carouselRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScrollUpdates();
          ticking = false;
        });
        ticking = true;
      }
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", handleScrollUpdates);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleScrollUpdates);
    };
  }, [filteredProjects, layoutMode]);

  // Pindahkan kartu ke posisi tengah secara halus
  const centerCardByIndex = (index) => {
    const container = carouselRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const targetScroll =
      card.offsetLeft - (container.clientWidth / 2 - card.offsetWidth / 2);

    container.scrollTo({
      left: Math.max(0, targetScroll),
      behavior: "smooth",
    });
  };

  const handleCardClick = (project, index) => {
    if (layoutMode === "grid") {
      setSelectedProject(project);
      return;
    }

    if (activeIndex === index) {
      setSelectedProject(project);
    } else {
      centerCardByIndex(index);
    }
  };

  return (
    <div className="w-full space-y-7 text-left py-2">
      {/* Header Seksi */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/[0.07] dark:bg-blue-950/40 border border-blue-500/20 dark:border-blue-800/40 backdrop-blur-md shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400 animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-blue-700 dark:text-blue-300 uppercase">
            Portfolio Showcase
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 dark:text-white tracking-tight">
            Katalog Proyek{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 dark:from-blue-400 dark:via-cyan-300 dark:to-sky-200 bg-clip-text text-transparent">
              Unggulan
            </span>
          </h2>

          {/* Toggle Mode: Slider Focus vs Grid */}
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
              Slider Focus
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
              Grid
            </button>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Kompilasi implementasi aplikasi seluler, platform berbasis web, dan
          arsitektur model komputasi yang pernah dibangun dari tahap perancangan
          hingga tahap siap pakai.
        </p>
      </div>

      {/* Toolbar Atas: Search Input Kiri & Filter Tabs Kanan */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pb-2 border-b border-gray-200/80 dark:border-white/[0.08]">
        {/* Search Bar di Atas Kiri */}
        <div className="relative w-full md:w-72 shrink-0">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-600 dark:text-cyan-400"
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
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setActiveIndex(0);
              if (carouselRef.current)
                carouselRef.current.scrollTo({ left: 0 });
            }}
            placeholder="Cari judul, stack, tech..."
            className="w-full pl-9 pr-8 py-2 text-xs font-mono rounded-2xl bg-white/90 dark:bg-[#121622]/90 border border-gray-200 dark:border-white/[0.08] focus:border-cyan-400 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 outline-none transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700 dark:hover:text-white px-1 font-mono cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                setFilter(tab.id);
                setActiveIndex(0);
                if (carouselRef.current)
                  carouselRef.current.scrollTo({ left: 0 });
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono capitalize transition-all duration-200 cursor-pointer shrink-0 ${
                filter === tab.id
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md shadow-cyan-500/25 scale-[1.02]"
                  : "bg-white/80 dark:bg-white/[0.03] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/[0.06]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* TAMPILAN PROYEK */}
      {filteredProjects.length === 0 ? (
        <div className="w-full py-16 px-6 border border-dashed border-gray-200 dark:border-white/10 rounded-3xl text-center text-gray-400 text-xs font-mono bg-white/40 dark:bg-white/[0.01]">
          Tidak ditemukan proyek yang cocok dengan kata kunci &quot;
          {searchQuery}&quot;.
        </div>
      ) : layoutMode === "carousel" ? (
        /* HORIZONTAL CAROUSEL CENTER-FOCUS TRACK */
        <div className="space-y-6">
          <div
            ref={carouselRef}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="flex items-center gap-5 sm:gap-7 overflow-x-auto snap-x snap-mandatory pt-8 pb-10 px-[8vw] sm:px-[20vw] lg:px-[25vw] no-scrollbar scroll-smooth [&::-webkit-scrollbar]:hidden"
          >
            {filteredProjects.map((project, idx) => {
              const isCenter = idx === activeIndex;
              return (
                <div
                  key={project._id}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className={`w-[80vw] sm:w-[350px] md:w-[390px] shrink-0 snap-center transition-all duration-500 ease-out ${
                    isCenter
                      ? "-translate-y-4 scale-105 z-20 opacity-100"
                      : "translate-y-2 scale-95 z-10 opacity-55 hover:opacity-85 blur-[0.4px]"
                  }`}
                >
                  <ProjectCard
                    project={project}
                    isActive={isCenter}
                    onClick={() => handleCardClick(project, idx)}
                  />
                </div>
              );
            })}
          </div>

          {/* Modern Futuristic Glow Scrubber Bar */}
          <div className="max-w-lg mx-auto p-2.5 rounded-2xl bg-gradient-to-r from-white/90 via-gray-50/90 to-white/90 dark:from-[#121622]/90 dark:via-[#161c2d]/90 dark:to-[#121622]/90 border border-blue-500/20 dark:border-cyan-500/30 backdrop-blur-xl shadow-lg shadow-cyan-500/5 flex items-center gap-3">
            <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-300 font-bold pl-2 shrink-0">
              {String(activeIndex + 1).padStart(2, "0")}{" "}
              <span className="text-gray-400 font-normal">/</span>{" "}
              {String(filteredProjects.length).padStart(2, "0")}
            </span>

            {/* Interactive Progress Track */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const ratio = clickX / rect.width;
                const targetIdx = Math.round(
                  ratio * (filteredProjects.length - 1),
                );
                centerCardByIndex(targetIdx);
              }}
              className="relative flex-1 h-2.5 bg-gray-200/80 dark:bg-white/[0.08] rounded-full overflow-hidden cursor-pointer shadow-inner"
            >
              <div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 rounded-full transition-all duration-150 shadow-[0_0_12px_rgba(6,182,212,0.9)]"
                style={{ width: `${Math.max(scrollProgress, 8)}%` }}
              />
            </div>

            <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 pr-2 shrink-0 font-bold uppercase tracking-wider">
              {filteredProjects[activeIndex]?.category || "Project"}
            </span>
          </div>
        </div>
      ) : (
        /* GRID VIEW */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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

      {/* Dialog Modal Studi Kasus */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
