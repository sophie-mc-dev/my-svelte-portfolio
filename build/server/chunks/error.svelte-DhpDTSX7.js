import { c as create_ssr_component, i as subscribe, k as escape } from './exports-DMyuefy0.js';
import { p as page } from './stores-BHV9ynRF.js';
import './client-C3I2vgul.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.status)}</h1> <p>${escape($page.error?.message)}</p>`;
});

export { Error as default };
//# sourceMappingURL=error.svelte-DhpDTSX7.js.map
