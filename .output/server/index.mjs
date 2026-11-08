globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-11-07T10:40:22.000Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-11-07T10:40:28.000Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/jsx-runtime-CXCudH8Z.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"22c5-fGora6XZT3AEeoV3pg8TOqypOPo\"",
		"mtime": "2026-11-08T10:58:53.828Z",
		"size": 8901,
		"path": "../public/assets/jsx-runtime-CXCudH8Z.js"
	},
	"/assets/lenis-Urn-SVCX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"490d-zKrU4HpUm8qxLPwUw1LQY2gTBZc\"",
		"mtime": "2026-11-08T10:58:53.828Z",
		"size": 18701,
		"path": "../public/assets/lenis-Urn-SVCX.js"
	},
	"/assets/index-77tHeD3j.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"57394-jpzOKi4wn/1s3/s5nmdLcHezkz4\"",
		"mtime": "2026-11-08T10:58:53.827Z",
		"size": 357268,
		"path": "../public/assets/index-77tHeD3j.js"
	},
	"/assets/placeholder-motion-3xp1f2sl.jpg": {
		"type": "image/jpeg",
		"etag": "\"24d9e-LqjgMmPc46vCC4Amm2Nm4rdtuBY\"",
		"mtime": "2026-11-08T10:58:53.829Z",
		"size": 150942,
		"path": "../public/assets/placeholder-motion-3xp1f2sl.jpg"
	},
	"/assets/placeholder-realestate-CDTmezpf.jpg": {
		"type": "image/jpeg",
		"etag": "\"29069-RH5gF6FhS3KAAkHBLYh4/yxQBNE\"",
		"mtime": "2026-11-08T10:58:53.830Z",
		"size": 168041,
		"path": "../public/assets/placeholder-realestate-CDTmezpf.jpg"
	},
	"/assets/placeholder-trailer-iIZhhrs_.jpg": {
		"type": "image/jpeg",
		"etag": "\"1720e-8Oeh8kWLucHWkoHgF5DsMusfQ4E\"",
		"mtime": "2026-11-08T10:58:53.830Z",
		"size": 94734,
		"path": "../public/assets/placeholder-trailer-iIZhhrs_.jpg"
	},
	"/assets/preload-helper-s2-APhxm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9860-jdsPzS33WlYVlLnNXmkU3qr7uEs\"",
		"mtime": "2026-11-08T10:58:53.828Z",
		"size": 39008,
		"path": "../public/assets/preload-helper-s2-APhxm.js"
	},
	"/assets/placeholder-vertical-BnQTHaaj.jpg": {
		"type": "image/jpeg",
		"etag": "\"186de-SPbquJy8AcC4XwzJ4ng0aKNBDUA\"",
		"mtime": "2026-11-08T10:58:53.830Z",
		"size": 100062,
		"path": "../public/assets/placeholder-vertical-BnQTHaaj.jpg"
	},
	"/assets/styles-VTYPdAlw.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"223fc-oKu8aGzIXfAf/z1TP6VBGh4Rlfk\"",
		"mtime": "2026-11-08T10:58:53.831Z",
		"size": 140284,
		"path": "../public/assets/styles-VTYPdAlw.css"
	},
	"/assets/placeholder-vfx-C6dmbJJ5.jpg": {
		"type": "image/jpeg",
		"etag": "\"43e53-wDRcVI06oUbgWvfeaPyHdyRLlvw\"",
		"mtime": "2026-11-08T10:58:53.830Z",
		"size": 278099,
		"path": "../public/assets/placeholder-vfx-C6dmbJJ5.jpg"
	},
	"/assets/routes-BvwJusF4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"51249-4tvhYEUZmjp1gHqa82h1pUu7tkk\"",
		"mtime": "2026-11-08T10:58:53.829Z",
		"size": 332361,
		"path": "../public/assets/routes-BvwJusF4.js"
	},
	"/assets/HeroScene-DK_s6-Rv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f21c5-br5Yo7XT4UEeAl2d1mnNT0oy67o\"",
		"mtime": "2026-11-08T10:58:53.828Z",
		"size": 991685,
		"path": "../public/assets/HeroScene-DK_s6-Rv.js"
	},
	"/images/jgi-channel-logo.png": {
		"type": "image/png",
		"etag": "\"bf761-MS6/TbYmtuQ6bkKXjEVR47UgoqM\"",
		"mtime": "2026-11-08T01:18:46.000Z",
		"size": 784225,
		"path": "../public/images/jgi-channel-logo.png"
	},
	"/sudeep-portrait.png": {
		"type": "image/png",
		"etag": "\"101f57-pDZzev338geizNJiG3t3mWVgj/I\"",
		"mtime": "2026-11-07T19:29:08.000Z",
		"size": 1056599,
		"path": "../public/sudeep-portrait.png"
	},
	"/videos/realestate-3.mp4": {
		"type": "video/mp4",
		"etag": "\"1d00aa-+yw3iNArZPlQSx2k0WKUe7vP+YY\"",
		"mtime": "2026-11-08T09:59:53.068Z",
		"size": 1900714,
		"path": "../public/videos/realestate-3.mp4"
	},
	"/videos/realestate-1.mp4": {
		"type": "video/mp4",
		"etag": "\"27a212-GZ6hJFyLUy9k5C2/LJDHm8PmB1k\"",
		"mtime": "2026-11-08T09:57:12.828Z",
		"size": 2597394,
		"path": "../public/videos/realestate-1.mp4"
	},
	"/videos/realestate-2.mp4": {
		"type": "video/mp4",
		"etag": "\"2e669b-47di74a7zApdL+SnAQRTZ/ZLZ7c\"",
		"mtime": "2026-11-08T09:58:59.763Z",
		"size": 3040923,
		"path": "../public/videos/realestate-2.mp4"
	},
	"/videos/st-long-1.mp4": {
		"type": "video/mp4",
		"etag": "\"2eef69-T12GxXBQZXO8AoU43WfsnLcCWsA\"",
		"mtime": "2026-11-08T06:56:08.148Z",
		"size": 3075945,
		"path": "../public/videos/st-long-1.mp4"
	},
	"/videos/ht-reel-3.mp4": {
		"type": "video/mp4",
		"etag": "\"5205ef-4C4lFc2V3dOEHUpES+Ls8CB5lY4\"",
		"mtime": "2026-11-08T06:48:14.533Z",
		"size": 5375471,
		"path": "../public/videos/ht-reel-3.mp4"
	},
	"/videos/st-long-2.mp4": {
		"type": "video/mp4",
		"etag": "\"688150-1QhJFX6jBbN+oiFTNxWLM7Cc3XU\"",
		"mtime": "2026-11-08T07:31:31.143Z",
		"size": 6848848,
		"path": "../public/videos/st-long-2.mp4"
	},
	"/videos/st-reel-2.mp4": {
		"type": "video/mp4",
		"etag": "\"77d771-Paot99QsX4iqhpJobvt9iAlQt84\"",
		"mtime": "2026-11-08T06:51:28.200Z",
		"size": 7853937,
		"path": "../public/videos/st-reel-2.mp4"
	},
	"/videos/st-reel-3.mp4": {
		"type": "video/mp4",
		"etag": "\"793315-0zLJuJnDhFt3iubg/J+gLHmW5oI\"",
		"mtime": "2026-11-08T07:35:59.673Z",
		"size": 7942933,
		"path": "../public/videos/st-reel-3.mp4"
	},
	"/videos/st-reel-1.mp4": {
		"type": "video/mp4",
		"etag": "\"8d9337-HjzLOufHGpYKRL91v6xg7OgnClw\"",
		"mtime": "2026-11-08T06:40:51.946Z",
		"size": 9278263,
		"path": "../public/videos/st-reel-1.mp4"
	},
	"/videos/hustle-tribe-trailer-1.mp4": {
		"type": "video/mp4",
		"etag": "\"169f3ea-XqevmLEM0zCqGoLNN6se4Z6Rvy8\"",
		"mtime": "2026-11-08T09:31:43.646Z",
		"size": 23720938,
		"path": "../public/videos/hustle-tribe-trailer-1.mp4"
	},
	"/videos/ht-reel-2.mp4": {
		"type": "video/mp4",
		"etag": "\"2136fee-d8p6sDbetrblBi36MKvtmQW8phk\"",
		"mtime": "2026-11-08T10:14:53.854Z",
		"size": 34828270,
		"path": "../public/videos/ht-reel-2.mp4"
	},
	"/videos/ht-trailer-2.mp4": {
		"type": "video/mp4",
		"etag": "\"250839e-QqetGQ+MyNkcvrqvvceMZvKmh6M\"",
		"mtime": "2026-11-08T07:24:49.577Z",
		"size": 38831006,
		"path": "../public/videos/ht-trailer-2.mp4"
	},
	"/videos/st-long-3.mp4": {
		"type": "video/mp4",
		"etag": "\"28cbaf5-94I7wF0EdVr4mSEDWO6IeiSZUGo\"",
		"mtime": "2026-11-08T09:46:08.153Z",
		"size": 42777333,
		"path": "../public/videos/st-long-3.mp4"
	},
	"/videos/ht-reel-1.mp4": {
		"type": "video/mp4",
		"etag": "\"2b0c571-5jWQeILrp0SB0nfMBVGJliHGadw\"",
		"mtime": "2026-11-08T10:14:20.119Z",
		"size": 45139313,
		"path": "../public/videos/ht-reel-1.mp4"
	},
	"/videos/vfx-1.mp4": {
		"type": "video/mp4",
		"etag": "\"332ae30-b6t0iFzTBGJOQx9hgo14fibHo0g\"",
		"mtime": "2026-11-08T10:04:16.035Z",
		"size": 53653040,
		"path": "../public/videos/vfx-1.mp4"
	},
	"/videos/vfx-2.mp4": {
		"type": "video/mp4",
		"etag": "\"3748b28-rhBk9ila8Vdm67GOYCDg86Xl0hs\"",
		"mtime": "2026-11-08T10:05:22.899Z",
		"size": 57969448,
		"path": "../public/videos/vfx-2.mp4"
	},
	"/videos/ht-trailer-1.mp4": {
		"type": "video/mp4",
		"etag": "\"41c9ba5-94icO9YUZMCZV+YvV683K9YdTpg\"",
		"mtime": "2026-11-08T07:06:05.094Z",
		"size": 68983717,
		"path": "../public/videos/ht-trailer-1.mp4"
	},
	"/videos/ht-trailer-3.mp4": {
		"type": "video/mp4",
		"etag": "\"4188991-ia6/lBqVS1/2g6a6mwve9lNP2d8\"",
		"mtime": "2026-11-08T07:06:34.259Z",
		"size": 68716945,
		"path": "../public/videos/ht-trailer-3.mp4"
	},
	"/videos/vfx-3.mp4": {
		"type": "video/mp4",
		"etag": "\"40859bf-lLglXPSsJLrQWjdhudZOLIf2/xc\"",
		"mtime": "2026-11-08T10:06:15.486Z",
		"size": 67656127,
		"path": "../public/videos/vfx-3.mp4"
	},
	"/videos/jgi-short-2.mp4": {
		"type": "video/mp4",
		"etag": "\"5f57d1b-V5HNgl0+fDrN2Ex77Qvbn4CENxE\"",
		"mtime": "2026-11-08T10:26:37.410Z",
		"size": 99974427,
		"path": "../public/videos/jgi-short-2.mp4"
	},
	"/videos/jgi-short-1.mp4": {
		"type": "video/mp4",
		"etag": "\"660e5b3-1Mg9hbfDpjlqDFJKMFTjsCWUS0M\"",
		"mtime": "2026-11-08T10:24:36.114Z",
		"size": 107013555,
		"path": "../public/videos/jgi-short-1.mp4"
	},
	"/videos/jgi-short-3.mp4": {
		"type": "video/mp4",
		"etag": "\"6a487a1-A8SI0jVtkkiCG2uS3K+goVJ/Ke8\"",
		"mtime": "2026-11-08T10:27:31.771Z",
		"size": 111445921,
		"path": "../public/videos/jgi-short-3.mp4"
	},
	"/videos/hustle-tribe-trailer-3.mp4": {
		"type": "video/mp4",
		"etag": "\"8ac5d27-Yk/0thyt+OxICCmxc1KFoFmm28M\"",
		"mtime": "2026-11-08T09:40:26.391Z",
		"size": 145513767,
		"path": "../public/videos/hustle-tribe-trailer-3.mp4"
	},
	"/videos/hustle-tribe-trailer-2.mp4": {
		"type": "video/mp4",
		"etag": "\"c0e6546-/OoP/vrneND+t7ozV1xt43i+6YE\"",
		"mtime": "2026-11-08T09:42:42.031Z",
		"size": 202270022,
		"path": "../public/videos/hustle-tribe-trailer-2.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_ycrHaf = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_ycrHaf
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
