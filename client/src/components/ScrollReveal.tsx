/** Telangana Feast Editorial: food imagery arrives with the pacing of courses being set onto a table. */
import { useEffect, useRef, useState, type ReactNode } from "react";

export function ScrollReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.16, rootMargin: "0px 0px -9% 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={containerRef} className={`scroll-reveal ${visible ? "scroll-reveal--visible" : ""} ${className}`}>{children}</div>;
}
