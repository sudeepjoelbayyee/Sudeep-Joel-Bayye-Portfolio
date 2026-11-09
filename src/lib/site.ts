
import trailerImg from "@/assets/placeholder-trailer.jpg";
import motionImg from "@/assets/placeholder-motion.jpg";
import realEstateImg from "@/assets/placeholder-realestate.jpg";
import verticalImg from "@/assets/placeholder-vertical.jpg";
import vfxImg from "@/assets/placeholder-vfx.jpg";

/* -------------------------------------------------------
   SITE INFORMATION
------------------------------------------------------- */

export const site = {
  name: "Sudeep Joel Bayye",
  firstName: "Sudeep",
  role: "Professional Video Editor",
  roleSecondary: "Motion Graphics Artist",
  tagline:
    "Crafting Visual Stories Through Motion, Creativity & Cinematic Precision.",
  email: "bsjoel1307@gmail.com",
  phoneDisplay: "+91 80745 43293",
  phoneHref: "tel:+918074543293",
  instagramHandle: "@sudeeep.joel",
  instagramUrl: "https://www.instagram.com/sudeeep.joel",

  youtubeChannelUrl: null as string | null,
  youtubeFallbackUrl:
    "https://www.youtube.com/@joelsgospelinspirations",

  portrait: "/sudeep-portrait.png" as string | null,
  available: true,
};

export const youtubeHref =
  site.youtubeChannelUrl ?? site.youtubeFallbackUrl;

/* -------------------------------------------------------
   NAVIGATION
------------------------------------------------------- */

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

/* -------------------------------------------------------
   WORK / PORTFOLIO TYPES
------------------------------------------------------- */

export type WorkCategory =
  | "Student Tribe — Reels"
  | "Student Tribe — Long-form"
  | "Honest Townhall — Reels"
  | "Honest Townhall — Long-form"
  | "JGI — YouTube Shorts"
  | "JGI — YouTube Long-form"
  | "Hustle Tribe — Trailers"
  | "Real Estate Videos"
  | "Personal VFX";

export type WorkItem = {
  id: string;
  title: string;
  category: WorkCategory;
  description: string;
  aspect: "16:9" | "9:16";
  thumbnail: string;
  videoUrl: string | null;
  tags: string[];
};

/* -------------------------------------------------------
   NESTED CATEGORY STRUCTURE
------------------------------------------------------- */

export const workGroups: {
  title: string;
  categories: WorkCategory[];
}[] = [
  {
    title: "Student Tribe",
    categories: [
      "Student Tribe — Reels",
      "Student Tribe — Long-form",
    ],
  },
  {
    title: "Honest Townhall",
    categories: [
      "Honest Townhall — Reels",
      "Honest Townhall — Long-form",
    ],
  },
  {
    title: "Joel's Gospel Inspirations",
    categories: [
      "JGI — YouTube Shorts",
      "JGI — YouTube Long-form",
    ],
  },
  {
    title: "Hustle Tribe",
    categories: [
      "Hustle Tribe — Trailers",
    ],
  },
  {
    title: "Real Estate",
    categories: [
      "Real Estate Videos",
    ],
  },
  {
    title: "Personal VFX",
    categories: [
      "Personal VFX",
    ],
  },
];

/* Keep this export for compatibility with other components. */
export const workCategories: WorkCategory[] =
  workGroups.flatMap((group) => group.categories);

/* -------------------------------------------------------
   PROJECT GENERATOR
------------------------------------------------------- */

function createProjects({
  prefix,
  title,
  category,
  description,
  aspect,
  thumbnail,
  filenames,
  tags,
}: {
  prefix: string;
  title: string;
  category: WorkCategory;
  description: string;
  aspect: "16:9" | "9:16";
  thumbnail: string;
  filenames: string[];
  tags: string[];
}): WorkItem[] {
  const videoBaseUrl = (import.meta.env.VITE_R2_PUBLIC_URL ?? "").replace(/\/$/, "");

  return filenames.map((filename, index) => ({
    id: `${prefix}-${index + 1}`,
    title: `${title} ${String(index + 1).padStart(2, "0")}`,
    category,
    description,
    aspect,
    thumbnail,
    // Keep local fallback for development until the R2 public URL is configured.
    videoUrl: videoBaseUrl
      ? `${videoBaseUrl}/videos/${filename}`
      : `/videos/${filename}`,
    tags,
  }));
}

/* -------------------------------------------------------
   ALL 27 PORTFOLIO PROJECTS
------------------------------------------------------- */

export const workItems: WorkItem[] = [
  /* STUDENT TRIBE — REELS (3 VERTICAL) */

  ...createProjects({
    prefix: "student-reel",
    title: "Student Tribe Reel",
    category: "Student Tribe — Reels",
    description: "Short-form video editing for Student Tribe.",
    aspect: "9:16",
    thumbnail: verticalImg,
    filenames: [
      "st-reel-1.mp4",
      "st-reel-2.mp4",
      "st-reel-3.mp4",
    ],
    tags: ["Student Tribe", "Reels", "Editing"],
  }),

  /* STUDENT TRIBE — LONG-FORM (3 HORIZONTAL) */

  ...createProjects({
    prefix: "student-long",
    title: "Student Tribe Video",
    category: "Student Tribe — Long-form",
    description: "Long-form video editing for Student Tribe.",
    aspect: "16:9",
    thumbnail: trailerImg,
    filenames: [
      "st-long-1.mp4",
      "st-long-2.mp4",
      "st-long-3.mp4",
    ],
    tags: ["Student Tribe", "Long-form", "Editing"],
  }),

  /* HONEST TOWNHALL — REELS (3 VERTICAL) */

  ...createProjects({
    prefix: "honest-reel",
    title: "Honest Townhall Reel",
    category: "Honest Townhall — Reels",
    description: "Short-form content editing for Honest Townhall.",
    aspect: "9:16",
    thumbnail: verticalImg,
    filenames: [
      "ht-reel-1.mp4",
      "ht-reel-2.mp4",
      "ht-reel-3.mp4",
    ],
    tags: ["Honest Townhall", "Reels", "Editing"],
  }),

  /* HONEST TOWNHALL — LONG-FORM / TRAILERS (3 HORIZONTAL) */

  ...createProjects({
    prefix: "honest-long",
    title: "Honest Townhall Trailer",
    category: "Honest Townhall — Long-form",
    description:
      "Cinematic trailers and motion graphics for Honest Townhall.",
    aspect: "16:9",
    thumbnail: motionImg,
    filenames: [
      "ht-trailer-1.mp4",
      "ht-trailer-2.mp4",
      "ht-trailer-3.mp4",
    ],
    tags: ["Honest Townhall", "Trailer", "Motion Graphics"],
  }),

  /* JGI — YOUTUBE SHORTS (3 VERTICAL) */

  ...createProjects({
    prefix: "jgi-short",
    title: "JGI YouTube Short",
    category: "JGI — YouTube Shorts",
    description:
      "Christian short-form video editing for Joel's Gospel Inspirations.",
    aspect: "9:16",
    thumbnail: verticalImg,
    filenames: [
      "jgi-short-1.mp4",
      "jgi-short-2.mp4",
      "jgi-short-3.mp4",
    ],
    tags: ["JGI", "YouTube Shorts", "Christian Editing"],
  }),

 /* JGI — YOUTUBE LONG-FORM (3 HORIZONTAL YOUTUBE EMBEDS) */

{
  id: "jgi-long-1",
  title: "JGI YouTube Video 01",
  category: "JGI — YouTube Long-form",
  description:
    "Long-form Christian video for Joel's Gospel Inspirations.",
  aspect: "16:9",
  thumbnail: "https://img.youtube.com/vi/uHoplug1-9Q/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/embed/uHoplug1-9Q",
  tags: ["JGI", "YouTube", "Long-form"],
},

{
  id: "jgi-long-2",
  title: "JGI YouTube Video 02",
  category: "JGI — YouTube Long-form",
  description:
    "Long-form Christian video for Joel's Gospel Inspirations.",
  aspect: "16:9",
  thumbnail: "https://img.youtube.com/vi/DxCFSudvr-k/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/embed/DxCFSudvr-k",
  tags: ["JGI", "YouTube", "Long-form"],
},

{
  id: "jgi-long-3",
  title: "JGI YouTube Video 03",
  category: "JGI — YouTube Long-form",
  description:
    "Long-form Christian video for Joel's Gospel Inspirations.",
  aspect: "16:9",
  thumbnail: "https://img.youtube.com/vi/tyRBPwLi3yo/hqdefault.jpg",
  videoUrl: "https://www.youtube.com/embed/tyRBPwLi3yo",
  tags: ["JGI", "YouTube", "Long-form"],
},

  /* HUSTLE TRIBE — TRAILERS (3 HORIZONTAL) */

  ...createProjects({
    prefix: "hustle-tribe",
    title: "Hustle Tribe Trailer",
    category: "Hustle Tribe — Trailers",
    description:
      "Cinematic promotional trailers for Hustle Tribe.",
    aspect: "16:9",
    thumbnail: trailerImg,
    filenames: [
      "hustle-tribe-trailer-1.mp4",
      "hustle-tribe-trailer-2.mp4",
      "hustle-tribe-trailer-3.mp4",
    ],
    tags: ["Hustle Tribe", "Trailer", "Cinematic Editing"],
  }),

  /* REAL ESTATE (3 VERTICAL) */

  ...createProjects({
    prefix: "realestate",
    title: "Real Estate Video",
    category: "Real Estate Videos",
    description:
      "Real estate video editing and property presentation.",
    aspect: "9:16",
    thumbnail: realEstateImg,
    filenames: [
      "realestate-1.mp4",
      "realestate-2.mp4",
      "realestate-3.mp4",
    ],
    tags: ["Real Estate", "Property", "Editing"],
  }),

  /* PERSONAL VFX (3 HORIZONTAL) */

  ...createProjects({
    prefix: "personal-vfx",
    title: "Personal VFX Project",
    category: "Personal VFX",
    description:
      "Personal visual effects, compositing and creative experiments.",
    aspect: "16:9",
    thumbnail: vfxImg,
    filenames: [
      "vfx-1.mp4",
      "vfx-2.mp4",
      "vfx-3.mp4",
    ],
    tags: ["VFX", "Compositing", "Visual Effects"],
  }),
];

/* -------------------------------------------------------
   EXPERIENCE
------------------------------------------------------- */

export const experience = [
  {
    org: "Joel's Gospel Inspirations",
    role: "Founder & Video Editor",
    period: "October 20, 2024 – Present",
    duration: "Ongoing",
    summary:
      "Built and independently managed a Christian content YouTube channel that has grown to over 415K subscribers.",
    focus: [
      "Creative Direction",
      "Editing",
      "Visual Presentation",
      "Publishing",
    ],
  },
  {
    org: "Student Tribe",
    role: "Motion Graphics & Trailer Editor",
    period: "January 2026 – September 2026",
    duration: "~9 months",
    summary:
      "Worked on cinematic promotional trailers and motion graphics for the Honest Townhall podcast.",
    focus: [
      "Motion Graphics",
      "Trailer Editing",
      "Visual Storytelling",
      "Promotional Video",
    ],
  },
  {
    org: "TwinCity Ventures",
    role: "Freelance Video Editor",
    period: "Freelance",
    duration: "2 months",
    summary:
      "Created and edited real estate videos with an emphasis on visual presentation and storytelling.",
    focus: [
      "Real Estate",
      "Property Presentation",
      "Editing",
    ],
  },
] as const;

/* -------------------------------------------------------
   CREATIVE TOOLKIT
------------------------------------------------------- */

export const toolkit: {
  category: string;
  software: string | null;
  glyph: string;
}[] = [
  {
    category: "Editing Suite",
    software: null,
    glyph: "01",
  },
  {
    category: "Motion & Compositing",
    software: null,
    glyph: "02",
  },
  {
    category: "Basic Color Grading",
    software: null,
    glyph: "03",
  },
  {
    category: "Visual Effects",
    software: null,
    glyph: "04",
  },
  {
    category: "Audio & Sound",
    software: null,
    glyph: "05",
  },
];
