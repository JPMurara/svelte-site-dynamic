import { c as create_ssr_component, i as subscribe, j as add_attribute, k as escape, v as validate_component } from './exports-Bs1Z8H2x.js';
import { p as page } from './stores-DmVCp768.js';
import { I as Icon } from './Phone-BWAOEZRA.js';

const ActionButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttons;
  let company;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { action = false } = $$props;
  let { className = "" } = $$props;
  if ($$props.action === void 0 && $$bindings.action && action !== void 0) $$bindings.action(action);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0) $$bindings.className(className);
  buttons = $page.data.buttons;
  company = $page.data.company;
  $$unsubscribe_page();
  return `<button${add_attribute("class", `m-1 py-3 md:py-2 !text-sm justify-center button-${action ? "action" : "primary"} ${className}`, 0)}${add_attribute("title", `Book ${company.name} Online Now`, 0)}>${escape(buttons.text)} ${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "heroicons-solid:cursor-click",
      class: "ml-1",
      width: "1.2rem",
      height: "1.2rem"
    },
    {},
    {}
  )}</button>`;
});

export { ActionButton as A };
//# sourceMappingURL=ActionButton-CaKRodl-.js.map
