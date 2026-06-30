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

  // Reveal on scroll
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window) || !reveals.length) {
      reveals.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Header shadow on scroll
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
