import { ArrowUp, Instagram, Mail, Youtube } from "lucide-react";
import { site, youtubeHref } from "@/lib/site";
import { scrollToId } from "@/lib/scroll";
import { Magnetic } from "./primitives";

export function Footer() {
  const year = new Date().getFullYear();

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
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="text-3xl font-semibold tracking-[-0.03em] text-chrome md:text-4xl">{site.name}</div>
            <div className="mt-2 text-muted-foreground">Video Editor & Motion Graphics Artist</div>
          </div>

          <div className="flex items-center gap-3">
            {[
  { href: site.instagramUrl, label: "Instagram", Icon: Instagram },
  { href: youtubeHref, label: "YouTube", Icon: Youtube },
  {
    href: gmailAccountChooserUrl.toString(),
    label: "Email",
    Icon: Mail,
  },
].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <Magnetic>
              <button
                type="button"
                onClick={() => scrollToId("home")}
                data-cursor="Top"
                className="ml-3 flex h-14 w-14 items-center justify-center rounded-full bg-[image:var(--gradient-chrome-soft)] text-background shadow-deep transition-transform duration-500 hover:-translate-y-1"
                aria-label="Back to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </Magnetic>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <span>© {year} {site.name}. All rights reserved.</span>
          <span className="font-mono text-xs tracking-[0.16em]">END OF REEL · 00:00:00:00</span>
        </div>
      </div>
    </footer>
  );
}
