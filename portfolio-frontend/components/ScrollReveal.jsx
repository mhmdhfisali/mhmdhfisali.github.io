"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  direction = "up",
  className = "",
}) {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    const calculateProgress = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const startTrigger = windowHeight * 0.95;
      const endTrigger = windowHeight * 0.35;

      const currentProgress = Math.min(
        Math.max((startTrigger - rect.top) / (startTrigger - endTrigger), 0),
        1,
      );

      setProgress(currentProgress);
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(calculateProgress);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    calculateProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getDynamicStyle = () => {
    const opacity = Math.pow(progress, 1.2);
    const scale = 0.9 + progress * 0.1;

    let transform = "";
    if (direction === "left") {
      const translateX = (1 - progress) * -80;
      const rotateY = (1 - progress) * 15;
      transform = `perspective(1200px) translate3d(${translateX}px, 0, 0) rotateY(${rotateY}deg) scale(${scale})`;
    } else if (direction === "right") {
      const translateX = (1 - progress) * 80;
      const rotateY = (1 - progress) * -15;
      transform = `perspective(1200px) translate3d(${translateX}px, 0, 0) rotateY(${rotateY}deg) scale(${scale})`;
    } else {
      const translateY = (1 - progress) * 90;
      const rotateX = (1 - progress) * -18;
      transform = `perspective(1200px) translate3d(0, ${translateY}px, 0) rotateX(${rotateX}deg) scale(${scale})`;
    }

    return {
      opacity,
      transform,
      willChange: "transform, opacity",
      transition:
        "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease-out",
    };
  };

  return (
    <div ref={ref} style={getDynamicStyle()} className={className}>
      {children}
    </div>
  );
}
