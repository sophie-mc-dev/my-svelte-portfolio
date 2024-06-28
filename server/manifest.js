const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","assets/particles-2.json","assets/particles.json","favicon.png","logo.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BvnJ3t3g.js","app":"_app/immutable/entry/app.DHISDsd2.js","imports":["_app/immutable/entry/start.BvnJ3t3g.js","_app/immutable/chunks/entry.CJglJD7A.js","_app/immutable/chunks/scheduler.Dcsx6KF6.js","_app/immutable/chunks/index.BORKrIyz.js","_app/immutable/entry/app.DHISDsd2.js","_app/immutable/chunks/scheduler.Dcsx6KF6.js","_app/immutable/chunks/index.dumY36ZW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DlVWHptp.js')),
			__memo(() => import('./chunks/1-CXueCdZm.js')),
			__memo(() => import('./chunks/2-NvMOgVrB.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
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

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
