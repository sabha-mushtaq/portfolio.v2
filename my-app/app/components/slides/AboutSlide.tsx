import { Slide } from "@/app/components/layout/Slide";

const interests = [
  "Product engineering",
  "Backend systems",
  "System architecture",
  "Fintech",
  "Security & reliability",
  "Product strategy",
];

export function AboutSlide() {
  /* Soft text-anchored halo — kills contrast loss against bright watercolor */
  const haloStyle: React.CSSProperties = {
    position: "absolute",
    inset: "-0.35em -0.6em",
    borderRadius: "9999px",
    background:
      "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(250,247,240,0.92) 0%, rgba(250,247,240,0.68) 45%, rgba(250,247,240,0.0) 100%)",
    filter: "blur(16px)",
    pointerEvents: "none",
  };

  return (
    <Slide id="about">
      <div className="grid grid-cols-1 gap-10 pt-24 sm:pt-28 lg:grid-cols-12 lg:gap-14 lg:pt-24">
        {/* ============================================================ */}
        {/*  LEFT — heading + founder chip                               */}
        {/* ============================================================ */}
        <div className="lg:col-span-4">
          {/* Section marker */}
          <div
            className="reveal relative mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#2F5DA0]"
            data-reveal
          >
            <span
              aria-hidden
              style={{ ...haloStyle, filter: "blur(12px)" }}
            />
            <span className="relative font-mono text-[#2F5DA0]">01</span>
            <span className="relative h-px w-8 bg-[#2F5DA0]" />
            <span className="relative">About me</span>
          </div>

          {/* Heading */}
          <h2
            className="reveal relative max-w-md font-serif text-[2rem] font-medium leading-[1.1] tracking-[-0.03em] text-[#0B1B33] sm:text-[2.4rem] lg:text-[2.6rem]"
            data-reveal
          >
            <span aria-hidden style={haloStyle} />
            <span className="relative">
              Curious by nature.
              <br />
              <span className="italic font-normal text-[#2F5DA0]">
                Driven to build.
              </span>
            </span>
          </h2>

          {/* Intro paragraph */}
          <p
            className="reveal relative mt-5 max-w-sm text-[14.5px] font-medium leading-[1.7] text-[#1E2C42]"
            data-reveal
          >
            <span
              aria-hidden
              style={{ ...haloStyle, filter: "blur(18px)" }}
            />
            <span className="relative">
              I&apos;m a developer who enjoys turning problems into products —
              I like building things from the ground up, learning the tools I
              need, and turning good ideas into working software.
            </span>
          </p>

          {/* Founder chip — opaque bg, no halo needed */}
          <div
            className="reveal mt-6 inline-flex items-center gap-2.5 rounded-full border border-[#E5DDD1] bg-[#FBF8F2] px-4 py-2 shadow-[0_8px_24px_-18px_rgba(23,36,58,0.4)]"
            data-reveal
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 flex-none rounded-full"
              style={{
                background: "#7AA8DC",
                boxShadow: "0 0 6px rgba(122,168,220,0.7)",
              }}
            />
            <span className="text-[12.5px] font-semibold text-[#0B1B33]">
              Founder ·{" "}
              <span className="font-serif font-semibold">Sarezo Builds</span>
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/*  RIGHT — two cards + interests                               */}
        {/* ============================================================ */}
        <div className="flex flex-col gap-4 lg:col-span-8">
          {/* Card 1 — What I work with */}
          <div
            className="reveal relative rounded-2xl border border-[#E5DDD1] bg-[#FBF8F2]/95 p-5 pl-6"
            data-reveal
          >
            <span
              aria-hidden
              className="absolute left-0 top-4 bottom-4 w-[3px] rounded-r-full"
              style={{
                background:
                  "linear-gradient(180deg, rgba(122,168,220,0.0), #7AA8DC 25%, #7AA8DC 75%, rgba(122,168,220,0.0))",
              }}
            />
            <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#2F5DA0]">
              What I work with
            </p>
            <p className="mt-2.5 text-[14.5px] font-medium leading-[1.7] text-[#1E2C42]">
              I currently work primarily with{" "}
              <strong className="font-semibold text-[#0B1B33]">
                JavaScript, TypeScript, and Java
              </strong>
              , while strengthening my foundations in{" "}
              <strong className="font-semibold text-[#0B1B33]">
                data structures and algorithms, backend engineering,
                databases, and system design
              </strong>
              . Long-term, I want to build scalable, secure, and reliable
              systems — with a growing interest in fintech.
            </p>
          </div>

          {/* Card 2 — The studio */}
          <div
            className="reveal relative rounded-2xl border border-[#D7CBB8] bg-gradient-to-br from-[#FBF8F2] to-[#F4EEE3] p-5"
            data-reveal
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="h-1.5 w-1.5 flex-none rounded-full"
                style={{
                  background: "#E89A7A",
                  boxShadow: "0 0 6px rgba(232,154,122,0.7)",
                }}
              />
              <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#0B1B33]">
                The studio
              </p>
            </div>
            <p className="mt-2 font-serif text-[17px] font-semibold text-[#0B1B33]">
              Sarezo Builds
            </p>
            <p className="mt-2 text-[14.5px] font-medium leading-[1.7] text-[#1E2C42]">
              A product studio where I explore ideas, build software, launch
              products, and work toward turning promising ideas into
              sustainable businesses.
            </p>
          </div>

          {/* Interests — flat chips */}
          <div className="reveal mt-1" data-reveal>
            <p className="mb-3 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#2F5DA0]">
              Interests
            </p>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span
                  key={interest}
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5DDD1] bg-[#FBF8F2]/95 px-3.5 py-1.5 text-[12.5px] font-semibold text-[#0B1B33] transition-colors duration-300 hover:border-[#B8CBE0] hover:bg-white"
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{
                      backgroundColor:
                        index % 2 === 0 ? "#7AA8DC" : "#E89A7A",
                    }}
                  />
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/*  CLOSING — full width                                        */}
        {/* ============================================================ */}
        <div className="lg:col-span-12">
          <p
            className="reveal relative mx-auto max-w-3xl border-l-2 border-[#2F5DA0] pl-5 font-serif text-[1.05rem] italic leading-[1.6] text-[#0B1B33] sm:text-[1.2rem] lg:text-[1.35rem] lg:pl-6"
            data-reveal
          >
            <span
              aria-hidden
              style={{ ...haloStyle, filter: "blur(20px)" }}
            />
            <span className="relative">
              Solve meaningful problems. Build useful products. Turn good
              ideas into sustainable businesses.
            </span>
          </p>
        </div>
      </div>
    </Slide>
  );
}