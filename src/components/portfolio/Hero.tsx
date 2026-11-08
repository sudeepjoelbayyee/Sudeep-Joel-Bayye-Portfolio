import { ClientOnly } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { lazy, Suspense, useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Instagram, Mail, Youtube } from "lucide-react";
import { site, youtubeHref } from "@/lib/site";
import { scrollToId } from "@/lib/scroll";
import { Button } from "@/components/ui/button";
import { Magnetic, SplitReveal, easeOutExpo } from "./primitives";
import { Portrait } from "./Portrait";

const HeroScene = lazy(() => import("./HeroScene"));

function Scene() {
  const reduce = useReducedMotion() ?? false;
  const [mobile, setMobile] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setMobile(window.matchMedia("(max-width: 767px)").matches);
    // Let the hero text paint first, then bring in the 3D layer.
    const id = window.setTimeout(() => setReady(true), 400);
    return () => window.clearTimeout(id);
  }, []);
  if (!ready) return null;
  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0, scale: 1.08 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.4, delay: 1.2, ease: easeOutExpo }}
    >
      <Suspense fallback={null}>
        <HeroScene reduced={reduce} mobile={mobile} />
      </Suspense>
    </motion.div>
  );
}

function FuturisticNameLine({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span
      className="futuristic-name-line"
      style={{ animationDelay: `${delay}ms` }}
      aria-label={text}
    >
      <span className="futuristic-name-scan" aria-hidden="true" />

      {Array.from(text).map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="futuristic-name-char"
          style={{ animationDelay: `${delay + index * 55}ms` }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 700], [0, 120]);
  const fade = useTransform(scrollY, [0, 600], [1, 0.2]);
  const base = 1.5; // after loader

  return (
    <section
  id="home"
  aria-label="Introduction"
  className="relative isolate min-h-[100svh] overflow-hidden"
  style={{ minHeight: "calc(100svh + 240px)" }}
>
      {/* Atmosphere */}
      <div aria-hidden className="absolute inset-0 -z-20 bg-atmos" />
      <div aria-hidden className="absolute inset-0 -z-20 grid-lines mask-fade-b opacity-70" />
      <div aria-hidden className="absolute inset-0 -z-10">
        <ClientOnly>
          <Scene />
        </ClientOnly>
      </div>
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pt-28">
        <motion.div style={reduce ? {} : { y: textY, opacity: fade }} className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: base, ease: easeOutExpo }}
            className="glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4"
          >
            <span className="relative flex h-2 w-2 rounded-full bg-success animate-pulse-dot" />
            <span className="text-xs text-foreground/80">
              {site.available ? "Available for new projects" : "Currently booked"}
            </span>
          </motion.div>

          <h1
  className="mt-7 font-sans text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]"
  aria-label="Sudeep Joel Bayye"
>
  <FuturisticNameLine text="SUDEEP JOEL" delay={150} />
  <FuturisticNameLine text="BAYYE" delay={650} />
</h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: base + 0.55, ease: easeOutExpo }}
            className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-foreground/90 sm:text-lg"
          >
            <span>{site.role}</span>
            <span className="h-1 w-1 rounded-full bg-primary" aria-hidden />
            <span>{site.roleSecondary}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: base + 0.7, ease: easeOutExpo }}
            className="mt-4 max-w-xl font-serif text-2xl italic leading-snug text-muted-foreground sm:text-[1.7rem]"
          >
            {site.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: base + 0.85, ease: easeOutExpo }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Button variant="chrome" size="pill" onClick={() => scrollToId("work")}>
                Explore My Work <ArrowDownRight className="h-4 w-4 transition-transform group-hover:rotate-[-45deg]" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="glass" size="pill" onClick={() => scrollToId("contact")}>
                Let's Work Together <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Magnetic>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: base + 1.05 }}
            className="mt-10 flex items-center gap-2"
            aria-label="Social links"
          >
            {[
              { href: site.instagramUrl, label: "Instagram", Icon: Instagram },
              { href: youtubeHref, label: "YouTube — Joel's Gospel Inspirations", Icon: Youtube },
              { href: `mailto:${site.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
            <li className="ml-3 hidden label-mono sm:block">Open to remote collaboration</li>
          </motion.ul>
        </motion.div>

        <div className="lg:col-span-5 flex flex-col items-center gap-8">
  {/* Your existing portrait */}
  <Portrait />
</div>
      </div>

      {/* Scroll cue */}
      <motion.button
        type="button"
        onClick={() => scrollToId("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: base + 1.4, duration: 1 }}
        className="absolute bottom-[240px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-label="Scroll to About"
      >
        <span className="label-mono">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-foreground/15">
          <motion.span
            className="absolute left-0 top-0 h-1/2 w-full bg-foreground"
            animate={reduce ? {} : { y: ["-100%", "200%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.button>
    </section>
  );
}
