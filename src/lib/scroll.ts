import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  lenisInstance = l;
}

export function getLenis() {
  return lenisInstance;
}

/** Smoothly scroll to a section id, honouring Lenis when active. */
export function scrollToId(id: string) {
  if (typeof document === "undefined") return;
  const el = id === "home" ? document.body : document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(id === "home" ? 0 : el, { offset: -24, duration: 1.4 });
  } else {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (id === "home") window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }
  history.replaceState(null, "", id === "home" ? "#" : `#${id}`);
}
