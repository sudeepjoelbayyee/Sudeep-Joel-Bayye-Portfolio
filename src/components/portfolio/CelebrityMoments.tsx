
import { motion, useReducedMotion } from "motion/react";
import { ImagePlus } from "lucide-react";
import { Reveal, SectionLabel, SplitReveal } from "./primitives";

type Moment = {
  id: string;
  image: string;
  label: string;
  alt: string;
  rotate: number;
  offset: number;
};

const moments: Moment[] = [
  { id: "01", image: "", label: "MOMENT 01", alt: "Celebrity photograph 01", rotate: -4, offset: 12 },
  { id: "02", image: "", label: "MOMENT 02", alt: "Celebrity photograph 02", rotate: 3, offset: -8 },
  { id: "03", image: "", label: "MOMENT 03", alt: "Celebrity photograph 03", rotate: -2, offset: 18 },
  { id: "04", image: "", label: "MOMENT 04", alt: "Celebrity photograph 04", rotate: 5, offset: -14 },
  { id: "05", image: "", label: "MOMENT 05", alt: "Celebrity photograph 05", rotate: -3, offset: 8 },
  { id: "06", image: "", label: "MOMENT 06", alt: "Celebrity photograph 06", rotate: 4, offset: 16 },
  { id: "07", image: "", label: "MOMENT 07", alt: "Celebrity photograph 07", rotate: -5, offset: -10 },
  { id: "08", image: "", label: "MOMENT 08", alt: "Celebrity photograph 08", rotate: 2, offset: 14 },
  { id: "09", image: "", label: "MOMENT 09", alt: "Celebrity photograph 09", rotate: 4, offset: -12 },
  { id: "10", image: "", label: "MOMENT 10", alt: "Celebrity photograph 10", rotate: -3, offset: 10 },
];

export function CelebrityMoments() {
  const reduce = useReducedMotion();

  return (
    <section
      id="moments"
      aria-labelledby="moments-title"
      className="relative overflow-hidden py-28 md:py-36"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-atmos opacity-60"
      />

      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/[0.06] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section heading */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel index="05" label="Personal Moments" />

            <h2
              id="moments-title"
              className="mt-6 text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.9] tracking-[-0.045em]"
            >
              <SplitReveal
                text="Beyond the"
                wordClassName="text-chrome"
              />{" "}
              <span className="font-serif font-normal italic text-muted-foreground">
                <SplitReveal text="frame." delay={0.15} />
              </span>
            </h2>
          </div>

          <Reveal className="md:col-span-5">
            <p className="max-w-md text-muted-foreground">
              A collection of memorable encounters, special moments and
              experiences beyond the editing timeline.
            </p>
          </Reveal>
        </div>

        {/* Floating photo gallery */}
        <div
          className="mt-16 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-7 lg:gap-y-20"
          style={{ perspective: "1600px" }}
        >
          {moments.map((moment, index) => (
            <motion.article
              key={moment.id}
              initial={{
                opacity: 0,
                y: moment.offset + 35,
                rotate: moment.rotate,
              }}
              whileInView={{
                opacity: 1,
                y: moment.offset,
                rotate: moment.rotate,
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={
                reduce
                  ? undefined
                  : {
                      y: moment.offset - 14,
                      rotateX: -5,
                      rotateY: index % 2 === 0 ? 5 : -5,
                      rotate: 0,
                      scale: 1.045,
                      z: 45,
                    }
              }
              transition={{
                duration: 0.7,
                delay: index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="group relative min-w-0"
            >
              {/* Photo frame */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-graphite shadow-[0_15px_45px_rgba(0,0,0,0.3)] transition-colors duration-500 group-hover:border-primary/50 md:rounded-3xl">

                {moment.image ? (
                  <img
                    src={moment.image}
                    alt={moment.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  /* Empty image placeholder */
                  <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#242631] via-[#15171e] to-[#090a0e]">

                    {/* Technical grid */}
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />

                    {/* Ambient light */}
                    <motion.div
                      aria-hidden
                      className="absolute h-32 w-32 rounded-full bg-primary/20 blur-3xl"
                      animate={
                        reduce
                          ? {}
                          : {
                              scale: [0.8, 1.3, 0.8],
                              opacity: [0.3, 0.65, 0.3],
                            }
                      }
                      transition={{
                        duration: 5 + index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] text-primary/80 backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-primary/50 group-hover:text-primary">
                        <ImagePlus className="h-5 w-5" />
                      </div>

                      <span className="font-mono text-[8px] tracking-[0.22em] text-white/45 md:text-[9px]">
                        ADD PHOTO
                      </span>
                    </div>

                    {/* Corner details */}
                    <span className="absolute left-3 top-3 h-3 w-3 border-l border-t border-primary/50" />
                    <span className="absolute right-3 top-3 h-3 w-3 border-r border-t border-primary/50" />
                    <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-primary/50" />
                    <span className="absolute bottom-3 right-3 h-3 w-3 border-b border-r border-primary/50" />
                  </div>
                )}

                {/* Cinematic bottom gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Image identification */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-3 md:p-4">
                  <span className="font-mono text-[8px] tracking-[0.16em] text-white/75 md:text-[9px]">
                    {moment.label}
                  </span>

                  <span className="font-mono text-[8px] text-white/50">
                    {moment.id}
                  </span>
                </div>

                {/* Hover border */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-primary/0 transition-all duration-500 group-hover:border-primary/40 md:rounded-3xl" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom caption */}
        <Reveal delay={0.2}>
          <div className="mt-16 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-border" />
            <span className="font-mono text-[9px] tracking-[0.22em] text-muted-foreground">
              10 MOMENTS · MORE TO COME
            </span>
            <span className="h-px w-10 bg-border" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
