import { b as baseURL } from './env-C5O8tkwu.js';

const load = async () => {
  const heroComponentUrl = `${baseURL}rsc/hero_component`;
  let heroComponentRes = await fetch(heroComponentUrl);
  const aboutComponentUrl = `${baseURL}rsc/about_component`;
  let aboutComponentRes = await fetch(aboutComponentUrl);
  const servicesComponentUrl = `${baseURL}rsc/services_component`;
  let servicesComponentRes = await fetch(servicesComponentUrl);
  const whyComponentUrl = `${baseURL}rsc/why_component`;
  let whyComponentRes = await fetch(whyComponentUrl);
  const ctaComponentUrl = `${baseURL}rsc/cta_component`;
  let ctaComponentRes = await fetch(ctaComponentUrl);
  const testimonialsComponentUrl = `${baseURL}rsc/testimonials_component`;
  let testimonialsComponentRes = await fetch(testimonialsComponentUrl);
  if (heroComponentRes.ok && aboutComponentRes.ok && servicesComponentRes.ok && whyComponentRes.ok && ctaComponentRes.ok && testimonialsComponentRes.ok) {
    const heroComponentData = await heroComponentRes.json();
    const aboutComponentData = await aboutComponentRes.json();
    const servicesComponentData = await servicesComponentRes.json();
    let whyComponentData = await whyComponentRes.json();
    const ctaComponentData = await ctaComponentRes.json();
    let testimonialsComponentData = await testimonialsComponentRes.json();
    const whyCards = await whyComponentData.properties.cards.map(
      (el) => JSON.parse(el)
    );
    whyComponentData.properties.cards = whyCards;
    const testimonials = await testimonialsComponentData.properties.testimonials.map(
      (el) => JSON.parse(el)
    );
    testimonialsComponentData.properties.testimonials = testimonials;
    const pretestimonials = await testimonialsComponentData.properties.pretestimonials.map(
      (el) => JSON.parse(el)
    );
    testimonialsComponentData.properties.pretestimonials = pretestimonials;
    return {
      heroData: heroComponentData.properties,
      aboutData: aboutComponentData.properties,
      servicesData: servicesComponentData,
      whyData: whyComponentData.properties,
      ctaData: ctaComponentData.properties,
      testimonialsData: testimonialsComponentData.properties
    };
  } else {
    return {
      status: 500,
      error: new Error("Error getting components data")
    };
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DOjk_p-m.js')).default;
const server_id = "src/routes/+page.server.ts";
const imports = ["_app/immutable/nodes/2.zECGZlQX.js","_app/immutable/chunks/scheduler.dbZF-59q.js","_app/immutable/chunks/index.BSEiThIP.js","_app/immutable/chunks/Head.B7VCmF3a.js","_app/immutable/chunks/stores.W89RDQd-.js","_app/immutable/chunks/entry.DxAwd614.js","_app/immutable/chunks/env.BJCrm-CR.js","_app/immutable/chunks/CtaBanner.CFu3d1su.js","_app/immutable/chunks/MenuAside.svelte_svelte_type_style_lang.CGVGr24j.js","_app/immutable/chunks/SuccessMessage.r6B05TTm.js","_app/immutable/chunks/ActionButton.D1d2Jyws.js","_app/immutable/chunks/Searchbar.C30cWt0a.js"];
const stylesheets = ["_app/immutable/assets/Footer.BOqHSdRe.css","_app/immutable/assets/MenuAside.iCPKaZ3b.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-ClH0bssJ.js.map
