import { c as create_ssr_component, o as onDestroy, t as spread, u as escape_object, i as subscribe, k as escape, j as add_attribute, v as validate_component, w as createEventDispatcher } from './exports-Bs1Z8H2x.js';
import { p as page } from './stores-DmVCp768.js';
import { c as checkIconState, g as generateIcon } from './MenuAside.svelte_svelte_type_style_lang-x3jG1pm5.js';

const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let company;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { action = false } = $$props;
  let { className = "" } = $$props;
  let { number = "" } = $$props;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0) $$bindings.action(action);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  if ($$props.number === void 0 && $$bindings.number && number !== void 0) $$bindings.number(number);
  company = $page.data.company;
  $$unsubscribe_page();
  return `<a href="${"tel:" + escape(number, true)}"${add_attribute("title", `Call ${company.name}`, 0)}${add_attribute("class", `m-1 py-3 md:py-2 !text-sm justify-center button-${action ? "action" : "primary"} ${className} no-underline`, 0)} aria-label="Phone">${escape(number)} ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "mage:phone-call-fill",
      class: "ml-1",
      width: "1.1rem",
      height: "1.1rem"
    },
    {},
    {}
  )}</a>`;
});

export { Icon as I, Phone as P };
//# sourceMappingURL=Phone-BWAOEZRA.js.map
