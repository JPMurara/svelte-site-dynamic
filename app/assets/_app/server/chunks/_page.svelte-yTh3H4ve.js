import { c as create_ssr_component, i as subscribe, v as validate_component, k as escape, j as add_attribute, l as each } from './exports-Bs1Z8H2x.js';
import { a as assetURL } from './env-C5O8tkwu.js';
import { p as page } from './stores-DmVCp768.js';
import './MenuAside.svelte_svelte_type_style_lang-x3jG1pm5.js';
import { H as Head } from './Head-D0eqEAG6.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let company;
  let meta;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { formType } = $$props;
  let { pagePath } = $$props;
  const background = `${assetURL}/images/gallery-team-half.webp`;
  let hidden = "";
  let rating = 0;
  let review = [
    { rating: 1, name: "Great" },
    { rating: 2, name: "Average" },
    { rating: 3, name: "Terrible" }
  ];
  if ($$props.formType === void 0 && $$bindings.formType && formType !== void 0) $$bindings.formType(formType);
  if ($$props.pagePath === void 0 && $$bindings.pagePath && pagePath !== void 0) $$bindings.pagePath(pagePath);
  company = $page.data.company;
  $page.data.socialData;
  meta = {
    metaTitle: `Leave Feedback for ${company.name}`,
    metaDescription: "Leave Feedback to let us know how we went and how we could improve."
  };
  $$unsubscribe_page();
  return `${validate_component(Head, "Head").$$render($$result, { data: meta }, {}, {
    default: () => {
      return `<title>${escape(meta.metaTitle)}</title>`;
    }
  })} <div class="relative bg-cover bg-top h-96 mt-28 md:mt-34" style="${"background-image: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.1)), url(" + escape(background, true) + ")"}"><div class="section container max-w-7xl relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20 min-h-96 pt-48" data-svelte-h="svelte-i6t2oc"><div class="w-full"><h1 class="mb-6 !text-white">Leave a Feedback</h1></div></div></div> <section class="section"><div class="container max-w-4xl">${`<h4 class="mt-2 mb-8" data-svelte-h="svelte-73yyqp">To help us keep track of how we are doing, we would really appreciate it
        if you could take some time to tell us how we went.</h4>`} <fieldset${add_attribute("class", hidden, 0)}><legend class="font-semibold" data-svelte-h="svelte-1igtq5p">How would you rate your overall experience with us?</legend> <div class="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">${each(review, (review2) => {
    return `<label class="${"relative border-2 p-4 flex justify-between place-items-center cursor-pointer focus:outline-none " + escape(rating == review2.rating ? "border-primary" : "", true)}"><input type="radio" name="rating"${add_attribute("value", review2.rating, 0)} class="sr-only"${review2.rating === rating ? add_attribute("checked", true, 1) : ""}> <span id="project-type-0-label" class="block font-semibold">${escape(review2.name)}</span> <svg class="${escape(rating == review2.rating ? "" : "text-gray-100", true) + " h-5 w-5 text-[#332E33]"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="text" aria-hidden="true"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> </label>`;
  })}</div></fieldset> ${``} ${``}</div></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-yTh3H4ve.js.map
