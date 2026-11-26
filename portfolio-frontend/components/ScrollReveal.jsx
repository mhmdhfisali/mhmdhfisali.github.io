"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  variant = "up",
  direction,
  delay = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  const activeVariant = direction || variant;

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    // 1. Cek langsung saat mount: jika elemen sudah dekat atau berada di viewport (+350px), langsung aktifkan tanpa tunggu observer
    const checkImmediate = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= vh + 350) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    if (checkImmediate()) return;

    // 2. IntersectionObserver dengan margin antisipatif luas (350px sebelum masuk viewport, threshold 0)
    let observer = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (domRef.current && observer) observer.unobserve(domRef.current);
          }
        },
        {
          threshold: 0,
          rootMargin: "350px 0px 150px 0px",
        },
      );
      observer.observe(el);
    }

    // 3. Fallback listener scroll pasif untuk browser mobile saat observer di-throttle selama inertia scroll
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (checkImmediate()) {
            if (observer && el) observer.unobserve(el);
            window.removeEventListener("scroll", handleScroll);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (observer && el) observer.unobserve(el);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTransitionStyle = () => {
    // Jika sudah visible, hilangkan will-change dan transform agar 100% native GPU layer
    if (isVisible) {
      return {
        opacity: 1,
        transform: "translate3d(0, 0, 0)",
        transitionProperty: "opacity, transform",
        transitionDuration: "240ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      };
    }

    // Belum visible (sebelum masuk radius 350px): translasi sangat subtle (8px) tanpa delay
    const baseHidden = {
      opacity: 0,
      transitionProperty: "opacity, transform",
      transitionDuration: "240ms",
      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      willChange: "opacity, transform",
    };

    switch (activeVariant) {
      case "left":
        return {
          ...baseHidden,
          transform: "translate3d(-8px, 0, 0)",
        };
      case "right":
        return {
          ...baseHidden,
          transform: "translate3d(8px, 0, 0)",
        };
      case "up":
      case "converge":
      case "scale":
      default:
        return {
          ...baseHidden,
          transform: "translate3d(0, 8px, 0)",
        };
    }
  };

  return (
    <div ref={domRef} style={getTransitionStyle()} className={className}>
      {children}
    </div>
  );
}
