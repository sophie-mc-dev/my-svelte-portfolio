const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DiS537ID.js","app":"_app/immutable/entry/app.NH2flsro.js","imports":["_app/immutable/entry/start.DiS537ID.js","_app/immutable/chunks/entry.DyjyRmcE.js","_app/immutable/chunks/scheduler.Dk-snqIU.js","_app/immutable/chunks/index.Ice1EKvx.js","_app/immutable/entry/app.NH2flsro.js","_app/immutable/chunks/scheduler.Dk-snqIU.js","_app/immutable/chunks/index.hN5g6nR9.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-f8YGyNoM.js')),
			__memo(() => import('./chunks/1-BmCrjlhA.js')),
			__memo(() => import('./chunks/4-BVdUR-fD.js'))
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/about","/sverdle/how-to-play"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
