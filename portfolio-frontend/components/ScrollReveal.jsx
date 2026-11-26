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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      {
        threshold: 0.02,
        rootMargin: "0px 0px 60px 0px",
      },
    );

    const el = domRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const getTransitionStyle = () => {
    const base = {
      transitionProperty: "opacity, transform",
      transitionDuration: "350ms",
      transitionTimingFunction: "cubic-bezier(0.2, 0.8, 0.2, 1)",
      transitionDelay: `${Math.min(delay, 50)}ms`,
      willChange: isVisible ? "auto" : "opacity, transform",
    };

    if (!isVisible) {
      switch (activeVariant) {
        case "left":
          return {
            ...base,
            opacity: 0,
            transform: "translate3d(-12px, 0, 0)",
          };
        case "right":
          return {
            ...base,
            opacity: 0,
            transform: "translate3d(12px, 0, 0)",
          };
        case "converge":
        case "scale":
          return {
            ...base,
            opacity: 0,
            transform: "scale(0.99) translate3d(0, 10px, 0)",
          };
        case "up":
        default:
          return {
            ...base,
            opacity: 0,
            transform: "translate3d(0, 10px, 0)",
          };
      }
    }

    return {
      ...base,
      opacity: 1,
      transform: "translate3d(0, 0, 0) scale(1)",
    };
  };

  return (
    <div ref={domRef} style={getTransitionStyle()} className={className}>
      {children}
    </div>
  );
}
