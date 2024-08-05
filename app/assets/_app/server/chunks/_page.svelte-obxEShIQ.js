import { c as create_ssr_component, v as validate_component, k as escape } from './exports-Bs1Z8H2x.js';
import { a as assetURL } from './env-C5O8tkwu.js';
import { H as Head } from './Head-D0eqEAG6.js';
import './stores-DmVCp768.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let metaTitle;
  let metaDesc;
  let content;
  let meta;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  title = data.aboutData.title;
  metaTitle = data.aboutData.meta_title;
  metaDesc = data.aboutData.meta_desc;
  content = data.aboutData.content;
  meta = { metaTitle, metaDescription: metaDesc };
  return `${validate_component(Head, "Head").$$render($$result, { data: meta }, {}, {
    default: () => {
      return `<title>${escape(meta.metaTitle)}</title>`;
    }
  })} <div class="relative mt-40 md:mt-28 h-96 xl:h-[30rem] 2xl:h-[35rem]"><div class="absolute inset-0 bg-no-repeat bg-cover" style="${"background-image: url('" + escape(assetURL, true) + "/images/jerome-about.webp'); background-position: center 45%;"}" aria-label="Service banner image"></div> <div class="absolute inset-0 bg-black opacity-60"></div> <div class="absolute inset-0 flex items-center justify-center"><h1 class="!text-5xl lg:!text-7xl mb-6 !text-gray-200 !tracking-tight z-40" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">${escape(title)}</h1></div></div> <div class="container mx-auto px-4 mb-20 mt-12"><div class="prose max-w-none !font-thin"><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END --></div></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-obxEShIQ.js.map
