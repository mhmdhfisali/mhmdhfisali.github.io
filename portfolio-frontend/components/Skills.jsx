"use client";

import { useState } from "react";
import { urlFor } from "@/sanity";

export default function Skills({ skills = [] }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="w-full space-y-6 sm:space-y-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20"></span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Keahlian &amp; Stack Teknologi
          </h2>
        </div>
        <span className="text-[11px] sm:text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100/80 dark:bg-white/[0.04] px-3 py-1 rounded-full border border-gray-200/80 dark:border-white/[0.08]">
          {skills.length} Komponen
        </span>
      </div>

      {skills.length === 0 ? (
        <div className="w-full py-10 px-5 rounded-2xl border border-dashed border-gray-300 dark:border-gray-800 text-center bg-gray-50/50 dark:bg-white/[0.02]">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Belum ada keahlian yang dimuat.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {skills.map((skill) => {
            const isHovered = hoveredId === skill._id;
            return (
              <div
                key={skill._id}
                onMouseEnter={() => setHoveredId(skill._id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-white/70 dark:bg-[#151923]/60 border p-3.5 sm:p-4 rounded-xl transition-all duration-300 flex items-center justify-between gap-2.5 shadow-xs backdrop-blur-xs cursor-default ${
                  isHovered
                    ? "border-blue-500/60 dark:border-blue-400/50 -translate-y-1 shadow-lg shadow-blue-500/10 bg-white dark:bg-[#151923]"
                    : "border-gray-200/80 dark:border-white/[0.08]"
                }`}
              >
                <span className="font-semibold text-xs sm:text-sm text-gray-700 dark:text-gray-200 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.title}
                </span>

                {skill.icon ? (
                  <img
                    src={urlFor(skill.icon).url()}
                    alt={skill.title}
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0 group-hover:scale-125 transition-transform duration-300 filter dark:brightness-95"
                  />
                ) : (
                  <span className="w-2 h-2 rounded-full bg-blue-500/40 group-hover:bg-blue-500 shrink-0 transition-colors"></span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
