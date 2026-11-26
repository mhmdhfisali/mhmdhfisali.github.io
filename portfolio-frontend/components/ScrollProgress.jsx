"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (barRef.current) {
            const totalHeight =
              document.documentElement.scrollHeight - window.innerHeight;
            const progress =
              totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
            barRef.current.style.width = `${Math.min(Math.max(progress, 0), 100)}%`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[999999] pointer-events-none bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 shadow-[0_0_12px_rgba(56,189,248,0.9)] will-change-[width]"
        style={{ width: "0%" }}
      />
    </div>
  );
}
