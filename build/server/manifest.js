const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["images/contact_us_image.webp","images/email-signature-logo.png","images/gallery-20160318_082227.webp","images/gallery-20170114_090037.webp","images/gallery-20170711_091117.webp","images/gallery-20170711_100413.webp","images/gallery-20170825_233837.webp","images/gallery-376.webp","images/gallery-454.webp","images/gallery-alice-and-jerome.webp","images/gallery-all-blacks.webp","images/gallery-banner-image-with-jerome-on-stage.webp","images/gallery-banner-images-pre-event.webp","images/gallery-banner-images-with-jerome-on-white-board.webp","images/gallery-confidence.webp","images/gallery-head-on-code5.webp","images/gallery-jerome-presenting.webp","images/gallery-jerome-public-speaking-code5.webp","images/gallery-jerome-public-speaking-ray-white.webp","images/gallery-nambour-team-jerome.webp","images/gallery-nambour-team.webp","images/gallery-niche-networking.webp","images/gallery-ray-white.webp","images/gallery-story-room.webp","images/gallery-team-half.webp","images/gallery-team.webp","images/gallery-yoga.webp","images/icon.svg","images/JeromeLamarque.jpg","images/Jerome___11.webp","images/leadership_coach_banner_image.webp","images/life_coach_image.webp","images/logo-pl.svg","images/logo.svg","images/testimonials-Hugh_Millington.webp","images/testimonials-Leigh_Brennan.webp","images/testimonials-tommy_leung.webp","robots.txt","_app/version.json"]),
	mimeTypes: {".webp":"image/webp",".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".txt":"text/plain",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.CI-jAlDf.js","app":"_app/immutable/entry/app.HfbxA-UZ.js","imports":["_app/immutable/entry/start.CI-jAlDf.js","_app/immutable/chunks/entry.DxAwd614.js","_app/immutable/chunks/scheduler.dbZF-59q.js","_app/immutable/entry/app.HfbxA-UZ.js","_app/immutable/chunks/scheduler.dbZF-59q.js","_app/immutable/chunks/index.BSEiThIP.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-Bifk9OlQ.js')),
			__memo(() => import('./chunks/1-BxDItJMR.js')),
			__memo(() => import('./chunks/2-ClH0bssJ.js')),
			__memo(() => import('./chunks/3-B8h07XVi.js')),
			__memo(() => import('./chunks/4-GkqFYxVR.js')),
			__memo(() => import('./chunks/5-D1t3wQo1.js')),
			__memo(() => import('./chunks/6-1HyueABM.js')),
			__memo(() => import('./chunks/7-_eB67tCl.js')),
			__memo(() => import('./chunks/8-B7uDFb8B.js')),
			__memo(() => import('./chunks/9-CEiU4bso.js')),
			__memo(() => import('./chunks/10-C_v49HC-.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/feedback",
				pattern: /^\/feedback\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/terms-conditions",
				pattern: /^\/terms-conditions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/[service=service]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"service","matcher":"service","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/[service=service]/[city=city]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"service","matcher":"service","optional":false,"rest":false,"chained":false},{"name":"city","matcher":"city","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/[service=service]/[subService]",
				pattern: /^\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"service","matcher":"service","optional":false,"rest":false,"chained":false},{"name":"subService","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		matchers: async () => {
			const { match: service } = await import ('./chunks/service-DvdYgZg5.js');
			const { match: city } = await import ('./chunks/city-72x3pTqL.js');
			return { service, city };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
