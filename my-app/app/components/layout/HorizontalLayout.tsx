"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { HomeSlide } from "@/app/components/slides/HomeSlide";
import { AboutSlide } from "@/app/components/slides/AboutSlide";

import { WorkSlide } from "@/app/components/slides/WorkSlide";
import { StackSlide } from "@/app/components/slides/StackSlide";

import { ContactSlide } from "@/app/components/slides/ContactSlide";
import { SectionIndicator } from "./SectionIndicator";
import { useRevealOnScroll } from "@/app/components/hooks/useRevealOnScroll";
import { SECTIONS } from "@/lib/data/sections";

export function HorizontalLayout({
  onActiveChange,
}: {
  onActiveChange: (i: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = SECTIONS.length;

  const scrollToIndex = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(totalSlides - 1, i));
      track.scrollTo({ left: clamped * window.innerWidth, behavior: "smooth" });
    },
    [totalSlides]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const i = Math.round(track.scrollLeft / window.innerWidth);
        setActiveIndex(i);
        onActiveChange(i);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [onActiveChange]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let locked = false;
    const onWheel = (e: WheelEvent) => {
      const horizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = horizontal ? e.deltaX : e.deltaY;
      if (horizontal) return;
      e.preventDefault();
      if (locked) return;
      if (Math.abs(delta) < 8) return;
      locked = true;
      const current = Math.round(track.scrollLeft / window.innerWidth);
      const next = delta > 0 ? current + 1 : current - 1;
      scrollToIndex(next);
      window.setTimeout(() => {
        locked = false;
      }, 750);
    };
    track.addEventListener("wheel", onWheel, { passive: false });
    return () => track.removeEventListener("wheel", onWheel);
  }, [scrollToIndex]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const track = trackRef.current;
      if (!track) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        scrollToIndex(Math.round(track.scrollLeft / window.innerWidth) + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        scrollToIndex(Math.round(track.scrollLeft / window.innerWidth) - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scrollToIndex]);

  useRevealOnScroll([activeIndex]);

  return (
    <>
      <div
        ref={trackRef}
        className="no-scrollbar relative flex h-screen w-screen snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
        style={{ scrollBehavior: "smooth", zIndex: 10 }}
      >
        <HomeSlide />
        <AboutSlide />
 
        <WorkSlide />
        <StackSlide />
  
        <ContactSlide />
      </div>
      <SectionIndicator
        sections={SECTIONS}
        activeIndex={activeIndex}
        onNavigate={scrollToIndex}
      />
    </>
  );
}