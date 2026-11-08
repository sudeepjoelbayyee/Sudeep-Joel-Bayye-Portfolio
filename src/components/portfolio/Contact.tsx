import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { useState, type FormEvent, type PointerEvent } from "react";
import { ArrowUpRight, Check, Copy, Instagram, Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Magnetic, Reveal, SectionLabel, SplitReveal, TiltCard } from "./primitives";

function ChromeOrb() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(useTransform(mx, [-1, 1], [-30, 30]), { stiffness: 60, damping: 18 });
  const y = useSpring(useTransform(my, [-1, 1], [-30, 30]), { stiffness: 60, damping: 18 });
  const hx = useTransform(x, (v) => `${35 - v / 3}%`);
  const hy = useTransform(y, (v) => `${30 - v / 3}%`);
  const bg = useTransform(
    [hx, hy],
    ([a, b]) =>
      `radial-gradient(circle at ${a} ${b}, oklch(1 0 0) 0%, oklch(0.85 0.01 265) 12%, oklch(0.4 0.02 265) 38%, oklch(0.16 0.01 265) 62%, color-mix(in oklab, var(--primary) 50%, oklch(0.2 0.02 265)) 85%, oklch(0.75 0.05 250) 100%)`,
  );

  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 flex items-center justify-center"
      onPointerMove={(e: PointerEvent<HTMLDivElement>) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
        my.set(((e.clientY - r.top) / r.height) * 2 - 1);
      }}
    >
      <motion.div
        style={{ x, y, background: bg }}
        className="h-[60vmin] w-[60vmin] rounded-full opacity-50 blur-[1px] shadow-deep"
      />
      <div className="absolute h-[80vmin] w-[80vmin] rounded-full bg-primary/10 blur-[120px]" />
    </div>
  );
}

function ContactCard({
  href,
  label,
  value,
  Icon,
  external,
  copy,
}: {
  href: string;
  label: string;
  value: string;
  Icon: typeof Mail;
  external?: boolean;
  copy?: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="group flex items-center gap-4 border-b border-border py-6 transition-colors hover:border-foreground/30">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-foreground/[0.03] transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
        <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
      </div>

      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="min-w-0 flex-1"
      >
        <span className="label-mono block">{label}</span>
        <span className="mt-1 block break-all text-base font-medium text-foreground transition-colors group-hover:text-primary sm:text-lg">
          {value}
        </span>
      </a>

      {copy && (
        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(copy);
              setCopied(true);
              toast.success("Email copied to clipboard");
              setTimeout(() => setCopied(false), 1800);
            } catch {
              toast.error("Couldn't copy — please select the address manually");
            }
          }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
          aria-label="Copy email address"
        >
          {copied ? (
            <Check className="h-4 w-4 text-success" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      )}

      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={`Open ${label}`}
        className="shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
      >
        <ArrowUpRight className="h-5 w-5" />
      </a>
    </div>
  );
}

const projectTypes = ["Motion Graphics", "Cinematic Trailer", "Video Editing", "YouTube Content", "Real Estate Video", "Other"];



function BriefForm() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([projectTypes[0]]);
  const [otherType, setOtherType] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const isFormValid =
  selectedTypes.length > 0 &&
  name.trim().length > 0 &&
  message.trim().length > 0 &&
  (!selectedTypes.includes("Other") || otherType.trim().length > 0);

  const toggleProjectType = (projectType: string) => {
    setSelectedTypes((current) => {
      if (current.includes(projectType)) {
        return current.filter((item) => item !== projectType);
      }

      return [...current, projectType];
    });

    if (selectedTypes.includes(projectType) && projectType === "Other") {
      setOtherType("");
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const name = String(data.get("name") ?? "").trim().slice(0, 100);
    const message = String(data.get("message") ?? "").trim().slice(0, 2000);
    const customType = otherType.trim().slice(0, 120);

    if (selectedTypes.length === 0) {
      toast.error("Please select at least one project category.");
      return;
    }

    if (!name || !message) {
      toast.error("Please add your name and project description.");
      return;
    }

    if (selectedTypes.includes("Other") && !customType) {
      toast.error("Please specify your other project category.");
      return;
    }

    const projectCategories = selectedTypes.map((item) =>
      item === "Other" ? `Other — ${customType}` : item
    );

    const categoryList = projectCategories
      .map((category) => `• ${category}`)
      .join("\n");

    const subject = `New Project Enquiry | ${name}`;

    const body = `Hi Sudeep,

I hope you're doing well.

I'm reaching out through your portfolio regarding a potential creative project. Here are my project details:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROJECT ENQUIRY

Client Name:
${name}

PROJECT CATEGORIES
${categoryList}

PROJECT DESCRIPTION

${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

I'd love to discuss this project further and explore how we could work together.

Looking forward to hearing from you.

Best regards,
${name}

Sent through your portfolio contact form.`;

    const composeUrl = new URL("https://mail.google.com/mail/");
    composeUrl.searchParams.set("view", "cm");
    composeUrl.searchParams.set("fs", "1");
    composeUrl.searchParams.set("to", site.email);
    composeUrl.searchParams.set("su", subject);
    composeUrl.searchParams.set("body", body);

    const accountChooserUrl = new URL(
      "https://accounts.google.com/AccountChooser"
    );

    accountChooserUrl.searchParams.set("service", "mail");
    accountChooserUrl.searchParams.set(
      "continue",
      composeUrl.toString()
    );

    window.location.href = accountChooserUrl.toString();
  };

  return (
    <form
      onSubmit={submit}
      className="glass rounded-3xl p-6 md:p-8"
      aria-label="Project brief"
    >
      <div className="label-mono">
        Quick brief — opens your email app
      </div>

      <fieldset className="mt-5">
        <legend className="label-mono">
          PROJECT CATEGORIES — SELECT ALL THAT APPLY
        </legend>

        <p className="mt-2 mb-4 text-xs text-muted-foreground">
          You can choose multiple services for your project.
        </p>

        <div className="flex flex-wrap gap-2">
          {projectTypes.map((p) => (
            <label
              key={p}
              className="cursor-pointer rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground transition-all duration-200 hover:border-primary/40 has-[:checked]:border-primary/60 has-[:checked]:bg-primary/15 has-[:checked]:text-foreground has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring"
            >
              <input
                type="checkbox"
                name="projectTypes"
                value={p}
                checked={selectedTypes.includes(p)}
                onChange={() => toggleProjectType(p)}
                className="sr-only"
              />
              {p}
            </label>
          ))}
        </div>
      </fieldset>

      {selectedTypes.includes("Other") && (
        <div className="mt-5 animate-in fade-in slide-in-from-top-2 duration-300">
          <label className="block">
            <span className="label-mono">
              PLEASE SPECIFY YOUR PROJECT
            </span>

            <input
              type="text"
              name="otherType"
              required
              maxLength={120}
              value={otherType}
              onChange={(e) => setOtherType(e.target.value)}
              className="mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-foreground/25 focus:border-primary"
              placeholder="What else do you need?"
            />
          </label>
        </div>
      )}

      <div className="mt-6 grid gap-4">
        <label className="block">
          <span className="label-mono">Your name</span>

          <input
  name="name"
  required
  maxLength={100}
  autoComplete="name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-foreground/25 focus:border-primary"
  placeholder="Jane Doe"
/>
        </label>

        <label className="block">
          <span className="label-mono">
            Tell me about the project
          </span>

          <textarea
  name="message"
  required
  maxLength={2000}
  rows={3}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-foreground/25 focus:border-primary"
  placeholder="Describe your idea, requirements, timeline, or anything I should know..."
/>
        </label>
      </div>

      <Button
  type="submit"
  variant="accent"
  size="pill"
  disabled={!isFormValid}
  className="mt-8 w-full sm:w-auto transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-35 disabled:saturate-0"
>
  Send brief <ArrowUpRight />
</Button>
    </form>
  );
}



export function Contact() {
  const gmailComposeUrl = new URL("https://mail.google.com/mail/");
  gmailComposeUrl.searchParams.set("view", "cm");
  gmailComposeUrl.searchParams.set("fs", "1");
  gmailComposeUrl.searchParams.set("to", site.email);
  gmailComposeUrl.searchParams.set("su", "Let's work together");

  const gmailAccountChooserUrl = new URL(
    "https://accounts.google.com/AccountChooser"
  );

  gmailAccountChooserUrl.searchParams.set("service", "mail");
  gmailAccountChooserUrl.searchParams.set(
    "continue",
    gmailComposeUrl.toString()
  );

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel index="08" label="Contact" />
        <h2 id="contact-title" className="mt-8 max-w-5xl text-[clamp(2.8rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
          <SplitReveal text="Have an Idea?" wordClassName="text-chrome" />
          <span className="block font-serif font-normal italic text-foreground/80">
            <SplitReveal text="Let's Bring It to Life." delay={0.2} />
          </span>
        </h2>


        <div className="mt-16">
  {/* Main Quick Brief */}
  <Reveal delay={0.1}>
    <div className="mx-auto w-full max-w-4xl">
      <BriefForm />
    </div>
  </Reveal>

  {/* Direct contact options */}
<div className="mx-auto mt-8 w-full max-w-4xl">
  <div className="mb-4 flex items-center gap-3">
    <span className="label-mono">OR CONNECT DIRECTLY</span>
    <div className="h-px flex-1 bg-border" />
  </div>

  <div className="grid gap-3 sm:grid-cols-2">

    {/* Phone Card */}
    <a
      href={site.phoneHref}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-foreground/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-foreground/[0.05]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground/[0.04] transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
        <Phone className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
      </div>

      <div className="min-w-0 flex-1">
        <span className="label-mono block">PHONE</span>
        <span className="mt-1 block text-base font-medium text-foreground">
          {site.phoneDisplay}
        </span>
        <span className="mt-1 block text-xs text-muted-foreground">
          Let's have a conversation
        </span>
      </div>

      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
    </a>

    {/* Instagram Card */}
    <a
      href={site.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-foreground/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-foreground/[0.05]"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground/[0.04] transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
        <Instagram className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
      </div>

      <div className="min-w-0 flex-1">
        <span className="label-mono block">INSTAGRAM</span>
        <span className="mt-1 block text-base font-medium text-foreground">
          {site.instagramHandle}
        </span>
        <span className="mt-1 block text-xs text-muted-foreground">
          Connect with me
        </span>
      </div>

      <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
    </a>

  </div>
</div>
</div>
      </div>
    </section>
  );
}
