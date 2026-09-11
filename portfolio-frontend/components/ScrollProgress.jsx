"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[999999] pointer-events-none bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 shadow-[0_0_12px_rgba(56,189,248,0.9)] transition-all duration-75 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
