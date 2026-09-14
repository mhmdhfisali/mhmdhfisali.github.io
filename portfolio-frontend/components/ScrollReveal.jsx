"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Modern Smooth Reveal Component
 * Variants:
 * - "up" / "down"
 * - "left" / "right"
 * - "converge" : Card kiri & kanan meluncur halus menyatu ke tengah
 * - "scale" : Lembut membesar dengan efek depth blur
 */
export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Sekali muncul, kunci agar tidak jitter bolak-balik saat scroll lambat
            if (domRef.current) observer.unobserve(domRef.current);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    const currentTarget = domRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);

  const getVariantStyles = () => {
    const baseTransition = {
      transitionProperty: "opacity, transform, filter",
      transitionDuration: "900ms",
      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: `${delay}ms`,
      willChange: "opacity, transform, filter",
    };

    if (!isVisible) {
      switch (direction) {
        case "left":
          return {
            ...baseTransition,
            opacity: 0,
            transform: "translate3d(-45px, 0, 0)",
            filter: "blur(4px)",
          };
        case "right":
          return {
            ...baseTransition,
            opacity: 0,
            transform: "translate3d(45px, 0, 0)",
            filter: "blur(4px)",
          };
        case "converge":
          return {
            ...baseTransition,
            opacity: 0,
            transform: "scale(0.96) translate3d(0, 30px, 0)",
            filter: "blur(6px)",
          };
        case "scale":
          return {
            ...baseTransition,
            opacity: 0,
            transform: "scale(0.92) translate3d(0, 20px, 0)",
            filter: "blur(8px)",
          };
        case "up":
        default:
          return {
            ...baseTransition,
            opacity: 0,
            transform: "translate3d(0, 35px, 0)",
            filter: "blur(4px)",
          };
      }
    }

    return {
      ...baseTransition,
      opacity: 1,
      transform: "translate3d(0, 0, 0) scale(1)",
      filter: "blur(0px)",
    };
  };

  return (
    <div ref={domRef} style={getVariantStyles()} className={className}>
      {children}
    </div>
  );
}
