"use client";

import { ChevronLeft, ChevronRight } from "@/app/components/icons";

export function SectionIndicator({
  sections,
  activeIndex,
  onNavigate,
}: {
  sections: { id: string; label: string }[];
  activeIndex: number;
  onNavigate: (i: number) => void;
}) {
  return (
    <div className="fixed bottom-6 left-1/2 hidden -translate-x-1/2 lg:block" style={{ zIndex: 50 }}>
      <div className="flex items-center gap-3 rounded-full border border-white/80 bg-white/80 px-4 py-2 shadow-[0_8px_30px_-12px_rgba(30,60,110,0.25)] backdrop-blur-xl">
        <button onClick={() => onNavigate(Math.max(0, activeIndex - 1))} aria-label="Previous section"
          disabled={activeIndex === 0}
          className="flex h-7 w-7 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30">
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>
        <div className="flex items-center gap-1.5">
          {sections.map((s, i) => (
            <button key={s.id} onClick={() => onNavigate(i)} aria-label={`Go to ${s.label}`} className="group relative py-1.5">
              <span className={`block rounded-full transition-all duration-300 ${
                activeIndex === i ? "h-1.5 w-8 bg-slate-800" : "h-1.5 w-1.5 bg-slate-400/60 group-hover:bg-slate-600"
              }`} />
            </button>
          ))}
        </div>
        <span className="ml-1 font-mono text-[10px] tabular-nums text-slate-600">
          {String(activeIndex + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
        </span>
        <button onClick={() => onNavigate(Math.min(sections.length - 1, activeIndex + 1))} aria-label="Next section"
          disabled={activeIndex === sections.length - 1}
          className="flex h-7 w-7 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30">
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}