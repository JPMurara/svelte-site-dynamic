import { b as baseURL } from './env-C5O8tkwu.js';

const load = async ({ params, url, fetch }) => {
  const aboutUrl = `${baseURL}rsc/about`;
  let aboutRes = await fetch(aboutUrl);
  if (aboutRes.ok) {
    const data = await aboutRes.json();
    return {
      aboutData: data.properties
    };
  }
  return {
    status: aboutRes.status,
    error: new Error(`Could not load ${aboutUrl}`)
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-obxEShIQ.js')).default;
const server_id = "src/routes/about/+page.server.ts";
const imports = ["_app/immutable/nodes/3.W4nGN2Vu.js","_app/immutable/chunks/scheduler.dbZF-59q.js","_app/immutable/chunks/index.BSEiThIP.js","_app/immutable/chunks/env.BJCrm-CR.js","_app/immutable/chunks/Head.B7VCmF3a.js","_app/immutable/chunks/stores.W89RDQd-.js","_app/immutable/chunks/entry.DxAwd614.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=3-B8h07XVi.js.map
