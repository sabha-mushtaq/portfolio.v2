import { Slide } from "@/app/components/layout/Slide";
import { TECH_STACK } from "@/lib/data/techStack";

/* Small glyph per category — inline SVG so no icon deps */
function CategoryGlyph({ index }: { index: number }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none",
  };
  switch (index) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <path d="M9 6 4 12l5 6" {...common} />
          <path d="m15 6 5 6-5 6" {...common} />
        </svg>
      );
    case 1:
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <rect x="3.5" y="4.5" width="17" height="15" rx="2" {...common} />
          <path d="M3.5 9h17M9 9v10.5" {...common} />
        </svg>
      );
    case 2:
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <rect x="4" y="4" width="16" height="6" rx="1.5" {...common} />
          <rect x="4" y="14" width="16" height="6" rx="1.5" {...common} />
          <circle cx="8" cy="7" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="8" cy="17" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case 3:
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <ellipse cx="12" cy="6" rx="7" ry="2.5" {...common} />
          <path d="M5 6v12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" {...common} />
          <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" {...common} />
        </svg>
      );
    case 4:
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <rect x="7" y="3" width="10" height="18" rx="2" {...common} />
          <path d="M10.5 6.5h3" {...common} />
        </svg>
      );
    case 5:
      return (
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <path d="M12 3.5 5 6v6c0 4 3 7.3 7 8.5 4-1.2 7-4.5 7-8.5V6l-7-2.5z" {...common} />
          <path d="m9 12 2.2 2.2L15 10.5" {...common} />
        </svg>
      );
    default:
      return null;
  }
}

export function StackSlide() {
  const haloStyle: React.CSSProperties = {
    position: "absolute",
    inset: "-0.3em -0.55em",
    borderRadius: "9999px",
    background:
      "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(250,247,240,0.92) 0%, rgba(250,247,240,0.68) 45%, rgba(250,247,240,0.0) 100%)",
    filter: "blur(14px)",
    pointerEvents: "none",
  };

  return (
    <Slide id="stack">
      <div className="grid grid-cols-1 gap-4 pt-14 sm:pt-16 lg:pt-14">
        {/* ============================================================ */}
        {/*  HEADER — single row, tighter                                */}
        {/* ============================================================ */}
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div className="relative">
            <div
              className="reveal relative mb-2 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#2F5DA0]"
              data-reveal
            >
              <span aria-hidden style={{ ...haloStyle, filter: "blur(10px)" }} />
              <span className="relative font-mono">04</span>
              <span className="relative h-px w-5 bg-[#2F5DA0]" />
              <span className="relative">Technical toolkit</span>
            </div>

            <h2
              className="reveal relative max-w-xl font-serif text-[1.4rem] font-medium leading-[1.1] tracking-[-0.03em] text-[#0B1B33] sm:text-[1.7rem] lg:text-[1.9rem]"
              data-reveal
            >
              <span aria-hidden style={haloStyle} />
              <span className="relative">
                Technologies I work{" "}
                <span className="italic font-normal text-[#2F5DA0]">
                  with.
                </span>
              </span>
            </h2>
          </div>

          <p
            className="reveal relative max-w-lg text-[12px] font-medium leading-[1.55] text-[#1E2C42] lg:pb-1"
            data-reveal
          >
            <span aria-hidden style={{ ...haloStyle, filter: "blur(14px)" }} />
            <span className="relative">
              I enjoy learning technologies by building with them —
              programming languages, frontend and backend development,
              databases, mobile applications, and testing.
            </span>
          </p>
        </div>

        {/* ============================================================ */}
        {/*  CATEGORY ROWS — horizontal, compact                         */}
        {/* ============================================================ */}
        <div className="flex flex-col divide-y divide-[#E5DDD1] overflow-hidden rounded-2xl border border-[#E5DDD1] bg-[#FBF8F2]">
          {TECH_STACK.map((group, i) => (
            <div
              key={group.group}
              className="reveal group relative grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 transition-colors duration-200 hover:bg-white/60 sm:gap-4 sm:px-5 sm:py-3.5"
              data-reveal
            >
              {/* Glyph + number */}
              <div className="flex items-center gap-3">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-md border border-[#E5DDD1] bg-white/80 text-[#2F5DA0]"
                  aria-hidden
                >
                  <CategoryGlyph index={i} />
                </span>
                <span className="hidden font-mono text-[10px] font-bold tracking-widest text-[#9AA2AF] sm:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Title + chips */}
              <div className="flex min-w-0 flex-col gap-1.5 lg:flex-row lg:items-center lg:gap-4">
                <h3 className="shrink-0 font-serif text-[14px] font-semibold leading-tight text-[#0B1B33] sm:text-[15px] lg:w-[180px]">
                  {group.group}
                </h3>

                <div className="flex flex-wrap gap-1">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#E5DDD1] bg-white/70 px-2 py-[2px] text-[11px] font-semibold text-[#0B1B33] transition-colors duration-200 group-hover:border-[#B8CBE0]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right-side accent line — grows on hover */}
              <span
                aria-hidden
                className="h-[2px] w-6 origin-right bg-[#7AA8DC] opacity-70 transition-all duration-300 group-hover:w-10 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* ============================================================ */}
        {/*  CLOSING — single line, low emphasis                         */}
        {/* ============================================================ */}
        <p
          className="reveal relative mx-auto max-w-3xl border-l-2 border-[#2F5DA0] pl-4 text-[12.5px] font-medium leading-[1.6] text-[#1E2C42] sm:text-[13px] lg:pl-5"
          data-reveal
        >
          <span aria-hidden style={{ ...haloStyle, filter: "blur(14px)" }} />
          <span className="relative">
            Tools are means, not ends — I pick what fits the problem and learn
            the rest as I build.
          </span>
        </p>
      </div>
    </Slide>
  );
}