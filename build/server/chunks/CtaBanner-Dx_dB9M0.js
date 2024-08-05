import { c as create_ssr_component, i as subscribe, k as escape, j as add_attribute, l as each, v as validate_component } from './exports-Bs1Z8H2x.js';
import { p as page } from './stores-DmVCp768.js';
import './MenuAside.svelte_svelte_type_style_lang-x3jG1pm5.js';
import { P as Phone } from './Phone-BWAOEZRA.js';
import { A as ActionButton } from './ActionButton-CaKRodl-.js';
import { a as assetURL } from './env-C5O8tkwu.js';

const InTextForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    message: "",
    location: "",
    interest: "",
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
  return `${`${`<div class="my-6 p-4 bg-action pt-2"><div><h3 class="text-white mt-0 text-2xl capitalize">${escape(formTitle)}</h3></div> <form><div class="absolute left-[-2000px]"><input aria-label="If you are human, leave this field blank" name="type" value="Modal Booking Form" type="hidden"> <input name="page"${add_attribute("value", pagePath, 0)} type="hidden"> <input name="anteater" type="text" placeholder="Anteater" autocomplete="off"${add_attribute("value", values.anteater, 0)}></div> <fieldset><div class="flex flex-col text-left space-y-4">${errors.form ? `<span>${escape(errors.form.message)}</span>` : ``} <div class="grid sm:grid-cols-2 gap-2"><div><input class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black" name="name" type="text" placeholder="Name"${add_attribute("value", values.name, 0)}> ${errors.name ? `<span class="text-white">${escape(errors.name.message)}</span>` : ``}</div> <div><input class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black" name="phone" type="tel" placeholder="Phone Number"${add_attribute("value", values.phone, 0)}> ${errors.phone ? `<span class="text-white">${escape(errors.phone.message)}</span>` : ``}</div> <div><input class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black" name="email" type="email" placeholder="Email"${add_attribute("value", values.email, 0)}> ${errors.email ? `<span class="text-white">${escape(errors.email.message)}</span>` : ``}</div> <div class="w-full"><input class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black" name="location" type="text" placeholder="Location"${add_attribute("value", values.location, 0)}> ${errors.location ? `<span class="text-white">${escape(errors.location.message)}</span>` : ``}</div></div> <div><label for="interest" class="block text-white" data-svelte-h="svelte-q6es2u">Interest in</label> <select id="interest" required name="interest" class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black"><option disabled selected value="" data-svelte-h="svelte-ci8atx">Select an option</option>${each(mainServicesMenu, (service) => {
    return `<option${add_attribute("value", service.title, 0)}>${escape(service.title)}</option>`;
  })}</select> ${errors.interest ? `<span class="text-white">${escape(errors.interest.message)}</span>` : ``}</div> <div><textarea id="message" placeholder="How can we help you?" rows="4" name="message" class="w-full p-2 border rounded-lg bg-gray-100 focus:ring-black focus:border-black">${escape("")}</textarea> ${errors.message ? `<span class="text-white">${escape(errors.message.message)}</span>` : ``}</div></div> <div class="flex mt-2"><button type="submit" class="text-action bg-white hover:bg-action hover:text-white hover:border-white border-2 font-semibold text-sm w-40 mr-2" data-svelte-h="svelte-1gdb98c">Submit</button> ${validate_component(Phone, "Phone").$$render(
    $$result,
    {
      number: company.phone,
      className: "w-40 !m-0"
    },
    {},
    {}
  )}</div></fieldset></form></div>`}`}`;
});
const CtaBanner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let company;
  let cta;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { ctaData } = $$props;
  const image = `${assetURL}/images/gallery-nambour-team.webp`;
  if ($$props.ctaData === void 0 && $$bindings.ctaData && ctaData !== void 0) $$bindings.ctaData(ctaData);
  company = $page.data.company;
  cta = ctaData;
  $$unsubscribe_page();
  return `<div class="flex mx-auto justify-center bg-action w-full h-auto"><div class="flex items-center w-full lg:pl-6 xl:pl-12"><div class="relative w-full md:w-1/2 py-12"><h2 class="!text-2xl md:!text-lg lg:!text-2xl xl:!text-3xl text-center lg:text-left capitalize !mb-6 md:!mb-3">${escape(cta.title)}</h2> <p class="!font-normal !text-base md:!text-sm lg:!text-base text-center lg:text-left capitalize mb-12 md:mb-6 px-12 md:px-4">${escape(cta.subtitle)}</p> <div class="hidden lg:block md:pr-6 xl:pr-12">${validate_component(InTextForm, "InTextForm").$$render($$result, { formHeading: cta.form_header }, {}, {})}</div> <div class="lg:hidden flex flex-col items-center justify-center pb-8 md:space-y-4">${validate_component(Phone, "Phone").$$render(
    $$result,
    {
      number: company.phone,
      className: "w-48 mb-4"
    },
    {},
    {}
  )} ${validate_component(ActionButton, "ActionButton").$$render($$result, { className: "w-48" }, {}, {})}</div></div> <div class="relative hidden md:flex w-1/2 lg:w-[45rem] xl:w-1/2 h-full"><div class="relative w-full h-full"><img${add_attribute("src", image, 0)}${add_attribute("alt", `Image of ${company.name}`, 0)} class="absolute w-full h-full object-cover object-center"> <div></div></div></div></div></div>`;
});

export { CtaBanner as C, InTextForm as I };
//# sourceMappingURL=CtaBanner-Dx_dB9M0.js.map
