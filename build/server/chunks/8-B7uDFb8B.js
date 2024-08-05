import { b as baseURL } from './env-C5O8tkwu.js';

const load = async ({ params, url, fetch }) => {
  const serviceUrl = `${baseURL}rsc/main_services/${params.service}`;
  let serviceRes = await fetch(serviceUrl);
  const ctaComponentUrl = `${baseURL}rsc/cta_component`;
  let ctaComponentRes = await fetch(ctaComponentUrl);
  if (serviceRes.ok && ctaComponentRes.ok) {
    const ctaComponentData = await ctaComponentRes.json();
    let service = await serviceRes.json();
    let sideMenu = JSON.parse(service.side_menu.menuItems);
    let menu = sideMenu.map((item) => {
      return JSON.parse(item);
    });
    service.sideMenu = menu;
    return {
      service,
      pagePath: url.pathname,
      serviceSlug: params.service,
      ctaComponentData: ctaComponentData.properties
    };
  }
  return {
    status: serviceRes.status,
    error: new Error(`Could not load ${serviceUrl}`)
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 8;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BCnWGeoj.js')).default;
const server_id = "src/routes/[service=service]/+page.server.ts";
const imports = ["_app/immutable/nodes/8.B_HW0mPc.js","_app/immutable/chunks/scheduler.dbZF-59q.js","_app/immutable/chunks/index.BSEiThIP.js","_app/immutable/chunks/CtaBanner.CFu3d1su.js","_app/immutable/chunks/stores.W89RDQd-.js","_app/immutable/chunks/entry.DxAwd614.js","_app/immutable/chunks/MenuAside.svelte_svelte_type_style_lang.CGVGr24j.js","_app/immutable/chunks/env.BJCrm-CR.js","_app/immutable/chunks/SuccessMessage.r6B05TTm.js","_app/immutable/chunks/ActionButton.D1d2Jyws.js","_app/immutable/chunks/TwoColumnLayout.CcEl3Mbf.js","_app/immutable/chunks/Searchbar.C30cWt0a.js","_app/immutable/chunks/Head.B7VCmF3a.js"];
const stylesheets = ["_app/immutable/assets/MenuAside.iCPKaZ3b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=8-B7uDFb8B.js.map
