import { Slide } from "@/app/components/layout/Slide";
import { Mail, Github, Linkedin } from "@/app/components/icons";

export function ContactSlide() {
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
    <Slide id="contact">
      <div className="grid grid-cols-1 gap-6 pt-16 sm:pt-20 lg:pt-16">
        {/* ============================================================ */}
        {/*  MAIN PLATE                                                  */}
        {/* ============================================================ */}
        <div className="relative overflow-hidden rounded-2xl border border-[#E5DDD1] bg-[#FBF8F2] px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* Soft corner washes — restrained, no heavy blur */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full opacity-90"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, #EAF1F8 0%, rgba(234,241,248,0) 70%)",
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full opacity-80"
            style={{
              background:
                "radial-gradient(circle at 60% 60%, rgba(232,154,122,0.16) 0%, rgba(232,154,122,0) 70%)",
            }}
          />

          <div className="relative text-center">
            {/* Eyebrow */}
            <span
              className="reveal relative mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5DDD1] bg-white/80 px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#2F5DA0]"
              data-reveal
            >
              <span aria-hidden style={{ ...haloStyle, filter: "blur(10px)" }} />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[#7AA8DC]" />
              <span className="relative">Let&apos;s build</span>
            </span>

            {/* Headline */}
            <h2
              className="reveal relative mx-auto max-w-3xl font-serif text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] text-[#0B1B33] sm:text-[2.6rem] lg:text-[3.4rem]"
              data-reveal
            >
              <span aria-hidden style={haloStyle} />
              <span className="relative">
                Have an idea
                <br />
                <span className="italic font-normal text-[#2F5DA0]">
                  worth building?
                </span>
              </span>
            </h2>

            {/* Subcopy */}
            <p
              className="reveal relative mx-auto mt-5 max-w-xl text-[13.5px] font-medium leading-[1.65] text-[#1E2C42] sm:text-[14.5px]"
              data-reveal
            >
              <span aria-hidden style={{ ...haloStyle, filter: "blur(14px)" }} />
              <span className="relative">
                Whether it&apos;s a product, a technical problem, or an
                interesting collaboration, I&apos;m always interested in
                building something meaningful.
              </span>
            </p>

            {/* CTAs */}
            <div
              className="reveal relative mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8"
              data-reveal
            >
              <a
                href="mailto:techexpert723@gmail.com"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#17243A] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_25px_-12px_rgba(23,36,58,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#293D5B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527FB7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>

              <a
                href="https://github.com/sabha-mushtaq"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#B9AE9C] bg-[#FBF8F2] px-5 py-2.5 text-[13px] font-semibold text-[#17243A] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7AA8DC] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527FB7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
              >
                <Github className="h-4 w-4" />
                View GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/*  FOOTER — flat, three-part editorial strip                   */}
        {/* ============================================================ */}
        <div className="relative flex flex-col items-center gap-4 border-t border-[#E5DDD1] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="font-serif text-[14px] font-semibold text-[#0B1B33]">
              Sabha Mushtaq
            </span>
            <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#536071]">
              Founder · Sarezo Builds
            </span>
          </div>

          <span className="hidden text-[11px] font-medium uppercase tracking-[0.22em] text-[#536071] sm:inline">
            Building software, systems &amp; ideas.
          </span>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/sabha-mushtaq"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5DDD1] text-[#536071] transition-colors duration-200 hover:border-[#B8CBE0] hover:text-[#0B1B33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527FB7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
            >
              <Github className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://linkedin.com/in/sabha-mushtaq"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5DDD1] text-[#536071] transition-colors duration-200 hover:border-[#B8CBE0] hover:text-[#0B1B33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527FB7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
            <a
              href="mailto:hello@sabhamushtaq.com"
              aria-label="Email"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5DDD1] text-[#536071] transition-colors duration-200 hover:border-[#B8CBE0] hover:text-[#0B1B33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#527FB7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF8F2]"
            >
              <Mail className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <span className="text-center text-[10.5px] font-medium text-[#9AA2AF]">
          © 2026 Sabha Mushtaq
        </span>
      </div>
    </Slide>
  );
}