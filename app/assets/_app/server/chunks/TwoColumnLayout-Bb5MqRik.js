import { c as create_ssr_component, i as subscribe, k as escape, l as each, j as add_attribute } from './exports-Bs1Z8H2x.js';
import { p as page } from './stores-DmVCp768.js';
import './MenuAside.svelte_svelte_type_style_lang-x3jG1pm5.js';

function formatLink(link) {
  return link.startsWith("/") ? link : "/" + link;
}
const Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let company;
  let jsonLd;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { breadcrumbs } = $$props;
  let { textColor = "text-[#332E33]" } = $$props;
  breadcrumbs = breadcrumbs.map((breadcrumb) => ({
    ...breadcrumb,
    link: formatLink(breadcrumb.link)
  }));
  if ($$props.breadcrumbs === void 0 && $$bindings.breadcrumbs && breadcrumbs !== void 0) $$bindings.breadcrumbs(breadcrumbs);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0) $$bindings.textColor(textColor);
  company = $page.data.company;
  jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.getperforming.com/"
      },
      ...breadcrumbs.map((breadcrumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        // Start positions from 2 because Home is at 1
        name: breadcrumb.name,
        item: `https://www.getperforming.com${breadcrumb.link}`
      }))
    ]
  };
  $$unsubscribe_page();
  return `<ol class="flex place-items-center overflow-hidden" aria-label="Breadcrumb"><li><a title="${escape(company.name, true) + " Home Page"}" href="/" class="${"transition-colors duration-300 ease-in-out " + escape(textColor, true)}"><span content="Home" data-svelte-h="svelte-bdpvpb"><svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg></span></a></li> ${each(breadcrumbs, (breadcrumb, i) => {
    return `<li class="flex place-items-center"><svg class="${"flex-shrink-0 h-5 w-5 " + escape(textColor, true) + " mx-4 mt-1 hover:text-gray-900"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> <a${add_attribute("title", breadcrumb.title, 0)}${add_attribute("href", breadcrumb.link, 0)} class="${"capitalize h-4 " + escape(textColor, true) + " text-sm font-medium transition-colors duration-300 ease-in-out hover:text-gray-900"}"><span class="line-clamp-1">${escape(breadcrumb.name)}</span></a> </li>`;
  })}</ol>  <!-- HTML_TAG_START -->${`<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}<!-- HTML_TAG_END -->`;
});
const css = {
  code: ".transition-height.svelte-22ggjg{transition:max-height 0.3s ease}",
  map: `{"version":3,"file":"MenuAside.svelte","sources":["MenuAside.svelte"],"sourcesContent":["<script>\\r\\n  export let data;\\r\\n  $: menuItems = data.slice(1);\\r\\n  $: service = data[0];\\r\\n\\r\\n  function toggleMenu(index) {\\r\\n    menuItems = menuItems.map((item, i) => ({\\r\\n      ...item,\\r\\n      isOpen: i === index ? !item.isOpen : item.isOpen,\\r\\n    }));\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<aside class=\\"w-96 bg-gray-50 rounded-lg\\">\\r\\n  <h3 class=\\"!text-xl !font-semibold text-[#332E33] p-10 !m-0\\">\\r\\n    {service.name}\\r\\n  </h3>\\r\\n  <div class=\\"pl-12 pr-4\\">\\r\\n    {#each menuItems as menuItem, index}\\r\\n      {#if menuItem.items}\\r\\n        <div>\\r\\n          <div class=\\"flex items-center justify-center\\">\\r\\n            <button\\r\\n              class=\\"w-full flex justify-between text-left py-1 focus:outline-none font-normal hover:text-action\\"\\r\\n              title={menuItem.title}\\r\\n              on:click={() => toggleMenu(index)}\\r\\n            >\\r\\n              {menuItem.heading}\\r\\n              {#if menuItem.isOpen}\\r\\n                <svg\\r\\n                  width=\\"25\\"\\r\\n                  height=\\"25\\"\\r\\n                  viewBox=\\"0 0 100 100\\"\\r\\n                  xmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n                >\\r\\n                  <polygon\\r\\n                    points=\\"50,30 30,50 20,50 50,20 80,50 70,50\\"\\r\\n                    fill=\\"black\\"\\r\\n                  />\\r\\n                </svg>\\r\\n              {:else}\\r\\n                <svg\\r\\n                  width=\\"25\\"\\r\\n                  height=\\"25\\"\\r\\n                  viewBox=\\"0 0 100 100\\"\\r\\n                  xmlns=\\"http://www.w3.org/2000/svg\\"\\r\\n                >\\r\\n                  <polygon\\r\\n                    points=\\"50,70 30,50 20,50 50,80 80,50 70,50\\"\\r\\n                    fill=\\"black\\"\\r\\n                  />\\r\\n                </svg>\\r\\n              {/if}\\r\\n            </button>\\r\\n          </div>\\r\\n          <div\\r\\n            class=\\"pl-4 transition-height overflow-hidden\\"\\r\\n            style=\\"max-height: {menuItem.isOpen\\r\\n              ? menuItem.items.length * 3 + 'rem'\\r\\n              : 0}\\"\\r\\n          >\\r\\n            {#each menuItem.items as subMenuItem}\\r\\n              <a\\r\\n                href={subMenuItem.slug}\\r\\n                title={subMenuItem.title}\\r\\n                class=\\"block py-2 font-normal !no-underline hover:text-action\\"\\r\\n              >\\r\\n                {subMenuItem.name}\\r\\n              </a>\\r\\n            {/each}\\r\\n          </div>\\r\\n        </div>\\r\\n      {:else}\\r\\n        <div>\\r\\n          <a\\r\\n            href={menuItem.slug}\\r\\n            title={menuItem.title}\\r\\n            class=\\"block py-1 font-normal no-underline\\"\\r\\n          >\\r\\n            {menuItem.name}\\r\\n          </a>\\r\\n        </div>\\r\\n      {/if}\\r\\n    {/each}\\r\\n  </div>\\r\\n</aside>\\r\\n\\r\\n<style>\\r\\n  .transition-height {\\r\\n    transition: max-height 0.3s ease;\\r\\n  }</style>\\r\\n"],"names":[],"mappings":"AAwFE,gCAAmB,CACjB,UAAU,CAAE,UAAU,CAAC,IAAI,CAAC,IAC9B"}`
};
const MenuAside = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let menuItems;
  let service;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  menuItems = data.slice(1);
  service = data[0];
  return `<aside class="w-96 bg-gray-50 rounded-lg"><h3 class="!text-xl !font-semibold text-[#332E33] p-10 !m-0">${escape(service.name)}</h3> <div class="pl-12 pr-4">${each(menuItems, (menuItem, index) => {
    return `${menuItem.items ? `<div><div class="flex items-center justify-center"><button class="w-full flex justify-between text-left py-1 focus:outline-none font-normal hover:text-action"${add_attribute("title", menuItem.title, 0)}>${escape(menuItem.heading)} ${menuItem.isOpen ? `<svg width="25" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,30 30,50 20,50 50,20 80,50 70,50" fill="black"></polygon></svg>` : `<svg width="25" height="25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,70 30,50 20,50 50,80 80,50 70,50" fill="black"></polygon></svg>`} </button></div> <div class="pl-4 transition-height overflow-hidden svelte-22ggjg" style="${"max-height: " + escape(menuItem.isOpen ? menuItem.items.length * 3 + "rem" : 0, true)}">${each(menuItem.items, (subMenuItem) => {
      return `<a${add_attribute("href", subMenuItem.slug, 0)}${add_attribute("title", subMenuItem.title, 0)} class="block py-2 font-normal !no-underline hover:text-action">${escape(subMenuItem.name)} </a>`;
    })}</div> </div>` : `<div><a${add_attribute("href", menuItem.slug, 0)}${add_attribute("title", menuItem.title, 0)} class="block py-1 font-normal no-underline">${escape(menuItem.name)}</a> </div>`}`;
  })}</div> </aside>`;
});
const TwoColumnLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="section-small "><div class="container max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 "><div class="col-span-1 lg:col-span-8 max-w-7xl overflow-hidden ">${slots.breadcrumbs ? slots.breadcrumbs({}) : ``} <div class="cms-content max-w-7xl pt-6 prose ">${slots["content-intro"] ? slots["content-intro"]({ class: "" }) : ``} ${slots.form ? slots.form({ class: "" }) : ``} ${slots["content-main"] ? slots["content-main"]({ class: "" }) : ``} ${slots["content-footer"] ? slots["content-footer"]({ class: "" }) : ``}</div></div> <div class="cms-menu col-span-1 lg:col-span-4 pt-4 prose">${slots.menu ? slots.menu({}) : ``}</div></div></div>`;
});

export { Breadcrumbs as B, MenuAside as M, TwoColumnLayout as T };
//# sourceMappingURL=TwoColumnLayout-Bb5MqRik.js.map
