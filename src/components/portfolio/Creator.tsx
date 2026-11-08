
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { ArrowUpRight, Play, Youtube } from "lucide-react";
import { site, youtubeHref } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Counter, Magnetic, Reveal, SectionLabel } from "./primitives";

const FEATURED_VIDEO_ID = "uHoplug1-9Q";

const pillars = [
  { k: "Started", v: "October 20, 2024" },
  { k: "Niche", v: "Christian & faith-based content" },
  { k: "Cadence", v: "Consistent publishing" },
  { k: "Execution", v: "Independent creative direction & editing" },
];

export function Creator() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bigY = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      id="journey"
      aria-labelledby="journey-title"
      className="relative overflow-hidden py-28 md:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_40%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_70%)]"
      />

      {/* Oversized watermark */}
      <motion.div
        aria-hidden
        style={reduce ? {} : { y: bigY }}
        className="pointer-events-none absolute inset-x-0 top-10 -z-10 select-none text-center text-[34vw] font-semibold leading-none tracking-[-0.06em] text-foreground/[0.025]"
      >
        415K
      </motion.div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel index="06" label="Creator Journey" />

        {/* The two columns resize around the hovered video */}
        <motion.div
          layout
          className={cn(
            "mt-10 grid grid-cols-1 items-center gap-12 transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:gap-8",
            "lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]",
            isVideoHovered &&
              "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.65fr)]",
          )}
        >
          {/* Creator information */}
          <motion.div layout className="min-w-0">
            <Reveal>
              <p className="font-serif text-2xl italic text-muted-foreground md:text-3xl">
                Joel's Gospel Inspirations
              </p>
            </Reveal>

            <h2 id="journey-title" className="mt-2">
              <span
                className={cn(
                  "block font-semibold leading-[0.85] tracking-[-0.06em] text-chrome transition-all duration-500",
                  isVideoHovered
                    ? "text-[clamp(3.5rem,8vw,8rem)]"
                    : "text-[clamp(5rem,16vw,13rem)]",
                )}
              >
                <Counter to={415} suffix="K+" />
              </span>
              <span className="mt-3 block text-xl text-foreground/90 md:text-2xl">
                subscribers, built independently.
              </span>
            </h2>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl leading-relaxed text-muted-foreground">
                A Christian content YouTube channel I started on October 20,
                2024 and run end-to-end — creative direction, editing and
                visual presentation of every upload.
              </p>
            </Reveal>

            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {pillars.map((p, i) => (
                <Reveal
                  key={p.k}
                  delay={i * 0.06}
                  className="bg-background p-5"
                >
                  <dt className="label-mono">{p.k}</dt>
                  <dd className="mt-2 text-foreground">{p.v}</dd>
                </Reveal>
              ))}
            </dl>

            {/* Channel milestones */}
            <Reveal delay={0.15} className="mt-10">
              <div className="relative h-px w-full bg-border">
                <motion.span
                  className="absolute left-0 top-0 h-full origin-left bg-accent-gradient"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ width: "100%" }}
                />
                <span className="absolute -top-1.5 left-0 h-3 w-3 rounded-full border border-primary bg-background" />
                <span className="absolute -top-1.5 right-0 h-3 w-3 rounded-full bg-primary shadow-glow" />
              </div>

              <div className="mt-4 flex justify-between text-sm">
                <div>
                  <div className="label-mono">Oct 20, 2024</div>
                  <div className="mt-1 text-foreground/80">Channel launched</div>
                </div>
                <div className="text-right">
                  <div className="label-mono">Today</div>
                  <div className="mt-1 text-foreground/80">
                    415K+ subscribers
                  </div>
                </div>
              </div>
            </Reveal>
          </motion.div>

          {/* Expandable YouTube video and channel card */}
          <motion.div
            layout
            style={reduce ? {} : { y: cardY }}
            className="min-w-0"
          >
            <div
              className={cn(
                "glass relative overflow-hidden rounded-[2rem] p-2.5 shadow-deep",
                "transition-shadow duration-700",
                isVideoHovered &&
                  "shadow-[0_24px_80px_rgba(0,0,0,0.45)]",
              )}
              onMouseEnter={() => setIsVideoHovered(true)}
              onMouseLeave={() => setIsVideoHovered(false)}
              onFocusCapture={() => setIsVideoHovered(true)}
              onBlurCapture={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget as Node | null,
                  )
                ) {
                  setIsVideoHovered(false);
                }
              }}
              tabIndex={0}
              aria-label="Featured Joel's Gospel Inspirations video. Hover or focus to play."
            >
              {/* Video frame */}
              <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-black">
                {!isVideoHovered && (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${FEATURED_VIDEO_ID}/hqdefault.jpg`}
                      alt="Featured Joel's Gospel Inspirations video thumbnail"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white shadow-xl backdrop-blur-md transition-transform duration-500">
                        <Play className="ml-1 h-6 w-6 fill-current" />
                      </span>
                    </span>
                  </>
                )}

                {isVideoHovered && (
                  <iframe
                    key={FEATURED_VIDEO_ID}
                    src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0`}
                    title="Joel's Gospel Inspirations — Featured Video"
                    className="pointer-events-none absolute inset-0 h-full w-full border-0"
                    allow="autoplay; encrypted-media; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}

                <span
                  className={cn(
                    "absolute left-4 top-4 rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] backdrop-blur-md transition-colors duration-300",
                    isVideoHovered
                      ? "border-primary/40 bg-black/60 text-white"
                      : "border-white/30 bg-black/40 text-white/80",
                  )}
                >
                  {isVideoHovered ? "Now playing" : "Featured video · Hover to play"}
                </span>
              </div>

              {/* Channel identity */}
              <div className="flex items-center gap-4 p-5">
                <img
                  src="/images/jgi-channel-logo.png"
                  alt="Joel's Gospel Inspirations channel logo"
                  width={64}
                  height={64}
                  className="h-14 w-14 shrink-0 rounded-full object-contain ring-1 ring-primary/30"
                />

                <div className="min-w-0 flex-1">
                  <div className="truncate text-lg font-medium">
                    Joel's Gospel Inspirations
                  </div>
                  <div className="text-sm text-muted-foreground">
                    415K+ subscribers · Faith & inspiration
                  </div>
                </div>

                <Youtube
                  className="h-6 w-6 shrink-0 text-destructive"
                  aria-hidden
                />
              </div>

              {/* Channel link */}
              <div className="px-5 pb-5">
                <Magnetic className="w-full">
                  <Button asChild variant="chrome" size="pill" className="w-full">
                    <a
                      href={youtubeHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {site.youtubeChannelUrl
                        ? "Visit the channel"
                        : "Find the channel on YouTube"}
                      <ArrowUpRight />
                    </a>
                  </Button>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
