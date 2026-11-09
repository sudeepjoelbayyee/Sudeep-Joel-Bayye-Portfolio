
import { AnimatePresence, motion } from "motion/react";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useRef, useState } from "react";
import { Film, Play, X } from "lucide-react";

import {
  workItems,
  workGroups,
  type WorkItem,
} from "@/lib/site";

import { cn } from "@/lib/utils";
import {
  Reveal,
  SectionLabel,
  SplitReveal,
  easeOutExpo,
} from "./primitives";

/* -------------------------------------------------------
   VIDEO HELPERS
------------------------------------------------------- */

function isDirectVideoFile(url: string) {
  return /\.(mp4|webm|ogg|mov)(?:$|[?#])/i.test(url);
}

function getAutoplayUrl(url: string, controls = 0) {
  const embedUrl = new URL(url);

  embedUrl.searchParams.set("autoplay", "1");
  embedUrl.searchParams.set("mute", "0");
  embedUrl.searchParams.set("playsinline", "1");
  embedUrl.searchParams.set("controls", String(controls));
  embedUrl.searchParams.set("rel", "0");

  return embedUrl.toString();
}


/* -------------------------------------------------------
   VIDEO PREVIEW — thumbnail-first, load only on interaction
------------------------------------------------------- */

function VideoPreview({
  src,
  poster,
  isActive,
}: {
  src: string;
  poster: string;
  isActive: boolean;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-graphite">
      <img
        src={poster}
        alt=""
        loading="lazy"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      {isActive && (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="none"
          className="absolute inset-0 z-20 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------
   WORK CARD
------------------------------------------------------- */

function WorkCard({
  item,
  onOpen,
  isActive,
  onHover,
  onLeave,
}: {
  item: WorkItem;
  onOpen: () => void;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const hasVideo = Boolean(item.videoUrl);
  const isVertical = item.aspect === "9:16";

  const directVideo = item.videoUrl
    ? isDirectVideoFile(item.videoUrl)
    : false;

  const isPlaying = isActive && hasVideo;

  /*
   * Preserve the existing expansion values.
   * Vertical: moderate expansion.
   * Horizontal: stronger expansion.
   */
  const flexWeight = isVertical
    ? isActive
      ? 1.38
      : 0.88
    : isActive
      ? 1.75
      : 0.78;

  return (
    <motion.li
      layout
      initial={{
        opacity: 0,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        flexGrow: flexWeight,
      }}
      exit={{
        opacity: 0,
        scale: 0.98,
      }}
      transition={{
        flexGrow: {
          type: "spring",
          stiffness: 180,
          damping: 24,
        },
        layout: {
          type: "spring",
          stiffness: 180,
          damping: 24,
        },
        opacity: {
          duration: 0.25,
        },
      }}
      style={{
        flexBasis: 0,
        flexShrink: 1,
        aspectRatio: isVertical ? "9 / 16" : "16 / 9",
      }}
      className={cn(
        "relative min-w-0 list-none",
        isActive ? "z-10" : "z-0",
      )}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocusCapture={onHover}
      onBlurCapture={(event) => {
        const nextTarget = event.relatedTarget as Node | null;

        if (
          !nextTarget ||
          !event.currentTarget.contains(nextTarget)
        ) {
          onLeave();
        }
      }}
    >
      <button
        type="button"
        onClick={onOpen}
        data-cursor="Play"
        aria-label={`Open ${item.title} — ${item.category}`}
        className={cn(
          "group relative block h-full w-full overflow-hidden rounded-2xl",
          "border border-glass-border bg-graphite text-left shadow-deep",
          "transition-[border-color,box-shadow] duration-500",
          isActive &&
            "border-primary/50 shadow-[0_12px_40px_rgba(0,0,0,0.3)]",
        )}
      >
        <div className="absolute inset-0 overflow-hidden bg-graphite">

          {/* Video or thumbnail */}
          {directVideo && item.videoUrl ? (
            <VideoPreview
              src={item.videoUrl}
              poster={item.thumbnail}
              isActive={isActive}
            />
          ) : item.videoUrl && isActive ? (
  <iframe
    key={`${item.id}-${isActive}`}
    src={getAutoplayUrl(item.videoUrl)}
    title={`${item.title} preview`}
    className="pointer-events-none absolute inset-0 h-full w-full border-0"
    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
    allowFullScreen
  />
          ) : (
            <img
              src={item.thumbnail}
              alt=""
              loading="lazy"
              className={cn(
                "absolute inset-0 h-full w-full object-cover opacity-75",
                "transition-all duration-700",
                "group-hover:scale-105 group-hover:opacity-100",
              )}
            />
          )}

          {/* Dark overlay */}
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-transparent"
            animate={{
              opacity: isPlaying ? 0.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />

          {/* All text overlays disappear whenever hovered */}
          <AnimatePresence initial={false}>
            {!isActive && (
              <motion.div
                key="card-metadata"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none absolute inset-0 z-30"
              >
                {/* Top category and project labels */}
                <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-1.5 p-2 md:p-3">
                  <span className="glass max-w-[70%] truncate rounded-full px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-foreground/85 md:text-[9px]">
                    {item.category}
                  </span>

                  <span className="shrink-0 rounded-full border border-white/15 bg-black/30 px-2 py-1 font-mono text-[7px] uppercase tracking-wider text-white/70 backdrop-blur-md md:text-[8px]">
                    {hasVideo ? "HOVER TO PLAY" : "PROJECT"}
                  </span>
                </div>

                {/* Center play indicator */}
                {hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                      <Play className="ml-0.5 h-4 w-4 fill-current" />
                    </span>
                  </div>
                )}

                {/* Bottom project details */}
                <div className="absolute inset-x-0 bottom-0 p-2.5 md:p-3.5">
                  <h3 className="text-xs font-medium tracking-tight text-white md:text-sm">
                    {item.title}
                  </h3>

                  <p className="mt-1 line-clamp-2 text-[9px] leading-relaxed text-white/70 md:text-[11px]">
                    {item.description}
                  </p>

                  <ul className="mt-2 flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.08] px-2 py-1 font-mono text-[7px] uppercase tracking-wider text-white/70"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Progress line */}
                <div className="absolute inset-x-3 bottom-1 h-px bg-white/10">
                  <span className="block h-full w-0 bg-primary" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </button>
    </motion.li>
  );
}

/* -------------------------------------------------------
   CATEGORY WIDTHS
------------------------------------------------------- */

function getCategoryWidthClass(items: WorkItem[]) {
  const count = items.length;
  const isVertical = items[0]?.aspect === "9:16";

  if (count === 1) {
    return isVertical ? "max-w-[300px]" : "max-w-3xl";
  }

  if (isVertical) {
    return "max-w-5xl";
  }

  return "max-w-full";
}

/* -------------------------------------------------------
   VIDEO MODAL
------------------------------------------------------- */

function VideoModal({
  item,
  onClose,
}: {
  item: WorkItem | null;
  onClose: () => void;
}) {
  return (
    <Dialog.Root
      open={Boolean(item)}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <AnimatePresence>
        {item && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[80] bg-graphite/85 backdrop-blur-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[81] flex items-center justify-center p-4 md:p-10"
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: 10,
                }}
                transition={{
                  duration: 0.6,
                  ease: easeOutExpo,
                }}
                onClick={onClose}
              >
                <div
                  onClick={(event) => event.stopPropagation()}
                  className={cn(
                    "glass relative w-full overflow-hidden rounded-3xl p-2",
                    item.aspect === "9:16"
                      ? "max-w-sm"
                      : "max-w-5xl",
                  )}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl bg-graphite",
                      item.aspect === "9:16"
                        ? "aspect-[9/16] max-h-[78vh]"
                        : "aspect-video",
                    )}
                  >
                    {item.videoUrl ? (
                      isDirectVideoFile(item.videoUrl) ? (
                        <video
                          src={item.videoUrl}
                          controls
                          autoPlay
                          muted
                          playsInline
                          className="absolute inset-0 h-full w-full object-contain"
                        />
                      ) : (
                        <iframe
                          src={getAutoplayUrl(item.videoUrl, 1)}
                          title={item.title}
                          className="absolute inset-0 h-full w-full border-0"
                          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                          allowFullScreen
                        />
                      )
                    ) : (
                      <>
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="absolute inset-0 h-full w-full object-cover opacity-30 blur-sm"
                        />

                        <div className="relative flex h-full flex-col items-center justify-center p-8 text-center">
                          <Film className="h-8 w-8 text-primary" />

                          <p className="mt-4 text-xl font-medium">
                            Video coming soon
                          </p>

                          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                            This slot is reserved for one of Sudeep's real{" "}
                            {item.category.toLowerCase()} projects.
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-6 p-5">
                    <div>
                      <Dialog.Title className="text-xl font-medium">
                        {item.title}
                      </Dialog.Title>

                      <Dialog.Description className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </Dialog.Description>
                    </div>

                    <Dialog.Close
                      className="glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                      aria-label="Close video"
                    >
                      <X className="h-4 w-4" />
                    </Dialog.Close>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}

/* -------------------------------------------------------
   WORK SECTION
------------------------------------------------------- */

export function Work() {
  const [open, setOpen] = useState<WorkItem | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeId = workItems.some(
    (item) => item.id === hoveredId,
  )
    ? hoveredId
    : null;

  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="relative py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">

        {/* Main section heading */}
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionLabel
              index="04"
              label="Selected Work"
            />

            <h2
              id="work-title"
              className="mt-6 text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.045em]"
            >
              <SplitReveal
                text="The reel,"
                wordClassName="text-chrome"
              />{" "}

              <span className="font-serif font-normal italic text-muted-foreground">
                <SplitReveal
                  text="in progress."
                  delay={0.15}
                />
              </span>
            </h2>
          </div>

          <Reveal className="md:col-span-5">
            <p className="text-muted-foreground">
              A collection of short-form edits, YouTube videos,
              cinematic trailers, motion graphics, VFX and real
              estate visuals. Explore each category to discover
              different sides of my creative work.
            </p>
          </Reveal>
        </div>

        {/* Nested parent categories and subcategory galleries */}
        <div className="mt-16 space-y-16 md:space-y-24">
          {workGroups.map((group, groupIndex) => {
            const groupItems = workItems.filter((item) =>
              group.categories.includes(item.category),
            );

            return (
              <motion.section
                key={group.title}
                layout
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: groupIndex * 0.04,
                }}
                aria-label={group.title}
              >
                {/* Parent category heading */}
                <div className="mb-8 flex items-end justify-between gap-4 border-b border-glass-border pb-5">
                  <div>
                    <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                      Main Category{" "}
                      {String(groupIndex + 1).padStart(2, "0")}
                    </p>

                    <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-4xl">
                      {group.title}
                    </h3>
                  </div>

                  {/* Show total count beside parent heading */}
                  {group.categories.length === 1 && (
                    <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                      {String(groupItems.length).padStart(2, "0")} PROJECTS
                    </span>
                  )}
                </div>

                {/* Nested subcategories */}
                <div className="space-y-10 md:space-y-14">
                  {group.categories.map((category, categoryIndex) => {
                    const items = workItems.filter(
                      (item) => item.category === category,
                    );

                    if (items.length === 0) return null;

                    const widthClass = getCategoryWidthClass(items);

                    const isNested = group.categories.length > 1;

                    const subcategoryTitle = category
                      .replace("Student Tribe — ", "")
                      .replace("Honest Townhall — ", "")
                      .replace("JGI — ", "")
                      .replace("Hustle Tribe — ", "");

                    return (
                      <div key={category}>
                        {/* Only show subheadings for nested categories */}
                        {isNested && (
                          <div className="mb-4 flex items-end justify-between gap-4">
                            <div>
                              <p className="mb-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                                {String(groupIndex + 1).padStart(2, "0")}.
                                {String(categoryIndex + 1).padStart(2, "0")}
                              </p>

                              <h4 className="text-base font-medium tracking-tight text-foreground md:text-xl">
                                {subcategoryTitle}
                              </h4>
                            </div>

                            <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                              {String(items.length).padStart(2, "0")} PROJECTS
                            </span>
                          </div>
                        )}

                        {/* Independent gallery row */}
                        <div className="overflow-x-auto pb-2">
                          <div
                            className={cn(
                              "mx-auto w-full",
                              widthClass,
                            )}
                          >
                            <motion.ul
                              layout
                              className={cn(
                                "flex w-full flex-nowrap items-start gap-3 md:gap-4",
                                "min-w-[680px] md:min-w-0",
                              )}
                            >
                              {items.map((item) => (
                                <WorkCard
                                  key={item.id}
                                  item={item}
                                  isActive={activeId === item.id}
                                  onHover={() => setHoveredId(item.id)}
                                  onLeave={() =>
                                    setHoveredId((current) =>
                                      current === item.id
                                        ? null
                                        : current,
                                    )
                                  }
                                  onOpen={() => setOpen(item)}
                                />
                              ))}
                            </motion.ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.section>
            );
          })}
        </div>
      </div>

      {/* Project video modal */}
      <VideoModal
        item={open}
        onClose={() => setOpen(null)}
      />
    </section>
  );
}
