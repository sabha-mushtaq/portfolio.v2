import { Slide } from "@/app/components/layout/Slide";
import { WHAT_I_BUILD } from "@/lib/data/whatIBuild";

export function BuildSlide() {
  return (
    <Slide id="build">
      <div className="flex flex-col gap-8 lg:gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="reveal mb-5 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-600 lg:mb-6" data-reveal>
              <span className="font-mono text-slate-500">02</span>
              <span className="h-px w-8 bg-slate-500/70" />
              <span>Capabilities</span>
            </div>
            <h2 className="reveal font-serif text-3xl font-normal leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl" data-reveal>What I build</h2>
          </div>
          <p className="reveal max-w-sm text-sm text-slate-700" data-reveal>Systems, products and infrastructure designed with intention.</p>
        </div>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 md:grid-cols-6 lg:gap-4">
          {WHAT_I_BUILD.map((card, i) => {
            const Icon = card.icon;
            const spans = ["md:col-span-3","md:col-span-3","md:col-span-2","md:col-span-2","md:col-span-2"];
            return (
              <div key={card.id}
                className={`reveal group relative overflow-hidden rounded-3xl border border-white/80 bg-white/70 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_20px_50px_-20px_rgba(30,60,110,0.3)] sm:col-span-1 ${spans[i]}`}
                data-reveal>
                <div className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br ${card.accent} opacity-90 blur-3xl transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/90 bg-white/90 text-slate-700 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-slate-500">{card.id}</span>
                </div>
                <h3 className="relative mt-5 font-serif text-xl tracking-tight text-slate-900 lg:text-[1.35rem]">{card.title}</h3>
                <p className="relative mt-2 text-[13.5px] leading-relaxed text-slate-700">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Slide>
  );
}