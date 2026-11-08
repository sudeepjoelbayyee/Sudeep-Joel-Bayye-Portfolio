import { toolkit } from "@/lib/site";
import { Reveal, SectionLabel, SplitReveal, TiltCard } from "./primitives";

export function Toolkit() {
  return (
    <section id="toolkit" aria-labelledby="toolkit-title" className="relative py-28 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel index="07" label="Creative Toolkit" />
            <h2 id="toolkit-title" className="mt-6 text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              <SplitReveal text="Tools of" wordClassName="text-chrome" />{" "}
              <span className="font-serif font-normal italic text-muted-foreground">
                <SplitReveal text="the craft." delay={0.15} />
              </span>
            </h2>
          </div>
          <Reveal>
            <p className="max-w-sm text-sm text-muted-foreground">
              The exact software line-up is being confirmed. Each tile will show the real tool once it's verified.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {toolkit.map((t, i) => (
            <Reveal as="li" key={t.category} delay={i * 0.05}>
              <TiltCard max={10} className="glass sheen group flex aspect-[4/5] flex-col justify-between rounded-3xl p-5">
                {/* Embossed chrome badge */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[image:var(--gradient-chrome)] shadow-deep ring-1 ring-foreground/30 [transform:translateZ(30px)] transition-transform duration-500 group-hover:[transform:translateZ(50px)]">
                  <span className="font-mono text-lg font-semibold text-background/80">{t.software ? t.software.slice(0, 2) : t.glyph}</span>
                  <span aria-hidden className="absolute inset-x-2 top-1 h-1/3 rounded-xl bg-foreground/40 blur-[2px]" />
                </div>
                <div>
                  <div className="text-base font-medium leading-tight">{t.software ?? t.category}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    {t.software ? t.category : "Software · TBC"}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
