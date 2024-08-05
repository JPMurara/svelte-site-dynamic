import { c as create_ssr_component, i as subscribe, k as escape, l as each, j as add_attribute } from './exports-Bs1Z8H2x.js';
import { p as page } from './stores-DmVCp768.js';

const Searchbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let serviceAreasMenu;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { className = "" } = $$props;
  let serviceAreasDropdown = [];
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  serviceAreasMenu = $page.data.serviceAreaMenu;
  $$unsubscribe_page();
  return `<div class="${escape(className, true) + " text-[#332E33] w-full bg-transparent"}"><div data-svelte-h="svelte-1aag82t"><p class="md:!text-xl md:text-white !font-semibold">Search Our Service Areas</p></div> <div class="flex flex-col text-gray-900 rounded-lg px-2 gap-2 py-2 w-full md:w-64"><select class="text-center col-span-12 md:col-span-4 focus:outline-none lg:border-white border-gray-300 focus:ring-1 focus:ring-transparent focus:border-transparent bg-white rounded-lg"><option value="" disabled selected data-svelte-h="svelte-13je9h3">Select a service</option>${each(serviceAreasMenu, (service, index) => {
    return `<option${add_attribute("value", index, 0)}>${escape(service.heading)}</option>`;
  })}</select> ${serviceAreasDropdown.length > 0 ? `<select class="text-center col-span-12 md:col-span-4 focus:outline-none lg:border-white border-gray-300 focus:ring-1 focus:ring-transparent focus:border-transparent bg-white rounded-lg"><option value="" disabled selected data-svelte-h="svelte-ujy0dn">Select your area</option>${each(serviceAreasDropdown, (item) => {
    return `<option${add_attribute("value", item.slug, 0)}>${escape(item.name)}</option>`;
  })}</select>` : ``}</div></div>`;
});

export { Searchbar as S };
//# sourceMappingURL=Searchbar-BmpW0grm.js.map
