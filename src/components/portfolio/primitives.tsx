import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  useInView,
  animate,
  type HTMLMotionProps,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode, type PointerEvent } from "react";
import { cn } from "@/lib/utils";

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/** Fade-and-rise reveal when scrolled into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
}) {
  const Comp = motion[as] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1, delay, ease: easeOutExpo }}
    >
      {children}
    </Comp>
  );
}

/** Masked, word-by-word headline reveal. */
export function SplitReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.06,
  immediate = false,
}: {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  immediate?: boolean;
}) {
  const words = text.split(" ");
  const animateProps = { y: "0%", opacity: 1 };
  return (
    <span className={cn("inline", className)} aria-label={text} role="text">
      {words.map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={cn("inline-block", wordClassName)}
            initial={{ y: "110%", opacity: 0 }}
            {...(immediate
              ? { animate: animateProps }
              : { whileInView: animateProps, viewport: { once: true, margin: "-8% 0px" } })}
            transition={{ duration: 1.1, delay: delay + i * stagger, ease: easeOutExpo }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Element that gently follows the pointer (desktop). */
export function Magnetic({
  children,
  strength = 0.3,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn("inline-block", className)}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
    </motion.div>
  );
}

/** 3D tilt with a glossy light reflection that tracks the pointer. */
export function TiltCard({
  children,
  className,
  max = 8,
  ...rest
}: { children: ReactNode; className?: string; max?: number } & HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 160, damping: 18 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 160, damping: 18 });
  const glare = useTransform(
    [px, py],
    ([gx, gy]) =>
      `radial-gradient(420px circle at ${(gx as number) * 100}% ${(gy as number) * 100}%, color-mix(in oklab, var(--foreground) 12%, transparent), transparent 45%)`,
  );
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      {...rest}
      className={cn("relative [transform-style:preserve-3d]", className)}
      style={reduce ? {} : { rotateX: rx, rotateY: ry, transformPerspective: 1100 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => {
        setHover(false);
        px.set(0.5);
        py.set(0.5);
      }}
    >
      {children}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500"
        style={{ opacity: hover ? 1 : 0, background: glare }}
      />
    </motion.div>
  );
}

/** Timecode-style section marker, e.g. "SC.02 — About". */
export function SectionLabel({ index, label, className }: { index: string; label: string; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
      <span className="label-mono">
        SC.{index} <span className="mx-1 text-foreground/30">/</span> {label}
      </span>
    </div>
  );
}

/** Counts up to a value once visible. */
export function Counter({
  to,
  suffix = "",
  duration = 2.2,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration,
      ease: easeOutExpo,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
