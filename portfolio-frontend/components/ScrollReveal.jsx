"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  variant = "fade-up", // "fade-up" | "scale-blur" | "converge"
  delay = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    if (domRef.current) observer.observe(domRef.current);

    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  const getStyle = () => {
    const base = {
      transitionProperty: "opacity, transform, filter",
      transitionDuration: "850ms",
      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: `${delay}ms`,
      willChange: "opacity, transform, filter",
    };

    if (!isVisible) {
      switch (variant) {
        case "converge":
          return {
            ...base,
            opacity: 0,
            transform: "scale(0.95) translateY(24px)",
            filter: "blur(8px)",
          };
        case "scale-blur":
          return {
            ...base,
            opacity: 0,
            transform: "scale(0.92)",
            filter: "blur(10px)",
          };
        case "fade-up":
        default:
          return {
            ...base,
            opacity: 0,
            transform: "translate3d(0, 28px, 0)",
            filter: "blur(4px)",
          };
      }
    }

    return {
      ...base,
      opacity: 1,
      transform: "translate3d(0, 0, 0) scale(1)",
      filter: "blur(0px)",
    };
  };

  return (
    <div ref={domRef} style={getStyle()} className={className}>
      {children}
    </div>
  );
}

/**
 * Komponen pembungkus khusus Card:
 * Elemen ganjil meluncur dari kiri (-35px), elemen genap dari kanan (+35px)
 * lalu menyatu halus ke tengah.
 */
export function ConvergeGroup({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    );

    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`[perspective:1000px] ${
        isVisible ? "is-revealed" : "not-revealed"
      } ${className}`}
    >
      {children}
    </div>
  );
}
