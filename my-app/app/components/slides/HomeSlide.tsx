"use client";

import { Slide } from "@/app/components/layout/Slide";
import { ArrowRight, ArrowUpRight } from "@/app/components/icons";

export function HomeSlide() {
  const navigateTo = (index: number) => {
    const container = document.querySelector(
      ".no-scrollbar"
    ) as HTMLElement | null;

    if (container) {
      container.scrollTo({
        left: index * window.innerWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <Slide id="home">
      {/* Top margin: pushes all content down from the navbar (~96-128px) */}
      <div className="grid grid-cols-1 gap-12 pt-6 sm:pt-10 lg:grid-cols-12 lg:gap-8 lg:pt-4">
        {/* ============================================================ */}
        {/*  MAIN TEXT COLUMN                                            */}
        {/* ============================================================ */}
        <div className="relative lg:col-span-8">
          {/* ===== Watercolor paper tile — sits BEHIND the text only ==== */}
          {/* Irregular corners + soft edges + no shadow. Reads as a    */}
          {/* torn swatch of ivory paper, not a UI card.                */}
          <div
            aria-hidden
            className="pointer-events-none absolute -z-10"
            style={{
              inset: "-1.5rem -2rem -2rem -2.5rem",
              background: `
                radial-gradient(120% 100% at 30% 30%, rgba(250,247,240,0.94) 0%, rgba(251,248,242,0.82) 40%, rgba(251,248,242,0.55) 65%, rgba(251,248,242,0.00) 92%)
              `,
              borderRadius: "42% 58% 52% 48% / 55% 45% 58% 42%",
              filter: "blur(28px)",
            }}
          />

          {/* ---------------- Eyebrow ---------------- */}
          <p
            className="reveal relative mb-6 inline-block text-[12px] font-bold uppercase tracking-[0.20em] text-[#17243A]"
            data-reveal
          >
            <span className="relative z-10">Hi, I&apos;m Sabha Mushtaq.</span>
            {/* Hand-drawn brushstroke under the eyebrow */}
            <svg
              aria-hidden
              className="absolute -bottom-1 left-0 h-[6px] w-full"
              viewBox="0 0 200 6"
              preserveAspectRatio="none"
            >
              <path
                d="M2 3.2 Q 40 1.2, 90 3 T 198 2.5"
                fill="none"
                stroke="#527FB7"
                strokeWidth="1.6"
                strokeLinecap="round"
                opacity="0.85"
              />
            </svg>
          </p>

          {/* ---------------- Headline ---------------- */}
          <h1
            className="reveal relative max-w-4xl font-serif text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.03em] text-[#0F1F38] sm:text-[3.6rem] md:text-[4.3rem] lg:text-[4.8rem] xl:text-[5.4rem]"
            data-reveal
          >
            I turn ideas into
            <br />
            <span className="relative inline-block">
              {/* Hand-painted swash behind the italic word */}
              <svg
                aria-hidden
                className="pointer-events-none absolute -bottom-1 -left-1 -z-0 h-[0.28em] w-[calc(100%+0.5rem)]"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q 60 2, 120 7 T 198 5"
                  fill="none"
                  stroke="#7AA8DC"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              </svg>
              <span className="relative z-10 italic font-normal text-[#3E6BA8]">
                software
              </span>
            </span>
            <span className="italic font-normal text-[#3E6BA8]">.</span>
          </h1>

          {/* ---------------- Paragraph 1 ---------------- */}
          <p
            className="reveal relative mt-8 max-w-2xl text-[17px] font-medium leading-[1.75] text-[#1E2C42] sm:text-[18px] sm:leading-[1.8]"
            data-reveal
          >
            {/* Thin vertical accent bar — like a margin note */}
            <span
              aria-hidden
              className="absolute -left-4 top-1 bottom-1 hidden w-[2px] rounded-full sm:block"
              style={{
                background:
                  "linear-gradient(180deg, rgba(82,127,183,0.0) 0%, rgba(82,127,183,0.5) 20%, rgba(82,127,183,0.5) 80%, rgba(82,127,183,0.0) 100%)",
              }}
            />
            I&apos;m a developer who enjoys building software from the ground
            up, understanding how systems work, and turning real-world
            problems into useful products.
          </p>

          {/* ---------------- Paragraph 2 ---------------- */}
          <p
            className="reveal relative mt-4 max-w-2xl text-[17px] font-medium leading-[1.75] text-[#1E2C42] sm:text-[18px] sm:leading-[1.8]"
            data-reveal
          >
            <span
              aria-hidden
              className="absolute -left-4 top-1 bottom-1 hidden w-[2px] rounded-full sm:block"
              style={{
                background:
                  "linear-gradient(180deg, rgba(82,127,183,0.0) 0%, rgba(82,127,183,0.5) 20%, rgba(82,127,183,0.5) 80%, rgba(82,127,183,0.0) 100%)",
              }}
            />
            I&apos;m particularly interested in financial technology, backend
            engineering, and system design. I enjoy understanding complex
            problems, designing reliable systems, and turning ideas into
            practical software products.
          </p>

          {/* ---------------- Actions ---------------- */}
          <div
            className="reveal mt-9 flex flex-wrap items-center gap-4"
            data-reveal
          >
            <button
              onClick={() => navigateTo(2)}
              className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-[#17243A] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(23,36,58,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#293D5B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527FB7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F0]"
            >
              Explore my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => navigateTo(4)}
              className="group inline-flex min-h-12 items-center gap-2 rounded-full border border-[#B9AE9C] bg-[#FBF8F2] px-6 py-3 text-sm font-semibold text-[#17243A] shadow-[0_8px_24px_-14px_rgba(23,36,58,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#527FB7] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527FB7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F0]"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/*  SUPPORTING CARDS                                            */}
        {/* ============================================================ */}
        <div className="hidden lg:col-span-4 lg:flex lg:items-center">
          <div className="relative flex min-h-[360px] w-full items-center justify-center">
            {/* Watercolor bloom behind cards */}
            <div
              aria-hidden="true"
              className="absolute h-64 w-64 rounded-full opacity-60 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 35% 35%, rgba(122,168,220,0.28), rgba(232,154,122,0.12) 55%, transparent 75%)",
              }}
            />

            <div className="relative w-full max-w-xs space-y-4">
              {/* Card 1 — Currently building */}
              <div className="group/card relative rounded-2xl border border-[#E5DDD1] bg-[#FBF8F2] p-5 shadow-[0_12px_35px_-24px_rgba(23,36,58,0.4)] transition-transform duration-300 hover:-translate-y-0.5">
                {/* Tiny pigment corner — a stray brush dab */}
                <span
                  aria-hidden
                  className="absolute -top-1 -right-1 h-6 w-6 rounded-full opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 40%, rgba(122,168,220,0.55), rgba(122,168,220,0.0) 70%)",
                    filter: "blur(2px)",
                  }}
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#17243A]">
                 Founded
                </p>
                <p className="mt-2 font-serif text-xl font-semibold text-[#0F1F38]">
                  Sarezo build
                </p>
                <p className="mt-1 text-[14px] font-medium leading-[1.65] text-[#1E2C42]">
                  software product studio.
                </p>
              </div>

              {/* Card 2 — Engineering interests */}
              <div className="group/card relative ml-8 rounded-2xl border border-[#E5DDD1] bg-[#FBF8F2] p-5 shadow-[0_12px_35px_-24px_rgba(23,36,58,0.35)] transition-transform duration-300 hover:-translate-y-0.5">
                <span
                  aria-hidden
                  className="absolute -top-1 -right-1 h-6 w-6 rounded-full opacity-70"
                  style={{
                    background:
                      "radial-gradient(circle at 40% 40%, rgba(232,154,122,0.55), rgba(232,154,122,0.0) 70%)",
                    filter: "blur(2px)",
                  }}
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#17243A]">
                  Engineering interests
                </p>
                <p className="mt-2 text-[14px] font-semibold leading-[1.7] text-[#0F1F38]">
                  Backend systems
                  <span className="mx-2 text-[#527FB7]">/</span>
                  System design
                  <span className="mx-2 text-[#E07A5F]">/</span>
                  Product engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}