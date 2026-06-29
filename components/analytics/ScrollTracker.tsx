"use client";

import { useEffect, useRef } from "react";
import { trackScrollDepth, trackTimeOnPage } from "@/lib/analytics";

export default function ScrollTracker() {
  const depthsTracked = useRef(new Set<number>());

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const pct = Math.round((window.scrollY / docHeight) * 100);
      for (const depth of [25, 50, 75, 100] as const) {
        if (pct >= depth && !depthsTracked.current.has(depth)) {
          depthsTracked.current.add(depth);
          trackScrollDepth(depth);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timers = [30, 60, 120].map((s) =>
      setTimeout(() => trackTimeOnPage(s), s * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return null;
}
