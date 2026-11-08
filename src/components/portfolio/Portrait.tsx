import { motion, useMotionValue, useSpring, useTransform, useReducedMotion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";
import { easeOutExpo } from "./primitives";
import { EditingTimeline } from "./EditingTimeline";

/** Floating glass enclosure for the portrait, with viewfinder overlay and pointer parallax. */
export function Portrait() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [6, -6]), { stiffness: 80, damping: 20 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-8, 8]), { stiffness: 80, damping: 20 });
  const innerX = useSpring(useTransform(mx, [-1, 1], [-14, 14]), { stiffness: 80, damping: 20 });
  const innerY = useSpring(useTransform(my, [-1, 1], [-10, 10]), { stiffness: 80, damping: 20 });
  const { scrollY } = useScroll();
  const scrollShift = useTransform(scrollY, [0, 800], [0, -80]);

  const [timelineWidth, setTimelineWidth] = useState(420);

useEffect(() => {
  const updateTimelineWidth = () => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const isDesktop = window.matchMedia(
      "(min-width: 1024px)"
    ).matches;

    // Desktop: start at portrait's left edge and extend to screen edge.
    // Mobile/tablet: keep timeline within the portrait container.
    const availableWidth = isDesktop
      ? window.innerWidth - 28 - rect.left
      : rect.width;

    setTimelineWidth(Math.max(0, availableWidth));
  };

  updateTimelineWidth();

  const observer = new ResizeObserver(updateTimelineWidth);

  if (ref.current) {
    observer.observe(ref.current);
  }

  window.addEventListener("resize", updateTimelineWidth);

  // Re-measure after the portrait's entrance scale animation finishes.
  const measureAfterEntrance = window.setTimeout(
    updateTimelineWidth,
    1800
  );

  return () => {
    observer.disconnect();
    window.removeEventListener("resize", updateTimelineWidth);
    window.clearTimeout(measureAfterEntrance);
  };
}, []);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my, reduce]);

  return (
    <motion.div
      ref={ref}
      style={reduce ? {} : { y: scrollShift }}
      initial={{ opacity: 0, scale: 0.92, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.6, delay: 1.7, ease: easeOutExpo }}
      className="relative mx-auto w-full max-w-[420px] [perspective:1200px]"
    >
      {/* Halo */}
      <div aria-hidden className="absolute -inset-10 rounded-full bg-primary/20 blur-[90px]" />

      <motion.div
        style={reduce ? {} : { rotateX: rx, rotateY: ry }}
        className="relative [transform-style:preserve-3d]"
      >
        {/* Back plate for depth */}
        <div
          aria-hidden
          className="glass absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] opacity-60 [transform:translateZ(-60px)]"
        />

        <figure className="glass grain relative aspect-[4/5] overflow-hidden rounded-[2rem] p-2.5">
          <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-graphite">
            <motion.div style={reduce ? {} : { x: innerX, y: innerY, scale: 1.08 }} className="absolute inset-0">
              {site.portrait ? (
                <img
                  src={site.portrait}
                  alt={`Portrait of ${site.name}`}
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
              ) : (
                <PortraitPlaceholder />
              )}
            </motion.div>

            {/* Cinematic light */}
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent mix-blend-screen" />

            {/* Viewfinder overlay */}
            <Viewfinder />
          </div>
          <figcaption className="sr-only">{site.portrait ? `Portrait of ${site.name}` : "Portrait placeholder"}</figcaption>
        </figure>

        {/* Floating chips in front */}
        <div className="glass absolute -left-6 bottom-16 hidden rounded-2xl px-4 py-3 [transform:translateZ(60px)] sm:block">
          <div className="label-mono">Channel</div>
          <div className="mt-1 text-lg font-medium text-chrome-soft">415K+ subs</div>
        </div>
        <div className="glass absolute -right-4 top-10 hidden rounded-full px-4 py-2 [transform:translateZ(80px)] sm:block">
          <span className="font-mono text-[11px] tracking-[0.16em] text-foreground/80">SCENE 01 · TAKE 01</span>
        </div>
      </motion.div>
      {/* Wide editing timeline anchored to portrait */}
<EditingTimeline
  width={timelineWidth}
  pointerX={mx}
  pointerY={my}
/>
    </motion.div>
  );
}

function PortraitPlaceholder() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center bg-atmos">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-60" />
      {/* Concentric lens rings */}
      <div aria-hidden className="absolute inset-0 flex items-center justify-center">
        {[90, 70, 50].map((s) => (
          <span key={s} className="absolute rounded-full border border-foreground/[0.07]" style={{ width: `${s}%`, aspectRatio: "1" }} />
        ))}
      </div>
      <div className="relative text-center">
        <div className="font-serif text-7xl italic text-chrome">SJB</div>
        <div className="mt-3 label-mono">Portrait · awaiting upload</div>
      </div>
    </div>
  );
}

function Viewfinder() {
  const c = "absolute h-6 w-6 border-foreground/60";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-4">
      <span className={`${c} left-0 top-0 border-l border-t`} />
      <span className={`${c} right-0 top-0 border-r border-t`} />
      <span className={`${c} bottom-0 left-0 border-b border-l`} />
      <span className={`${c} bottom-0 right-0 border-b border-r`} />
      <div className="absolute left-3 top-2 flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-foreground/80">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" /> REC
      </div>
      <div className="absolute bottom-2 right-3 font-mono text-[10px] tracking-[0.18em] text-foreground/70">
        A001_C024
      </div>
      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute left-1/2 top-0 h-full w-px bg-foreground/40" />
        <span className="absolute left-0 top-1/2 h-px w-full bg-foreground/40" />
      </div>
    </div>
  );
}
