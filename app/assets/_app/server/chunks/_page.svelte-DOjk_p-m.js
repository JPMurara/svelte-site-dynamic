import { c as create_ssr_component, v as validate_component, k as escape, j as add_attribute, i as subscribe, l as each } from './exports-Bs1Z8H2x.js';
import { H as Head } from './Head-D0eqEAG6.js';
import { C as CtaBanner } from './CtaBanner-Dx_dB9M0.js';
import { p as page } from './stores-DmVCp768.js';
import './MenuAside.svelte_svelte_type_style_lang-x3jG1pm5.js';
import { A as ActionButton } from './ActionButton-CaKRodl-.js';
import { a as assetURL } from './env-C5O8tkwu.js';
import { P as Phone, I as Icon } from './Phone-BWAOEZRA.js';
import { S as Searchbar } from './Searchbar-BmpW0grm.js';

const AboutComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let about;
  let { aboutData } = $$props;
  if ($$props.aboutData === void 0 && $$bindings.aboutData && aboutData !== void 0) $$bindings.aboutData(aboutData);
  about = aboutData;
  return `<section class="flex flex-col items-center text-center container 2xl:w-2/3 mx-auto py-12"><div class="flex flex-col lg:flex-row items-center lg:justify-center w-full"><div class="w-full lg:w-1/2 relative max-w-screen-lg"><iframe class="w-full min-h-[200px] md:min-h-[400px]"${add_attribute("src", about.video, 0)} title="Jerome Lamarque - Transforming Lives" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen aria-label="Embedded Vimeo video about transforming lives"></iframe></div> <div class="px-5 md:px-0 lg:ml-12 lg:w-1/2"><h2 class="text-left text-2xl md:text-4xl font-bold !mt-4 lg:!mt-0 lg:!pt-0">${escape(about.title)}</h2> <p class="!text-sm md:!text-base !font-normal lg:w-full lg:mt-0 text-left md:!leading-relaxed">${escape(about.content)}</p></div></div></section>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let company;
  let hero;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { heroData } = $$props;
  const heroBackground = `${assetURL}/images/JeromeLamarque.jpg`;
  if ($$props.heroData === void 0 && $$bindings.heroData && heroData !== void 0) $$bindings.heroData(heroData);
  company = $page.data.company;
  hero = heroData;
  $$unsubscribe_page();
  return ` <section class="relative bg-gray-100"> <div class="hidden md:flex flex-col md:h-[50rem] xl:h-[45rem] 2xl:h-screen bg-no-repeat bg-cover relative md:mt-28 lg:mt-24 2xl:mt-16" style="${"background-image: url(" + escape(heroBackground, true) + "); background-position: right 90% top"}" aria-label="Jerome Lamarque profile banner"><div class="flex flex-col justify-center items-end h-full relative z-10"><div class="w-1/2 md:mr-12 lg:mr-20 2xl:pr-64"><h1 class="md:!text-3xl lg:!text-4xl xl:!text-5xl 2xl:!text-6xl !tracking-tight capitalize 2xl:!mb-6">${escape(hero.title)}</h1> <h2 class="capitalize md:!text-xl lg:!text-2xl xl:!text-xl 2xl:!text-2xl !mb-6">${escape(hero.subtitle)}</h2> <p class="!font-medium !text-sm xl:!text-base">${escape(hero.content)}</p> <div class="flex items-center flex-row justify-center md:justify-start gap-2 mt-10 xl:w-2/3">${validate_component(Phone, "Phone").$$render(
    $$result,
    {
      action: true,
      number: company.phone,
      className: "w-48"
    },
    {},
    {}
  )} ${validate_component(ActionButton, "ActionButton").$$render($$result, { action: true, className: "w-48" }, {}, {})}</div> <div class="mt-6">${validate_component(Searchbar, "Searchbar").$$render($$result, { className: "flex flex-col" }, {}, {})}</div></div></div></div>  <div class="md:hidden pt-36"><div class="relative flex justify-start"><img class="h-96 w-full object-cover object-left"${add_attribute("src", heroBackground, 0)} alt="Jerome Lamarque profile banner"></div> <main class="flex flex-col text-center md:block lg:text-left pb-12"><h1 class="capitalize !text-4xl !mb-4">${escape(hero.title)}</h1> <h2 class="max-w-lg !mx-3 !text-xl !my-0 !py-0 !mb-2 capitalize">${escape(hero.subtitle)}</h2> <p class="p-3 text-base my-3 !font-normal">${escape(hero.content)}</p> <div class="flex justify-center lg:justify-start px-4 mt-2 gap-2">${validate_component(Phone, "Phone").$$render(
    $$result,
    {
      action: true,
      className: "w-48",
      number: company.phone
    },
    {},
    {}
  )} ${validate_component(ActionButton, "ActionButton").$$render($$result, { action: true, className: "w-48" }, {}, {})}</div> <div class="mt-6">${validate_component(Searchbar, "Searchbar").$$render(
    $$result,
    {
      className: "flex flex-col items-center px-6"
    },
    {},
    {}
  )}</div></main></div></section>`;
});
const ServicesComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mainServicesMenu;
  let services;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { servicesData } = $$props;
  if ($$props.servicesData === void 0 && $$bindings.servicesData && servicesData !== void 0) $$bindings.servicesData(servicesData);
  mainServicesMenu = $page.data.mainServicesMenu;
  services = servicesData;
  $$unsubscribe_page();
  return `<section class="bg-[#C6C6C6] flex flex-col items-center pt-4 md:pt-12 pb-24"><div class="text-center mb-3 md:mb-12"><h2 class="text-4xl font-bold">${escape(services.title)}</h2></div> <div class="space-y-12 container"><div class="bg-white flex flex-col md:flex-row items-center md:justify-between"><div class="w-full md:w-1/2 px-5 lg:px-12 py-12 flex flex-col justify-center"><h2 class="!text-3xl font-semibold mb-4 !mt-0 !pt-0">${escape(mainServicesMenu[0].title)}</h2> <p class="!mb-6 md:!mb-4 lg:!mb-8 !text-sm xl:!text-base !font-normal">${escape(services.content_for_life_coach)}</p> <div class="flex justify-start"><a${add_attribute("href", mainServicesMenu[0].slug, 0)} title="${"Find Out More About " + escape(mainServicesMenu[0].title, true)}" class="bg-action py-2 px-12 font-semibold text-[#332E33] hover:bg-[#C44D08] transition-colors duration-300 cursor-pointer">${escape(services.button_text)}</a></div></div> <div class="w-full md:w-1/2 relative" data-svelte-h="svelte-df7ubp"><img class="w-full h-64 md:h-96 object-cover" src="${escape(assetURL, true) + "/images/lifecoach.webp"}" alt="Jerome Lamarque conducting a life coaching session"></div></div> <div class="bg-white flex flex-col md:flex-row items-center md:justify-between"><div class="w-full md:w-1/2 relative" data-svelte-h="svelte-1h4x386"><img class="w-full h-64 md:h-96 object-cover" src="${escape(assetURL, true) + "/images/leadership.webp"}" alt="Leadership Coach Jerome Lamarque"></div> <div class="w-full md:w-1/2 px-4 lg:px-12 py-12 flex flex-col justify-center"><h2 class="!text-3xl font-semibold mb-4 !mt-0 !pt-0">${escape(mainServicesMenu[1].title)}</h2> <p class="!mb-6 md:!mb-4 lg:!mb-8 !text-sm xl:!text-base !font-normal">${escape(services.content_for_leadership_coach)}</p> <div class="flex justify-start"><a${add_attribute("href", mainServicesMenu[1].slug, 0)} title="${"Find Out More About " + escape(mainServicesMenu[1].title, true)}" class="bg-action py-2 px-12 font-semibold text-[#332E33] hover:bg-[#C44D08] transition-colors duration-300 cursor-pointer">${escape(services.button_text)}</a></div></div></div> <div class="bg-white flex flex-col md:flex-row items-center md:justify-between"><div class="w-full md:w-1/2 px-6 lg:px-12 py-12 flex flex-col justify-center"><h2 class="!text-3xl font-semibold mb-4 !mt-0 !pt-0">${escape(mainServicesMenu[2].title)}</h2> <p class="!mb-6 md:!mb-4 lg:!mb-8 !text-sm xl:!text-base !font-normal">${escape(services.content_for_business_coach)}</p> <div class="flex justify-start"><a${add_attribute("href", mainServicesMenu[2].slug, 0)} title="${"Find Out More About " + escape(mainServicesMenu[2].title, true)}" class="bg-action py-2 px-12 font-semibold text-[#332E33] hover:bg-[#C44D08] transition-colors duration-300 cursor-pointer">${escape(services.button_text)}</a></div></div> <div class="w-full md:w-1/2 relative" data-svelte-h="svelte-19gqz5"><img class="w-full h-64 md:h-96 object-cover" src="${escape(assetURL, true) + "/images/gallery-jerome-public-speaking-ray-white.webp"}" alt="Jerome Lamarque speaking at a business event"></div></div> <div class="bg-white flex flex-col md:flex-row items-center md:justify-between"><div class="w-full md:w-1/2 relative" data-svelte-h="svelte-1btghjs"><img class="w-full h-64 md:h-96 object-cover" src="${escape(assetURL, true) + "/images/gallery-confidence.webp"}" alt="Jerome Lamarque delivering a motivational speech"></div> <div class="w-full md:w-1/2 pt-6 md:pt-10 pb-12 px-12 md:px-6 lg:px-12 flex flex-col justify-center"><h2 class="!text-3xl font-semibold mb-4 md:!mt-0 md:!pt-0">${escape(mainServicesMenu[3].title)}</h2> <p class="!mb-6 md:!mb-4 lg:!mb-8 !text-sm xl:!text-base !font-normal">${escape(services.content_for_motivational_speaker)}</p> <div class="flex justify-start"><a${add_attribute("href", mainServicesMenu[3].slug, 0)} title="${"Find Out More About " + escape(mainServicesMenu[3].title, true)}" class="bg-action py-2 px-12 font-semibold text-[#332E33] hover:bg-[#C44D08] transition-colors duration-300 cursor-pointer">${escape(services.button_text)}</a></div></div></div></div></section>`;
});
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let testimonials;
  let { testimonialsData } = $$props;
  if ($$props.testimonialsData === void 0 && $$bindings.testimonialsData && testimonialsData !== void 0) $$bindings.testimonialsData(testimonialsData);
  testimonials = testimonialsData;
  return `<section class="flex flex-col w-full justify-center mx-auto"><div class="flex flex-col m-auto items-center justify-center py-12 md:py-24 text-action gap-2"><p class="!text-2xl lg:!text-4xl">${escape(testimonials.pretestimonials[0].title)}</p> <p class="!text-3xl lg:!text-5xl">${escape(testimonials.pretestimonials[1].title)}</p> <p class="!text-4xl lg:!text-6xl">${escape(testimonials.pretestimonials[2].title)}</p></div> <div class="relative h-44 md:h-auto w-full" data-svelte-h="svelte-1dksazb"><img src="${escape(assetURL, true) + "/images/gallery-team-half.webp"}" alt="Teamwork in action" class="object-cover h-full"> <div></div></div> <div class="pt-6 pb-12 md:py-8 bg-[#4fA2C3]"><div class="text-center"><h2 class="!text-3xl lg:!text-5xl font-extrabold !text-gray-100">${escape(testimonials.title)}</h2> <p class="!text-lg lg:!text-2xl text-gray-200 !mb-12">${escape(testimonials.subtitle)}</p></div> <div class="container mx-auto"> <div class="flex flex-wrap justify-center gap-8 md:gap-6">${each(testimonials.testimonials, (testimonial) => {
    return `${testimonial.video ? `<div class="w-full lg:w-[45%]"><iframe${add_attribute("src", testimonial.video, 0)} class="w-full h-[200px] md:h-[300px]" frameborder="0" allowfullscreen aria-label="Vimeo video player" title="${"Testimonial video from " + escape(testimonial.name, true)}"></iframe> </div>` : ``}`;
  })}</div>  <div class="flex flex-wrap justify-center mt-6 xl:mt-12 gap-4">${each(testimonials.testimonials, (testimonial) => {
    return `${!testimonial.video ? `<div class="w-full lg:w-[30%] xl:w-[30%] xl:px-4 lg:mb-8"><div class="bg-white p-5 h-full"><div class="flex items-center mb-4"><img src="${escape(assetURL, true) + escape(testimonial.image, true)}"${add_attribute("alt", testimonial.name, 0)} class="w-16 h-16 rounded-full object-cover"></div> <h3 class="text-xl font-semibold">${escape(testimonial.name)}</h3> <p class="text-gray-600 mb-5">${escape(testimonial.position)}</p> <p class="text-gray-700 !text-sm 2xl:!text-base !font-normal">&quot;${escape(testimonial.quote)}&quot;
                </p></div> </div>` : ``}`;
  })}</div></div></div></section>`;
});
const Why = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let why;
  let { whyData } = $$props;
  if ($$props.whyData === void 0 && $$bindings.whyData && whyData !== void 0) $$bindings.whyData(whyData);
  why = whyData;
  return `<section class="bg-white flex flex-col items-center w-full px-8 py-12 md:pb-12"><div class="text-center mb-8"><h2 class="text-5xl font-bold">${escape(why.title)}</h2> <p class="text-gray-500 mt-4 !text-base md:!text-xl">${escape(why.subtitle)}</p></div> <div class="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12 w-full max-w-6xl"><div class="p-4 lg:p-8 flex flex-col items-center lg:w-2/3 xl:w-1/3 m-auto">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "tdesign:focus",
      width: "4rem",
      height: "4rem"
    },
    {},
    {}
  )} <div class="text-center"><h2 class="text-3xl font-semibold !text-orange-500 mb-4">${escape(why.cards[0].title)}</h2> <p class="!text-base !font-normal">${escape(why.cards[0].content)}</p></div></div> <div class="p-4 lg:p-8 flex flex-col items-center lg:w-2/3 xl:w-1/3 m-auto">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "flowbite:clipboard-outline",
      width: "4rem",
      height: "4rem"
    },
    {},
    {}
  )} <div class="text-center"><h2 class="text-3xl font-semibold !text-orange-500 mb-4">${escape(why.cards[1].title)}</h2> <p class="!text-base !font-normal">${escape(why.cards[1].content)}</p></div></div> <div class="p-4 lg:p-8 flex flex-col items-center lg:w-2/3 xl:w-1/3 m-auto">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:graph-line",
      width: "4rem",
      height: "4rem"
    },
    {},
    {}
  )} <div class="text-center"><h2 class="text-3xl font-semibold !text-orange-500 mb-4">${escape(why.cards[2].title)}</h2> <p class="!text-base !font-normal">${escape(why.cards[2].content)}</p></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let heroData;
  let aboutData;
  let servicesData;
  let ctaData;
  let whyData;
  let testimonialsData;
  let meta;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  heroData = data.heroData;
  aboutData = data.aboutData;
  servicesData = data.servicesData.properties;
  ctaData = data.ctaData;
  whyData = data.whyData;
  testimonialsData = data.testimonialsData;
  meta = {
    metaTitle: `${data.company.name} | ${data.heroData.title}`,
    metaDescription: data.heroData.content,
    siteName: data.company.name
  };
  return `${validate_component(Head, "Head").$$render($$result, { data: meta }, {}, {
    default: () => {
      return `<title>${escape(meta.metaTitle)}</title>`;
    }
  })} ${validate_component(Hero, "Hero").$$render($$result, { heroData }, {}, {})} ${validate_component(AboutComponent, "AboutComponent").$$render($$result, { aboutData }, {}, {})} ${validate_component(ServicesComponent, "ServicesComponent").$$render($$result, { servicesData }, {}, {})} ${validate_component(Why, "Why").$$render($$result, { whyData }, {}, {})} ${validate_component(CtaBanner, "CtaBanner").$$render($$result, { ctaData }, {}, {})} ${validate_component(Testimonials, "Testimonials").$$render($$result, { testimonialsData }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DOjk_p-m.js.map
