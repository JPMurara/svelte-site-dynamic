import { b as baseURL } from './env-C5O8tkwu.js';

async function load({ params, url, fetch }) {
  const servicesUrl = `${baseURL}rsc/services/${params.service}/${params.subService}`;
  const serviceRes = await fetch(servicesUrl);
  const ctaComponentUrl = `${baseURL}rsc/cta_component`;
  let ctaComponentRes = await fetch(ctaComponentUrl);
  if (serviceRes.ok && ctaComponentRes.ok) {
    const ctaComponentData = await ctaComponentRes.json();
    const service = await serviceRes.json();
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
    error: (await serviceRes.json()).error
  };
}

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 10;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BVYMCuwY.js')).default;
const server_id = "src/routes/[service=service]/[subService]/+page.server.ts";
const imports = ["_app/immutable/nodes/10.DvQrObYC.js","_app/immutable/chunks/scheduler.dbZF-59q.js","_app/immutable/chunks/index.BSEiThIP.js","_app/immutable/chunks/CtaBanner.CFu3d1su.js","_app/immutable/chunks/stores.W89RDQd-.js","_app/immutable/chunks/entry.DxAwd614.js","_app/immutable/chunks/MenuAside.svelte_svelte_type_style_lang.CGVGr24j.js","_app/immutable/chunks/env.BJCrm-CR.js","_app/immutable/chunks/SuccessMessage.r6B05TTm.js","_app/immutable/chunks/ActionButton.D1d2Jyws.js","_app/immutable/chunks/TwoColumnLayout.CcEl3Mbf.js","_app/immutable/chunks/Head.B7VCmF3a.js"];
const stylesheets = ["_app/immutable/assets/MenuAside.iCPKaZ3b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=10-C_v49HC-.js.map
