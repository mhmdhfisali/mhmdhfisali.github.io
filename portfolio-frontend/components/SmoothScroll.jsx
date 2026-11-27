"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Hormati preferensi aksesibilitas pengguna
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    // Deteksi perangkat touch / layar sentuh (HP / Tablet)
    // Pada smartphone, browser (iOS Safari / Android Chrome) memiliki hardware momentum scrolling bawaan.
    // Memaksakan virtual scroll / touchMultiplier pada layar sentuh HP menyebabkan input lag dan stuttering!
    const isTouchOrMobile =
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.innerWidth < 1024;

    // JIKA DI SMARTPHONE / TOUCH DEVICE:
    // Gunakan 100% native scroll tanpa lag sedikit pun!
    if (isTouchOrMobile) {
      const handleMobileAnchorClick = (e) => {
        const anchor = e.target.closest("a[href^='#']");
        if (!anchor) return;
        const href = anchor.getAttribute("href");
        if (href && href !== "#") {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
      document.addEventListener("click", handleMobileAnchorClick, { capture: true });
      return () => {
        document.removeEventListener("click", handleMobileAnchorClick, { capture: true });
      };
    }

    // JIKA DI DESKTOP / MOUSE WHEEL:
    // Aktifkan Lenis inertia scrolling untuk sensasi roda mouse yang mewah
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 0, // Jangan pernah bajak sentuhan
      syncTouch: false,
      infinite: false,
    });

    window.__lenis = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    // Integrasi smooth scroll ke anchor links (#home, #skills, #projects, dsb)
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href !== "#") {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -60, duration: 1.2 });
        }
      }
    };
    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return null;
}
