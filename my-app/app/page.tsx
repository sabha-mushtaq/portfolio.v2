"use client";

import { useCallback, useEffect, useState } from "react";
import { FixedBackground } from "@/app/components/background/FixedBackground";
import { GlobalStyles } from "@/app/components/layout/GlobalStyles";
import { Navbar } from "@/app/components/layout/Navbar";
import { MobileLayout } from "@/app/components/layout/MobileLayout";
import { HorizontalLayout } from "@/app/components/layout/HorizontalLayout";
import { useIsDesktop } from "@/app/components/hooks/useIsDesktop";
import { SECTIONS } from "@/lib/data/sections";

export default function Page() {
  const isDesktop = useIsDesktop();
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigate = useCallback(
    (i: number) => {
      if (isDesktop) {
        const track = document.querySelector(".no-scrollbar") as HTMLElement | null;
        if (track) track.scrollTo({ left: i * window.innerWidth, behavior: "smooth" });
      } else {
        const sectionIds = SECTIONS.map((s) => s.id);
        const el = document.getElementById(sectionIds[i]);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [isDesktop]
  );

  if (!mounted) {
    return (
      <main className="relative min-h-screen font-sans text-slate-800 antialiased">
        <GlobalStyles />
        <FixedBackground />
        <Navbar activeIndex={0} onNavigate={() => {}} />
        <MobileLayout onActiveChange={() => {}} />
      </main>
    );
  }

  return (
    <main className="relative min-h-screen font-sans text-slate-800 antialiased">
      <GlobalStyles />
      <FixedBackground />
      <Navbar activeIndex={activeIndex} onNavigate={handleNavigate} />
      {isDesktop ? (
        <HorizontalLayout onActiveChange={setActiveIndex} />
      ) : (
        <MobileLayout onActiveChange={setActiveIndex} />
      )}
    </main>
  );
}