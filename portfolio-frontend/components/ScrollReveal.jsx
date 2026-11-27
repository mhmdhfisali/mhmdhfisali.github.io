"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ScrollReveal Component
 * Hardware-accelerated, zero-lag scroll animations.
 * Konvergensi kartu kiri-kanan mulus, bebas blur, dan aman di HP & Desktop.
 */
export default function ScrollReveal({
  children,
  variant = "up",
  direction,
  delay = 0,
  duration = 750,
  className = "",
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const domRef = useRef(null);

  const activeVariant = direction || variant;

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    // Hormati preferensi aksesibilitas
    if (typeof window !== "undefined") {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReduced) {
        setIsVisible(true);
        setHasFinished(true);
        return;
      }
    }

    // Fungsi pengecekan posisi instan dalam viewport
    const checkPosition = () => {
      if (!domRef.current) return false;
      const rect = domRef.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      // Aktifkan begitu elemen menyentuh jangkauan viewport (toleransi 25px)
      if (rect.top <= vh - 25 && rect.bottom >= 0) {
        setIsVisible(true);
        return true;
      }
      return false;
    };

    // 1. Cek langsung jika sudah di layar saat render
    if (checkPosition()) return;

    // 2. IntersectionObserver berpresisi tinggi (threshold 0)
    let observer = null;
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              setIsVisible(true);
              if (once && domRef.current && observer) {
                observer.unobserve(domRef.current);
              }
              window.removeEventListener("scroll", onScroll);
              break;
            } else if (!once) {
              setIsVisible(false);
              setHasFinished(false);
            }
          }
        },
        {
          threshold: 0,
          rootMargin: "0px 0px -25px 0px",
        },
      );
      observer.observe(el);
    }

    // 3. Passive scroll listener sebagai jaminan responsif saat di-scroll
    const onScroll = () => {
      if (checkPosition()) {
        window.removeEventListener("scroll", onScroll);
        if (once && observer && domRef.current) {
          observer.unobserve(domRef.current);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (observer && el) observer.unobserve(el);
    };
  }, [once]);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      setHasFinished(true);
    }, duration + delay + 50);

    return () => clearTimeout(timer);
  }, [isVisible, duration, delay]);

  let initClass = "reveal-init-up";
  if (activeVariant === "left" || activeVariant === "converge-left") {
    initClass = "reveal-init-left";
  } else if (activeVariant === "right" || activeVariant === "converge-right") {
    initClass = "reveal-init-right";
  }

  let stateClass = initClass;
  if (hasFinished) {
    stateClass = "reveal-finished";
  } else if (isVisible) {
    stateClass = "reveal-visible";
  }

  const transitionStyle = !hasFinished
    ? {
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }
    : undefined;

  return (
    <div
      ref={domRef}
      style={transitionStyle}
      className={`reveal-base ${stateClass} ${className}`}
    >
      {children}
    </div>
  );
}
