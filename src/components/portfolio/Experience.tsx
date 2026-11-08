import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { experience } from "@/lib/site";
import { Reveal, SectionLabel, SplitReveal, TiltCard } from "./primitives";

export function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="experience" aria-labelledby="exp-title" className="relative py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionLabel index="05" label="Experience" />
            <h2 id="exp-title" className="mt-6 text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              <SplitReveal text="The journey" wordClassName="text-chrome" />{" "}
              <span className="font-serif font-normal italic text-muted-foreground">
                <SplitReveal text="so far." delay={0.15} />
              </span>
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-muted-foreground">
                From building an audience independently to cutting trailers for a podcast brand — each role sharpened
                how I think about timing and story.
              </p>
            </Reveal>
          </div>
        </div>

        <ol ref={ref} className="relative space-y-6 lg:col-span-8 lg:pl-14">
          {/* Track */}
          <span aria-hidden className="absolute bottom-0 left-[11px] top-0 hidden w-px bg-border lg:block" />
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute bottom-0 left-[11px] top-0 hidden w-px origin-top bg-gradient-to-b from-primary-glow via-primary to-transparent lg:block"
          />

          {experience.map((e, i) => (
            <Reveal as="li" key={e.org} delay={i * 0.05} className="relative">
              <span
                aria-hidden
                className="absolute -left-14 top-9 hidden h-[23px] w-[23px] items-center justify-center rounded-full border border-primary/50 bg-background lg:flex"
              >
                <span className="h-2 w-2 rounded-full bg-primary shadow-glow" />
              </span>

              <TiltCard max={3} className="glass sheen group rounded-3xl p-7 md:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-primary">TC 0{i + 1}:00:00:00</span>
                  <span className="label-mono">{e.duration}</span>
                </div>
                <h3 className="mt-6 text-3xl font-semibold uppercase tracking-[-0.02em] text-chrome md:text-4xl">{e.org}</h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-foreground/90">
                  <span>{e.role}</span>
                  <span className="h-1 w-1 rounded-full bg-foreground/30" aria-hidden />
                  <span className="text-muted-foreground">{e.period}</span>
                </div>
                <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{e.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {e.focus.map((f) => (
                    <li key={f} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70 transition-colors duration-300 group-hover:border-primary/30">
                      {f}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
