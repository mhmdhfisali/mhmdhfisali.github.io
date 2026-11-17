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
      transitionProperty: "opacity, transform, filter",
      transitionDuration: "500ms",
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
            transform: "translate3d(-24px, 0, 0)",
            filter: "blur(2px)",
          };
        case "right":
          return {
            ...base,
            opacity: 0,
            transform: "translate3d(24px, 0, 0)",
            filter: "blur(2px)",
          };
        case "converge":
        case "scale":
          return {
            ...base,
            opacity: 0,
            transform: "scale(0.97) translate3d(0, 16px, 0)",
            filter: "blur(2px)",
          };
        case "up":
        default:
          return {
            ...base,
            opacity: 0,
            transform: "translate3d(0, 18px, 0)",
            filter: "blur(2px)",
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
    <div ref={domRef} style={getTransitionStyle()} className={className}>
      {children}
    </div>
  );
}
