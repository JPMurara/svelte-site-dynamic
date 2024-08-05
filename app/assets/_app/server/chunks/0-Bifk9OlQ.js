import { b as baseURL } from './env-C5O8tkwu.js';

const prerender = false;
const load = async () => {
  const companyInfoUrl = `${baseURL}rsc/company_info`;
  let companyInfoRes = await fetch(companyInfoUrl);
  if (companyInfoRes.ok) {
    let data = await companyInfoRes.json();
    const parsedConstants = data.constants.map(
      ({ name, object }) => ({
        [name]: JSON.parse(object)
      })
    );
    const mainServicesMenu = data.mainServicesMenu.map(
      (service) => JSON.parse(service)
    );
    const moreLinksMenu = data.moreLinksMenu.map(
      (link) => JSON.parse(link)
    );
    const serviceAreaMenu = data.serviceAreaMenu.map(
      (serviceArea) => JSON.parse(serviceArea)
    );
    const constants = parsedConstants.reduce(
      (acc, current) => ({ ...acc, ...current }),
      {}
    );
    return {
      buttons: constants.buttons,
      companyHours: constants.company_hours,
      hero: constants.hero,
      company: constants.company,
      cta: constants.cta,
      mainServices: data.mainServices,
      mainServicesMenu,
      moreLinksMenu,
      serviceAreaMenu,
      socialData: constants.socials,
      tokens: constants.tokens,
      fallback_banner_image: constants.fallback_banner_image,
      companyLogo: constants.company_logo,
      favicon: constants.favicon
    };
  } else {
    return {
      status: 500,
      error: new Error("Error getting Company Info data")
    };
  }
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load,
  prerender: prerender
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-Disl29g-.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.BnStPenX.js","_app/immutable/chunks/scheduler.dbZF-59q.js","_app/immutable/chunks/index.BSEiThIP.js","_app/immutable/chunks/entry.DxAwd614.js","_app/immutable/chunks/MenuAside.svelte_svelte_type_style_lang.CGVGr24j.js","_app/immutable/chunks/ActionButton.D1d2Jyws.js","_app/immutable/chunks/stores.W89RDQd-.js","_app/immutable/chunks/SuccessMessage.r6B05TTm.js","_app/immutable/chunks/env.BJCrm-CR.js"];
const stylesheets = ["_app/immutable/assets/0.BDmYgnBo.css","_app/immutable/assets/Footer.BOqHSdRe.css","_app/immutable/assets/MenuAside.iCPKaZ3b.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-Bifk9OlQ.js.map
