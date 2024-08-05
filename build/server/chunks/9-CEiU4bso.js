import { b as baseURL } from './env-C5O8tkwu.js';

function slugToNameAllWordsCapital(slug) {
  let addedSpaces = slug.replace(/-/g, " ");
  let words = addedSpaces.split(" ");
  let result = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
  return result;
}
const load = async ({ params, url, fetch }) => {
  const cityContentUrl = `${baseURL}_rsc/city_content/${params.service}/${params.city}`;
  const cityContentRes = await fetch(cityContentUrl);
  const ctaComponentUrl = `${baseURL}rsc/cta_component`;
  let ctaComponentRes = await fetch(ctaComponentUrl);
  const areaPagesHeadingsUrl = `${baseURL}rsc/area_pages_headings`;
  let areaPagesRes = await fetch(areaPagesHeadingsUrl);
  const mainServiceUrl = `${baseURL}rsc/main_services/${params.service}`;
  let mainServiceRes = await fetch(mainServiceUrl);
  let area = {
    slug: params.city,
    name: slugToNameAllWordsCapital(params.city)
  };
  let service = {
    slug: params.service,
    name: slugToNameAllWordsCapital(params.service)
  };
  if (cityContentRes.ok && ctaComponentRes.ok && mainServiceRes.ok && areaPagesRes.ok) {
    let cityContent = await cityContentRes.json();
    let mainServiceContent = await mainServiceRes.json();
    const ctaComponentData = await ctaComponentRes.json();
    const areaPagesHeadingsData = await areaPagesRes.json();
    let sideMenu = cityContent.side_menu.properties.menu_items;
    let menu = sideMenu.map((item) => {
      return JSON.parse(item);
    });
    cityContent.sideMenu = menu;
    let mainServiceMenu = mainServiceContent.side_menu;
    let mainServiceMenuParsed = JSON.parse(
      mainServiceContent.side_menu.menuItems
    );
    let mainServiceMenuMap = mainServiceMenuParsed.map((item) => {
      return JSON.parse(item);
    });
    mainServiceMenu = mainServiceMenuMap;
    return {
      area,
      content: cityContent,
      service,
      mainServiceMenu,
      ctaData: ctaComponentData.properties,
      pagePath: url.pathname,
      areaPagesHeadings: areaPagesHeadingsData
    };
  }
  return {
    status: cityContentRes.status,
    error: new Error(`Could not load ${url}`)
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 9;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BPd2cvzY.js')).default;
const server_id = "src/routes/[service=service]/[city=city]/+page.server.ts";
const imports = ["_app/immutable/nodes/9._5VqjDpA.js","_app/immutable/chunks/scheduler.dbZF-59q.js","_app/immutable/chunks/index.BSEiThIP.js","_app/immutable/chunks/MenuAside.svelte_svelte_type_style_lang.CGVGr24j.js","_app/immutable/chunks/stores.W89RDQd-.js","_app/immutable/chunks/entry.DxAwd614.js","_app/immutable/chunks/SuccessMessage.r6B05TTm.js","_app/immutable/chunks/TwoColumnLayout.CcEl3Mbf.js","_app/immutable/chunks/Head.B7VCmF3a.js","_app/immutable/chunks/env.BJCrm-CR.js","_app/immutable/chunks/CtaBanner.CFu3d1su.js","_app/immutable/chunks/ActionButton.D1d2Jyws.js"];
const stylesheets = ["_app/immutable/assets/MenuAside.iCPKaZ3b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=9-CEiU4bso.js.map
