"use client";

import { useEffect, useRef } from "react";
import { HomeSlide } from "@/app/components/slides/HomeSlide";
import { AboutSlide } from "@/app/components/slides/AboutSlide";

import { WorkSlide } from "@/app/components/slides/WorkSlide";
import { StackSlide } from "@/app/components/slides/StackSlide";

import { ContactSlide } from "@/app/components/slides/ContactSlide";
import { useRevealOnScroll } from "@/app/components/hooks/useRevealOnScroll";

export function MobileLayout({
  onActiveChange,
}: {
  onActiveChange: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const sections = root.querySelectorAll<HTMLElement>("[data-slide]");
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(sections).indexOf(entry.target as HTMLElement);
            if (idx >= 0) onActiveChange(idx);
          }
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [onActiveChange]);

  useRevealOnScroll([]);

  return (
    <div ref={ref} className="relative" style={{ zIndex: 10 }}>
      <HomeSlide />
      <AboutSlide />
   
      <WorkSlide />
      <StackSlide />

      <ContactSlide />
    </div>
  );
}