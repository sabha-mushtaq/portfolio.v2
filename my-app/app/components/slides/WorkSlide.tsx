import { Slide } from "@/app/components/layout/Slide";

/* ================================================================== */
/*  DATA                                                              */
/* ================================================================== */

type ProjectStatus =
  | "In development"
  | "Prototype"
  | "Technical exploration"
  | "Completed";

type ProjectLink = { label: string; href: string };

type Project = {
  id: string;
  name: string;
  category: string;
  status: ProjectStatus;
  description: string;
  engineeringFocus: string;
  tech: string[];
  preview: "finance" | "education" | "attendance";
  accent: string;
  links: ProjectLink[];
};

const PROJECTS: Project[] = [
  {
    id: "prudentum",
    name: "Prudentum",
    category: "Personal Finance",
    status: "In development",
    description:
      "Offline-first personal finance exploring transactions, multi-currency, voice entry, and optional sync.",
    engineeringFocus: "Offline-first architecture and sync.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Expo"],
    preview: "finance",
    accent: "#7AA8DC",
    links: [],
  },
  {
    id: "stuquo",
    name: "StuQuo",
    category: "Education Infrastructure",
    status: "In development",
    description:
      "Modular learning platform exploring reusable systems, assessments, APIs, and analytics.",
    engineeringFocus: "Modular assessment systems and data modelling.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis","MongoDb"],
    preview: "education",
    accent: "#7AA8DC",
    links: [],
  },
  {
    id: "touchtrack",
    name: "TouchTrack",
    category: "Mobile · Attendance",
    status: "Technical exploration",
    description:
      "Mobile attendance exploring device identity and verification workflows to reduce proxy attendance.",
    engineeringFocus: "Device identity and verification workflows.",
    tech: ["Expo", "Node.js", "MongoDB","Express"],
    preview: "attendance",
    accent: "#E89A7A",
    links: [],
  },
];

/* ================================================================== */
/*  STATUS CHIP                                                       */
/* ================================================================== */

const STATUS_STYLE: Record<ProjectStatus, { bg: string; dot: string }> = {
  "In development":         { bg: "rgba(122,168,220,0.16)", dot: "#7AA8DC" },
  "Prototype":              { bg: "rgba(232,154,122,0.16)", dot: "#E89A7A" },
  "Technical exploration":  { bg: "rgba(232,154,122,0.16)", dot: "#E89A7A" },
  "Completed":              { bg: "rgba(104,168,131,0.16)", dot: "#68A883" },
};

function StatusChip({ status }: { status: ProjectStatus }) {
  const s = STATUS_STYLE[status];
  return (
    <span
      className="inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-[2px] text-[9.5px] font-bold uppercase tracking-[0.1em] text-[#0B1B33]"
      style={{ background: s.bg }}
    >
      <span
        aria-hidden
        className="h-1 w-1 flex-none rounded-full"
        style={{ background: s.dot }}
      />
      {status}
    </span>
  );
}

/* ================================================================== */
/*  PREVIEW ART — shorter aspect (16/7), same illustrations           */
/* ================================================================== */

function PreviewArt({
  variant,
  accent,
}: {
  variant: Project["preview"];
  accent: string;
}) {
  return (
    <div
      className="relative aspect-[16/7] w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F4EEE3 0%, #FBF8F2 60%, #F4EEE3 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(23,36,58,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23,36,58,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "18px 18px",
        }}
      />

      {variant === "finance" && (
        <svg viewBox="0 0 320 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <g stroke="#0B1B33" strokeOpacity="0.55" strokeWidth="1.2" fill="none" strokeLinecap="round">
            <rect x="40" y="30" width="240" height="22" rx="5" />
            <rect x="40" y="60" width="240" height="22" rx="5" />
            <rect x="40" y="90" width="240" height="22" rx="5" />
            <line x1="220" y1="37" x2="266" y2="37" />
            <line x1="220" y1="67" x2="266" y2="67" />
            <line x1="220" y1="97" x2="266" y2="97" />
            <circle cx="55" cy="41" r="3" />
            <circle cx="55" cy="71" r="3" />
            <circle cx="55" cy="101" r="3" />
          </g>
          <circle cx="284" cy="24" r="5" fill="none" stroke={accent} strokeWidth="1.3" />
          <circle cx="284" cy="24" r="1.7" fill={accent} />
        </svg>
      )}

      {variant === "education" && (
        <svg viewBox="0 0 320 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <g stroke="#0B1B33" strokeOpacity="0.55" strokeWidth="1.2" fill="none" strokeLinecap="round">
            <rect x="48" y="34" width="64" height="34" rx="5" />
            <rect x="128" y="34" width="64" height="34" rx="5" />
            <rect x="208" y="34" width="64" height="34" rx="5" />
            <rect x="48" y="76" width="64" height="34" rx="5" />
            <rect x="128" y="76" width="64" height="34" rx="5" />
            <rect x="208" y="76" width="64" height="34" rx="5" />
            <path d="M112 51 H128" />
            <path d="M192 51 H208" />
            <path d="M112 93 H128" />
            <path d="M192 93 H208" />
          </g>
          <rect x="128" y="76" width="64" height="34" rx="5" fill="none" stroke={accent} strokeWidth="1.5" />
        </svg>
      )}

      {variant === "attendance" && (
        <svg viewBox="0 0 320 140" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <g stroke="#0B1B33" strokeOpacity="0.55" strokeWidth="1.2" fill="none" strokeLinecap="round">
            <rect x="136" y="16" width="48" height="108" rx="8" />
            <line x1="150" y1="24" x2="170" y2="24" />
            <path d="M148 74 L156 82 L172 62" strokeWidth="1.8" stroke={accent} />
            <circle cx="160" cy="74" r="22" stroke={accent} strokeOpacity="0.5" />
            <circle cx="160" cy="74" r="32" stroke={accent} strokeOpacity="0.25" />
          </g>
        </svg>
      )}

      <span className="absolute bottom-1.5 right-2.5 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-[#7A8497]">
        Concept preview
      </span>
    </div>
  );
}

/* ================================================================== */
/*  CARD                                                              */
/* ================================================================== */

function ProjectCard({ project }: { project: Project }) {
  const hasLink = project.links.length > 0;
  const Wrapper: "a" | "article" = hasLink ? "a" : "article";

  return (
    <Wrapper
      {...(hasLink
        ? {
            href: project.links[0].href,
            target: project.links[0].href.startsWith("http") ? "_blank" : undefined,
            rel: project.links[0].href.startsWith("http") ? "noreferrer" : undefined,
          }
        : {})}
      className={`reveal group relative flex flex-col overflow-hidden rounded-2xl border border-[#E5DDD1] bg-[#FBF8F2] transition-all duration-300 ${
        hasLink
          ? "hover:-translate-y-1 hover:border-[#B8CBE0] hover:shadow-[0_20px_45px_-25px_rgba(23,36,58,0.45)]"
          : ""
      }`}
      data-reveal
    >
      <PreviewArt variant={project.preview} accent={project.accent} />

      <div className="flex flex-1 flex-col p-3.5">
        {/* Category + status */}
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-[9.5px] font-bold uppercase tracking-[0.14em] text-[#2F5DA0]">
            {project.category}
          </p>
          <StatusChip status={project.status} />
        </div>

        {/* Title + description */}
        <h3 className="mt-1.5 font-serif text-[1.05rem] font-semibold leading-tight text-[#0B1B33]">
          {project.name}
        </h3>
        <p className="mt-1 text-[12px] font-medium leading-[1.55] text-[#1E2C42]">
          {project.description}
        </p>

        {/* Focus + tech in a single condensed row */}
        <p className="mt-2 text-[11px] font-medium leading-[1.5] text-[#2F5DA0]">
          <span className="text-[9.5px] font-bold uppercase tracking-[0.12em]">
            Focus ·{" "}
          </span>
          {project.engineeringFocus}
        </p>

        <div className="mt-2.5 flex flex-wrap gap-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[#E5DDD1] bg-white/70 px-1.5 py-[1px] text-[9.5px] font-semibold text-[#0B1B33]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action row — smaller, single line */}
        <div className="mt-3 flex items-center">
          {project.links.length === 0 && (
            <span className="text-[10px] font-semibold text-[#7A8497]">
              Case study coming soon
            </span>
          )}
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0B1B33] underline-offset-4 transition-colors hover:text-[#2F5DA0] hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-12 bottom-0 w-[3px] rounded-r-full opacity-70"
        style={{
          background: `linear-gradient(180deg, ${project.accent}00, ${project.accent} 30%, ${project.accent} 70%, ${project.accent}00)`,
        }}
      />
    </Wrapper>
  );
}

/* ================================================================== */
/*  WORKSLIDE                                                         */
/* ================================================================== */

export function WorkSlide() {
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
    <Slide id="work">
      <div className="grid grid-cols-1 gap-5 pt-16 sm:pt-20 lg:pt-16">
        {/* Header */}
        <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div className="relative">
            <div
              className="reveal relative mb-2.5 flex items-center gap-3 text-[10.5px] font-bold uppercase tracking-[0.22em] text-[#2F5DA0]"
              data-reveal
            >
              <span aria-hidden style={{ ...haloStyle, filter: "blur(10px)" }} />
              <span className="relative font-mono text-[#2F5DA0]">03</span>
              <span className="relative h-px w-6 bg-[#2F5DA0]" />
              <span className="relative">Selected work</span>
            </div>

            <h2
              className="reveal relative max-w-xl font-serif text-[1.5rem] font-medium leading-[1.1] tracking-[-0.03em] text-[#0B1B33] sm:text-[1.8rem] lg:text-[2rem]"
              data-reveal
            >
              <span aria-hidden style={haloStyle} />
              <span className="relative">
                Projects shaped by problems{" "}
                <span className="italic font-normal text-[#2F5DA0]">
                  worth solving.
                </span>
              </span>
            </h2>
          </div>

          <p
            className="reveal relative max-w-md text-[12.5px] font-medium leading-[1.6] text-[#1E2C42] lg:pb-1"
            data-reveal
          >
            <span aria-hidden style={{ ...haloStyle, filter: "blur(16px)" }} />
            <span className="relative">
              Exploring product development, backend engineering, and the
              systems behind useful software.
            </span>
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Closing */}
        <div>
          <p
            className="reveal relative mx-auto max-w-3xl border-l-2 border-[#2F5DA0] pl-4 font-serif text-[0.95rem] italic leading-[1.5] text-[#0B1B33] sm:text-[1.05rem] lg:text-[1.15rem] lg:pl-5"
            data-reveal
          >
            <span aria-hidden style={{ ...haloStyle, filter: "blur(18px)" }} />
            <span className="relative">
              I care about the engineering behind the product — from the first
              data model to the decisions that make software reliable and
              useful.
            </span>
          </p>
        </div>
      </div>
    </Slide>
  );
}