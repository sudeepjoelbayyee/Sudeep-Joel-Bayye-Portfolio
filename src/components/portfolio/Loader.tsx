import { AnimatePresence, motion, animate } from "motion/react";
import { useEffect, useState } from "react";
import { easeOutExpo } from "./primitives";
import { site } from "@/lib/site";

/** Short cinematic intro: a timecode counts up, then the frame wipes away. */
export function Loader() {
  const [done, setDone] = useState(false);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDone(true);
      return;
    }
    const c = animate(0, 100, {
      duration: 1.3,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setFrame(Math.round(v)),
      onComplete: () => setTimeout(() => setDone(true), 180),
    });
    return () => c.stop();
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          role="status"
          aria-label="Loading portfolio"
          className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-graphite"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.9, ease: easeOutExpo }}
        >
          <div className="flex items-center gap-3 label-mono">
            <span className="h-2 w-2 rounded-full bg-destructive animate-pulse" /> REC
          </div>
          <div className="mt-6 whitespace-nowrap font-serif text-[clamp(1.5rem,6vw,4rem)] italic tracking-tight text-chrome">{site.name}</div>
          <div className="mt-8 h-px w-56 overflow-hidden bg-foreground/10">
            <div className="h-full bg-accent-gradient" style={{ width: `${frame}%` }} />
          </div>
          <div className="mt-4 font-mono text-xs tabular-nums tracking-[0.2em] text-muted-foreground">
            00:00:{String(Math.floor(frame / 25)).padStart(2, "0")}:{String(frame % 25).padStart(2, "0")}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
