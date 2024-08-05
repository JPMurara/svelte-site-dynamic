import { c as create_ssr_component, i as subscribe, v as validate_component, k as escape, j as add_attribute } from './exports-Bs1Z8H2x.js';
import { I as InTextForm, C as CtaBanner } from './CtaBanner-Dx_dB9M0.js';
import { T as TwoColumnLayout, M as MenuAside, B as Breadcrumbs } from './TwoColumnLayout-Bb5MqRik.js';
import { S as Searchbar } from './Searchbar-BmpW0grm.js';
import { p as page } from './stores-DmVCp768.js';
import './MenuAside.svelte_svelte_type_style_lang-x3jG1pm5.js';
import { H as Head } from './Head-D0eqEAG6.js';
import { b as baseURL } from './env-C5O8tkwu.js';
import './Phone-BWAOEZRA.js';
import './ActionButton-CaKRodl-.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let service;
  let formHeading;
  let sideMenu;
  let ctaData;
  let canonicalSlug;
  let meta;
  let breadcrumbs;
  let companyId;
  let background;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $page.data.pagePath;
  service = data.service;
  $page.data.mainServicesMenu;
  formHeading = data.service.form_heading;
  sideMenu = data.service.sideMenu;
  ctaData = data.ctaComponentData;
  canonicalSlug = $page.data.pagePath.split("/").slice(1).join("/");
  meta = {
    metaTitle: data.service.meta_title,
    metaDescription: data.service.meta_desc
  };
  breadcrumbs = data.service.breadcrumbs.map((item) => {
    return JSON.parse(item);
  });
  companyId = $page.data.tokens.smartyrId;
  background = service.feature_image;
  $$unsubscribe_page();
  return `${validate_component(Head, "Head").$$render($$result, { data: meta }, {}, {
    default: () => {
      return `<title>${escape(meta.metaTitle)}</title><link rel="canonical" href="${escape(baseURL, true) + escape(canonicalSlug, true)}">`;
    }
  })} <div class="relative mt-40 md:mt-28 h-[26rem] xl:h-[30rem] 2xl:h-[43rem]"><div class="absolute inset-0 bg-no-repeat bg-cover bg-center" style="${"background-image: url(" + escape(background, true) + ");"}" aria-label="Service banner image"></div> <div class="absolute inset-0 bg-black opacity-60"></div> <div class="relative flex items-center justify-center p-6 h-full"><div class="text-center"><h1 class="!text-5xl md:!text-6xl lg:!text-7xl mb-6 !text-gray-200 !tracking-tight z-50" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">${escape(service.title)}</h1> <div class="lg:max-w-2xl mx-auto"><div data-embed="widget"${add_attribute("data-organisation", companyId, 0)}></div></div></div> <div class="absolute bottom-0 m-2 md:m-6">${validate_component(Searchbar, "Searchbar").$$render(
    $$result,
    {
      className: "flex flex-col !text-gray-100"
    },
    {},
    {}
  )}</div></div></div> ${validate_component(TwoColumnLayout, "LayoutTwoColumn").$$render($$result, {}, {}, {
    "content-main": () => {
      return `<!-- HTML_TAG_START -->${service.content}<!-- HTML_TAG_END --> `;
    },
    menu: () => {
      return `${validate_component(MenuAside, "MenuAside").$$render($$result, { data: sideMenu }, {}, {})} `;
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
//# sourceMappingURL=_page.svelte-BCnWGeoj.js.map
