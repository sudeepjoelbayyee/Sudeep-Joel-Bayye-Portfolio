import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from "motion/react";
import { useRef } from "react";
import { Reveal, SectionLabel } from "./primitives";

type TextSegment = {
  text: string;
  className?: string;
};

function Word({
  word,
  progress,
  range,
  className,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);

  return (
    <motion.span style={{ opacity }} className={`inline ${className ?? ""}`}>
      {word}
    </motion.span>
  );
}

function ScrubParagraph({ segments }: { segments: TextSegment[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 45%"],
  });

  const totalWords = segments.reduce(
    (total, segment) => total + (segment.text.match(/\S+/g)?.length ?? 0),
    0
  );

  if (reduce) {
    return (
      <p ref={ref} className="text-lg leading-relaxed text-muted-foreground">
        {segments.map((segment, i) => (
          <span key={i} className={segment.className}>
            {segment.text}
          </span>
        ))}
      </p>
    );
  }

  let wordIndex = 0;

  return (
    <p ref={ref} className="text-lg leading-relaxed text-muted-foreground">
      {segments.map((segment, segmentIndex) =>
        (segment.text.match(/\s+|\S+/g) ?? []).map((part, partIndex) => {
          if (/^\s+$/.test(part)) return part;

          const index = wordIndex++;

          return (
            <Word
              key={`${segmentIndex}-${partIndex}`}
              word={part}
              progress={scrollYProgress}
              range={[
                index / totalWords,
                (index + 1) / totalWords,
              ]}
              className={segment.className}
            />
          );
        })
      )}
    </p>
  );
}

const specialties = ["Motion Graphics", "Cinematic Trailers", "Video Editing", "Basic VFX", "Visual Storytelling"];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel index="02" label="About" />
        <h2 id="about-title" className="sr-only">About Sudeep Joel Bayye</h2>

        <div className="mt-20 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="font-serif text-3xl italic leading-tight text-chrome-soft md:text-4xl">
              Motion. Timing. <span className="text-accent-gradient">Story.</span>
            </div>
            <div className="mt-4 label-mono">— The three things every edit balances</div>
          </Reveal>

          <div className="space-y-6 md:col-span-7">
  <ScrubParagraph
    segments={[
      {
        text: "I'm Sudeep Joel Bayye",
        className: "text-foreground",
      },
      {
        text: ", a video editor with 2+ years of creative experience, passionate about transforming ideas into compelling visual experiences. My work revolves around motion graphics, cinematic trailers, creative editing, and visual storytelling.",
      },
    ]}
  />

  <ScrubParagraph
    segments={[
      {
        text: "From independently building a YouTube community of over ",
      },
      {
        text: "415K subscribers",
        className: "text-foreground",
      },
      {
        text: " to working on promotional trailers for ",
      },
      {
        text: "Honest Townhall",
        className: "text-foreground",
      },
      {
        text: ", I've developed an understanding of how visuals, timing, motion, and storytelling work together to capture attention.",
      },
    ]}
  />
</div>
        </div>


      </div>

      {/* Specialisation marquee */}
      <div className="mt-16 overflow-hidden border-y border-border py-6 mask-fade-x" aria-hidden>
        <div className="flex w-max animate-marquee gap-12">
          {[...specialties, ...specialties, ...specialties, ...specialties].map((s, i) => (
            <span key={i} className="flex items-center gap-12 whitespace-nowrap text-3xl font-medium tracking-tight text-foreground/25 md:text-5xl">
              {i % 2 === 0 ? s : <em className="font-serif font-normal text-foreground/40">{s}</em>}
              <span className="h-2 w-2 rounded-full bg-primary/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
