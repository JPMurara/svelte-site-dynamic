import { b as baseURL } from './env-C5O8tkwu.js';

const load = async ({ params, url, fetch }) => {
  const contactUrl = `${baseURL}rsc/contact`;
  let contactRes = await fetch(contactUrl);
  if (contactRes.ok) {
    const data = await contactRes.json();
    return {
      contactData: data.properties
    };
  }
  return {
    status: contactRes.status,
    error: new Error(`Could not load ${contactUrl}`)
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-Bm7mfaXr.js')).default;
const server_id = "src/routes/contact/+page.server.ts";
const imports = ["_app/immutable/nodes/4.CE-_vQ-w.js","_app/immutable/chunks/scheduler.dbZF-59q.js","_app/immutable/chunks/index.BSEiThIP.js","_app/immutable/chunks/Head.B7VCmF3a.js","_app/immutable/chunks/stores.W89RDQd-.js","_app/immutable/chunks/entry.DxAwd614.js","_app/immutable/chunks/env.BJCrm-CR.js","_app/immutable/chunks/MenuAside.svelte_svelte_type_style_lang.CGVGr24j.js","_app/immutable/chunks/SuccessMessage.r6B05TTm.js"];
const stylesheets = ["_app/immutable/assets/MenuAside.iCPKaZ3b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=4-GkqFYxVR.js.map
