"use client";

import { WaterPortrait } from "./WaterPortrait";

export function FixedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 h-screen w-screen overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          background:
            "linear-gradient(135deg, #dce4ef 0%, #e8ecf2 35%, #ebe6e0 70%, #e4dcd6 100%)",
        }}
      />

      <div
        className="absolute -top-[20%] -left-[10%] h-[70vw] w-[70vw] rounded-full opacity-70 blur-[140px] animate-blob-slow"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(90,150,220,0.6), rgba(90,150,220,0.08) 55%, transparent 75%)",
        }}
      />
      <div
        className="absolute top-[10%] right-[-15%] h-[60vw] w-[60vw] rounded-full opacity-65 blur-[150px] animate-blob-slower"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(110,180,170,0.6), rgba(110,180,170,0.07) 55%, transparent 75%)",
        }}
      />
      <div
        className="absolute bottom-[-25%] left-[20%] h-[55vw] w-[55vw] rounded-full opacity-60 blur-[160px] animate-blob-slow"
        style={{
          background:
            "radial-gradient(circle at 40% 60%, rgba(220,160,180,0.6), rgba(220,160,180,0.07) 55%, transparent 75%)",
        }}
      />

      <div
        className="absolute inset-0 h-full w-full"
        style={{ pointerEvents: "none" }}
      >
        <WaterPortrait />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-full sm:w-[70%] lg:w-[48%]"
        style={{
          background:
            "linear-gradient(to right, rgba(232,236,242,0.85) 0%, rgba(232,236,242,0.7) 50%, rgba(232,236,242,0.2) 85%, transparent 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}