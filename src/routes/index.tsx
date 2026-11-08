import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Creator } from "@/components/portfolio/Creator";
import { Toolkit } from "@/components/portfolio/Toolkit";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";
import { Cursor } from "@/components/portfolio/Cursor";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";

const title = "Sudeep Joel Bayye — Video Editor & Motion Graphics Artist";
const description =
  "Portfolio of Sudeep Joel Bayye: motion graphics, cinematic trailers, video editing, basic VFX and visual storytelling. Founder of Joel's Gospel Inspirations (415K+ subscribers).";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Loader />
      <SmoothScroll />
      <Cursor />
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Experience />
        <Creator />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
