
import {motion,useReducedMotion,useSpring,useTransform, type MotionValue,} from "motion/react";
import type { ReactNode } from "react";

const waveform = Array.from({ length: 46 }, (_, i) =>
  Math.round(
    5 +
      Math.abs(Math.sin(i * 0.68)) * 14 +
      Math.abs(Math.sin(i * 1.91)) * 5
  )
);

function Track({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[34px_minmax(0,1fr)] items-center gap-2">
      <span className="font-mono text-[9px] tracking-wider text-slate-400">
        {label}
      </span>

      <div className="relative h-[27px] overflow-hidden rounded-md border border-white/[0.07] bg-white/[0.035]">
        {children}
      </div>
    </div>
  );
}

export function EditingTimeline({
  width,
  pointerX,
  pointerY,
}: {
  width: number;
  pointerX: MotionValue<number>;
  pointerY: MotionValue<number>;
}) {
  const reduced = useReducedMotion() ?? false;

  // Follow the same cursor movement as the portrait.
  const rotateX = useSpring(
    useTransform(pointerY, [-1, 1], [1.2, -1.2]),
    { stiffness: 55, damping: 20 }
  );

  const rotateY = useSpring(
    useTransform(pointerX, [-1, 1], [-2.5, 2.5]),
    { stiffness: 55, damping: 20 }
  );

  const moveX = useSpring(
    useTransform(pointerX, [-1, 1], [-5, 5]),
    { stiffness: 55, damping: 20 }
  );

  const moveY = useSpring(
    useTransform(pointerY, [-1, 1], [3, -3]),
    { stiffness: 55, damping: 20 }
  );

  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 1.8 }}
  style={{
    position: "absolute",
    left: 0,
    top: "calc(100% + 1.25rem)",
    width,
    maxWidth: "none",
    transformPerspective: 1400,
    transformOrigin: "top left",
    ...(reduced
      ? {}
      : {
          rotateX,
          rotateY,
          x: moveX,
          y: moveY,
        }),
  }}
  className="z-40 pointer-events-none"
  role="img"
  aria-label="Animated video editing timeline with video, graphics and audio tracks"
>
      <div
        className="relative isolate overflow-hidden rounded-2xl border border-white/15 p-3 sm:p-3.5
        bg-[linear-gradient(145deg,rgba(26,40,61,0.97),rgba(5,10,18,0.98))]
        shadow-[0_20px_60px_rgba(0,0,0,0.65)]
        backdrop-blur-2xl"
        style={{
          transform: "perspective(1400px) rotateX(2deg) rotateY(-1deg)",
          transformOrigin: "center top",
        }}
      >
        {/* Glossy reflection */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-blue-400/[0.04]"
        />

        {/* Header */}
        <div className="relative flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.8)]" />

            <span className="font-mono text-[10px] tracking-[0.17em] text-slate-200">
              EDIT TIMELINE
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 font-mono text-[8px] text-slate-400">
              SEQUENCE 01
            </span>
          </div>

          <span className="font-mono text-[9px] tracking-wider text-slate-400">
            00:16:24
          </span>
        </div>

        {/* Time ruler */}
        <div className="mt-3 grid grid-cols-[34px_minmax(0,1fr)] gap-2">
          <span />
          <div className="flex justify-between border-b border-white/10 pb-1 font-mono text-[8px] text-slate-500">
            {["00:00", "00:02", "00:04", "00:06", "00:08", "00:10"].map(
              (time) => (
                <span key={time}>{time}</span>
              )
            )}
          </div>
        </div>

        {/* Tracks */}
        <div className="relative mt-2 space-y-1.5">

          {/* Moving playhead */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute bottom-0 top-0 z-20 w-px bg-slate-100 shadow-[0_0_12px_rgba(186,214,255,0.9)]"
            animate={
              reduced
                ? { left: "42px" }
                : { left: ["42px", "98%"] }
            }
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 9,
                    repeat: Infinity,
                    ease: "linear",
                  }
            }
          >
            <span className="absolute -left-[3px] -top-[1px] h-[7px] w-[7px] rotate-45 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          </motion.div>

          {/* Video track */}
          <Track label="V1">
            <div className="absolute inset-y-1 left-[1.5%] flex w-[29%] items-center overflow-hidden rounded border border-blue-200/20 bg-gradient-to-r from-[#172f50] to-[#426b9a] px-2">
              <span className="truncate font-mono text-[8px] tracking-wider text-blue-50">
                MAIN FOOTAGE
              </span>
            </div>

            <div className="absolute inset-y-1 left-[32%] flex w-[30%] items-center overflow-hidden rounded border border-blue-200/20 bg-gradient-to-r from-[#213c62] to-[#536f93] px-2">
              <span className="truncate font-mono text-[8px] tracking-wider text-white">
                B-ROLL
              </span>
            </div>

            <div className="absolute inset-y-1 left-[64%] flex w-[33%] items-center overflow-hidden rounded border border-blue-200/20 bg-gradient-to-r from-[#1b3456] to-[#3c587d] px-2">
              <span className="truncate font-mono text-[8px] tracking-wider text-blue-50">
                CINEMATIC CUT
              </span>
            </div>
          </Track>

          {/* Motion graphics track */}
          <Track label="V2">
            <div className="absolute inset-y-1 left-[10%] flex w-[37%] items-center rounded border border-violet-200/20 bg-gradient-to-r from-[#42325f] to-[#66508b] px-2">
              <span className="truncate font-mono text-[8px] tracking-wider text-violet-100">
                TITLE DESIGN
              </span>
            </div>

            {[52, 60, 75, 85].map((position, i) => (
              <span
                key={i}
                className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border border-violet-200 bg-violet-400/70"
                style={{ left: `${position}%` }}
              />
            ))}
          </Track>

          {/* Audio waveform */}
          <Track label="A1">
            <div className="flex h-full items-center gap-[2px] px-2">
              {waveform.map((height, i) => (
                <span
                  key={i}
                  className={`min-w-0 flex-1 rounded-full ${
                    i % 5 === 0
                      ? "bg-blue-200"
                      : "bg-blue-400/65"
                  }`}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </Track>
        </div>

        {/* Footer */}
        <div className="relative mt-2 flex items-center justify-between border-t border-white/[0.08] pt-2">
          <span className="font-mono text-[8px] tracking-wider text-slate-500">
            V1 FOOTAGE · V2 MOTION · A1 AUDIO
          </span>

          <span className="font-mono text-[8px] tracking-wider text-blue-200/70">
            4K · 24 FPS
          </span>
        </div>
      </div>
    </motion.div>
  );
}
