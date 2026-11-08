import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal, SectionLabel, SplitReveal, TiltCard } from "./primitives";

/* ---------- Custom visuals, one per discipline ---------- */

function TimelineVisual() {
  const reduce = useReducedMotion();
  const tracks = [
    [{ w: 28, o: 0 }, { w: 18, o: 32 }, { w: 30, o: 54 }],
    [{ w: 40, o: 8 }, { w: 22, o: 52 }],
    [{ w: 14, o: 0 }, { w: 26, o: 18 }, { w: 12, o: 48 }, { w: 24, o: 64 }],
  ];
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-graphite/70 p-5">
      <div className="mb-3 flex justify-between font-mono text-[9px] tracking-[0.2em] text-muted-foreground">
        {["00:00", "00:05", "00:10", "00:15", "00:20"].map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <div className="space-y-2.5">
        {tracks.map((clips, ti) => (
          <div key={ti} className="relative h-8 rounded-md bg-foreground/[0.03]">
            {clips.map((c, ci) => (
              <motion.div
                key={ci}
                className={cn(
                  "absolute top-0 h-full rounded-md border",
                  ti === 0 && "border-primary/50 bg-primary/25",
                  ti === 1 && "border-foreground/25 bg-foreground/10",
                  ti === 2 && "border-primary-glow/30 bg-primary-glow/10",
                )}
                style={{ left: `${c.o}%`, width: `${c.w}%` }}
                animate={reduce ? {} : { x: [0, ti % 2 ? -6 : 6, 0] }}
                transition={{ duration: 5 + ti, repeat: Infinity, ease: "easeInOut", delay: ci * 0.3 }}
              />
            ))}
          </div>
        ))}
      </div>
      <motion.div
        aria-hidden
        className="absolute bottom-3 top-9 w-px bg-foreground shadow-glow"
        initial={{ left: "12%" }}
        animate={reduce ? {} : { left: ["12%", "88%", "12%"] }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      >
        <span className="absolute -left-1.5 -top-1.5 h-3 w-3 rotate-45 bg-foreground" />
      </motion.div>
    </div>
  );
}

function MotionVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-graphite/70">
      <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full" aria-hidden>
        <motion.path
          d="M10 100 C 60 100, 70 20, 120 20 S 180 60, 190 30"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        {(
          [
            [10, 100],
            [120, 20],
            [190, 30],
          ] as const
        ).map(([x, y], i) => (
          <rect key={i} x={x - 4} y={y - 4} width="8" height="8" transform={`rotate(45 ${x} ${y})`} fill="var(--foreground)" />
        ))}
      </svg>
      <motion.div
        className="relative h-14 w-14 rounded-full bg-[image:var(--gradient-chrome)] shadow-deep"
        animate={reduce ? {} : { x: [-50, 40, -50], y: [20, -18, 20], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 6, repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
      />
    </div>
  );
}

function TrailerVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-graphite">
      <div className="absolute inset-x-0 top-0 h-[18%] bg-graphite z-10" />
      <div className="absolute inset-x-0 bottom-0 h-[18%] bg-graphite z-10" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_45%,transparent),transparent_60%)]"
        animate={reduce ? {} : { opacity: [0.4, 1, 0.3, 0.9, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 h-px w-[140%] -translate-y-1/2 bg-gradient-to-r from-transparent via-primary-glow to-transparent"
        animate={reduce ? {} : { x: ["-60%", "10%"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
      />
      <div className="relative z-20 flex h-full items-center justify-center">
        <span className="font-serif text-2xl italic tracking-wide text-chrome md:text-3xl">this&nbsp;season</span>
      </div>
      <span className="absolute bottom-[20%] right-4 z-20 font-mono text-[9px] tracking-[0.2em] text-muted-foreground">2.39 : 1</span>
    </div>
  );
}

function VfxVisual() {
  return (
    <div className="group/vfx relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-graphite/70 [perspective:700px]">
      <div className="relative h-24 w-36 [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(-35deg)]">
        {["Plate", "Matte", "FX", "Grade"].map((l, i) => (
          <div
            key={l}
            className={cn(
              "absolute inset-0 flex items-end justify-end rounded-lg border p-1.5 font-mono text-[8px] uppercase tracking-[0.2em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform:translateZ(var(--z))] group-hover:[transform:translateZ(var(--zh))]",
              i === 0 && "border-foreground/30 bg-foreground/10",
              i === 1 && "border-foreground/25 bg-foreground/5",
              i === 2 && "border-primary/60 bg-primary/20",
              i === 3 && "border-primary-glow/40 bg-primary-glow/10",
            )}
            style={{ "--z": `${i * 10}px`, "--zh": `${i * 26}px` } as CSSProperties}
          >
            <span className="text-foreground/70">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


/* ---------- Software UI animations ---------- */

function AfterEffectsUI() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#17151f] p-3">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="font-mono text-[9px] tracking-wider text-white/70">AFTER EFFECTS</span>
        <span className="rounded bg-purple-500/20 px-2 py-0.5 text-[8px] text-purple-300">COMPOSITION</span>
      </div>

      <div className="grid h-[58%] grid-cols-[1fr_1.15fr] gap-2 py-3">
        <div className="flex flex-col gap-1.5 rounded bg-black/30 p-2">
          <span className="font-mono text-[7px] text-white/40">PROJECT</span>
          {["Main Comp", "Particles", "Light Sweep", "Typography"].map((item, i) => (
            <div key={item} className="flex items-center gap-1.5 text-[8px] text-white/60">
              <span className={cn("h-1.5 w-1.5 rounded-sm", i % 2 ? "bg-fuchsia-400" : "bg-purple-400")} />
              {item}
            </div>
          ))}
        </div>

        <div className="relative flex items-center justify-center overflow-hidden rounded border border-white/10 bg-[#252033]">
          <motion.div
            className="absolute h-16 w-16 rounded-full border border-purple-300/70"
            animate={reduce ? {} : { scale: [0.75, 1.15, 0.75], opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-fuchsia-600 shadow-[0_0_25px_rgba(168,85,247,0.4)]"
            animate={reduce ? {} : { rotate: [0, 90, 180, 270, 360], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-xs font-bold text-white">Ae</span>
          </motion.div>
          <motion.div
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-purple-300 to-transparent"
            animate={reduce ? {} : { y: [-45, 45] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      <div className="border-t border-white/10 pt-2">
        <div className="mb-1 flex justify-between font-mono text-[7px] text-white/40">
          <span>TIMELINE</span><span>00:00 — 00:12</span>
        </div>
        {[
          "w-[82%] bg-purple-500/70",
          "w-[65%] bg-fuchsia-500/60",
          "w-[90%] bg-indigo-400/60",
        ].map((width, i) => (
          <div key={i} className="relative mb-1 h-2 overflow-hidden rounded-sm bg-white/5">
            <div className={cn("h-full rounded-sm", width)} />
          </div>
        ))}
        <motion.div
          className="absolute bottom-3 top-[43%] w-px bg-white shadow-[0_0_7px_white]"
          animate={reduce ? {} : { left: ["18%", "88%", "18%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}

function PremiereProUI() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#17191f] p-3">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="font-mono text-[9px] tracking-wider text-white/70">PREMIERE PRO</span>
        <span className="rounded bg-violet-500/20 px-2 py-0.5 text-[8px] text-violet-300">EDIT SEQUENCE</span>
      </div>

      <div className="relative mt-3 flex h-[43%] items-center justify-center overflow-hidden rounded border border-white/10 bg-gradient-to-br from-[#34304c] via-[#171b2b] to-black">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
        <motion.div
          className="relative h-12 w-20 overflow-hidden rounded border border-violet-300/40 bg-gradient-to-br from-violet-500/50 to-blue-500/20"
          animate={reduce ? {} : { scale: [1, 1.08, 1], x: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute bottom-2 left-2 h-5 w-5 rounded-full bg-white/20 blur-[1px]" />
          <div className="absolute bottom-0 right-0 h-8 w-10 skew-x-[-25deg] bg-white/10" />
        </motion.div>
        <span className="absolute bottom-1.5 right-2 font-mono text-[7px] text-white/50">PROGRAM MONITOR</span>
      </div>

      <div className="mt-3">
        <div className="mb-1 flex justify-between font-mono text-[7px] text-white/40">
          <span>SEQUENCE 01</span><span>00:00:24:18</span>
        </div>
        {[
          ["w-[82%] bg-violet-500/70", "w-[13%] left-[84%] bg-violet-500/40"],
          ["w-[55%] bg-cyan-400/50", "w-[38%] left-[57%] bg-cyan-400/30"],
          ["w-[76%] bg-blue-400/50"],
        ].map((clips, i) => (
          <div key={i} className="relative mb-1.5 h-3 rounded-sm bg-white/5">
            {clips.map((clip) => (
              <div key={clip} className={cn("absolute top-0 h-full rounded-[2px]", clip)} />
            ))}
          </div>
        ))}
        <motion.div
          className="absolute bottom-3 top-[48%] w-px bg-white shadow-[0_0_7px_white]"
          animate={reduce ? {} : { left: ["15%", "90%", "15%"] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </div>
  );
}

function BlenderUI() {
  const reduce = useReducedMotion();

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#17191b] p-3">
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <span className="font-mono text-[9px] tracking-wider text-white/70">BLENDER</span>
        <span className="rounded bg-orange-500/20 px-2 py-0.5 text-[8px] text-orange-300">3D VIEWPORT</span>
      </div>

      <div className="relative mt-3 flex h-[55%] items-center justify-center overflow-hidden rounded border border-white/10 bg-[#20262a]">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)", backgroundSize: "18px 18px", transform: "perspective(100px) rotateX(15deg) scale(1.4)" }} />
        <motion.div
          className="relative h-14 w-14 rounded-lg border border-orange-200/70 bg-gradient-to-br from-orange-300 via-orange-500 to-amber-800 shadow-[0_0_25px_rgba(249,115,22,0.25)]"
          style={{ transformStyle: "preserve-3d" }}
          animate={reduce ? {} : { rotateX: [25, 385], rotateY: [0, 360] }}
          transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-lg border border-white/30" />
        </motion.div>
        <span className="absolute left-2 top-2 font-mono text-[7px] text-white/40">USER PERSPECTIVE</span>
        <span className="absolute bottom-2 right-2 font-mono text-[7px] text-orange-300/70">XYZ</span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="font-mono text-[7px] text-white/40">TIMELINE</span>
        <div className="relative h-2 flex-1 overflow-hidden rounded bg-white/10">
          <motion.div
            className="h-full w-1/3 rounded bg-orange-500/70"
            animate={reduce ? {} : { x: ["0%", "200%", "0%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="font-mono text-[7px] text-white/40">120</span>
      </div>
    </div>
  );
}

function CapCutUI() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#15171b] p-3">
      <div className="relative h-[94%] w-[72%] max-w-[190px] overflow-hidden rounded-[20px] border-[3px] border-[#45474c] bg-[#08090c] p-2 shadow-xl">
        <div className="flex items-center justify-between px-1 pb-2">
          <span className="font-mono text-[8px] text-white/70">CapCut</span>
          <span className="text-[7px] text-white/40">9:16</span>
        </div>

        <div className="relative flex h-[48%] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-slate-700 via-indigo-950 to-black">
          <motion.div
            className="absolute h-12 w-12 rounded-full bg-cyan-300/20 blur-xl"
            animate={reduce ? {} : { scale: [0.7, 1.3, 0.7], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="relative h-9 w-9 rounded-full border border-white/60 bg-white/10"
            animate={reduce ? {} : { y: [3, -4, 3], scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="absolute bottom-1.5 text-[6px] tracking-widest text-white/60">PREVIEW</span>
        </div>

        <div className="mt-2 flex justify-between font-mono text-[6px] text-white/40">
          <span>00:08</span><span>00:15</span><span>00:30</span>
        </div>

        <div className="relative mt-1 space-y-1.5">
          <div className="flex h-3 gap-0.5 overflow-hidden">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex-1 rounded-[2px] bg-cyan-400/50" />
            ))}
          </div>
          <div className="h-2 w-[78%] rounded-[2px] bg-violet-400/60" />
          <div className="h-2 w-[58%] rounded-[2px] bg-emerald-400/50" />
          <motion.div
            className="absolute -top-1 bottom-0 left-1/2 w-px bg-white shadow-[0_0_5px_white]"
            animate={reduce ? {} : { left: ["5%", "95%", "5%"] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="mt-3 flex justify-around text-[7px] text-white/50">
          <span>✂</span><span>♪</span><span>T</span><span>FX</span><span>↗</span>
        </div>
      </div>
    </div>
  );
}



function SoundVisual() {
  const reduce = useReducedMotion();

  const bars = [
    20, 35, 52, 32, 68, 85, 48, 30, 60, 92, 70, 42,
    24, 58, 80, 46, 32, 72, 95, 55, 38, 65, 42, 22,
  ];

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-graphite/70 p-5">
      <div className="absolute inset-x-5 top-1/2 h-px bg-border/70" />

      <div className="relative flex h-[75%] w-full items-center justify-center gap-1">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            className="w-1.5 rounded-full bg-gradient-to-t from-primary/40 via-primary to-primary-glow shadow-[0_0_10px_color-mix(in_oklab,var(--primary)_25%,transparent)]"
            style={{ height: `${height}%` }}
            animate={
              reduce
                ? {}
                : {
                    scaleY: [0.55, 1, 0.7, 1, 0.55],
                  }
            }
            transition={{
              duration: 1.2 + (i % 5) * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.035,
            }}
          />
        ))}
      </div>

      <div className="absolute bottom-3 left-5 right-5 flex justify-between font-mono text-[8px] tracking-[0.18em] text-muted-foreground">
        <span>MUSIC</span>
        <span>SOUND FX</span>
        <span>AMBIENCE</span>
      </div>
    </div>
  );
}


/* ---------- Cards ---------- */

type Card = { n: string; title: string; body: string; visual: ReactNode; className: string };


const cards: Card[] = [
  {
    n: "01",
    title: "Video Editing & Visual Storytelling",
    body: "Transforming raw footage into compelling stories through precise cuts, rhythm, pacing and structure — making every moment meaningful.",
    visual: <TimelineVisual />,
    className: "md:col-span-4",
  },
  {
    n: "02",
    title: "Motion Graphics",
    body: "Typography, shapes and transitions animated with intention to clarify ideas and elevate brands.",
    visual: <MotionVisual />,
    className: "md:col-span-2",
  },
  {
    n: "03",
    title: "Cinematic Trailers",
    body: "Promotional cuts built on tension, timing and music — designed to make people press play.",
    visual: <TrailerVisual />,
    className: "md:col-span-2",
  },
  {
    n: "04",
    title: "Basic VFX",
    body: "Compositing and finishing touches that blend seamlessly into the edit without stealing focus.",
    visual: <VfxVisual />,
    className: "md:col-span-2",
  },
  {
    n: "05",
    title: "Sound Designing",
    body: "Layering music, sound effects, ambience and dialogue to create atmosphere, emotion and a more immersive viewing experience.",
    visual: <SoundVisual />,
    className: "md:col-span-2",
  },
];


export function Expertise() {
  const software = [
  {
    name: "After Effects",
    short: "Ae",
    category: "MOTION GRAPHICS",
    description: "Animation & compositing",
    accent: "from-purple-500/20 to-transparent",
  },
  {
    name: "Premiere Pro",
    short: "Pr",
    category: "VIDEO EDITING",
    description: "Editing & post-production",
    accent: "from-violet-500/20 to-transparent",
  },
  {
    name: "Blender",
    short: "Bl",
    category: "3D & VFX",
    description: "3D design & animation",
    accent: "from-orange-500/20 to-transparent",
  },
  {
    name: "CapCut Mobile",
    short: "Cc",
    category: "MOBILE EDITING",
    description: "Short-form video editing",
    accent: "from-cyan-500/20 to-transparent",
  },
];
  return (
    <section id="expertise" aria-labelledby="expertise-title" className="relative py-28 md:py-36">
      <div aria-hidden className="absolute inset-0 -z-10 bg-atmos opacity-60" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel index="03" label="Expertise" />
            <h2 id="expertise-title" className="mt-6 text-[clamp(2.4rem,5.5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
              <SplitReveal text="What I do" wordClassName="text-chrome" />{" "}
              <span className="font-serif font-normal italic text-muted-foreground">
                <SplitReveal text="best." delay={0.2} />
              </span>
            </h2>
          </div>
          <Reveal>
            <p className="max-w-sm text-muted-foreground">
              Five disciplines, one goal — turning raw footage into work that feels considered, cinematic and alive.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-4 md:grid-cols-6">
          {cards.map((c, i) => (
            <Reveal as="li" key={c.n} delay={i * 0.06} className={c.className}>
              <TiltCard max={5} className="glass sheen group flex h-full flex-col rounded-3xl p-3">
                <div className="h-48 md:h-56">{c.visual}</div>
                <div className="flex flex-1 flex-col p-4 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="label-mono">{c.n}</span>
                    <span className="h-px flex-1 mx-4 bg-border transition-colors duration-500 group-hover:bg-primary/50" />
                  </div>
                  <h3 className="mt-4 text-2xl font-medium tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
                </ul>

        
{/* Software & Tools */}
<div className="mt-24">
  <Reveal>
    <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
      <div>
        <span className="label-mono">MY CREATIVE TOOLKIT</span>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Software &{" "}
          <span className="font-serif font-normal italic text-muted-foreground">
            tools.
          </span>
        </h3>
      </div>
      <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
        The creative software I use for editing, motion design, 3D and visual effects.
      </p>
    </div>
  </Reveal>

  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {[
      { name: "After Effects", category: "MOTION GRAPHICS", visual: <AfterEffectsUI /> },
      { name: "Premiere Pro", category: "VIDEO EDITING", visual: <PremiereProUI /> },
      { name: "Blender", category: "3D & VFX", visual: <BlenderUI /> },
      { name: "CapCut Mobile", category: "MOBILE EDITING", visual: <CapCutUI /> },
    ].map((tool, i) => (
      <Reveal key={tool.name} delay={i * 0.08}>
        <TiltCard
          max={5}
          className="glass sheen group flex h-full flex-col rounded-3xl p-3"
        >
          <div className="h-48 w-full">{tool.visual}</div>
          <div className="flex flex-1 flex-col p-4 pt-5">
            <div className="flex items-center justify-between">
              <span className="label-mono">0{i + 1}</span>
              <span className="h-px flex-1 mx-4 bg-border transition-colors duration-500 group-hover:bg-primary/50" />
            </div>
            <span className="mt-4 label-mono text-muted-foreground">
              {tool.category}
            </span>
            <h4 className="mt-2 text-xl font-medium tracking-tight">
              {tool.name}
            </h4>
          </div>
        </TiltCard>
      </Reveal>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
