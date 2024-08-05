import { c as create_ssr_component, i as subscribe } from './exports-Bs1Z8H2x.js';
import { p as page } from './stores-DmVCp768.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `${``} <div class="section" data-svelte-h="svelte-3qo5t6"><div class="container max-w-7xl flex place-items-center justify-center text-center"><div><h3 class="text-2xl font-semibold">Sorry the page you are looking for does not exist...</h3> <a class="block mt-8 bg-blue-600 text-white py-2 px-4 rounded max-w-sm mx-auto" href="/" title="Home Page">Take me to home</a></div></div></div>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-D7e5HmB-.js.map
