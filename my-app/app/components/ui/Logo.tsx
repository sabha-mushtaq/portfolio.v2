export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`group/logo inline-flex items-center gap-3 ${className}`}
      aria-label="Sabha Mushtaq"
    >
      {/* Monogram */}
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        {/* Soft watercolor wash */}
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full opacity-70 blur-md transition-opacity duration-500 group-hover/logo:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(126,174,224,0.65), rgba(126,174,224,0.12) 65%, transparent 80%)",
          }}
        />

        {/* Refined monogram frame */}
        <span
          aria-hidden="true"
          className="absolute inset-[2px] rounded-full border transition-transform duration-500 group-hover/logo:rotate-6"
          style={{
            borderColor: "rgba(45,65,96,0.25)",
          }}
        />

        {/* Ink-blue monogram */}
        <span
          className="relative font-serif text-[23px] leading-none tracking-[-0.06em] text-slate-900"
          style={{
            textShadow: "0 1px 0 rgba(255,255,255,0.8)",
          }}
        >
          S
        </span>

        {/* Small coral signature accent */}
        <span
          aria-hidden="true"
          className="absolute bottom-[3px] right-[1px] h-[9px] w-[9px] rounded-full border-2 border-[#f8f3eb]"
          style={{ backgroundColor: "#e89a7a" }}
        />
      </span>

      {/* Wordmark */}
      <span className="flex flex-col justify-center">
        <span className="font-serif text-[1.2rem] font-medium leading-[1.05] tracking-[-0.035em] text-[#17243a] transition-colors duration-300 group-hover/logo:text-[#527fb7]">
          Sabha
        </span>

        <span className="mt-[5px] font-sans text-[8px] font-medium uppercase leading-none tracking-[0.28em] text-[#64748b]">
          Mushtaq
        </span>

        {/* Editorial underline */}
        <span
          aria-hidden="true"
          className="mt-[5px] h-px w-0 transition-all duration-500 group-hover/logo:w-full"
          style={{
            background:
              "linear-gradient(90deg, #7aa8dc 0%, #e89a7a 100%)",
          }}
        />
      </span>
    </span>
  );
}