import { c as create_ssr_component, v as validate_component, i as subscribe, k as escape, l as each, j as add_attribute } from './exports-Bs1Z8H2x.js';
import { p as page } from './stores-DmVCp768.js';
import { I as Icon, P as Phone } from './Phone-BWAOEZRA.js';
import { T as TwoColumnLayout, B as Breadcrumbs, M as MenuAside } from './TwoColumnLayout-Bb5MqRik.js';
import { H as Head } from './Head-D0eqEAG6.js';
import './MenuAside.svelte_svelte_type_style_lang-x3jG1pm5.js';
import { I as InTextForm, C as CtaBanner } from './CtaBanner-Dx_dB9M0.js';
import { b as baseURL } from './env-C5O8tkwu.js';
import './ActionButton-CaKRodl-.js';

const AreaHeaderForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pagePath;
  let company;
  let mainServicesMenu;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { formHeading } = $$props;
  let formTitle;
  let values = {
    name: "",
    phone: "",
    email: "",
    location: "",
    interest: "",
    message: "",
    anteater: ""
  };
  let errors = {};
  if ($$props.formHeading === void 0 && $$bindings.formHeading && formHeading !== void 0) $$bindings.formHeading(formHeading);
  pagePath = $page.url.pathname;
  company = $page.data.company;
  mainServicesMenu = $page.data.mainServicesMenu;
  {
    if (formHeading) {
      formTitle = formHeading;
    } else {
      formTitle = "Contact Us";
    }
  }
  $$unsubscribe_page();
  return `<div class="w-full">${`${`<div class="my-6 p-4 bg-action pt-2"><div><h3 class="text-white mt-0 text-2xl capitalize">${escape(formTitle)}</h3></div> <form><div class="absolute left-[-2000px]"><input aria-label="If you are human, leave this field blank" name="type" value="Modal Booking Form" type="hidden"> <input name="page"${add_attribute("value", pagePath, 0)} type="hidden"> <input name="anteater" type="text" placeholder="Anteater" autocomplete="off" class="hidden"${add_attribute("value", values.anteater, 0)}></div> <fieldset><div class="flex flex-col text-left space-y-4">${errors.form ? `<span class="text-red-900">${escape(errors.form.message)}</span>` : ``} <div class="grid sm:grid-cols-2 gap-2"><div><input class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black" name="name" type="text" placeholder="Name"${add_attribute("value", values.name, 0)}> ${errors.name ? `<span class="text-red-900">${escape(errors.name.message)}</span>` : ``}</div> <div><input class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black" name="phone" type="tel" placeholder="Phone Number"${add_attribute("value", values.phone, 0)}> ${errors.phone ? `<span class="text-red-900">${escape(errors.phone.message)}</span>` : ``}</div> <div><input class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black" name="email" type="email" placeholder="Email"${add_attribute("value", values.email, 0)}> ${errors.email ? `<span class="text-red-900">${escape(errors.email.message)}</span>` : ``}</div> <div class="w-full"><input class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black" name="location" type="text" placeholder="Location"${add_attribute("value", values.location, 0)}> ${errors.location ? `<span class="text-red-900">${escape(errors.location.message)}</span>` : ``}</div></div> <div><label for="interest" class="block text-white" data-svelte-h="svelte-q6es2u">Interest in</label> <select id="interest" class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black" required name="interest"><option disabled selected value="" data-svelte-h="svelte-ci8atx">Select an option</option>${each(mainServicesMenu, (service) => {
    return `<option${add_attribute("value", service.title, 0)}>${escape(service.title)}</option>`;
  })}</select> ${errors.interest ? `<span class="text-red-900">${escape(errors.interest.message)}</span>` : ``}</div> <div><textarea id="message" class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black" placeholder="How can we help you?" rows="4" name="message">${escape("")}</textarea> ${errors.message ? `<span class="text-red-900">${escape(errors.message.message)}</span>` : ``}</div></div> <div class="flex items-center pt-4"><button type="submit" class="text-action px-4 py-2 bg-gray-100 focus:ring-black focus:border-black hover:bg-action hover:text-white hover:border-white border-2 text-sm mr-2" data-svelte-h="svelte-xxwb7c">Submit</button> ${validate_component(Phone, "Phone").$$render($$result, { number: company.phone }, {}, {})}</div></fieldset></form></div>`}`}</div>`;
});
function filterHeadings(obj) {
  return Object.entries(obj).filter(([key]) => key.includes("heading")).map(([, value]) => value);
}
const AreaPageTemplate = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let area;
  let areaData;
  let currentService;
  let services;
  let mainServiceMenu;
  let formHeading;
  let ctaData;
  let breadcrumbs;
  let serviceAreaSlug;
  let meta;
  let path;
  let canonicalSlug;
  let mainServiceSlug;
  let areaPageHeadingsData;
  let areaPageHeadings;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  area = data.area;
  areaData = data.content.properties;
  currentService = data.service;
  services = $page.data.mainServices;
  data.content.sideMenu;
  mainServiceMenu = data.mainServiceMenu;
  formHeading = areaData.form_heading;
  ctaData = data.ctaData;
  breadcrumbs = areaData.breadcrumbs.map((crumb) => JSON.parse(crumb));
  serviceAreaSlug = data.area.slug;
  meta = {
    metaTitle: areaData.meta_title,
    metaDescription: areaData.meta_desc
  };
  path = $page.data.pagePath;
  canonicalSlug = path.split("/").slice(1).join("/");
  mainServiceSlug = path.split("/")[1];
  areaPageHeadingsData = data.areaPagesHeadings.filter((item) => item.properties.main_service_slug === mainServiceSlug);
  areaPageHeadings = filterHeadings(areaPageHeadingsData[0].properties);
  $$unsubscribe_page();
  return `${validate_component(Head, "Head").$$render($$result, { data: meta }, {}, {
    default: () => {
      return `<title>${escape(meta.metaTitle)}</title><link rel="canonical" href="${escape(baseURL, true) + escape(canonicalSlug, true)}">`;
    }
  })} <div class="bg-gray-100 pt-36 mb:pt-28 m-auto"><div class="container flex flex-wrap items-center justify-between"><div class="w-full lg:w-1/2 p-4"><h1 class="mb-4 lg:!mb-8 !text-4xl">${escape(areaData.name)}</h1> <ul class="space-y-4">${each(areaPageHeadings, (item) => {
    return `<li class="flex items-center space-x-3">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "typcn:chevron-right",
        class: "text-white bg-action"
      },
      {},
      {}
    )} <span class="capitalize text-base font-semibold leading-tight">${escape(item)}</span> </li>`;
  })}</ul></div> <div class="w-full lg:w-1/2">${validate_component(AreaHeaderForm, "AreaHeaderForm").$$render($$result, { formHeading }, {}, {})}</div></div></div> ${validate_component(TwoColumnLayout, "TwoColumnLayout").$$render($$result, {}, {}, {
    "content-footer": () => {
      return `<h2>Looking for more than ${escape(currentService.name)} in ${escape(area.name)}?</h2> <p>We provide additional services in ${escape(area.name)}</p> <ul class="p-0 py-2 mb-5 list-disc">${each(services.filter((service) => currentService.slug !== service.slug), (service) => {
        return `<li class="m-0 my-2 font-bold">${serviceAreaSlug ? `<a href="${"/" + escape(service.slug, true) + "/" + escape(serviceAreaSlug, true)}" title="${escape(service.title, true) + " " + escape(area.name, true)}">${escape(service.title)}</a>` : ``} </li>`;
      })}</ul> <h2>We provide ${escape(currentService.name)} services in ${escape(area.name)}</h2> <iframe${add_attribute("title", areaData.name, 0)} src="${"https://www.google.com/maps/embed/v1/place?key=AIzaSyAcCsxo__5_A9iIHi0FiIHkk7OzR2CuYYM&q=" + escape(area.slug, true)}" width="100%" height="450" style="border:0;" loading="lazy"></iframe> `;
    },
    "content-main": () => {
      return `<!-- HTML_TAG_START -->${areaData.content}<!-- HTML_TAG_END --> `;
    },
    form: () => {
      return `${validate_component(InTextForm, "InTextForm").$$render($$result, { formHeading }, {}, {})} `;
    },
    "content-intro": () => {
      return `<!-- HTML_TAG_START -->${areaData.description}<!-- HTML_TAG_END --> `;
    },
    breadcrumbs: () => {
      return `${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, { breadcrumbs }, {}, {})} `;
    },
    menu: () => {
      return `${validate_component(MenuAside, "MenuAside").$$render($$result, { data: mainServiceMenu }, {}, {})}`;
    }
  })} ${validate_component(CtaBanner, "CtaBanner").$$render($$result, { ctaData }, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let areaPageData;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  areaPageData = {
    area: data.area,
    content: data.content,
    information: null,
    service: data.service,
    mainServiceMenu: data.mainServiceMenu,
    ctaData: data.ctaData,
    areaPagesHeadings: data.areaPagesHeadings
  };
  return `${validate_component(AreaPageTemplate, "AreaPage").$$render($$result, { data: areaPageData }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BPd2cvzY.js.map
