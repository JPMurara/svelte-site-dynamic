import { c as create_ssr_component, i as subscribe, v as validate_component, j as add_attribute, k as escape, l as each, o as onDestroy } from './exports-Bs1Z8H2x.js';
import { p as page } from './stores-DmVCp768.js';
import './MenuAside.svelte_svelte_type_style_lang-x3jG1pm5.js';
import { w as writable } from './index-MJXAvy6l.js';
import { a as assetURL } from './env-C5O8tkwu.js';
import { I as Icon, P as Phone } from './Phone-BWAOEZRA.js';
import { A as ActionButton } from './ActionButton-CaKRodl-.js';

const modal = writable(false);
const css = {
  code: "details.svelte-1negae5 summary.svelte-1negae5::-webkit-details-marker{display:none}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\r\\n  import { page } from '$app/stores';\\r\\n  import { assetURL } from '$lib/env';\\r\\n  import Icon from '@iconify/svelte';\\r\\n  import { onMount } from 'svelte';\\r\\n\\r\\n  const probityLogo = \`\${assetURL}/images/probityweb.webp\`;\\r\\n\\r\\n  $: company = $page.data.company;\\r\\n  $: socialData = $page.data.socialData;\\r\\n  $: companyLogo = $page.data.companyLogo;\\r\\n  $: mainServicesMenu = $page.data.mainServicesMenu;\\r\\n  $: moreLinksMenu = $page.data.moreLinksMenu;\\r\\n  $: serviceAreaMenu = $page.data.serviceAreaMenu;\\r\\n\\r\\n  let serviceAreaRefs = [];\\r\\n\\r\\n  onMount(() => {\\r\\n    function handleClickOutside(event) {\\r\\n      serviceAreaRefs.forEach((ref) => {\\r\\n        if (ref && !ref.contains(event.target)) {\\r\\n          ref.removeAttribute('open');\\r\\n        }\\r\\n      });\\r\\n    }\\r\\n\\r\\n    document.addEventListener('click', handleClickOutside);\\r\\n\\r\\n    return () => {\\r\\n      document.removeEventListener('click', handleClickOutside);\\r\\n    };\\r\\n  });\\r\\n<\/script>\\r\\n\\r\\n<footer class=\\"p-10 bg-gray-200\\">\\r\\n  <div class=\\"container grid lg:grid-cols-5\\">\\r\\n    <div class=\\"col-span-1 sm:col-span-2\\">\\r\\n      <div class=\\"block w-full\\">\\r\\n        <a href=\\"/\\" class=\\"hover:text-action\\">\\r\\n          <img\\r\\n            src={\`\${assetURL}/images/\${companyLogo.logo}\`}\\r\\n            alt={company.name}\\r\\n            title={company.name}\\r\\n            class=\\"w-60\\"\\r\\n          />\\r\\n        </a>\\r\\n      </div>\\r\\n\\r\\n      <br />\\r\\n      <div>\\r\\n        <span class=\\"font-bold\\">Phone:</span>\\r\\n        <a\\r\\n          title=\\"Call {company.name}\\"\\r\\n          class=\\"inline-block pl-2 font-semibold hover:text-action\\"\\r\\n          href=\\"tel:{company.phone}\\">{company.phone}</a\\r\\n        >\\r\\n      </div>\\r\\n\\r\\n      <div>\\r\\n        <span class=\\"font-bold\\">ABN:</span>\\r\\n        <a\\r\\n          class=\\"inline-block pl-2 font-semibold hover:text-action\\"\\r\\n          title=\\"{company.name} ABN\\"\\r\\n          target=\\"blank\\"\\r\\n          href={\`https://abr.business.gov.au/ABN/View?id=\${company.abn}\`}\\r\\n        >\\r\\n          {company.abn}\\r\\n        </a>\\r\\n      </div>\\r\\n      <div class=\\"mt-2\\">\\r\\n        <span class=\\"font-semibold\\">\\r\\n          Based on the Sunshine Coast, servicing all of Australia.\\r\\n        </span>\\r\\n      </div>\\r\\n\\r\\n      <div class=\\"grid grid-cols-3 md:flex\\">\\r\\n        {#if socialData.facebook != ''}\\r\\n          <a\\r\\n            href={socialData.facebook}\\r\\n            title=\\"{company.name} Facebook Page\\"\\r\\n            target=\\"_blank\\"\\r\\n            class=\\"m-5 hover:text-action\\"\\r\\n          >\\r\\n            <span class=\\"sr-only\\">Facebook</span>\\r\\n            <Icon icon=\\"ic:baseline-facebook\\" width=\\"3rem\\" height=\\"3rem\\" />\\r\\n          </a>\\r\\n        {/if}\\r\\n        {#if socialData.instagram != ''}\\r\\n          <a\\r\\n            href={socialData.instagram}\\r\\n            title=\\"{company.name} Instagram Page\\"\\r\\n            target=\\"_blank\\"\\r\\n            class=\\"m-5 hover:text-action\\"\\r\\n          >\\r\\n            <span class=\\"sr-only\\">Instagram</span>\\r\\n            <Icon icon=\\"mdi:instagram\\" width=\\"3rem\\" height=\\"3rem\\" />\\r\\n          </a>\\r\\n        {/if}\\r\\n        {#if socialData.google != ''}\\r\\n          <a\\r\\n            href={socialData.google}\\r\\n            title=\\"{company.name} Google Page\\"\\r\\n            target=\\"_blank\\"\\r\\n            class=\\"m-5 hover:text-action\\"\\r\\n          >\\r\\n            <span class=\\"sr-only\\">Google</span>\\r\\n            <Icon icon=\\"mdi:google\\" width=\\"3rem\\" height=\\"3rem\\" />\\r\\n          </a>\\r\\n        {/if}\\r\\n        {#if socialData.linkedin != ''}\\r\\n          <a\\r\\n            href={socialData.linkedin}\\r\\n            title=\\"{company.name} Linkedin Page\\"\\r\\n            target=\\"_blank\\"\\r\\n            class=\\"m-5 hover:text-action\\"\\r\\n          >\\r\\n            <span class=\\"sr-only\\">Linkedin</span>\\r\\n            <Icon icon=\\"mdi:linkedin\\" width=\\"3rem\\" height=\\"3rem\\" />\\r\\n          </a>\\r\\n        {/if}\\r\\n      </div>\\r\\n    </div>\\r\\n    <div>\\r\\n      <h2 class=\\"mb-6 !text-sm uppercase font-bold\\">Services</h2>\\r\\n      <div class=\\"space-y-4 ml-5\\">\\r\\n        {#each mainServicesMenu as link}\\r\\n          <a\\r\\n            href={link.slug}\\r\\n            class=\\"block text-[#332E33] hover:text-action\\"\\r\\n            title={link.title}>{link.name}</a\\r\\n          >\\r\\n        {/each}\\r\\n      </div>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\"mt-8 md:mt-0\\">\\r\\n      <h2 class=\\"mb-6 !text-sm uppercase font-bold\\">Service Areas</h2>\\r\\n      <div class=\\"mt-4 ml-5 space-y-4\\">\\r\\n        {#each serviceAreaMenu as link, index}\\r\\n          <details\\r\\n            bind:this={serviceAreaRefs[index]}\\r\\n            class=\\"text-[#332E33] group\\"\\r\\n          >\\r\\n            <summary class=\\"flex items-center cursor-pointer hover:text-action\\">\\r\\n              {link.heading}\\r\\n              <Icon\\r\\n                icon=\\"fluent:chevron-down-12-filled\\"\\r\\n                class=\\"ml-2 transition-transform group-open:rotate-180\\"\\r\\n                width=\\"1rem\\"\\r\\n                height=\\"1rem\\"\\r\\n              />\\r\\n            </summary>\\r\\n            <div class=\\"pl-4 pt-1\\">\\r\\n              {#each link.items as item}\\r\\n                <a\\r\\n                  class=\\"block py-1 hover:text-action\\"\\r\\n                  title={item.title}\\r\\n                  href={item.slug}\\r\\n                  on:click={() => {\\r\\n                    serviceAreaRefs[index].removeAttribute('open');\\r\\n                    document.activeElement.blur();\\r\\n                  }}>{item.name}</a\\r\\n                >\\r\\n              {/each}\\r\\n            </div>\\r\\n          </details>\\r\\n        {/each}\\r\\n      </div>\\r\\n    </div>\\r\\n\\r\\n    <div class=\\"mt-8 lg:mt-0\\">\\r\\n      <h2 class=\\"mb-6 !text-sm font-bold uppercase\\">Website Links</h2>\\r\\n      <div class=\\"space-y-4 ml-5\\">\\r\\n        {#each moreLinksMenu as link}\\r\\n          <a\\r\\n            href={link.slug}\\r\\n            class=\\"block text-[#332E33] hover:text-action\\"\\r\\n            title={link.title}>{link.name}</a\\r\\n          >\\r\\n        {/each}\\r\\n        <a\\r\\n          href=\\"/terms-conditions\\"\\r\\n          class=\\"block text-[#332E33] hover:text-action\\"\\r\\n          title=\\"Terms and Conditions\\">Terms and Conditions</a\\r\\n        >\\r\\n        <a\\r\\n          href=\\"/privacy\\"\\r\\n          class=\\"block text-[#332E33] hover:text-action\\"\\r\\n          title=\\"Privacy Policy\\">Privacy Policy</a\\r\\n        >\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n  <hr class=\\"my-6 border-gray-200 sm:mx-auto lg:my-8\\" />\\r\\n  <div class=\\"sm:flex sm:items-center sm:justify-between\\">\\r\\n    <div class=\\"text-gray-600\\">\\r\\n      © {new Date().getFullYear()}\\r\\n      {company.name}. All rights reserved.\\r\\n    </div>\\r\\n    <a\\r\\n      class=\\"inline-block m-4 lg:mt-0 hover:text-action\\"\\r\\n      target=\\"_blank\\"\\r\\n      title=\\"Digital Marketing by Probity Web Marketing\\"\\r\\n      href=\\"https://www.probityweb.com.au/\\"\\r\\n    >\\r\\n      <img class=\\"object-contain\\" src={probityLogo} alt=\\"Probity Logo\\" />\\r\\n    </a>\\r\\n  </div>\\r\\n</footer>\\r\\n\\r\\n<style>\\r\\n  details summary::-webkit-details-marker {\\r\\n    display: none;\\r\\n  }</style>\\r\\n"],"names":[],"mappings":"AAmNE,sBAAO,CAAC,sBAAO,wBAAyB,CACtC,OAAO,CAAE,IACX"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let company;
  let socialData;
  let companyLogo;
  let mainServicesMenu;
  let moreLinksMenu;
  let serviceAreaMenu;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const probityLogo = `${assetURL}/images/probityweb.webp`;
  let serviceAreaRefs = [];
  $$result.css.add(css);
  company = $page.data.company;
  socialData = $page.data.socialData;
  companyLogo = $page.data.companyLogo;
  mainServicesMenu = $page.data.mainServicesMenu;
  moreLinksMenu = $page.data.moreLinksMenu;
  serviceAreaMenu = $page.data.serviceAreaMenu;
  $$unsubscribe_page();
  return `<footer class="p-10 bg-gray-200"><div class="container grid lg:grid-cols-5"><div class="col-span-1 sm:col-span-2"><div class="block w-full"><a href="/" class="hover:text-action"><img${add_attribute("src", `${assetURL}/images/${companyLogo.logo}`, 0)}${add_attribute("alt", company.name, 0)}${add_attribute("title", company.name, 0)} class="w-60"></a></div> <br> <div><span class="font-bold" data-svelte-h="svelte-5ow1kw">Phone:</span> <a title="${"Call " + escape(company.name, true)}" class="inline-block pl-2 font-semibold hover:text-action" href="${"tel:" + escape(company.phone, true)}">${escape(company.phone)}</a></div> <div><span class="font-bold" data-svelte-h="svelte-vtl2ul">ABN:</span> <a class="inline-block pl-2 font-semibold hover:text-action" title="${escape(company.name, true) + " ABN"}" target="blank"${add_attribute("href", `https://abr.business.gov.au/ABN/View?id=${company.abn}`, 0)}>${escape(company.abn)}</a></div> <div class="mt-2" data-svelte-h="svelte-441jlg"><span class="font-semibold">Based on the Sunshine Coast, servicing all of Australia.</span></div> <div class="grid grid-cols-3 md:flex">${socialData.facebook != "" ? `<a${add_attribute("href", socialData.facebook, 0)} title="${escape(company.name, true) + " Facebook Page"}" target="_blank" class="m-5 hover:text-action"><span class="sr-only" data-svelte-h="svelte-vy6h5z">Facebook</span> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ic:baseline-facebook",
      width: "3rem",
      height: "3rem"
    },
    {},
    {}
  )}</a>` : ``} ${socialData.instagram != "" ? `<a${add_attribute("href", socialData.instagram, 0)} title="${escape(company.name, true) + " Instagram Page"}" target="_blank" class="m-5 hover:text-action"><span class="sr-only" data-svelte-h="svelte-sxz6mn">Instagram</span> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:instagram",
      width: "3rem",
      height: "3rem"
    },
    {},
    {}
  )}</a>` : ``} ${socialData.google != "" ? `<a${add_attribute("href", socialData.google, 0)} title="${escape(company.name, true) + " Google Page"}" target="_blank" class="m-5 hover:text-action"><span class="sr-only" data-svelte-h="svelte-xfaim4">Google</span> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:google",
      width: "3rem",
      height: "3rem"
    },
    {},
    {}
  )}</a>` : ``} ${socialData.linkedin != "" ? `<a${add_attribute("href", socialData.linkedin, 0)} title="${escape(company.name, true) + " Linkedin Page"}" target="_blank" class="m-5 hover:text-action"><span class="sr-only" data-svelte-h="svelte-b54pel">Linkedin</span> ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mdi:linkedin",
      width: "3rem",
      height: "3rem"
    },
    {},
    {}
  )}</a>` : ``}</div></div> <div><h2 class="mb-6 !text-sm uppercase font-bold" data-svelte-h="svelte-1hans3p">Services</h2> <div class="space-y-4 ml-5">${each(mainServicesMenu, (link) => {
    return `<a${add_attribute("href", link.slug, 0)} class="block text-[#332E33] hover:text-action"${add_attribute("title", link.title, 0)}>${escape(link.name)}</a>`;
  })}</div></div> <div class="mt-8 md:mt-0"><h2 class="mb-6 !text-sm uppercase font-bold" data-svelte-h="svelte-1lrjg9a">Service Areas</h2> <div class="mt-4 ml-5 space-y-4">${each(serviceAreaMenu, (link, index) => {
    return `<details class="text-[#332E33] group svelte-1negae5"${add_attribute("this", serviceAreaRefs[index], 0)}><summary class="flex items-center cursor-pointer hover:text-action svelte-1negae5">${escape(link.heading)} ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "fluent:chevron-down-12-filled",
        class: "ml-2 transition-transform group-open:rotate-180",
        width: "1rem",
        height: "1rem"
      },
      {},
      {}
    )}</summary> <div class="pl-4 pt-1">${each(link.items, (item) => {
      return `<a class="block py-1 hover:text-action"${add_attribute("title", item.title, 0)}${add_attribute("href", item.slug, 0)}>${escape(item.name)}</a>`;
    })}</div> </details>`;
  })}</div></div> <div class="mt-8 lg:mt-0"><h2 class="mb-6 !text-sm font-bold uppercase" data-svelte-h="svelte-5clsi5">Website Links</h2> <div class="space-y-4 ml-5">${each(moreLinksMenu, (link) => {
    return `<a${add_attribute("href", link.slug, 0)} class="block text-[#332E33] hover:text-action"${add_attribute("title", link.title, 0)}>${escape(link.name)}</a>`;
  })} <a href="/terms-conditions" class="block text-[#332E33] hover:text-action" title="Terms and Conditions" data-svelte-h="svelte-1pk9z3o">Terms and Conditions</a> <a href="/privacy" class="block text-[#332E33] hover:text-action" title="Privacy Policy" data-svelte-h="svelte-s1i97w">Privacy Policy</a></div></div></div> <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"><div class="text-gray-600">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} ${escape(company.name)}. All rights reserved.</div> <a class="inline-block m-4 lg:mt-0 hover:text-action" target="_blank" title="Digital Marketing by Probity Web Marketing" href="https://www.probityweb.com.au/"><img class="object-contain"${add_attribute("src", probityLogo, 0)} alt="Probity Logo"></a></div> </footer>`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let company;
  let companyLogo;
  let mainServicesMenu;
  let moreLinksMenu;
  let hidden;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  company = $page.data.company;
  companyLogo = $page.data.companyLogo;
  mainServicesMenu = $page.data.mainServicesMenu;
  moreLinksMenu = $page.data.moreLinksMenu;
  hidden = true;
  $$unsubscribe_page();
  return `  <nav class="fixed top-0 z-50 hidden xl:flex bg-white shadow-lg m-auto w-full py-6" aria-label="Main navigation"><div class="flex items-center justify-between m-auto"><a class="order-first" href="/"${add_attribute("title", company.name, 0)} aria-label="Home"><img${add_attribute("src", `${assetURL}/images/${companyLogo.logo}`, 0)} class="h-16" alt="${escape(company.name, true) + " Logo"}"></a> <ul class="list-none font-semibold flex justify-center xl:gap-4 2xl:gap-8" role="menu">${each(mainServicesMenu, (link) => {
    return `<li class="list-none text-sm md:text-base lg:text-xl xl:text-base 2xl:text-lg text-[#332E33]" role="none"><a${add_attribute("href", link.slug, 0)}${add_attribute("title", link.title, 0)} class="text-[#332E33] hover:text-action" role="menuitem">${escape(link.name)}</a> </li>`;
  })} <li class="list-none cursor-pointer text-sm md:text-base lg:text-xl xl:text-base 2xl:text-lg text-[#332E33] relative group hover:text-action" role="none"><span title="More Links" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" data-svelte-h="svelte-8264ix">More</span> <svg class="w-3 h-3 ml-2 dark:text-white inline text-[#332E33]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> <ul class="absolute hidden group-hover:block bg-white shadow-md rounded" role="menu">${each(moreLinksMenu, (link) => {
    return `<li class="list-none text-[#332E33] hover:text-action py-2" role="none"><a${add_attribute("href", link.slug, 0)}${add_attribute("title", link.name, 0)} class="block" role="menuitem">${escape(link.name)}</a> </li>`;
  })}</ul></li></ul> <div>${validate_component(Phone, "Phone").$$render($$result, { action: true, number: company.phone }, {}, {})} ${validate_component(ActionButton, "ActionButton").$$render($$result, { action: true }, {}, {})}</div></div></nav>  <nav class="fixed top-0 z-50 hidden md:flex xl:hidden items-center bg-white shadow w-full py-4" aria-label="Tablet navigation"><div class="flex flex-col container mx-auto"><div class="flex items-center justify-between"><a href="/"${add_attribute("title", company.name, 0)} aria-label="Home"><img${add_attribute("src", `${assetURL}/images/${companyLogo.logo}`, 0)} class="h-12" alt="${escape(company.name, true) + " Logo"}"></a> <div class="flex justify-end items-center w-1/2 space-x-4">${validate_component(Phone, "Phone").$$render($$result, { action: true, number: company.phone }, {}, {})} ${validate_component(ActionButton, "ActionButton").$$render($$result, { action: true }, {}, {})}</div></div> <ul class="list-none font-semibold flex justify-end !text-center gap-5 lg:gap-8 pt-3 pb-0 w-full" role="menu">${each(mainServicesMenu, (link) => {
    return `<li class="list-none text-sm md:text-base text-[#332E33]" role="none"><a${add_attribute("href", link.slug, 0)}${add_attribute("title", link.title, 0)} class="text-[#332E33] hover:text-action" role="menuitem">${escape(link.name)}</a> </li>`;
  })} <li class="list-none cursor-pointer text-sm md:text-base text-[#332E33] relative group" role="none"><span title="More Links" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" data-svelte-h="svelte-8264ix">More</span> <svg class="w-3 h-3 ml-2 dark:text-white inline text-[#332E33]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> <ul class="absolute hidden text-left group-hover:block bg-white shadow-md rounded" role="menu">${each(moreLinksMenu, (link) => {
    return `<li class="list-none text-[#332E33] hover:text-action mx-0 py-2" role="none"><a${add_attribute("href", link.slug, 0)}${add_attribute("title", link.name, 0)} class="block" role="menuitem">${escape(link.name)}</a> </li>`;
  })}</ul></li></ul></div></nav>  <nav class="fixed h-40 pt-4 top-0 w-full z-50 md:hidden bg-white shadow-lg" aria-label="Mobile navigation"><div class="flex flex-col items-center justify-around"><a class="order-first" href="/"${add_attribute("title", company.name, 0)} aria-label="Home"><img${add_attribute("src", `${assetURL}/images/${companyLogo.logo}`, 0)} class="w-60 mb-4" alt="${escape(company.name, true) + " Logo"}"></a> <div class="flex items-center justify-center w-full px-3">${validate_component(Phone, "Phone").$$render(
    $$result,
    {
      action: true,
      number: company.phone,
      className: "w-48"
    },
    {},
    {}
  )} ${validate_component(ActionButton, "ActionButton").$$render($$result, { action: true, className: "w-48" }, {}, {})} <button class="md:hidden ml-2" style="touch-action: manipulation;"${add_attribute("aria-expanded", !hidden, 0)} aria-controls="mobile-menu" aria-label="Toggle menu">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "icon-park:hamburger-button",
      width: "2rem",
      height: "2rem"
    },
    {},
    {}
  )}</button></div></div> <ul id="mobile-menu" class="${[
    "list-none mt-4 bg-white w-full rounded-b-xl absolute left-0",
    hidden ? "hidden" : ""
  ].join(" ").trim()}" role="menu">${each(mainServicesMenu, (link) => {
    return `<li class="list-none text-lg text-[#332E33] py-2" role="none"><a${add_attribute("href", link.slug, 0)}${add_attribute("title", link.title, 0)} role="menuitem">${escape(link.name)}</a> </li>`;
  })} ${each(moreLinksMenu, (link) => {
    return `<li class="list-none text-lg py-2 text-[#332E33]" role="none"><a${add_attribute("href", link.slug, 0)}${add_attribute("title", link.title, 0)} role="menuitem">${escape(link.name)}</a> </li>`;
  })}</ul></nav>`;
});
const ModalBookingForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let pagePath;
  let mainServicesMenu;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let values = {
    name: "",
    email: "",
    phone: "",
    location: "",
    interest: "",
    message: "",
    anteater: ""
  };
  let errors = {};
  pagePath = $page.url.pathname;
  mainServicesMenu = $page.data.mainServicesMenu;
  $$unsubscribe_page();
  return `${`<form class="max-w-3xl mx-auto"><div class="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10"><input aria-label="Do not fill this text-field" name="type" type=""> <input name="page"${add_attribute("value", pagePath, 0)} type=""> <input name="anteater" type="text" placeholder="Anteater" autocomplete="off"${add_attribute("value", values.anteater, 0)}></div> <fieldset class="flex flex-col gap-2 md:gap-4"><div><label for="name" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-9547so">Name</label> <input required id="name" name="name" type="text" class="mt-1 block w-full border-gray-300 bg-gray-100 focus:ring-action focus:border-action"${add_attribute("value", values.name, 0)}> ${errors.name ? `<span class="text-red-600 text-sm">${escape(errors.name.message)}</span>` : ``}</div> <div><label for="email" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1589v52">Email</label> <input id="email" required name="email" type="email" class="mt-1 block w-full border-gray-300 bg-gray-100 focus:ring-action focus:border-action"${add_attribute("value", values.email, 0)}> ${errors.email ? `<span class="text-red-600 text-sm">${escape(errors.email.message)}</span>` : ``}</div> <div><label for="phone" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1ed5ini">Phone</label> <input id="phone" required name="phone" type="tel" class="mt-1 block w-full border-gray-300 bg-gray-100 focus:ring-action focus:border-action"${add_attribute("value", values.phone, 0)}> ${errors.phone ? `<span class="text-red-600 text-sm">${escape(errors.phone.message)}</span>` : ``}</div> <div><label for="location" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-1ny6ej0">Location</label> <input id="location" required name="location" type="text" class="mt-1 block w-full border-gray-300 bg-gray-100 focus:ring-action focus:border-action"${add_attribute("value", values.location, 0)}> ${errors.location ? `<span class="text-red-600 text-sm">${escape(errors.location.message)}</span>` : ``}</div> <div><label for="interest" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-rrrb51">Interest in</label> <select id="interest" required name="interest" class="mt-1 block w-full border-gray-300 bg-gray-100 focus:ring-action focus:border-action"><option disabled selected value="" data-svelte-h="svelte-ci8atx">Select an option</option>${each(mainServicesMenu, (service) => {
    return `<option class="hover:bg-action"${add_attribute("value", service.title, 0)}>${escape(service.title)}</option>`;
  })}</select> ${errors.interest ? `<span class="text-red-600 text-sm">${escape(errors.interest.message)}</span>` : ``}</div> <div><label for="message" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-igrlz6">How can we help you?</label> <textarea id="message" placeholder="Your message.." rows="4" name="message" class="mt-1 block w-full border-gray-300 bg-gray-100 focus:ring-action focus:border-action">${escape("")}</textarea> ${errors.message ? `<span class="text-red-600 text-sm">${escape(errors.message.message)}</span>` : ``}</div> ${errors.form ? `<span class="text-red-600 text-sm">${escape(errors.form.message)}</span>` : ``} ${`<div data-svelte-h="svelte-mf8lxd"><button type="submit" title="Booking Form" class="ml-auto bg-action text-white px-4 py-2 hover:bg-[#C44D08] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-action !text-sm">Submit</button></div>`}</fieldset></form>`}`;
});
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Modal Title" } = $$props;
  let { open } = $$props;
  const unsubscribe = modal.subscribe((value) => {
    open = value;
  });
  onDestroy(() => {
    unsubscribe();
  });
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  return `${open ? `<div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50" style="backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);"><div class="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 xl:w-1/3 relative"><button class="absolute top-0 right-0 mt-4 mr-6 text-3xl" data-svelte-h="svelte-1af366e">×</button> <h2 class="text-2xl mb-4">${escape(title)}</h2> ${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modal, $$unsubscribe_modal;
  $$unsubscribe_modal = subscribe(modal, (value) => $modal = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} ${validate_component(Modal, "Modal").$$render(
      $$result,
      { title: "Book Online", open: $modal },
      {
        open: ($$value) => {
          $modal = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(ModalBookingForm, "ModalBookingForm").$$render($$result, {}, {}, {})}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_modal();
  return $$rendered;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-Disl29g-.js.map
