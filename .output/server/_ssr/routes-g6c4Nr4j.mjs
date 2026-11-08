import { r as __toESM } from "../_runtime.mjs";
import { a as useSpring, c as useMotionValueEvent, d as AnimatePresence, i as useTransform, n as animate, o as useMotionValue, r as useReducedMotion, s as useScroll, t as useInView } from "../_libs/framer-motion+[...].mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { x as ClientOnly } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as DialogOverlay, c as Slot, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as Menu, c as Film, d as ArrowDownRight, i as Phone, l as ArrowUp, n as X, o as Mail, r as Play, s as Instagram, t as Youtube, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-g6c4Nr4j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var placeholder_trailer_default = "/assets/placeholder-trailer-iIZhhrs_.jpg";
var placeholder_motion_default = "/assets/placeholder-motion-3xp1f2sl.jpg";
var placeholder_realestate_default = "/assets/placeholder-realestate-CDTmezpf.jpg";
var placeholder_vertical_default = "/assets/placeholder-vertical-BnQTHaaj.jpg";
var placeholder_vfx_default = "/assets/placeholder-vfx-C6dmbJJ5.jpg";
var site = {
	name: "Sudeep Joel Bayye",
	firstName: "Sudeep",
	role: "Professional Video Editor",
	roleSecondary: "Motion Graphics Artist",
	tagline: "Crafting Visual Stories Through Motion, Creativity & Cinematic Precision.",
	email: "bsjoel1307@gmail.com",
	phoneDisplay: "+91 80745 43293",
	phoneHref: "tel:+918074543293",
	instagramHandle: "@sudeeep.joel",
	instagramUrl: "https://www.instagram.com/sudeeep.joel",
	youtubeChannelUrl: null,
	youtubeFallbackUrl: "https://www.youtube.com/@joelsgospelinspirations",
	portrait: "/sudeep-portrait.png",
	available: true
};
var youtubeHref = site.youtubeChannelUrl ?? site.youtubeFallbackUrl;
var navItems = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "expertise",
		label: "Expertise"
	},
	{
		id: "work",
		label: "Work"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var workGroups = [
	{
		title: "Student Tribe",
		categories: ["Student Tribe — Reels", "Student Tribe — Long-form"]
	},
	{
		title: "Honest Townhall",
		categories: ["Honest Townhall — Reels", "Honest Townhall — Long-form"]
	},
	{
		title: "Joel's Gospel Inspirations",
		categories: ["JGI — YouTube Shorts", "JGI — YouTube Long-form"]
	},
	{
		title: "Hustle Tribe",
		categories: ["Hustle Tribe — Trailers"]
	},
	{
		title: "Real Estate",
		categories: ["Real Estate Videos"]
	},
	{
		title: "Personal VFX",
		categories: ["Personal VFX"]
	}
];
workGroups.flatMap((group) => group.categories);
function createProjects({ prefix, title, category, description, aspect, thumbnail, filenames, tags }) {
	return filenames.map((filename, index) => ({
		id: `${prefix}-${index + 1}`,
		title: `${title} ${String(index + 1).padStart(2, "0")}`,
		category,
		description,
		aspect,
		thumbnail,
		videoUrl: `/videos/${filename}`,
		tags
	}));
}
var workItems = [
	...createProjects({
		prefix: "student-reel",
		title: "Student Tribe Reel",
		category: "Student Tribe — Reels",
		description: "Short-form video editing for Student Tribe.",
		aspect: "9:16",
		thumbnail: placeholder_vertical_default,
		filenames: [
			"st-reel-1.mp4",
			"st-reel-2.mp4",
			"st-reel-3.mp4"
		],
		tags: [
			"Student Tribe",
			"Reels",
			"Editing"
		]
	}),
	...createProjects({
		prefix: "student-long",
		title: "Student Tribe Video",
		category: "Student Tribe — Long-form",
		description: "Long-form video editing for Student Tribe.",
		aspect: "16:9",
		thumbnail: placeholder_trailer_default,
		filenames: [
			"st-long-1.mp4",
			"st-long-2.mp4",
			"st-long-3.mp4"
		],
		tags: [
			"Student Tribe",
			"Long-form",
			"Editing"
		]
	}),
	...createProjects({
		prefix: "honest-reel",
		title: "Honest Townhall Reel",
		category: "Honest Townhall — Reels",
		description: "Short-form content editing for Honest Townhall.",
		aspect: "9:16",
		thumbnail: placeholder_vertical_default,
		filenames: [
			"ht-reel-1.mp4",
			"ht-reel-2.mp4",
			"ht-reel-3.mp4"
		],
		tags: [
			"Honest Townhall",
			"Reels",
			"Editing"
		]
	}),
	...createProjects({
		prefix: "honest-long",
		title: "Honest Townhall Trailer",
		category: "Honest Townhall — Long-form",
		description: "Cinematic trailers and motion graphics for Honest Townhall.",
		aspect: "16:9",
		thumbnail: placeholder_motion_default,
		filenames: [
			"ht-trailer-1.mp4",
			"ht-trailer-2.mp4",
			"ht-trailer-3.mp4"
		],
		tags: [
			"Honest Townhall",
			"Trailer",
			"Motion Graphics"
		]
	}),
	...createProjects({
		prefix: "jgi-short",
		title: "JGI YouTube Short",
		category: "JGI — YouTube Shorts",
		description: "Christian short-form video editing for Joel's Gospel Inspirations.",
		aspect: "9:16",
		thumbnail: placeholder_vertical_default,
		filenames: [
			"jgi-short-1.mp4",
			"jgi-short-2.mp4",
			"jgi-short-3.mp4"
		],
		tags: [
			"JGI",
			"YouTube Shorts",
			"Christian Editing"
		]
	}),
	{
		id: "jgi-long-1",
		title: "JGI YouTube Video 01",
		category: "JGI — YouTube Long-form",
		description: "Long-form Christian video editing for Joel's Gospel Inspirations.",
		aspect: "16:9",
		thumbnail: placeholder_trailer_default,
		videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
		tags: [
			"JGI",
			"YouTube",
			"Long-form"
		]
	},
	{
		id: "jgi-long-2",
		title: "JGI YouTube Video 02",
		category: "JGI — YouTube Long-form",
		description: "Long-form Christian video editing for Joel's Gospel Inspirations.",
		aspect: "16:9",
		thumbnail: placeholder_trailer_default,
		videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
		tags: [
			"JGI",
			"YouTube",
			"Long-form"
		]
	},
	{
		id: "jgi-long-3",
		title: "JGI YouTube Video 03",
		category: "JGI — YouTube Long-form",
		description: "Long-form Christian video editing for Joel's Gospel Inspirations.",
		aspect: "16:9",
		thumbnail: placeholder_trailer_default,
		videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
		tags: [
			"JGI",
			"YouTube",
			"Long-form"
		]
	},
	...createProjects({
		prefix: "hustle-tribe",
		title: "Hustle Tribe Trailer",
		category: "Hustle Tribe — Trailers",
		description: "Cinematic promotional trailers for Hustle Tribe.",
		aspect: "16:9",
		thumbnail: placeholder_trailer_default,
		filenames: [
			"hustle-tribe-trailer-1.mp4",
			"hustle-tribe-trailer-2.mp4",
			"hustle-tribe-trailer-3.mp4"
		],
		tags: [
			"Hustle Tribe",
			"Trailer",
			"Cinematic Editing"
		]
	}),
	...createProjects({
		prefix: "realestate",
		title: "Real Estate Video",
		category: "Real Estate Videos",
		description: "Real estate video editing and property presentation.",
		aspect: "9:16",
		thumbnail: placeholder_realestate_default,
		filenames: [
			"realestate-1.mp4",
			"realestate-2.mp4",
			"realestate-3.mp4"
		],
		tags: [
			"Real Estate",
			"Property",
			"Editing"
		]
	}),
	...createProjects({
		prefix: "personal-vfx",
		title: "Personal VFX Project",
		category: "Personal VFX",
		description: "Personal visual effects, compositing and creative experiments.",
		aspect: "16:9",
		thumbnail: placeholder_vfx_default,
		filenames: [
			"vfx-1.mp4",
			"vfx-2.mp4",
			"vfx-3.mp4"
		],
		tags: [
			"VFX",
			"Compositing",
			"Visual Effects"
		]
	})
];
var experience = [
	{
		org: "Joel's Gospel Inspirations",
		role: "Founder & Video Editor",
		period: "October 20, 2024 – Present",
		duration: "Ongoing",
		summary: "Built and independently managed a Christian content YouTube channel that has grown to over 415K subscribers.",
		focus: [
			"Creative Direction",
			"Editing",
			"Visual Presentation",
			"Publishing"
		]
	},
	{
		org: "Student Tribe",
		role: "Motion Graphics & Trailer Editor",
		period: "January 2026 – September 2026",
		duration: "~9 months",
		summary: "Worked on cinematic promotional trailers and motion graphics for the Honest Townhall podcast.",
		focus: [
			"Motion Graphics",
			"Trailer Editing",
			"Visual Storytelling",
			"Promotional Video"
		]
	},
	{
		org: "TwinCity Ventures",
		role: "Freelance Video Editor",
		period: "Freelance",
		duration: "2 months",
		summary: "Created and edited real estate videos with an emphasis on visual presentation and storytelling.",
		focus: [
			"Real Estate",
			"Property Presentation",
			"Editing"
		]
	}
];
var toolkit = [
	{
		category: "Editing Suite",
		software: null,
		glyph: "01"
	},
	{
		category: "Motion & Compositing",
		software: null,
		glyph: "02"
	},
	{
		category: "Basic Color Grading",
		software: null,
		glyph: "03"
	},
	{
		category: "Visual Effects",
		software: null,
		glyph: "04"
	},
	{
		category: "Audio & Sound",
		software: null,
		glyph: "05"
	}
];
var lenisInstance = null;
function setLenis(l) {
	lenisInstance = l;
}
/** Smoothly scroll to a section id, honouring Lenis when active. */
function scrollToId(id) {
	if (typeof document === "undefined") return;
	const el = id === "home" ? document.body : document.getElementById(id);
	if (!el) return;
	if (lenisInstance) lenisInstance.scrollTo(id === "home" ? 0 : el, {
		offset: -24,
		duration: 1.4
	});
	else {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (id === "home") window.scrollTo({
			top: 0,
			behavior: reduce ? "auto" : "smooth"
		});
		else el.scrollIntoView({
			behavior: reduce ? "auto" : "smooth",
			block: "start"
		});
	}
	history.replaceState(null, "", id === "home" ? "#" : `#${id}`);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var easeOutExpo = [
	.16,
	1,
	.3,
	1
];
/** Fade-and-rise reveal when scrolled into view. */
function Reveal({ children, delay = 0, y = 28, className, as = "div" }) {
	const Comp = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		initial: {
			opacity: 0,
			y,
			filter: "blur(6px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-10% 0px"
		},
		transition: {
			duration: 1,
			delay,
			ease: easeOutExpo
		},
		children
	});
}
/** Masked, word-by-word headline reveal. */
function SplitReveal({ text, className, wordClassName, delay = 0, stagger = .06, immediate = false }) {
	const words = text.split(" ");
	const animateProps = {
		y: "0%",
		opacity: 1
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline", className),
		"aria-label": text,
		role: "text",
		children: words.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "inline-block overflow-hidden pb-[0.12em] align-bottom",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
				className: cn("inline-block", wordClassName),
				initial: {
					y: "110%",
					opacity: 0
				},
				...immediate ? { animate: animateProps } : {
					whileInView: animateProps,
					viewport: {
						once: true,
						margin: "-8% 0px"
					}
				},
				transition: {
					duration: 1.1,
					delay: delay + i * stagger,
					ease: easeOutExpo
				},
				children: [w, i < words.length - 1 ? "\xA0" : ""]
			})
		}, i))
	});
}
/** Element that gently follows the pointer (desktop). */
function Magnetic({ children, strength = .3, className }) {
	const reduce = useReducedMotion();
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const sx = useSpring(x, {
		stiffness: 220,
		damping: 18,
		mass: .4
	});
	const sy = useSpring(y, {
		stiffness: 220,
		damping: 18,
		mass: .4
	});
	const onMove = (e) => {
		if (reduce || e.pointerType !== "mouse") return;
		const r = e.currentTarget.getBoundingClientRect();
		x.set((e.clientX - (r.left + r.width / 2)) * strength);
		y.set((e.clientY - (r.top + r.height / 2)) * strength);
	};
	const reset = () => {
		x.set(0);
		y.set(0);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: cn("inline-block", className),
		style: {
			x: sx,
			y: sy
		},
		onPointerMove: onMove,
		onPointerLeave: reset,
		children
	});
}
/** 3D tilt with a glossy light reflection that tracks the pointer. */
function TiltCard({ children, className, max = 8, ...rest }) {
	const reduce = useReducedMotion();
	const px = useMotionValue(.5);
	const py = useMotionValue(.5);
	const rx = useSpring(useTransform(py, [0, 1], [max, -max]), {
		stiffness: 160,
		damping: 18
	});
	const ry = useSpring(useTransform(px, [0, 1], [-max, max]), {
		stiffness: 160,
		damping: 18
	});
	const glare = useTransform([px, py], ([gx, gy]) => `radial-gradient(420px circle at ${gx * 100}% ${gy * 100}%, color-mix(in oklab, var(--foreground) 12%, transparent), transparent 45%)`);
	const [hover, setHover] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		...rest,
		className: cn("relative [transform-style:preserve-3d]", className),
		style: reduce ? {} : {
			rotateX: rx,
			rotateY: ry,
			transformPerspective: 1100
		},
		onPointerMove: (e) => {
			if (e.pointerType !== "mouse") return;
			const r = e.currentTarget.getBoundingClientRect();
			px.set((e.clientX - r.left) / r.width);
			py.set((e.clientY - r.top) / r.height);
		},
		onPointerEnter: () => setHover(true),
		onPointerLeave: () => {
			setHover(false);
			px.set(.5);
			py.set(.5);
		},
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			"aria-hidden": true,
			className: "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500",
			style: {
				opacity: hover ? 1 : 0,
				background: glare
			}
		})]
	});
}
/** Timecode-style section marker, e.g. "SC.02 — About". */
function SectionLabel({ index, label, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-3", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-primary shadow-glow" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "label-mono",
			children: [
				"SC.",
				index,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mx-1 text-foreground/30",
					children: "/"
				}),
				" ",
				label
			]
		})]
	});
}
/** Counts up to a value once visible. */
function Counter({ to, suffix = "", duration = 2.2, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-10% 0px"
	});
	const reduce = useReducedMotion();
	const [val, setVal] = (0, import_react.useState)(reduce ? to : 0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		if (reduce) {
			setVal(to);
			return;
		}
		const controls = animate(0, to, {
			duration,
			ease: easeOutExpo,
			onUpdate: (v) => setVal(Math.round(v))
		});
		return () => controls.stop();
	}, [
		inView,
		to,
		duration,
		reduce
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		className,
		children: [val.toLocaleString("en-US"), suffix]
	});
}
function useActiveSection() {
	const [active, setActive] = (0, import_react.useState)("home");
	(0, import_react.useEffect)(() => {
		const ids = navItems.map((n) => n.id);
		const alias = {
			journey: "experience",
			toolkit: "experience"
		};
		const els = [...ids, ...Object.keys(alias)].map((id) => document.getElementById(id)).filter(Boolean);
		const obs = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) setActive(alias[e.target.id] ?? e.target.id);
			});
		}, { rootMargin: "-45% 0px -50% 0px" });
		els.forEach((el) => obs.observe(el));
		return () => obs.disconnect();
	}, []);
	return active;
}
function Timecode() {
	const { scrollY } = useScroll();
	const [tc, setTc] = (0, import_react.useState)("00:00:00:00");
	useMotionValueEvent(scrollY, "change", (v) => {
		const frames = Math.floor(v / 6);
		const f = frames % 25;
		const s = Math.floor(frames / 25) % 60;
		const m = Math.floor(frames / 1500) % 60;
		setTc(`00:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-mono text-[11px] tabular-nums tracking-[0.14em] text-muted-foreground",
		children: tc
	});
}
function Nav() {
	const active = useActiveSection();
	const [open, setOpen] = (0, import_react.useState)(false);
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30
	});
	const gmailComposeUrl = new URL("https://mail.google.com/mail/");
	gmailComposeUrl.searchParams.set("view", "cm");
	gmailComposeUrl.searchParams.set("fs", "1");
	gmailComposeUrl.searchParams.set("to", site.email);
	const gmailAccountChooserUrl = new URL("https://accounts.google.com/AccountChooser");
	gmailAccountChooserUrl.searchParams.set("service", "mail");
	gmailAccountChooserUrl.searchParams.set("continue", gmailComposeUrl.toString());
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	const go = (id) => {
		setOpen(false);
		scrollToId(id);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -40,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: 1,
			delay: 1.6,
			ease: easeOutExpo
		},
		className: "fixed inset-x-0 top-4 z-50 px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Primary",
			className: "glass-strong relative mx-auto flex max-w-6xl items-center justify-between gap-4 overflow-hidden rounded-full py-2 pl-5 pr-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					onClick: (e) => {
						e.preventDefault();
						go("home");
					},
					className: "flex items-center gap-3",
					"aria-label": `${site.name} — back to top`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-xl italic leading-none text-chrome",
							children: "SJB"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-4 w-px bg-foreground/15 sm:block" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timecode, {})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "hidden items-center gap-1 md:flex",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `#${item.id}`,
						onClick: (e) => {
							e.preventDefault();
							go(item.id);
						},
						"aria-current": active === item.id ? "true" : void 0,
						className: cn("relative block rounded-full px-4 py-2 text-sm transition-colors duration-300", active === item.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"),
						children: [active === item.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							layoutId: "nav-pill",
							className: "absolute inset-0 rounded-full bg-foreground/[0.08] ring-1 ring-foreground/10",
							transition: {
								type: "spring",
								stiffness: 380,
								damping: 32
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative",
							children: item.label
						})]
					}) }, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: gmailAccountChooserUrl.toString(),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.03] sm:inline-flex",
						children: "Hire me"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground/[0.06] ring-1 ring-foreground/10 md:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						"aria-controls": "mobile-menu",
						onClick: () => setOpen((o) => !o),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					"aria-hidden": true,
					className: "absolute bottom-0 left-0 h-px w-full origin-left bg-accent-gradient",
					style: { scaleX: progress }
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		id: "mobile-menu",
		className: "fixed inset-0 z-40 flex flex-col justify-center bg-background/80 px-8 backdrop-blur-2xl md:hidden",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "space-y-2",
			children: navItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
				initial: {
					opacity: 0,
					y: 24
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .05 * i,
					duration: .6,
					ease: easeOutExpo
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `#${item.id}`,
					onClick: (e) => {
						e.preventDefault();
						go(item.id);
					},
					className: "flex items-baseline gap-4 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "label-mono",
						children: ["0", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: cn("text-4xl font-medium tracking-tight", active === item.id ? "text-chrome" : "text-foreground/70"),
						children: item.label
					})]
				})
			}, item.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 space-y-1 text-sm text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: gmailAccountChooserUrl.toString(),
				target: "_blank",
				rel: "noopener noreferrer",
				className: "block",
				children: site.email
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: site.phoneHref,
				className: "block",
				children: site.phoneDisplay
			})]
		})]
	}) })] });
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline",
			chrome: "group sheen bg-[image:var(--gradient-chrome-soft)] text-background font-semibold shadow-deep ring-1 ring-foreground/40 transition-[transform,box-shadow] duration-500 hover:shadow-glow hover:scale-[1.02]",
			glass: "group glass text-foreground transition-[transform,background-color] duration-500 hover:bg-glass-strong hover:scale-[1.02]",
			accent: "group sheen bg-accent-gradient text-primary-foreground font-semibold shadow-glow transition-transform duration-500 hover:scale-[1.02]"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9",
			pill: "h-13 rounded-full px-7 text-[0.95rem]",
			xl: "h-16 rounded-full px-10 text-base"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var waveform = Array.from({ length: 46 }, (_, i) => Math.round(5 + Math.abs(Math.sin(i * .68)) * 14 + Math.abs(Math.sin(i * 1.91)) * 5));
function Track({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid grid-cols-[34px_minmax(0,1fr)] items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-[9px] tracking-wider text-slate-400",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-[27px] overflow-hidden rounded-md border border-white/[0.07] bg-white/[0.035]",
			children
		})]
	});
}
function EditingTimeline({ width, pointerX, pointerY }) {
	const reduced = useReducedMotion() ?? false;
	const rotateX = useSpring(useTransform(pointerY, [-1, 1], [1.2, -1.2]), {
		stiffness: 55,
		damping: 20
	});
	const rotateY = useSpring(useTransform(pointerX, [-1, 1], [-2.5, 2.5]), {
		stiffness: 55,
		damping: 20
	});
	const moveX = useSpring(useTransform(pointerX, [-1, 1], [-5, 5]), {
		stiffness: 55,
		damping: 20
	});
	const moveY = useSpring(useTransform(pointerY, [-1, 1], [3, -3]), {
		stiffness: 55,
		damping: 20
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		transition: {
			duration: 1,
			delay: 1.8
		},
		style: {
			position: "absolute",
			left: 0,
			top: "calc(100% + 1.25rem)",
			width,
			maxWidth: "none",
			transformPerspective: 1400,
			transformOrigin: "top left",
			...reduced ? {} : {
				rotateX,
				rotateY,
				x: moveX,
				y: moveY
			}
		},
		className: "z-40 pointer-events-none",
		role: "img",
		"aria-label": "Animated video editing timeline with video, graphics and audio tracks",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative isolate overflow-hidden rounded-2xl border border-white/15 p-3 sm:p-3.5\r\n        bg-[linear-gradient(145deg,rgba(26,40,61,0.97),rgba(5,10,18,0.98))]\r\n        shadow-[0_20px_60px_rgba(0,0,0,0.65)]\r\n        backdrop-blur-2xl",
			style: {
				transform: "perspective(1400px) rotateX(2deg) rotateY(-1deg)",
				transformOrigin: "center top"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-blue-400/[0.04]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.8)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[10px] tracking-[0.17em] text-slate-200",
								children: "EDIT TIMELINE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 font-mono text-[8px] text-slate-400",
								children: "SEQUENCE 01"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[9px] tracking-wider text-slate-400",
						children: "00:16:24"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid grid-cols-[34px_minmax(0,1fr)] gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-between border-b border-white/10 pb-1 font-mono text-[8px] text-slate-500",
						children: [
							"00:00",
							"00:02",
							"00:04",
							"00:06",
							"00:08",
							"00:10"
						].map((time) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: time }, time))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-2 space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							"aria-hidden": true,
							className: "pointer-events-none absolute bottom-0 top-0 z-20 w-px bg-slate-100 shadow-[0_0_12px_rgba(186,214,255,0.9)]",
							animate: reduced ? { left: "42px" } : { left: ["42px", "98%"] },
							transition: reduced ? { duration: 0 } : {
								duration: 9,
								repeat: Infinity,
								ease: "linear"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-[3px] -top-[1px] h-[7px] w-[7px] rotate-45 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Track, {
							label: "V1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-y-1 left-[1.5%] flex w-[29%] items-center overflow-hidden rounded border border-blue-200/20 bg-gradient-to-r from-[#172f50] to-[#426b9a] px-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate font-mono text-[8px] tracking-wider text-blue-50",
										children: "MAIN FOOTAGE"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-y-1 left-[32%] flex w-[30%] items-center overflow-hidden rounded border border-blue-200/20 bg-gradient-to-r from-[#213c62] to-[#536f93] px-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate font-mono text-[8px] tracking-wider text-white",
										children: "B-ROLL"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-y-1 left-[64%] flex w-[33%] items-center overflow-hidden rounded border border-blue-200/20 bg-gradient-to-r from-[#1b3456] to-[#3c587d] px-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "truncate font-mono text-[8px] tracking-wider text-blue-50",
										children: "CINEMATIC CUT"
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Track, {
							label: "V2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-y-1 left-[10%] flex w-[37%] items-center rounded border border-violet-200/20 bg-gradient-to-r from-[#42325f] to-[#66508b] px-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "truncate font-mono text-[8px] tracking-wider text-violet-100",
									children: "TITLE DESIGN"
								})
							}), [
								52,
								60,
								75,
								85
							].map((position, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border border-violet-200 bg-violet-400/70",
								style: { left: `${position}%` }
							}, i))]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Track, {
							label: "A1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-full items-center gap-[2px] px-2",
								children: waveform.map((height, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `min-w-0 flex-1 rounded-full ${i % 5 === 0 ? "bg-blue-200" : "bg-blue-400/65"}`,
									style: { height: `${height}px` }
								}, i))
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-2 flex items-center justify-between border-t border-white/[0.08] pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[8px] tracking-wider text-slate-500",
						children: "V1 FOOTAGE · V2 MOTION · A1 AUDIO"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[8px] tracking-wider text-blue-200/70",
						children: "4K · 24 FPS"
					})]
				})
			]
		})
	});
}
/** Floating glass enclosure for the portrait, with viewfinder overlay and pointer parallax. */
function Portrait() {
	const reduce = useReducedMotion();
	const ref = (0, import_react.useRef)(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rx = useSpring(useTransform(my, [-1, 1], [6, -6]), {
		stiffness: 80,
		damping: 20
	});
	const ry = useSpring(useTransform(mx, [-1, 1], [-8, 8]), {
		stiffness: 80,
		damping: 20
	});
	const innerX = useSpring(useTransform(mx, [-1, 1], [-14, 14]), {
		stiffness: 80,
		damping: 20
	});
	const innerY = useSpring(useTransform(my, [-1, 1], [-10, 10]), {
		stiffness: 80,
		damping: 20
	});
	const { scrollY } = useScroll();
	const scrollShift = useTransform(scrollY, [0, 800], [0, -80]);
	const [timelineWidth, setTimelineWidth] = (0, import_react.useState)(420);
	(0, import_react.useEffect)(() => {
		const updateTimelineWidth = () => {
			if (!ref.current) return;
			const rect = ref.current.getBoundingClientRect();
			const availableWidth = window.matchMedia("(min-width: 1024px)").matches ? window.innerWidth - 28 - rect.left : rect.width;
			setTimelineWidth(Math.max(0, availableWidth));
		};
		updateTimelineWidth();
		const observer = new ResizeObserver(updateTimelineWidth);
		if (ref.current) observer.observe(ref.current);
		window.addEventListener("resize", updateTimelineWidth);
		const measureAfterEntrance = window.setTimeout(updateTimelineWidth, 1800);
		return () => {
			observer.disconnect();
			window.removeEventListener("resize", updateTimelineWidth);
			window.clearTimeout(measureAfterEntrance);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (reduce) return;
		const onMove = (e) => {
			if (e.pointerType !== "mouse") return;
			mx.set(e.clientX / window.innerWidth * 2 - 1);
			my.set(e.clientY / window.innerHeight * 2 - 1);
		};
		window.addEventListener("pointermove", onMove, { passive: true });
		return () => window.removeEventListener("pointermove", onMove);
	}, [
		mx,
		my,
		reduce
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		ref,
		style: reduce ? {} : { y: scrollShift },
		initial: {
			opacity: 0,
			scale: .92,
			y: 40
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		transition: {
			duration: 1.6,
			delay: 1.7,
			ease: easeOutExpo
		},
		className: "relative mx-auto w-full max-w-[420px] [perspective:1200px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute -inset-10 rounded-full bg-primary/20 blur-[90px]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: reduce ? {} : {
					rotateX: rx,
					rotateY: ry
				},
				className: "relative [transform-style:preserve-3d]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": true,
						className: "glass absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] opacity-60 [transform:translateZ(-60px)]"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "glass grain relative aspect-[4/5] overflow-hidden rounded-[2rem] p-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative h-full w-full overflow-hidden rounded-[1.6rem] bg-graphite",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
									style: reduce ? {} : {
										x: innerX,
										y: innerY,
										scale: 1.08
									},
									className: "absolute inset-0",
									children: site.portrait ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: site.portrait,
										alt: `Portrait of ${site.name}`,
										className: "h-full w-full object-cover",
										fetchPriority: "high"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortraitPlaceholder, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-transparent"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									"aria-hidden": true,
									className: "absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent mix-blend-screen"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewfinder, {})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "sr-only",
							children: site.portrait ? `Portrait of ${site.name}` : "Portrait placeholder"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass absolute -left-6 bottom-16 hidden rounded-2xl px-4 py-3 [transform:translateZ(60px)] sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "label-mono",
							children: "Channel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-lg font-medium text-chrome-soft",
							children: "415K+ subs"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass absolute -right-4 top-10 hidden rounded-full px-4 py-2 [transform:translateZ(80px)] sm:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-[11px] tracking-[0.16em] text-foreground/80",
							children: "SCENE 01 · TAKE 01"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditingTimeline, {
				width: timelineWidth,
				pointerX: mx,
				pointerY: my
			})
		]
	});
}
function PortraitPlaceholder() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full w-full flex-col items-center justify-center bg-atmos",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 grid-lines opacity-60"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 flex items-center justify-center",
				children: [
					90,
					70,
					50
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute rounded-full border border-foreground/[0.07]",
					style: {
						width: `${s}%`,
						aspectRatio: "1"
					}
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-7xl italic text-chrome",
					children: "SJB"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 label-mono",
					children: "Portrait · awaiting upload"
				})]
			})
		]
	});
}
function Viewfinder() {
	const c = "absolute h-6 w-6 border-foreground/60";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none absolute inset-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `${c} left-0 top-0 border-l border-t` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `${c} right-0 top-0 border-r border-t` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `${c} bottom-0 left-0 border-b border-l` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `${c} bottom-0 right-0 border-b border-r` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute left-3 top-2 flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-foreground/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-destructive" }), " REC"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-2 right-3 font-mono text-[10px] tracking-[0.18em] text-foreground/70",
				children: "A001_C024"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-1/2 top-0 h-full w-px bg-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-1/2 h-px w-full bg-foreground/40" })]
			})
		]
	});
}
function FuturisticNameLine({ text, delay = 0 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "futuristic-name-line",
		style: { animationDelay: `${delay}ms` },
		"aria-label": text,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "futuristic-name-scan",
			"aria-hidden": "true"
		}), Array.from(text).map((char, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "futuristic-name-char",
			style: { animationDelay: `${delay + index * 55}ms` },
			"aria-hidden": "true",
			children: char === " " ? "\xA0" : char
		}, `${char}-${index}`))]
	});
}
function Hero() {
	const reduce = useReducedMotion();
	const { scrollY } = useScroll();
	const textY = useTransform(scrollY, [0, 700], [0, 120]);
	const fade = useTransform(scrollY, [0, 600], [1, .2]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		"aria-label": "Introduction",
		className: "relative isolate min-h-[100svh] overflow-hidden",
		style: { minHeight: "calc(100svh + 240px)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-20 bg-atmos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-20 grid-lines mask-fade-b opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientOnly, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid min-h-[100svh] max-w-7xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pt-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					style: reduce ? {} : {
						y: textY,
						opacity: fade
					},
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: .9,
								delay: 1.5,
								ease: easeOutExpo
							},
							className: "glass inline-flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative flex h-2 w-2 rounded-full bg-success animate-pulse-dot" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-foreground/80",
								children: site.available ? "Available for new projects" : "Currently booked"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-7 font-sans text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.05] tracking-[-0.04em]",
							"aria-label": "Sudeep Joel Bayye",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FuturisticNameLine, {
								text: "SUDEEP JOEL",
								delay: 150
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FuturisticNameLine, {
								text: "BAYYE",
								delay: 650
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: 2.05,
								ease: easeOutExpo
							},
							className: "mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-foreground/90 sm:text-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.role }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-1 w-1 rounded-full bg-primary",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: site.roleSecondary })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: 2.2,
								ease: easeOutExpo
							},
							className: "mt-4 max-w-xl font-serif text-2xl italic leading-snug text-muted-foreground sm:text-[1.7rem]",
							children: site.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 16
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: 2.35,
								ease: easeOutExpo
							},
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "chrome",
								size: "pill",
								onClick: () => scrollToId("work"),
								children: ["Explore My Work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "h-4 w-4 transition-transform group-hover:rotate-[-45deg]" })]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "glass",
								size: "pill",
								onClick: () => scrollToId("contact"),
								children: ["Let's Work Together ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
							}) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.ul, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							transition: {
								duration: 1,
								delay: 2.55
							},
							className: "mt-10 flex items-center gap-2",
							"aria-label": "Social links",
							children: [[
								{
									href: site.instagramUrl,
									label: "Instagram",
									Icon: Instagram
								},
								{
									href: youtubeHref,
									label: "YouTube — Joel's Gospel Inspirations",
									Icon: Youtube
								},
								{
									href: `mailto:${site.email}`,
									label: "Email",
									Icon: Mail
								}
							].map(({ href, label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								target: href.startsWith("http") ? "_blank" : void 0,
								rel: "noreferrer",
								"aria-label": label,
								className: "glass flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:text-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
							}) }, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "ml-3 hidden label-mono sm:block",
								children: "Open to remote collaboration"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5 flex flex-col items-center gap-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, {})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
				type: "button",
				onClick: () => scrollToId("about"),
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 2.9,
					duration: 1
				},
				className: "absolute bottom-[240px] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex",
				"aria-label": "Scroll to About",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "label-mono",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "relative h-10 w-px overflow-hidden bg-foreground/15",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "absolute left-0 top-0 h-1/2 w-full bg-foreground",
						animate: reduce ? {} : { y: ["-100%", "200%"] },
						transition: {
							duration: 1.8,
							repeat: Infinity,
							ease: "easeInOut"
						}
					})
				})]
			})
		]
	});
}
function Word({ word, progress, range, className }) {
	const opacity = useTransform(progress, range, [.14, 1]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		style: { opacity },
		className: `inline ${className ?? ""}`,
		children: word
	});
}
function ScrubParagraph({ segments }) {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 85%", "end 45%"]
	});
	const totalWords = segments.reduce((total, segment) => total + (segment.text.match(/\S+/g)?.length ?? 0), 0);
	if (reduce) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		ref,
		className: "text-lg leading-relaxed text-muted-foreground",
		children: segments.map((segment, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: segment.className,
			children: segment.text
		}, i))
	});
	let wordIndex = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		ref,
		className: "text-lg leading-relaxed text-muted-foreground",
		children: segments.map((segment, segmentIndex) => (segment.text.match(/\s+|\S+/g) ?? []).map((part, partIndex) => {
			if (/^\s+$/.test(part)) return part;
			const index = wordIndex++;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Word, {
				word: part,
				progress: scrollYProgress,
				range: [index / totalWords, (index + 1) / totalWords],
				className: segment.className
			}, `${segmentIndex}-${partIndex}`);
		}))
	});
}
var specialties = [
	"Motion Graphics",
	"Cinematic Trailers",
	"Video Editing",
	"Basic VFX",
	"Visual Storytelling"
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		"aria-labelledby": "about-title",
		className: "relative py-28 md:py-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "02",
					label: "About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					id: "about-title",
					className: "sr-only",
					children: "About Sudeep Joel Bayye"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid gap-12 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "md:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-serif text-3xl italic leading-tight text-chrome-soft md:text-4xl",
							children: ["Motion. Timing. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent-gradient",
								children: "Story."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 label-mono",
							children: "— The three things every edit balances"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6 md:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrubParagraph, { segments: [{
							text: "I'm Sudeep Joel Bayye",
							className: "text-foreground"
						}, { text: ", a video editor with 2+ years of creative experience, passionate about transforming ideas into compelling visual experiences. My work revolves around motion graphics, cinematic trailers, creative editing, and visual storytelling." }] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrubParagraph, { segments: [
							{ text: "From independently building a YouTube community of over " },
							{
								text: "415K subscribers",
								className: "text-foreground"
							},
							{ text: " to working on promotional trailers for " },
							{
								text: "Honest Townhall",
								className: "text-foreground"
							},
							{ text: ", I've developed an understanding of how visuals, timing, motion, and storytelling work together to capture attention." }
						] })]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 overflow-hidden border-y border-border py-6 mask-fade-x",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max animate-marquee gap-12",
				children: [
					...specialties,
					...specialties,
					...specialties,
					...specialties
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-12 whitespace-nowrap text-3xl font-medium tracking-tight text-foreground/25 md:text-5xl",
					children: [i % 2 === 0 ? s : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
						className: "font-serif font-normal text-foreground/40",
						children: s
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary/60" })]
				}, i))
			})
		})]
	});
}
function TimelineVisual() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full overflow-hidden rounded-2xl bg-graphite/70 p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex justify-between font-mono text-[9px] tracking-[0.2em] text-muted-foreground",
				children: [
					"00:00",
					"00:05",
					"00:10",
					"00:15",
					"00:20"
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t }, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-2.5",
				children: [
					[
						{
							w: 28,
							o: 0
						},
						{
							w: 18,
							o: 32
						},
						{
							w: 30,
							o: 54
						}
					],
					[{
						w: 40,
						o: 8
					}, {
						w: 22,
						o: 52
					}],
					[
						{
							w: 14,
							o: 0
						},
						{
							w: 26,
							o: 18
						},
						{
							w: 12,
							o: 48
						},
						{
							w: 24,
							o: 64
						}
					]
				].map((clips, ti) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative h-8 rounded-md bg-foreground/[0.03]",
					children: clips.map((c, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: cn("absolute top-0 h-full rounded-md border", ti === 0 && "border-primary/50 bg-primary/25", ti === 1 && "border-foreground/25 bg-foreground/10", ti === 2 && "border-primary-glow/30 bg-primary-glow/10"),
						style: {
							left: `${c.o}%`,
							width: `${c.w}%`
						},
						animate: reduce ? {} : { x: [
							0,
							ti % 2 ? -6 : 6,
							0
						] },
						transition: {
							duration: 5 + ti,
							repeat: Infinity,
							ease: "easeInOut",
							delay: ci * .3
						}
					}, ci))
				}, ti))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				className: "absolute bottom-3 top-9 w-px bg-foreground shadow-glow",
				initial: { left: "12%" },
				animate: reduce ? {} : { left: [
					"12%",
					"88%",
					"12%"
				] },
				transition: {
					duration: 9,
					repeat: Infinity,
					ease: "linear"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -left-1.5 -top-1.5 h-3 w-3 rotate-45 bg-foreground" })
			})
		]
	});
}
function MotionVisual() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-graphite/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 120",
			className: "absolute inset-0 h-full w-full",
			"aria-hidden": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M10 100 C 60 100, 70 20, 120 20 S 180 60, 190 30",
				fill: "none",
				stroke: "var(--primary)",
				strokeWidth: "1.2",
				initial: { pathLength: 0 },
				whileInView: { pathLength: 1 },
				viewport: { once: true },
				transition: {
					duration: 2,
					ease: "easeInOut"
				}
			}), [
				[10, 100],
				[120, 20],
				[190, 30]
			].map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: x - 4,
				y: y - 4,
				width: "8",
				height: "8",
				transform: `rotate(45 ${x} ${y})`,
				fill: "var(--foreground)"
			}, i))]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "relative h-14 w-14 rounded-full bg-[image:var(--gradient-chrome)] shadow-deep",
			animate: reduce ? {} : {
				x: [
					-50,
					40,
					-50
				],
				y: [
					20,
					-18,
					20
				],
				scale: [
					.9,
					1.1,
					.9
				]
			},
			transition: {
				duration: 6,
				repeat: Infinity,
				ease: [
					.65,
					0,
					.35,
					1
				]
			}
		})]
	});
}
function TrailerVisual() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full overflow-hidden rounded-2xl bg-graphite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 top-0 h-[18%] bg-graphite z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-[18%] bg-graphite z-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--primary)_45%,transparent),transparent_60%)]",
				animate: reduce ? {} : { opacity: [
					.4,
					1,
					.3,
					.9,
					.4
				] },
				transition: {
					duration: 4,
					repeat: Infinity
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute top-1/2 h-px w-[140%] -translate-y-1/2 bg-gradient-to-r from-transparent via-primary-glow to-transparent",
				animate: reduce ? {} : { x: ["-60%", "10%"] },
				transition: {
					duration: 3.5,
					repeat: Infinity,
					ease: "easeInOut",
					repeatType: "mirror"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-20 flex h-full items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-serif text-2xl italic tracking-wide text-chrome md:text-3xl",
					children: "this\xA0season"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-[20%] right-4 z-20 font-mono text-[9px] tracking-[0.2em] text-muted-foreground",
				children: "2.39 : 1"
			})
		]
	});
}
function VfxVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "group/vfx relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-graphite/70 [perspective:700px]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-24 w-36 [transform-style:preserve-3d] [transform:rotateX(55deg)_rotateZ(-35deg)]",
			children: [
				"Plate",
				"Matte",
				"FX",
				"Grade"
			].map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("absolute inset-0 flex items-end justify-end rounded-lg border p-1.5 font-mono text-[8px] uppercase tracking-[0.2em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] [transform:translateZ(var(--z))] group-hover:[transform:translateZ(var(--zh))]", i === 0 && "border-foreground/30 bg-foreground/10", i === 1 && "border-foreground/25 bg-foreground/5", i === 2 && "border-primary/60 bg-primary/20", i === 3 && "border-primary-glow/40 bg-primary-glow/10"),
				style: {
					"--z": `${i * 10}px`,
					"--zh": `${i * 26}px`
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-foreground/70",
					children: l
				})
			}, l))
		})
	});
}
function AfterEffectsUI() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#17151f] p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-white/10 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[9px] tracking-wider text-white/70",
					children: "AFTER EFFECTS"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded bg-purple-500/20 px-2 py-0.5 text-[8px] text-purple-300",
					children: "COMPOSITION"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid h-[58%] grid-cols-[1fr_1.15fr] gap-2 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-1.5 rounded bg-black/30 p-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[7px] text-white/40",
						children: "PROJECT"
					}), [
						"Main Comp",
						"Particles",
						"Light Sweep",
						"Typography"
					].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 text-[8px] text-white/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 w-1.5 rounded-sm", i % 2 ? "bg-fuchsia-400" : "bg-purple-400") }), item]
					}, item))]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-center overflow-hidden rounded border border-white/10 bg-[#252033]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute h-16 w-16 rounded-full border border-purple-300/70",
							animate: reduce ? {} : {
								scale: [
									.75,
									1.15,
									.75
								],
								opacity: [
									.35,
									1,
									.35
								]
							},
							transition: {
								duration: 3,
								repeat: Infinity,
								ease: "easeInOut"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-400 to-fuchsia-600 shadow-[0_0_25px_rgba(168,85,247,0.4)]",
							animate: reduce ? {} : {
								rotate: [
									0,
									90,
									180,
									270,
									360
								],
								scale: [
									.9,
									1.05,
									.9
								]
							},
							transition: {
								duration: 8,
								repeat: Infinity,
								ease: "linear"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold text-white",
								children: "Ae"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute h-px w-full bg-gradient-to-r from-transparent via-purple-300 to-transparent",
							animate: reduce ? {} : { y: [-45, 45] },
							transition: {
								duration: 2.5,
								repeat: Infinity,
								ease: "linear"
							}
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-white/10 pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex justify-between font-mono text-[7px] text-white/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "TIMELINE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "00:00 — 00:12" })]
					}),
					[
						"w-[82%] bg-purple-500/70",
						"w-[65%] bg-fuchsia-500/60",
						"w-[90%] bg-indigo-400/60"
					].map((width, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mb-1 h-2 overflow-hidden rounded-sm bg-white/5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-full rounded-sm", width) })
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "absolute bottom-3 top-[43%] w-px bg-white shadow-[0_0_7px_white]",
						animate: reduce ? {} : { left: [
							"18%",
							"88%",
							"18%"
						] },
						transition: {
							duration: 5,
							repeat: Infinity,
							ease: "linear"
						}
					})
				]
			})
		]
	});
}
function PremiereProUI() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#17191f] p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-white/10 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[9px] tracking-wider text-white/70",
					children: "PREMIERE PRO"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded bg-violet-500/20 px-2 py-0.5 text-[8px] text-violet-300",
					children: "EDIT SEQUENCE"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-3 flex h-[43%] items-center justify-center overflow-hidden rounded border border-white/10 bg-gradient-to-br from-[#34304c] via-[#171b2b] to-black",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-30",
						style: {
							backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
							backgroundSize: "18px 18px"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "relative h-12 w-20 overflow-hidden rounded border border-violet-300/40 bg-gradient-to-br from-violet-500/50 to-blue-500/20",
						animate: reduce ? {} : {
							scale: [
								1,
								1.08,
								1
							],
							x: [
								0,
								5,
								0
							]
						},
						transition: {
							duration: 4,
							repeat: Infinity,
							ease: "easeInOut"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-2 left-2 h-5 w-5 rounded-full bg-white/20 blur-[1px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-0 h-8 w-10 skew-x-[-25deg] bg-white/10" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-1.5 right-2 font-mono text-[7px] text-white/50",
						children: "PROGRAM MONITOR"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex justify-between font-mono text-[7px] text-white/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "SEQUENCE 01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "00:00:24:18" })]
					}),
					[
						["w-[82%] bg-violet-500/70", "w-[13%] left-[84%] bg-violet-500/40"],
						["w-[55%] bg-cyan-400/50", "w-[38%] left-[57%] bg-cyan-400/30"],
						["w-[76%] bg-blue-400/50"]
					].map((clips, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative mb-1.5 h-3 rounded-sm bg-white/5",
						children: clips.map((clip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute top-0 h-full rounded-[2px]", clip) }, clip))
					}, i)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "absolute bottom-3 top-[48%] w-px bg-white shadow-[0_0_7px_white]",
						animate: reduce ? {} : { left: [
							"15%",
							"90%",
							"15%"
						] },
						transition: {
							duration: 5.5,
							repeat: Infinity,
							ease: "linear"
						}
					})
				]
			})
		]
	});
}
function BlenderUI() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-[#17191b] p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-white/10 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[9px] tracking-wider text-white/70",
					children: "BLENDER"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded bg-orange-500/20 px-2 py-0.5 text-[8px] text-orange-300",
					children: "3D VIEWPORT"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-3 flex h-[55%] items-center justify-center overflow-hidden rounded border border-white/10 bg-[#20262a]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-40",
						style: {
							backgroundImage: "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
							backgroundSize: "18px 18px",
							transform: "perspective(100px) rotateX(15deg) scale(1.4)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "relative h-14 w-14 rounded-lg border border-orange-200/70 bg-gradient-to-br from-orange-300 via-orange-500 to-amber-800 shadow-[0_0_25px_rgba(249,115,22,0.25)]",
						style: { transformStyle: "preserve-3d" },
						animate: reduce ? {} : {
							rotateX: [25, 385],
							rotateY: [0, 360]
						},
						transition: {
							duration: 9,
							repeat: Infinity,
							ease: "linear"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-lg border border-white/30" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-2 top-2 font-mono text-[7px] text-white/40",
						children: "USER PERSPECTIVE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute bottom-2 right-2 font-mono text-[7px] text-orange-300/70",
						children: "XYZ"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[7px] text-white/40",
						children: "TIMELINE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-2 flex-1 overflow-hidden rounded bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "h-full w-1/3 rounded bg-orange-500/70",
							animate: reduce ? {} : { x: [
								"0%",
								"200%",
								"0%"
							] },
							transition: {
								duration: 5,
								repeat: Infinity,
								ease: "linear"
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[7px] text-white/40",
						children: "120"
					})
				]
			})
		]
	});
}
function CapCutUI() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[#15171b] p-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[94%] w-[72%] max-w-[190px] overflow-hidden rounded-[20px] border-[3px] border-[#45474c] bg-[#08090c] p-2 shadow-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-1 pb-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-[8px] text-white/70",
						children: "CapCut"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[7px] text-white/40",
						children: "9:16"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex h-[48%] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-slate-700 via-indigo-950 to-black",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute h-12 w-12 rounded-full bg-cyan-300/20 blur-xl",
							animate: reduce ? {} : {
								scale: [
									.7,
									1.3,
									.7
								],
								opacity: [
									.4,
									1,
									.4
								]
							},
							transition: {
								duration: 3,
								repeat: Infinity
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "relative h-9 w-9 rounded-full border border-white/60 bg-white/10",
							animate: reduce ? {} : {
								y: [
									3,
									-4,
									3
								],
								scale: [
									1,
									1.08,
									1
								]
							},
							transition: {
								duration: 2.5,
								repeat: Infinity,
								ease: "easeInOut"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-1.5 text-[6px] tracking-widest text-white/60",
							children: "PREVIEW"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex justify-between font-mono text-[6px] text-white/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "00:08" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "00:15" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "00:30" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-1 space-y-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-3 gap-0.5 overflow-hidden",
							children: [
								1,
								2,
								3,
								4
							].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 rounded-[2px] bg-cyan-400/50" }, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-[78%] rounded-[2px] bg-violet-400/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-[58%] rounded-[2px] bg-emerald-400/50" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							className: "absolute -top-1 bottom-0 left-1/2 w-px bg-white shadow-[0_0_5px_white]",
							animate: reduce ? {} : { left: [
								"5%",
								"95%",
								"5%"
							] },
							transition: {
								duration: 4.5,
								repeat: Infinity,
								ease: "linear"
							}
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex justify-around text-[7px] text-white/50",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "✂" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "♪" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "T" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "FX" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "↗" })
					]
				})
			]
		})
	});
}
function StoryVisual() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative h-full w-full overflow-hidden rounded-2xl bg-graphite/70 p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 100",
			className: "h-full w-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "0",
					y1: "90",
					x2: "200",
					y2: "90",
					stroke: "var(--border)"
				}),
				[66, 133].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: x,
					y1: "10",
					x2: x,
					y2: "90",
					stroke: "var(--border)",
					strokeDasharray: "2 3"
				}, x)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
					d: "M5 80 C 40 78, 55 60, 80 55 S 130 40, 150 15 S 185 60, 195 70",
					fill: "none",
					stroke: "url(#arc)",
					strokeWidth: "2",
					initial: { pathLength: 0 },
					whileInView: { pathLength: 1 },
					viewport: { once: true },
					transition: {
						duration: 2.4,
						ease: "easeInOut"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: "arc",
					x1: "0",
					x2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0",
						stopColor: "var(--silver)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "1",
						stopColor: "var(--primary)"
					})]
				}) }),
				[
					"SETUP",
					"CONFLICT",
					"PAYOFF"
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: 12 + i * 66,
					y: "99",
					fontSize: "6",
					letterSpacing: "1.5",
					fill: "var(--muted-foreground)",
					fontFamily: "var(--font-mono)",
					children: t
				}, t)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "150",
					cy: "15",
					r: "3",
					fill: "var(--foreground)"
				})
			]
		})
	});
}
var cards = [
	{
		n: "01",
		title: "Video Editing",
		body: "Clean, rhythm-driven cuts that keep viewers watching — structure, pacing and sound working together.",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineVisual, {}),
		className: "md:col-span-4"
	},
	{
		n: "02",
		title: "Motion Graphics",
		body: "Typography, shapes and transitions animated with intention to clarify ideas and elevate brands.",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionVisual, {}),
		className: "md:col-span-2"
	},
	{
		n: "03",
		title: "Cinematic Trailers",
		body: "Promotional cuts built on tension, timing and music — designed to make people press play.",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrailerVisual, {}),
		className: "md:col-span-2"
	},
	{
		n: "04",
		title: "Basic VFX",
		body: "Compositing and finishing touches that blend seamlessly into the edit without stealing focus.",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VfxVisual, {}),
		className: "md:col-span-2"
	},
	{
		n: "05",
		title: "Visual Storytelling",
		body: "Shaping footage into a clear arc so every video has a beginning, a pull, and a payoff.",
		visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryVisual, {}),
		className: "md:col-span-2"
	}
];
function Expertise() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "expertise",
		"aria-labelledby": "expertise-title",
		className: "relative py-28 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "absolute inset-0 -z-10 bg-atmos opacity-60"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-8 md:flex-row md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "03",
						label: "Expertise"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "expertise-title",
						className: "mt-6 text-[clamp(2.4rem,5.5vw,4.8rem)] font-semibold leading-[0.95] tracking-[-0.04em]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
								text: "What I do",
								wordClassName: "text-chrome"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif font-normal italic text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
									text: "best.",
									delay: .2
								})
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-muted-foreground",
						children: "Five disciplines, one goal — turning raw footage into work that feels considered, cinematic and alive."
					}) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-16 grid gap-4 md:grid-cols-6",
					children: cards.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: i * .06,
						className: c.className,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
							max: 5,
							className: "glass sheen group flex h-full flex-col rounded-3xl p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-48 md:h-56",
								children: c.visual
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-1 flex-col p-4 pt-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "label-mono",
											children: c.n
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 mx-4 bg-border transition-colors duration-500 group-hover:bg-primary/50" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-2xl font-medium tracking-tight",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-muted-foreground",
										children: c.body
									})
								]
							})]
						})
					}, c.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "label-mono",
							children: "MY CREATIVE TOOLKIT"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-3 text-3xl font-semibold tracking-tight md:text-4xl",
							children: [
								"Software &",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif font-normal italic text-muted-foreground",
									children: "tools."
								})
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-xs text-sm leading-relaxed text-muted-foreground",
							children: "The creative software I use for editing, motion design, 3D and visual effects."
						})]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							{
								name: "After Effects",
								category: "MOTION GRAPHICS",
								visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AfterEffectsUI, {})
							},
							{
								name: "Premiere Pro",
								category: "VIDEO EDITING",
								visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PremiereProUI, {})
							},
							{
								name: "Blender",
								category: "3D & VFX",
								visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlenderUI, {})
							},
							{
								name: "CapCut Mobile",
								category: "MOBILE EDITING",
								visual: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapCutUI, {})
							}
						].map((tool, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .08,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
								max: 5,
								className: "glass sheen group flex h-full flex-col rounded-3xl p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-48 w-full",
									children: tool.visual
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-1 flex-col p-4 pt-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "label-mono",
												children: ["0", i + 1]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px flex-1 mx-4 bg-border transition-colors duration-500 group-hover:bg-primary/50" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-4 label-mono text-muted-foreground",
											children: tool.category
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "mt-2 text-xl font-medium tracking-tight",
											children: tool.name
										})
									]
								})]
							})
						}, tool.name))
					})]
				})
			]
		})]
	});
}
function isDirectVideoFile(url) {
	return /\.(mp4|webm|ogg|mov)(?:$|[?#])/i.test(url);
}
function getAutoplayUrl(url, controls = 0) {
	const embedUrl = new URL(url);
	embedUrl.searchParams.set("autoplay", "1");
	embedUrl.searchParams.set("mute", "0");
	embedUrl.searchParams.set("playsinline", "1");
	embedUrl.searchParams.set("controls", String(controls));
	embedUrl.searchParams.set("rel", "0");
	return embedUrl.toString();
}
function VideoPreview({ src, poster, isActive }) {
	const videoRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const [isInView, setIsInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		if (typeof IntersectionObserver === "undefined") {
			setIsInView(true);
			return;
		}
		const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), { rootMargin: "150px" });
		observer.observe(video);
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		let cancelled = false;
		const startPlayback = async () => {
			if (cancelled) return;
			video.pause();
			try {
				video.currentTime = 0;
			} catch {}
			video.muted = !isActive;
			if (isActive) video.volume = 1;
			try {
				await video.play();
			} catch {
				if (cancelled) return;
				if (isActive) {
					video.muted = true;
					try {
						await video.play();
					} catch {}
				}
			}
		};
		if (!isInView) video.pause();
		else if (video.readyState >= 1) startPlayback();
		else video.addEventListener("loadedmetadata", startPlayback, { once: true });
		return () => {
			cancelled = true;
			video.removeEventListener("loadedmetadata", startPlayback);
		};
	}, [
		isInView,
		isActive,
		src
	]);
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		const canvas = canvasRef.current;
		if (!video || !canvas || !isInView || isActive) return;
		const context = canvas.getContext("2d");
		if (!context) return;
		const drawFrame = () => {
			if (video.readyState < 2) return;
			if (!video.videoWidth || !video.videoHeight) return;
			const scale = Math.min(1, 640 / video.videoWidth);
			const width = Math.round(video.videoWidth * scale);
			const height = Math.round(video.videoHeight * scale);
			if (canvas.width !== width || canvas.height !== height) {
				canvas.width = width;
				canvas.height = height;
			}
			context.drawImage(video, 0, 0, width, height);
		};
		video.addEventListener("loadeddata", drawFrame);
		drawFrame();
		const interval = window.setInterval(drawFrame, 200);
		return () => {
			video.removeEventListener("loadeddata", drawFrame);
			window.clearInterval(interval);
		};
	}, [
		src,
		isInView,
		isActive
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 overflow-hidden bg-graphite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: poster,
				alt: "",
				className: "absolute inset-0 z-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref: videoRef,
				src,
				poster,
				muted: true,
				loop: true,
				playsInline: true,
				preload: "metadata",
				className: cn("absolute inset-0 z-20 h-full w-full object-cover transition-opacity duration-200", isActive ? "opacity-100" : "opacity-0")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
				ref: canvasRef,
				className: cn("absolute inset-0 z-10 h-full w-full object-cover", isActive ? "opacity-0" : "opacity-100")
			})
		]
	});
}
function WorkCard({ item, onOpen, isActive, onHover, onLeave }) {
	const hasVideo = Boolean(item.videoUrl);
	const isVertical = item.aspect === "9:16";
	const directVideo = item.videoUrl ? isDirectVideoFile(item.videoUrl) : false;
	const isPlaying = isActive && hasVideo;
	const flexWeight = isVertical ? isActive ? 1.38 : .88 : isActive ? 1.75 : .78;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
		layout: true,
		initial: {
			opacity: 0,
			scale: .98
		},
		animate: {
			opacity: 1,
			scale: 1,
			flexGrow: flexWeight
		},
		exit: {
			opacity: 0,
			scale: .98
		},
		transition: {
			flexGrow: {
				type: "spring",
				stiffness: 180,
				damping: 24
			},
			layout: {
				type: "spring",
				stiffness: 180,
				damping: 24
			},
			opacity: { duration: .25 }
		},
		style: {
			flexBasis: 0,
			flexShrink: 1,
			aspectRatio: isVertical ? "9 / 16" : "16 / 9"
		},
		className: cn("relative min-w-0 list-none", isActive ? "z-10" : "z-0"),
		onMouseEnter: onHover,
		onMouseLeave: onLeave,
		onFocusCapture: onHover,
		onBlurCapture: (event) => {
			const nextTarget = event.relatedTarget;
			if (!nextTarget || !event.currentTarget.contains(nextTarget)) onLeave();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onOpen,
			"data-cursor": "Play",
			"aria-label": `Open ${item.title} — ${item.category}`,
			className: cn("group relative block h-full w-full overflow-hidden rounded-2xl", "border border-glass-border bg-graphite text-left shadow-deep", "transition-[border-color,box-shadow] duration-500", isActive && "border-primary/50 shadow-[0_12px_40px_rgba(0,0,0,0.3)]"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 overflow-hidden bg-graphite",
				children: [
					directVideo && item.videoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoPreview, {
						src: item.videoUrl,
						poster: item.thumbnail,
						isActive
					}) : item.videoUrl && isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						src: getAutoplayUrl(item.videoUrl),
						title: `${item.title} preview`,
						className: "pointer-events-none absolute inset-0 h-full w-full border-0",
						allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
						allowFullScreen: true
					}, `${item.id}-${isActive}`) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.thumbnail,
						alt: "",
						loading: "lazy",
						className: cn("absolute inset-0 h-full w-full object-cover opacity-75", "transition-all duration-700", "group-hover:scale-105 group-hover:opacity-100")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						"aria-hidden": true,
						className: "absolute inset-0 bg-gradient-to-t from-graphite via-graphite/20 to-transparent",
						animate: { opacity: isPlaying ? .2 : 1 },
						transition: { duration: .3 }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						initial: false,
						children: !isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: { opacity: 0 },
							animate: { opacity: 1 },
							exit: { opacity: 0 },
							transition: { duration: .2 },
							className: "pointer-events-none absolute inset-0 z-30",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 top-0 flex items-start justify-between gap-1.5 p-2 md:p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "glass max-w-[70%] truncate rounded-full px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-foreground/85 md:text-[9px]",
										children: item.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "shrink-0 rounded-full border border-white/15 bg-black/30 px-2 py-1 font-mono text-[7px] uppercase tracking-wider text-white/70 backdrop-blur-md md:text-[8px]",
										children: hasVideo ? "HOVER TO PLAY" : "PROJECT"
									})]
								}),
								hasVideo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 flex items-center justify-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:opacity-100",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-0.5 h-4 w-4 fill-current" })
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-2.5 md:p-3.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xs font-medium tracking-tight text-white md:text-sm",
											children: item.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1 line-clamp-2 text-[9px] leading-relaxed text-white/70 md:text-[11px]",
											children: item.description
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-2 flex flex-wrap gap-1",
											children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "rounded-full border border-white/10 bg-white/[0.08] px-2 py-1 font-mono text-[7px] uppercase tracking-wider text-white/70",
												children: tag
											}, tag))
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-x-3 bottom-1 h-px bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-full w-0 bg-primary" })
								})
							]
						}, "card-metadata")
					})
				]
			})
		})
	});
}
function getCategoryWidthClass(items) {
	const count = items.length;
	const isVertical = items[0]?.aspect === "9:16";
	if (count === 1) return isVertical ? "max-w-[300px]" : "max-w-3xl";
	if (isVertical) return "max-w-5xl";
	return "max-w-full";
}
function VideoModal({ item, onClose }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: Boolean(item),
		onOpenChange: (open) => {
			if (!open) onClose();
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: item && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, {
			forceMount: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
				asChild: true,
				forceMount: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "fixed inset-0 z-[80] bg-graphite/85 backdrop-blur-xl",
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 }
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
				asChild: true,
				forceMount: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "fixed inset-0 z-[81] flex items-center justify-center p-4 md:p-10",
					initial: {
						opacity: 0,
						scale: .94,
						y: 20
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						scale: .96,
						y: 10
					},
					transition: {
						duration: .6,
						ease: easeOutExpo
					},
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: (event) => event.stopPropagation(),
						className: cn("glass relative w-full overflow-hidden rounded-3xl p-2", item.aspect === "9:16" ? "max-w-sm" : "max-w-5xl"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("relative overflow-hidden rounded-2xl bg-graphite", item.aspect === "9:16" ? "aspect-[9/16] max-h-[78vh]" : "aspect-video"),
							children: item.videoUrl ? isDirectVideoFile(item.videoUrl) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
								src: item.videoUrl,
								controls: true,
								autoPlay: true,
								muted: true,
								playsInline: true,
								className: "absolute inset-0 h-full w-full object-contain"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								src: getAutoplayUrl(item.videoUrl, 1),
								title: item.title,
								className: "absolute inset-0 h-full w-full border-0",
								allow: "autoplay; encrypted-media; picture-in-picture; fullscreen",
								allowFullScreen: true
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.thumbnail,
								alt: "",
								className: "absolute inset-0 h-full w-full object-cover opacity-30 blur-sm"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex h-full flex-col items-center justify-center p-8 text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Film, { className: "h-8 w-8 text-primary" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-xl font-medium",
										children: "Video coming soon"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 max-w-sm text-sm text-muted-foreground",
										children: [
											"This slot is reserved for one of Sudeep's real",
											" ",
											item.category.toLowerCase(),
											" projects."
										]
									})
								]
							})] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-6 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
								className: "text-xl font-medium",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
								className: "mt-1 text-sm text-muted-foreground",
								children: item.description
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
								className: "glass flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
								"aria-label": "Close video",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
							})]
						})]
					})
				})
			})]
		}) })
	});
}
function Work() {
	const [open, setOpen] = (0, import_react.useState)(null);
	const [hoveredId, setHoveredId] = (0, import_react.useState)(null);
	const activeId = workItems.some((item) => item.id === hoveredId) ? hoveredId : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "work",
		"aria-labelledby": "work-title",
		className: "relative py-28 md:py-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 md:grid-cols-12 md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
						index: "04",
						label: "Selected Work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						id: "work-title",
						className: "mt-6 text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[0.9] tracking-[-0.045em]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
								text: "The reel,",
								wordClassName: "text-chrome"
							}),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif font-normal italic text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
									text: "in progress.",
									delay: .15
								})
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: "A collection of short-form edits, YouTube videos, cinematic trailers, motion graphics, VFX and real estate visuals. Explore each category to discover different sides of my creative work."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 space-y-16 md:space-y-24",
				children: workGroups.map((group, groupIndex) => {
					const groupItems = workItems.filter((item) => group.categories.includes(item.category));
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
						layout: true,
						initial: {
							opacity: 0,
							y: 18
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .4,
							delay: groupIndex * .04
						},
						"aria-label": group.title,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-8 flex items-end justify-between gap-4 border-b border-glass-border pb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground",
								children: [
									"Main Category",
									" ",
									String(groupIndex + 1).padStart(2, "0")
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-2xl font-semibold tracking-tight text-foreground md:text-4xl",
								children: group.title
							})] }), group.categories.length === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "shrink-0 font-mono text-[10px] text-muted-foreground",
								children: [String(groupItems.length).padStart(2, "0"), " PROJECTS"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-10 md:space-y-14",
							children: group.categories.map((category, categoryIndex) => {
								const items = workItems.filter((item) => item.category === category);
								if (items.length === 0) return null;
								const widthClass = getCategoryWidthClass(items);
								const isNested = group.categories.length > 1;
								const subcategoryTitle = category.replace("Student Tribe — ", "").replace("Honest Townhall — ", "").replace("JGI — ", "").replace("Hustle Tribe — ", "");
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [isNested && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mb-4 flex items-end justify-between gap-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mb-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
										children: [
											String(groupIndex + 1).padStart(2, "0"),
											".",
											String(categoryIndex + 1).padStart(2, "0")
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-base font-medium tracking-tight text-foreground md:text-xl",
										children: subcategoryTitle
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "shrink-0 font-mono text-[10px] text-muted-foreground",
										children: [String(items.length).padStart(2, "0"), " PROJECTS"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto pb-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: cn("mx-auto w-full", widthClass),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
											layout: true,
											className: cn("flex w-full flex-nowrap items-start gap-3 md:gap-4", "min-w-[680px] md:min-w-0"),
											children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkCard, {
												item,
												isActive: activeId === item.id,
												onHover: () => setHoveredId(item.id),
												onLeave: () => setHoveredId((current) => current === item.id ? null : current),
												onOpen: () => setOpen(item)
											}, item.id))
										})
									})
								})] }, category);
							})
						})]
					}, group.title);
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoModal, {
			item: open,
			onClose: () => setOpen(null)
		})]
	});
}
function Experience() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 70%", "end 60%"]
	});
	const scaleY = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 24
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		"aria-labelledby": "exp-title",
		className: "relative py-28 md:py-36",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:sticky lg:top-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
							index: "05",
							label: "Experience"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							id: "exp-title",
							className: "mt-6 text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[0.95] tracking-[-0.04em]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
									text: "The journey",
									wordClassName: "text-chrome"
								}),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif font-normal italic text-muted-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
										text: "so far.",
										delay: .15
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-sm text-muted-foreground",
								children: "From building an audience independently to cutting trailers for a podcast brand — each role sharpened how I think about timing and story."
							})
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				ref,
				className: "relative space-y-6 lg:col-span-8 lg:pl-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": true,
						className: "absolute bottom-0 left-[11px] top-0 hidden w-px bg-border lg:block"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						"aria-hidden": true,
						style: { scaleY },
						className: "absolute bottom-0 left-[11px] top-0 hidden w-px origin-top bg-gradient-to-b from-primary-glow via-primary to-transparent lg:block"
					}),
					experience.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "li",
						delay: i * .05,
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "absolute -left-14 top-9 hidden h-[23px] w-[23px] items-center justify-center rounded-full border border-primary/50 bg-background lg:flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-primary shadow-glow" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
							max: 3,
							className: "glass sheen group rounded-3xl p-7 md:p-9",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[11px] tracking-[0.18em] text-primary",
										children: [
											"TC 0",
											i + 1,
											":00:00:00"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "label-mono",
										children: e.duration
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-6 text-3xl font-semibold uppercase tracking-[-0.02em] text-chrome md:text-4xl",
									children: e.org
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-foreground/90",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: e.role }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "h-1 w-1 rounded-full bg-foreground/30",
											"aria-hidden": true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: e.period
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-2xl leading-relaxed text-muted-foreground",
									children: e.summary
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-6 flex flex-wrap gap-2",
									children: e.focus.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-full border border-border px-3 py-1 text-xs text-foreground/70 transition-colors duration-300 group-hover:border-primary/30",
										children: f
									}, f))
								})
							]
						})]
					}, e.org))
				]
			})]
		})
	});
}
var FEATURED_VIDEO_ID = "uHoplug1-9Q";
var pillars = [
	{
		k: "Started",
		v: "October 20, 2024"
	},
	{
		k: "Niche",
		v: "Christian & faith-based content"
	},
	{
		k: "Cadence",
		v: "Consistent publishing"
	},
	{
		k: "Execution",
		v: "Independent creative direction & editing"
	}
];
function Creator() {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const [isVideoHovered, setIsVideoHovered] = (0, import_react.useState)(false);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const bigY = useTransform(scrollYProgress, [0, 1], ["10%", "-25%"]);
	const cardY = useTransform(scrollYProgress, [0, 1], [60, -60]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		id: "journey",
		"aria-labelledby": "journey-title",
		className: "relative overflow-hidden py-28 md:py-40",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": true,
				className: "absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_40%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_70%)]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				"aria-hidden": true,
				style: reduce ? {} : { y: bigY },
				className: "pointer-events-none absolute inset-x-0 top-10 -z-10 select-none text-center text-[34vw] font-semibold leading-none tracking-[-0.06em] text-foreground/[0.025]",
				children: "415K"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5 sm:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "06",
					label: "Creator Journey"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					layout: true,
					className: cn("mt-10 grid grid-cols-1 items-center gap-12 transition-[grid-template-columns] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] lg:gap-8", "lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]", isVideoHovered && "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.65fr)]"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						layout: true,
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-2xl italic text-muted-foreground md:text-3xl",
								children: "Joel's Gospel Inspirations"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								id: "journey-title",
								className: "mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("block font-semibold leading-[0.85] tracking-[-0.06em] text-chrome transition-all duration-500", isVideoHovered ? "text-[clamp(3.5rem,8vw,8rem)]" : "text-[clamp(5rem,16vw,13rem)]"),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
										to: 415,
										suffix: "K+"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-3 block text-xl text-foreground/90 md:text-2xl",
									children: "subscribers, built independently."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: .1,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-8 max-w-xl leading-relaxed text-muted-foreground",
									children: "A Christian content YouTube channel I started on October 20, 2024 and run end-to-end — creative direction, editing and visual presentation of every upload."
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2",
								children: pillars.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
									delay: i * .06,
									className: "bg-background p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "label-mono",
										children: p.k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-2 text-foreground",
										children: p.v
									})]
								}, p.k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
								delay: .15,
								className: "mt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-px w-full bg-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
											className: "absolute left-0 top-0 h-full origin-left bg-accent-gradient",
											initial: { scaleX: 0 },
											whileInView: { scaleX: 1 },
											viewport: { once: true },
											transition: {
												duration: 2,
												ease: [
													.16,
													1,
													.3,
													1
												]
											},
											style: { width: "100%" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-1.5 left-0 h-3 w-3 rounded-full border border-primary bg-background" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -top-1.5 right-0 h-3 w-3 rounded-full bg-primary shadow-glow" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "label-mono",
										children: "Oct 20, 2024"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 text-foreground/80",
										children: "Channel launched"
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "label-mono",
											children: "Today"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-1 text-foreground/80",
											children: "415K+ subscribers"
										})]
									})]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						layout: true,
						style: reduce ? {} : { y: cardY },
						className: "min-w-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("glass relative overflow-hidden rounded-[2rem] p-2.5 shadow-deep", "transition-shadow duration-700", isVideoHovered && "shadow-[0_24px_80px_rgba(0,0,0,0.45)]"),
							onMouseEnter: () => setIsVideoHovered(true),
							onMouseLeave: () => setIsVideoHovered(false),
							onFocusCapture: () => setIsVideoHovered(true),
							onBlurCapture: (event) => {
								if (!event.currentTarget.contains(event.relatedTarget)) setIsVideoHovered(false);
							},
							tabIndex: 0,
							"aria-label": "Featured Joel's Gospel Inspirations video. Hover or focus to play.",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative aspect-video overflow-hidden rounded-[1.5rem] bg-black",
									children: [
										!isVideoHovered && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: `https://img.youtube.com/vi/${FEATURED_VIDEO_ID}/hqdefault.jpg`,
												alt: "Featured Joel's Gospel Inspirations video thumbnail",
												loading: "lazy",
												className: "absolute inset-0 h-full w-full object-cover"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "absolute inset-0 flex items-center justify-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white shadow-xl backdrop-blur-md transition-transform duration-500",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-1 h-6 w-6 fill-current" })
												})
											})
										] }),
										isVideoHovered && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
											src: `https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0`,
											title: "Joel's Gospel Inspirations — Featured Video",
											className: "pointer-events-none absolute inset-0 h-full w-full border-0",
											allow: "autoplay; encrypted-media; picture-in-picture; web-share",
											referrerPolicy: "strict-origin-when-cross-origin",
											allowFullScreen: true
										}, FEATURED_VIDEO_ID),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("absolute left-4 top-4 rounded-full border px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] backdrop-blur-md transition-colors duration-300", isVideoHovered ? "border-primary/40 bg-black/60 text-white" : "border-white/30 bg-black/40 text-white/80"),
											children: isVideoHovered ? "Now playing" : "Featured video · Hover to play"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-4 p-5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: "/images/jgi-channel-logo.png",
											alt: "Joel's Gospel Inspirations channel logo",
											width: 64,
											height: 64,
											className: "h-14 w-14 shrink-0 rounded-full object-contain ring-1 ring-primary/30"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0 flex-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "truncate text-lg font-medium",
												children: "Joel's Gospel Inspirations"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm text-muted-foreground",
												children: "415K+ subscribers · Faith & inspiration"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, {
											className: "h-6 w-6 shrink-0 text-destructive",
											"aria-hidden": true
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-5 pb-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, {
										className: "w-full",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											asChild: true,
											variant: "chrome",
											size: "pill",
											className: "w-full",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: youtubeHref,
												target: "_blank",
												rel: "noreferrer",
												children: [site.youtubeChannelUrl ? "Visit the channel" : "Find the channel on YouTube", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
											})
										})
									})
								})
							]
						})
					})]
				})]
			})
		]
	});
}
function Toolkit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "toolkit",
		"aria-labelledby": "toolkit-title",
		className: "relative py-28 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "07",
					label: "Creative Toolkit"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "toolkit-title",
					className: "mt-6 text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[0.95] tracking-[-0.04em]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
							text: "Tools of",
							wordClassName: "text-chrome"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif font-normal italic text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
								text: "the craft.",
								delay: .15
							})
						})
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "max-w-sm text-sm text-muted-foreground",
					children: "The exact software line-up is being confirmed. Each tile will show the real tool once it's verified."
				}) })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6",
				children: toolkit.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TiltCard, {
						max: 10,
						className: "glass sheen group flex aspect-[4/5] flex-col justify-between rounded-3xl p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex h-16 w-16 items-center justify-center rounded-2xl bg-[image:var(--gradient-chrome)] shadow-deep ring-1 ring-foreground/30 [transform:translateZ(30px)] transition-transform duration-500 group-hover:[transform:translateZ(50px)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-lg font-semibold text-background/80",
								children: t.software ? t.software.slice(0, 2) : t.glyph
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": true,
								className: "absolute inset-x-2 top-1 h-1/3 rounded-xl bg-foreground/40 blur-[2px]"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-base font-medium leading-tight",
							children: t.software ?? t.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground",
							children: t.software ? t.category : "Software · TBC"
						})] })]
					})
				}, t.category))
			})]
		})
	});
}
var projectTypes = [
	"Motion Graphics",
	"Cinematic Trailer",
	"Video Editing",
	"YouTube Content",
	"Real Estate Video",
	"Other"
];
function BriefForm() {
	const [selectedTypes, setSelectedTypes] = (0, import_react.useState)([projectTypes[0]]);
	const [otherType, setOtherType] = (0, import_react.useState)("");
	const [name, setName] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const isFormValid = selectedTypes.length > 0 && name.trim().length > 0 && message.trim().length > 0 && (!selectedTypes.includes("Other") || otherType.trim().length > 0);
	const toggleProjectType = (projectType) => {
		setSelectedTypes((current) => {
			if (current.includes(projectType)) return current.filter((item) => item !== projectType);
			return [...current, projectType];
		});
		if (selectedTypes.includes(projectType) && projectType === "Other") setOtherType("");
	};
	const submit = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = String(data.get("name") ?? "").trim().slice(0, 100);
		const message = String(data.get("message") ?? "").trim().slice(0, 2e3);
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
		const categoryList = selectedTypes.map((item) => item === "Other" ? `Other — ${customType}` : item).map((category) => `• ${category}`).join("\n");
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
		const accountChooserUrl = new URL("https://accounts.google.com/AccountChooser");
		accountChooserUrl.searchParams.set("service", "mail");
		accountChooserUrl.searchParams.set("continue", composeUrl.toString());
		window.location.href = accountChooserUrl.toString();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: submit,
		className: "glass rounded-3xl p-6 md:p-8",
		"aria-label": "Project brief",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "label-mono",
				children: "Quick brief — opens your email app"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "mt-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "label-mono",
						children: "PROJECT CATEGORIES — SELECT ALL THAT APPLY"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 mb-4 text-xs text-muted-foreground",
						children: "You can choose multiple services for your project."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: projectTypes.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "cursor-pointer rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-foreground transition-all duration-200 hover:border-primary/40 has-[:checked]:border-primary/60 has-[:checked]:bg-primary/15 has-[:checked]:text-foreground has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								name: "projectTypes",
								value: p,
								checked: selectedTypes.includes(p),
								onChange: () => toggleProjectType(p),
								className: "sr-only"
							}), p]
						}, p))
					})
				]
			}),
			selectedTypes.includes("Other") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 animate-in fade-in slide-in-from-top-2 duration-300",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-mono",
						children: "PLEASE SPECIFY YOUR PROJECT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						name: "otherType",
						required: true,
						maxLength: 120,
						value: otherType,
						onChange: (e) => setOtherType(e.target.value),
						className: "mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-foreground/25 focus:border-primary",
						placeholder: "What else do you need?"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-mono",
						children: "Your name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "name",
						required: true,
						maxLength: 100,
						autoComplete: "name",
						value: name,
						onChange: (e) => setName(e.target.value),
						className: "mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-foreground/25 focus:border-primary",
						placeholder: "Jane Doe"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "label-mono",
						children: "Tell me about the project"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						required: true,
						maxLength: 2e3,
						rows: 3,
						value: message,
						onChange: (e) => setMessage(e.target.value),
						className: "mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-foreground/25 focus:border-primary",
						placeholder: "Describe your idea, requirements, timeline, or anything I should know..."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				type: "submit",
				variant: "accent",
				size: "pill",
				disabled: !isFormValid,
				className: "mt-8 w-full sm:w-auto transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-35 disabled:saturate-0",
				children: ["Send brief ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {})]
			})
		]
	});
}
function Contact() {
	const gmailComposeUrl = new URL("https://mail.google.com/mail/");
	gmailComposeUrl.searchParams.set("view", "cm");
	gmailComposeUrl.searchParams.set("fs", "1");
	gmailComposeUrl.searchParams.set("to", site.email);
	gmailComposeUrl.searchParams.set("su", "Let's work together");
	const gmailAccountChooserUrl = new URL("https://accounts.google.com/AccountChooser");
	gmailAccountChooserUrl.searchParams.set("service", "mail");
	gmailAccountChooserUrl.searchParams.set("continue", gmailComposeUrl.toString());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		"aria-labelledby": "contact-title",
		className: "relative isolate overflow-hidden py-28 md:py-40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
					index: "08",
					label: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "contact-title",
					className: "mt-8 max-w-5xl text-[clamp(2.8rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
						text: "Have an Idea?",
						wordClassName: "text-chrome"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-serif font-normal italic text-foreground/80",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplitReveal, {
							text: "Let's Bring It to Life.",
							delay: .2
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto w-full max-w-4xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BriefForm, {})
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto mt-8 w-full max-w-4xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-4 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "label-mono",
								children: "OR CONNECT DIRECTLY"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px flex-1 bg-border" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.phoneHref,
								className: "group flex items-center gap-4 rounded-2xl border border-border bg-foreground/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-foreground/[0.05]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground/[0.04] transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "label-mono block",
												children: "PHONE"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-base font-medium text-foreground",
												children: site.phoneDisplay
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-xs text-muted-foreground",
												children: "Let's have a conversation"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.instagramUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group flex items-center gap-4 rounded-2xl border border-border bg-foreground/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-foreground/[0.05]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-foreground/[0.04] transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "label-mono block",
												children: "INSTAGRAM"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-base font-medium text-foreground",
												children: site.instagramHandle
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mt-1 block text-xs text-muted-foreground",
												children: "Connect with me"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" })
								]
							})]
						})]
					})]
				})
			]
		})
	});
}
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	const gmailComposeUrl = new URL("https://mail.google.com/mail/");
	gmailComposeUrl.searchParams.set("view", "cm");
	gmailComposeUrl.searchParams.set("fs", "1");
	gmailComposeUrl.searchParams.set("to", site.email);
	const gmailAccountChooserUrl = new URL("https://accounts.google.com/AccountChooser");
	gmailAccountChooserUrl.searchParams.set("service", "mail");
	gmailAccountChooserUrl.searchParams.set("continue", gmailComposeUrl.toString());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 py-14 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-10 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-3xl font-semibold tracking-[-0.03em] text-chrome md:text-4xl",
					children: site.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 text-muted-foreground",
					children: "Video Editor & Motion Graphics Artist"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [[
						{
							href: site.instagramUrl,
							label: "Instagram",
							Icon: Instagram
						},
						{
							href: youtubeHref,
							label: "YouTube",
							Icon: Youtube
						},
						{
							href: gmailAccountChooserUrl.toString(),
							label: "Email",
							Icon: Mail
						}
					].map(({ href, label, Icon }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						target: "_blank",
						rel: "noreferrer",
						"aria-label": label,
						className: "glass flex h-11 w-11 items-center justify-center rounded-full text-foreground/80 transition-colors hover:text-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
					}, label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => scrollToId("home"),
						"data-cursor": "Top",
						className: "ml-3 flex h-14 w-14 items-center justify-center rounded-full bg-[image:var(--gradient-chrome-soft)] text-background shadow-deep transition-transform duration-500 hover:-translate-y-1",
						"aria-label": "Back to top",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-5 w-5" })
					}) })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					year,
					" ",
					site.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs tracking-[0.16em]",
					children: "END OF REEL · 00:00:00:00"
				})]
			})]
		})
	});
}
/** Short cinematic intro: a timecode counts up, then the frame wipes away. */
function Loader() {
	const [done, setDone] = (0, import_react.useState)(false);
	const [frame, setFrame] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setDone(true);
			return;
		}
		const c = animate(0, 100, {
			duration: 1.3,
			ease: [
				.65,
				0,
				.35,
				1
			],
			onUpdate: (v) => setFrame(Math.round(v)),
			onComplete: () => setTimeout(() => setDone(true), 180)
		});
		return () => c.stop();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		role: "status",
		"aria-label": "Loading portfolio",
		className: "fixed inset-0 z-[90] flex flex-col items-center justify-center bg-graphite",
		exit: { clipPath: "inset(0 0 100% 0)" },
		initial: { clipPath: "inset(0 0 0% 0)" },
		transition: {
			duration: .9,
			ease: easeOutExpo
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 label-mono",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-destructive animate-pulse" }), " REC"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 font-serif text-6xl italic text-chrome md:text-8xl",
				children: "SJB"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 h-px w-56 overflow-hidden bg-foreground/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent-gradient",
					style: { width: `${frame}%` }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 font-mono text-xs tabular-nums tracking-[0.2em] text-muted-foreground",
				children: [
					"00:00:",
					String(Math.floor(frame / 25)).padStart(2, "0"),
					":",
					String(frame % 25).padStart(2, "0")
				]
			})
		]
	}, "loader") });
}
/**
* Desktop-only custom cursor: a precise dot and a lagging ring.
* Elements with [data-cursor="label text"] expand the ring and show a label.
*/
function Cursor() {
	const [enabled, setEnabled] = (0, import_react.useState)(false);
	const [label, setLabel] = (0, import_react.useState)(null);
	const [active, setActive] = (0, import_react.useState)(false);
	const [visible, setVisible] = (0, import_react.useState)(false);
	const x = useMotionValue(-100);
	const y = useMotionValue(-100);
	const rx = useSpring(x, {
		stiffness: 350,
		damping: 32,
		mass: .6
	});
	const ry = useSpring(y, {
		stiffness: 350,
		damping: 32,
		mass: .6
	});
	(0, import_react.useEffect)(() => {
		const fine = window.matchMedia("(pointer: fine)").matches;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!fine || reduce) return;
		setEnabled(true);
		document.body.classList.add("has-custom-cursor");
		const move = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
			setVisible(true);
			const t = e.target?.closest("[data-cursor], a, button, [role='tab'], input, textarea, select");
			setActive(!!t);
			setLabel(t?.dataset["cursor"] ?? null);
		};
		const leave = () => setVisible(false);
		window.addEventListener("pointermove", move, { passive: true });
		document.addEventListener("pointerleave", leave);
		return () => {
			window.removeEventListener("pointermove", move);
			document.removeEventListener("pointerleave", leave);
			document.body.classList.remove("has-custom-cursor");
		};
	}, [x, y]);
	if (!enabled) return null;
	const size = label ? 84 : active ? 46 : 30;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed inset-0 z-[100]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground",
			style: {
				x,
				y,
				opacity: visible && !label ? 1 : 0
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute left-0 top-0 flex items-center justify-center rounded-full border border-foreground/40 backdrop-blur-[2px]",
			style: {
				x: rx,
				y: ry,
				translateX: "-50%",
				translateY: "-50%",
				opacity: visible ? 1 : 0
			},
			animate: {
				width: size,
				height: size,
				backgroundColor: label ? "color-mix(in oklab, var(--foreground) 92%, transparent)" : "color-mix(in oklab, var(--foreground) 0%, transparent)"
			},
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 26
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				initial: {
					opacity: 0,
					scale: .6
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .6
				},
				className: "font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-background",
				children: label
			}, label) })
		})]
	});
}
/** Lenis smooth scrolling on desktop; native scroll for touch and reduced motion. */
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const coarse = window.matchMedia("(pointer: coarse)").matches;
		if (reduce || coarse) return;
		let raf = 0;
		let destroyed = false;
		let lenis = null;
		import("../_libs/lenis.mjs").then((n) => n.t).then(({ default: Lenis }) => {
			if (destroyed) return;
			lenis = new Lenis({
				lerp: .1,
				wheelMultiplier: 1
			});
			setLenis(lenis);
			const loop = (t) => {
				lenis?.raf(t);
				raf = requestAnimationFrame(loop);
			};
			raf = requestAnimationFrame(loop);
		});
		return () => {
			destroyed = true;
			cancelAnimationFrame(raf);
			lenis?.destroy();
			setLenis(null);
		};
	}, []);
	return null;
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expertise, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Creator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolkit, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
