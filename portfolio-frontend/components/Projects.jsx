"use client";

import { useState, useMemo } from "react";
import { urlFor } from "@/sanity";
import ProjectModal from "./ProjectModal";

function ProjectCard({ project, onClick }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
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
        transition: "transform 0.15s ease-out, border-color 0.3s ease",
      }}
      className="group flex flex-col justify-between bg-white/80 dark:bg-[#151923]/60 hover:bg-white dark:hover:bg-[#151923] border border-gray-200/90 dark:border-white/[0.08] hover:border-blue-500/50 dark:hover:border-blue-500/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer backdrop-blur-xs"
    >
      {/* Media Thumbnail */}
      <div className="w-full h-44 sm:h-48 overflow-hidden bg-gray-100 dark:bg-black/50 relative border-b border-gray-100 dark:border-white/[0.06]">
        {project.thumbnail ? (
          <img
            src={urlFor(project.thumbnail).url()}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-mono text-xs text-gray-400">
            Preview Tidak Tersedia
          </div>
        )}
        {project.role && (
          <span className="absolute top-3 right-3 bg-white/90 dark:bg-[#151923]/90 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-gray-200/80 dark:border-white/10 text-[10px] font-mono text-blue-600 dark:text-blue-400 font-semibold shadow-xs">
            {project.role}
          </span>
        )}
      </div>

      {/* Konten Proyek */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
            {project.summary}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 dark:border-white/[0.06] space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack?.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="bg-gray-100 dark:bg-white/[0.04] text-gray-700 dark:text-gray-300 text-[10px] px-2 py-0.5 rounded font-mono border border-gray-200/60 dark:border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center text-xs font-semibold text-blue-600 dark:text-blue-400">
            <span className="group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1.5">
              Lihat Studi Kasus &rarr;
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

  const tabs = [
    { id: "all", label: "Semua" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "system", label: "System & AI" },
  ];

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => {
      if (p.category) return p.category === filter;
      const text =
        `${p.title} ${p.role || ""} ${p.techStack?.join(" ") || ""}`.toLowerCase();
      if (filter === "web")
        return (
          text.includes("web") ||
          text.includes("next") ||
          text.includes("react")
        );
      if (filter === "mobile")
        return (
          text.includes("mobile") ||
          text.includes("flutter") ||
          text.includes("android")
        );
      if (filter === "system")
        return (
          text.includes("system") ||
          text.includes("linux") ||
          text.includes("docker") ||
          text.includes("ai")
        );
      return true;
    });
  }, [projects, filter]);

  return (
    <section className="w-full space-y-6 sm:space-y-8">
      {/* Filter Tabs Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20"></span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Katalog Proyek Unggulan
          </h2>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 font-mono text-[11px] no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1 rounded-full transition-all duration-200 cursor-pointer shrink-0 ${
                filter === tab.id
                  ? "bg-blue-600 text-white font-semibold shadow-xs"
                  : "bg-gray-100/80 dark:bg-white/[0.04] text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200/60 dark:border-white/[0.06]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Proyek */}
      {filteredProjects.length === 0 ? (
        <div className="w-full py-12 px-6 border border-dashed border-gray-300 dark:border-gray-800 rounded-3xl text-center text-gray-500 text-sm bg-gray-50/50 dark:bg-white/[0.02]">
          Tidak ada proyek dalam kategori ini.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
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
    </section>
  );
}
