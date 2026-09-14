"use client";

import { urlFor } from "@/sanity";
import { useMemo, useState } from "react";
import ProjectModal from "./ProjectModal";

function ProjectCard({ project, onClick }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="group relative flex flex-col justify-between bg-white/85 dark:bg-[#151923]/70 hover:bg-white dark:hover:bg-[#151923] border border-gray-200/90 dark:border-white/[0.08] hover:border-blue-500/50 dark:hover:border-blue-500/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer backdrop-blur-md transition-all duration-300"
    >
      {/* Thumbnail Header: Rasio Adaptif Proporsional untuk Layar HP (Portrait) maupun Desktop (Landscape) */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100/90 dark:bg-[#0c0f17] border-b border-gray-100 dark:border-white/[0.06] flex items-center justify-center p-2.5">
        {project.thumbnail ? (
          <>
            {/* Ambient Blur di latar belakang agar ruang kosong tetap berdimensi dan tidak kaku */}
            <img
              src={urlFor(project.thumbnail).url()}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 dark:opacity-35 pointer-events-none scale-110"
            />

            {/* Gambar Asli Utuh (Tidak terpotong jam/status bar atas maupun tombol bawah) */}
            <img
              src={urlFor(project.thumbnail).url()}
              alt={project.title}
              className="relative z-10 max-h-full max-w-full w-auto h-auto object-contain rounded-lg shadow-sm group-hover:scale-[1.03] transition-transform duration-300"
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-gray-400">
            Preview Media Tidak Tersedia
          </div>
        )}

        {/* Role Badge */}
        {project.role && (
          <span className="absolute top-2.5 right-2.5 z-20 bg-black/65 dark:bg-[#10131a]/85 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 text-[10px] font-mono text-white dark:text-cyan-400 font-semibold shadow-xs">
            {project.role}
          </span>
        )}

        {/* Gradasi Halus Bawah */}
        <div className="absolute inset-x-0 bottom-0 h-6 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10" />
      </div>

      {/* Konten Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
              {project.category || "Software Project"}
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-extrabold text-gray-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-1">
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
                className="bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 text-[10px] px-2.5 py-0.5 rounded-md font-mono border border-gray-200/70 dark:border-white/[0.06]"
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

          <div className="flex items-center justify-between text-xs font-mono font-semibold text-blue-600 dark:text-cyan-400 pt-1">
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1.5">
              Lihat Kasus &amp; Demo &rarr;
            </span>
            <span className="text-[10px] font-mono text-gray-400 font-normal">
              Inspect
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ projects = [] }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6); // Default 6 proyek per tampilan

  // Ekstraksi kategori unik langsung dari data Sanity
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
    if (filter === "all") return projects;
    return projects.filter((p) => {
      if (p.category) {
        return p.category.toLowerCase() === filter.toLowerCase();
      }
      const text =
        `${p.title} ${p.role || ""} ${p.techStack?.join(" ") || ""}`.toLowerCase();
      return text.includes(filter.toLowerCase());
    });
  }, [projects, filter]);

  // Reset limit tampilan jika user berganti tab filter
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setVisibleCount(6);
  };

  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

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

          <span className="text-xs font-mono text-gray-500 dark:text-gray-400">
            Menampilkan {displayedProjects.length} dari{" "}
            {filteredProjects.length} Karya
          </span>
        </div>

        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
          Kompilasi implementasi aplikasi seluler, platform berbasis web, dan
          arsitektur model komputasi yang pernah dibangun dari tahap perancangan
          hingga tahap siap pakai.
        </p>
      </div>

      {/* Filter Tabs Header */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-gray-200/80 dark:border-white/[0.08] no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleFilterChange(tab.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono capitalize transition-all duration-200 cursor-pointer shrink-0 ${
              filter === tab.id
                ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/25 scale-[1.02]"
                : "bg-white/80 dark:bg-white/[0.03] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/[0.06]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid Proyek */}
      {displayedProjects.length === 0 ? (
        <div className="w-full py-16 px-6 border border-dashed border-gray-200 dark:border-white/10 rounded-3xl text-center text-gray-400 text-xs font-mono bg-white/40 dark:bg-white/[0.01]">
          Belum ada proyek terdata untuk kategori ini di Sanity.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}

      {/* Tombol Load More & Show Less */}
      {filteredProjects.length > 6 && (
        <div className="flex justify-center pt-4">
          {hasMore ? (
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-gray-50 dark:bg-[#151923] dark:hover:bg-white/[0.08] text-gray-800 dark:text-gray-200 text-xs font-mono font-semibold border border-gray-200 dark:border-white/10 shadow-xs hover:border-blue-500/40 active:scale-95 transition-all cursor-pointer"
            >
              <span>Tampilkan Proyek Lainnya</span>
              <span className="text-blue-600 dark:text-cyan-400">
                (+{filteredProjects.length - visibleCount})
              </span>
              <span>↓</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setVisibleCount(6)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-gray-50 dark:bg-[#151923] dark:hover:bg-white/[0.08] text-gray-800 dark:text-gray-200 text-xs font-mono font-semibold border border-gray-200 dark:border-white/10 shadow-xs hover:border-blue-500/40 active:scale-95 transition-all cursor-pointer"
            >
              <span>Tutup Sebagian Proyek</span>
              <span>↑</span>
            </button>
          )}
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
