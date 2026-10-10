"use client";

import { useState } from "react";
import { Logo } from "@/app/components/ui/Logo";
import { Github, Linkedin, Menu, X } from "@/app/components/icons";
import { SECTIONS } from "@/lib/data/sections";

/* Single blue accent used throughout */
const ACCENT = "#7AA8DC";
/* Secondary warm accent (coral) — reserved for focus rings only */
const ACCENT_WARM = "#E89A7A";

export function Navbar({
  activeIndex,
  onNavigate,
}: {
  activeIndex: number;
  onNavigate: (index: number) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 py-4 sm:py-5" style={{ zIndex: 50 }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* =============================================================== */}
        {/*  MAIN BAR                                                       */}
        {/* =============================================================== */}
        <nav
          className="relative flex items-center justify-between rounded-2xl border px-4 py-3 backdrop-blur-md sm:px-5 sm:py-3.5"
          style={{
            background: "rgba(251, 248, 242, 0.82)",
            borderColor: "rgba(120, 105, 85, 0.16)",
            boxShadow:
              "0 4px 16px -6px rgba(30, 50, 90, 0.10), 0 1px 0 rgba(255,255,255,0.6) inset",
          }}
        >
          {/* ---------------- Logo ---------------- */}
          <button
            onClick={() => onNavigate(0)}
            aria-label="Sabha Mushtaq — home"
            className="flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
            style={{ ["--tw-ring-color" as string]: ACCENT }}
          >
            <Logo />
          </button>

          {/* ---------------- Desktop links ---------------- */}
          <ul className="hidden items-center gap-1 lg:flex">
            {SECTIONS.map((s, i) => {
              const isActive = activeIndex === i;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate(i)}
                    aria-current={isActive ? "page" : undefined}
                    className="group relative inline-flex items-center rounded-lg px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
                    style={{
                      color: isActive ? "#0F2544" : "#5B6473",
                      ["--tw-ring-color" as string]: ACCENT,
                    }}
                  >
                    <span>{s.label}</span>
                    {/* Thin blue underline for active */}
                    <span
                      aria-hidden
                      className={`pointer-events-none absolute left-3 right-3 -bottom-0.5 h-[1.5px] rounded-full transition-all duration-300 ${
                        isActive
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-50 group-hover:opacity-40 group-hover:scale-x-100"
                      }`}
                      style={{
                        background: isActive ? ACCENT : "rgba(122,168,220,0.7)",
                        transformOrigin: "center",
                      }}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ---------------- Social ---------------- */}
          <div className="hidden items-center gap-1 lg:flex">
            <a
              href="https://github.com/sabha-mushtaq"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#5B6473] transition-colors duration-200 hover:text-[#0F2544] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
              style={{ ["--tw-ring-color" as string]: ACCENT }}
            >
              <Github className="h-4 w-4" />
            </a>
            <a
            href="https://www.linkedin.com/in/sabha-mushtaq"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[#5B6473] transition-colors duration-200 hover:text-[#0F2544] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
              style={{ ["--tw-ring-color" as string]: ACCENT }}
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* ---------------- Mobile toggle ---------------- */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-[#5B6473] transition-colors duration-200 hover:text-[#0F2544] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2] lg:hidden"
            style={{ ["--tw-ring-color" as string]: ACCENT }}
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </nav>

        {/* =============================================================== */}
        {/*  MOBILE DROP-DOWN                                                */}
        {/* =============================================================== */}
        <div
          className={`relative mt-2 overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 lg:hidden ${
            open
              ? "max-h-[34rem] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }`}
          style={{
            background: "rgba(251, 248, 242, 0.94)",
            borderColor: "rgba(120, 105, 85, 0.16)",
            boxShadow:
              "0 8px 24px -10px rgba(30, 50, 90, 0.18), 0 1px 0 rgba(255,255,255,0.6) inset",
          }}
        >
          <ul className="flex flex-col p-2">
            {SECTIONS.map((s, i) => {
              const isActive = activeIndex === i;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      setOpen(false);
                      onNavigate(i);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className="group relative flex w-full items-center rounded-xl px-4 py-3 text-left text-[14px] font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
                    style={{
                      color: isActive ? "#0F2544" : "#5B6473",
                      background: isActive ? "rgba(122,168,220,0.10)" : "transparent",
                      ["--tw-ring-color" as string]: ACCENT,
                    }}
                  >
                    <span
                      aria-hidden
                      className="mr-3 inline-block h-[6px] w-[6px] flex-none rounded-full transition-opacity duration-200"
                      style={{
                        background: ACCENT,
                        opacity: isActive ? 1 : 0,
                      }}
                    />
                    <span>{s.label}</span>

                    {/* Right side index */}
                    <span className="ml-auto font-mono text-[10px] tracking-widest text-[#9AA2AF]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Divider + social row */}
          <div
            className="flex items-center justify-between border-t px-4 py-3"
            style={{ borderColor: "rgba(120, 105, 85, 0.14)" }}
          >
            <span className="font-serif text-[11px] italic text-[#7A8497]">
              painting with code
            </span>
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/sabha-mushtaq"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[#5B6473] transition-colors duration-200 hover:text-[#0F2544] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
                style={{ ["--tw-ring-color" as string]: ACCENT }}
              >
                <Github className="h-3.5 w-3.5" />
              </a>
              <a
             href="https://www.linkedin.com/in/sabha-mushtaq"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[#5B6473] transition-colors duration-200 hover:text-[#0F2544] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
                style={{ ["--tw-ring-color" as string]: ACCENT }}
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}