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
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
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
      transitionDuration: "400ms",
      transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      transitionDelay: `${delay}ms`,
      willChange: "opacity, transform",
    };

    if (!isVisible) {
      switch (activeVariant) {
        case "left":
          return {
            ...base,
            opacity: 0,
            transform: "translate3d(-20px, 0, 0)",
          };
        case "right":
          return {
            ...base,
            opacity: 0,
            transform: "translate3d(20px, 0, 0)",
          };
        case "converge":
        case "scale":
          return {
            ...base,
            opacity: 0,
            transform: "scale(0.98) translate3d(0, 14px, 0)",
          };
        case "up":
        default:
          return {
            ...base,
            opacity: 0,
            transform: "translate3d(0, 16px, 0)",
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
