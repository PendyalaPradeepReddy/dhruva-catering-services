/** Telangana Feast Editorial: route changes arrive like a measured turn of a menu page, with focus moved to the new content for keyboard users. */
import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "wouter";

export function PageTransition({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const previousLocation = useRef(location);

  useEffect(() => {
    const isNavigation = previousLocation.current !== location;
    previousLocation.current = location;
    if (!isNavigation) return;

    const focusTarget = window.requestAnimationFrame(() => {
      const main = document.querySelector("main");
      if (main instanceof HTMLElement) {
        main.tabIndex = -1;
        main.focus({ preventScroll: true });
      }
    });
    return () => window.cancelAnimationFrame(focusTarget);
  }, [location]);

  return <div key={location} className="page-transition">{children}</div>;
}
