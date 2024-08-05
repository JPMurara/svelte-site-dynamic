import { c as create_ssr_component, i as subscribe, v as validate_component, k as escape, j as add_attribute, l as each } from './exports-Bs1Z8H2x.js';
import { I as InTextForm, C as CtaBanner } from './CtaBanner-Dx_dB9M0.js';
import { T as TwoColumnLayout, M as MenuAside, B as Breadcrumbs } from './TwoColumnLayout-Bb5MqRik.js';
import { p as page } from './stores-DmVCp768.js';
import './MenuAside.svelte_svelte_type_style_lang-x3jG1pm5.js';
import { H as Head } from './Head-D0eqEAG6.js';
import { a as assetURL } from './env-C5O8tkwu.js';
import './Phone-BWAOEZRA.js';
import './ActionButton-CaKRodl-.js';

const SearchbarSingle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mainServiceSlugToName;
  let serviceAreasMenu;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  mainServiceSlugToName = $page.data.pagePath.split("/")[1].split("-").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  serviceAreasMenu = $page.data.serviceAreaMenu.filter((area) => area.heading === mainServiceSlugToName);
  $$unsubscribe_page();
  return `<div class="${escape(className, true) + " text-[#332E33] w-full bg-transparent"}"><div data-svelte-h="svelte-1aag82t"><p class="md:!text-xl md:text-white !font-semibold">Search Our Service Areas</p></div> <div class="flex flex-col text-gray-900 rounded-lg px-2 gap-2 py-2 w-full md:w-64"><select class="text-center col-span-12 md:col-span-4 focus:outline-none lg:border-white border-gray-300 focus:ring-1 focus:ring-transparent focus:border-transparent bg-white rounded-lg"><option value="" disabled selected data-svelte-h="svelte-ujy0dn">Select your area</option>${each(serviceAreasMenu[0].items, (item) => {
    return `<option${add_attribute("value", item.slug, 0)}>${escape(item.name)}</option>`;
  })}</select></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let service;
  let sideMenu;
  let formHeading;
  let ctaData;
  let meta;
  let breadcrumbs;
  let companyId;
  let path;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let background = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  service = data.service;
  sideMenu = data.service.sideMenu;
  formHeading = data.service.form_heading;
  ctaData = data.ctaComponentData;
  meta = {
    metaTitle: data.service.meta_title,
    metaDescription: data.service.meta_desc
  };
  breadcrumbs = data.service.breadcrumbs.map((item) => {
    return JSON.parse(item);
  });
  companyId = $page.data.tokens.smartyrId;
  path = $page.data.pagePath;
  {
    if (service.feature_image) {
      background = service.feature_image;
    } else {
      if (path.includes("life-coach")) {
        background = `${assetURL}/images/${$page.data.fallback_banner_image.life_coach}`;
      } else if (path.includes("leadership-coach")) {
        background = `${assetURL}/images/${$page.data.fallback_banner_image.leadership_coach}`;
      } else if (path.includes("business-coach")) {
        background = `${assetURL}/images/${$page.data.fallback_banner_image.business_coach}`;
      } else if (path.includes("motivational-speaker")) {
        background = `${assetURL}/images/${$page.data.fallback_banner_image.motivational_speaker}`;
      } else {
        background = "";
      }
    }
  }
  $$unsubscribe_page();
  return `${validate_component(Head, "Head").$$render($$result, { data: meta }, {}, {
    default: () => {
      return `<title>${escape(meta.metaTitle)}</title>`;
    }
  })} <div class="relative mt-40 md:mt-28 h-[26rem] xl:h-[30rem] 2xl:h-[43rem]"><div class="absolute inset-0 bg-no-repeat bg-cover bg-center" style="${"background-image: url(" + escape(background, true) + ");"}" aria-label="Service banner image"></div> <div class="absolute inset-0 bg-black opacity-60"></div> <div class="relative flex items-center justify-center p-6 h-full"><div class="text-center"><h1 class="!text-5xl md:!text-6xl lg:!text-7xl mb-6 !text-gray-200 !tracking-tight z-50" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">${escape(service.title)}</h1> <div class="lg:max-w-2xl mx-auto"><div data-embed="widget"${add_attribute("data-organisation", companyId, 0)}></div></div></div> <div class="absolute bottom-0 m-2 md:m-6">${validate_component(SearchbarSingle, "SearchbarSingle").$$render(
    $$result,
    {
      className: "flex flex-col !text-gray-100"
    },
    {},
    {}
  )}</div></div></div> ${validate_component(TwoColumnLayout, "LayoutTwoColumn").$$render($$result, {}, {}, {
    menu: () => {
      return `${validate_component(MenuAside, "MenuAside").$$render($$result, { data: sideMenu }, {}, {})} `;
    },
    "content-main": () => {
      return `<!-- HTML_TAG_START -->${service.content}<!-- HTML_TAG_END --> `;
    },
    form: () => {
      return `${validate_component(InTextForm, "FormCTA").$$render($$result, { formHeading }, {}, {})} `;
    },
    "content-intro": () => {
      return `<!-- HTML_TAG_START -->${service.introduction}<!-- HTML_TAG_END --> `;
    },
    breadcrumbs: () => {
      return `${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, { breadcrumbs }, {}, {})}`;
    }
  })} ${validate_component(CtaBanner, "CtaBanner").$$render($$result, { ctaData }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BVYMCuwY.js.map
