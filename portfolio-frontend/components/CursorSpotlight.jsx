"use client";

import { useEffect, useState, useRef } from "react";

export default function CursorSpotlight() {
  const [mounted, setMounted] = useState(false);
  const spotlightRef = useRef(null);

  useEffect(() => {
    setMounted(true);

    const updatePosition = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`;
      }
    };

    window.addEventListener("mousemove", updatePosition, { passive: true });
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed top-0 left-0 w-[600px] h-[600px] rounded-full z-30 opacity-60 dark:opacity-40 will-change-transform hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(6, 182, 212, 0.03) 40%, transparent 70%)",
        transition: "transform 0.08s ease-out",
      }}
    />
  );
}
