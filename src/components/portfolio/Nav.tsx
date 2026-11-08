import { AnimatePresence, motion, useScroll, useSpring, useMotionValueEvent } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { scrollToId } from "@/lib/scroll";
import { cn } from "@/lib/utils";
import { easeOutExpo } from "./primitives";

function useActiveSection() {
  const [active, setActive] = useState<string>("home");
  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    // Sections not in the nav map to their nearest nav parent.
    const alias: Record<string, string> = { journey: "experience", toolkit: "experience" };
    const els = [...ids, ...Object.keys(alias)]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(alias[e.target.id] ?? e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return active;
}

function Timecode() {
  const { scrollY } = useScroll();
  const [tc, setTc] = useState("00:00:00:00");
  useMotionValueEvent(scrollY, "change", (v) => {
    const frames = Math.floor(v / 6);
    const f = frames % 25;
    const s = Math.floor(frames / 25) % 60;
    const m = Math.floor(frames / 1500) % 60;
    setTc(`00:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`);
  });
  return <span className="font-mono text-[11px] tabular-nums tracking-[0.14em] text-muted-foreground">{tc}</span>;
}

export function Nav() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  const gmailComposeUrl = new URL("https://mail.google.com/mail/");
gmailComposeUrl.searchParams.set("view", "cm");
gmailComposeUrl.searchParams.set("fs", "1");
gmailComposeUrl.searchParams.set("to", site.email);

const gmailAccountChooserUrl = new URL(
  "https://accounts.google.com/AccountChooser"
);

gmailAccountChooserUrl.searchParams.set("service", "mail");
gmailAccountChooserUrl.searchParams.set(
  "continue",
  gmailComposeUrl.toString()
);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.6, ease: easeOutExpo }}
        className="fixed inset-x-0 top-4 z-50 px-4"
      >
        <nav
          aria-label="Primary"
          className="glass-strong relative mx-auto flex max-w-6xl items-center justify-between gap-4 overflow-hidden rounded-full py-2 pl-5 pr-2"
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              go("home");
            }}
            className="flex items-center gap-3"
            aria-label={`${site.name} — back to top`}
          >
            <span className="font-serif text-xl italic leading-none text-chrome">SJB</span>
            <span className="hidden h-4 w-px bg-foreground/15 sm:block" />
            <span className="hidden sm:block">
              <Timecode />
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(item.id);
                  }}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "relative block rounded-full px-4 py-2 text-sm transition-colors duration-300",
                    active === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-foreground/[0.08] ring-1 ring-foreground/10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
  href={gmailAccountChooserUrl.toString()}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
>
  Hire me
</a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground/[0.06] ring-1 ring-foreground/10 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>

          {/* Scroll progress — a playhead across the nav */}
          <motion.span
            aria-hidden
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-accent-gradient"
            style={{ scaleX: progress }}
          />
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background/80 px-8 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="space-y-2">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.6, ease: easeOutExpo }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      go(item.id);
                    }}
                    className="flex items-baseline gap-4 py-2"
                  >
                    <span className="label-mono">0{i + 1}</span>
                    <span
                      className={cn(
                        "text-4xl font-medium tracking-tight",
                        active === item.id ? "text-chrome" : "text-foreground/70",
                      )}
                    >
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-12 space-y-1 text-sm text-muted-foreground">
              <a
  href={gmailAccountChooserUrl.toString()}
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  {site.email}
</a>
              <a href={site.phoneHref} className="block">{site.phoneDisplay}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
