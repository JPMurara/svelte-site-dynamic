import { c as create_ssr_component, i as subscribe, v as validate_component, k as escape, j as add_attribute, l as each } from './exports-Bs1Z8H2x.js';
import { H as Head } from './Head-D0eqEAG6.js';
import { p as page } from './stores-DmVCp768.js';
import { a as assetURL } from './env-C5O8tkwu.js';
import './MenuAside.svelte_svelte_type_style_lang-x3jG1pm5.js';
import { P as Phone } from './Phone-BWAOEZRA.js';

const formHeading = "Ready to Get Performing?";
const ContactPageForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pagePath;
  let company;
  let mainServicesMenu;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let values = {
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
    interest: "",
    anteater: ""
  };
  let errors = {};
  pagePath = $page.url.pathname;
  company = $page.data.company;
  mainServicesMenu = $page.data.mainServicesMenu;
  $$unsubscribe_page();
  return `${`${`<div class="my-6 p-4 bg-action pt-2"><div><h3 class="text-white mt-0 text-xl font-bold">${escape(formHeading)}</h3></div> <form><div class="absolute left-[-2000px]"><input aria-label="If you are human, leave this field blank" name="type" value="Modal Booking Form" type="hidden"> <input name="page"${add_attribute("value", pagePath, 0)} type="hidden"> <input name="anteater" type="text" placeholder="Anteater" autocomplete="off" class="hidden"${add_attribute("value", values.anteater, 0)}></div> <fieldset><div class="flex flex-col text-left">${errors.form ? `<span class="text-white">${escape(errors.form.message)}</span>` : ``} <div class="grid sm:grid-cols-2 gap-2"><div><input name="name" type="text" placeholder="Name" class="border p-2 rounded-lg w-full bg-gray-100 focus:ring-black focus:border-black"${add_attribute("value", values.name, 0)}> ${errors.name ? `<span class="text-white text-sm">${escape(errors.name.message)}</span>` : ``}</div> <div><input name="phone" type="tel" placeholder="Phone Number" class="border p-2 rounded-lg w-full bg-gray-100 focus:ring-black focus:border-black"${add_attribute("value", values.phone, 0)}> ${errors.phone ? `<span class="text-white text-sm">${escape(errors.phone.message)}</span>` : ``}</div> <div><input name="email" type="email" placeholder="Email" class="border p-2 rounded-lg w-full bg-gray-100 focus:ring-black focus:border-black"${add_attribute("value", values.email, 0)}> ${errors.email ? `<span class="text-white text-sm">${escape(errors.email.message)}</span>` : ``}</div> <div class="w-full"><input name="location" type="text" placeholder="Location" class="border p-2 rounded-lg w-full bg-gray-100 focus:ring-black focus:border-black"${add_attribute("value", values.location, 0)}> ${errors.location ? `<span class="text-white text-sm">${escape(errors.location.message)}</span>` : ``}</div></div> <div class="mt-2"><label for="interest" class="block text-white mb-1" data-svelte-h="svelte-8l01zt">Interest in</label> <select id="interest" required name="interest" class="border p-2 rounded-lg w-full bg-gray-100 focus:ring-black focus:border-black"><option disabled selected value="" data-svelte-h="svelte-ci8atx">Select an option</option>${each(mainServicesMenu, (service) => {
    return `<option${add_attribute("value", service.title, 0)}>${escape(service.title)}</option>`;
  })}</select> ${errors.interest ? `<span class="text-white text-sm">${escape(errors.interest.message)}</span>` : ``}</div> <div class="mt-2"><textarea id="message" placeholder="How can we help you?" rows="3" name="message" class="border p-2 rounded-lg w-full bg-gray-100 focus:ring-black focus:border-black">${escape("")}</textarea> ${errors.message ? `<span class="text-white text-sm">${escape(errors.message.message)}</span>` : ``}</div></div> <div class="flex items-center mt-4"><button type="submit" class="bg-white text-action py-2 px-4 hover:bg-action hover:text-white hover:border-white border-2 mr-2 !text-sm" data-svelte-h="svelte-q4ugn3">Submit</button> ${validate_component(Phone, "Phone").$$render($$result, { number: company.phone }, {}, {})}</div></fieldset></form></div>`}`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let metaTitle;
  let metaDesc;
  let company;
  let meta;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let days = Object.keys($page.data.companyHours);
  let openingDays = days.filter((day) => $page.data.companyHours[day].open !== "");
  let firstDay = openingDays[0];
  let lastDay = openingDays[openingDays.length - 1];
  let openingHour = $page.data.companyHours[firstDay].open;
  let closingHour = $page.data.companyHours[firstDay].close;
  let phrase = `${firstDay} to ${lastDay} from ${openingHour} to ${closingHour}`;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  metaTitle = data.contactData.meta_title;
  metaDesc = data.contactData.meta_desc;
  company = $page.data.company;
  meta = { metaTitle, metaDescription: metaDesc };
  $$unsubscribe_page();
  return `${validate_component(Head, "Head").$$render($$result, { data: meta }, {}, {
    default: () => {
      return `<title>${escape(meta.metaTitle)}</title>`;
    }
  })} <div class="relative mt-40 md:mt-28 h-96 xl:h-[30rem] 2xl:h-[35rem]" data-svelte-h="svelte-tu9w4q"><div class="absolute inset-0 bg-no-repeat bg-cover" style="${"background-image: url('" + escape(assetURL, true) + "/images/Jerome___11.webp'); background-position: center 20%;"}" aria-label="Service banner image"></div> <div class="absolute inset-0 bg-black opacity-60"></div> <div class="absolute inset-0 flex items-center justify-center"><h1 class="!text-5xl lg:!text-7xl mb-6 !text-gray-200 !tracking-tight z-40" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">Contact Us</h1></div></div> <section class="bg-white dark:bg-gray-900"><div class="px-4 mx-auto max-w-screen-xl flex flex-col items-center justify-center md:flex-row gap-12"><div class="font-light sm:text-lg dark:text-gray-400 w-full md:w-1/2 pt-12 md:pt-0"><h2 class="text-3xl font-bold mb-6" data-svelte-h="svelte-lwtou9">Get in Touch</h2> <div class="flex items-center gap-2 mb-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <p class="!font-normal !text-sm md:!text-base">${escape(company.address)}</p></div> <div class="flex items-center gap-2 mb-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <p class="!font-normal !text-sm md:!text-base">${escape(phrase)}</p></div></div> <div class="rounded-lg w-full lg:w-1/2">${validate_component(ContactPageForm, "ContactPageForm").$$render($$result, {}, {}, {})}</div></div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-Bm7mfaXr.js.map
