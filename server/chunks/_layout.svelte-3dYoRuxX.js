import { c as create_ssr_component, a as add_attribute } from './ssr-C-fYxdRQ.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative flex flex-col max-w-[1400xp] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex p-10 z-[10]pointer-events-none opacity-0",
    0
  )}></div> ${slots.default ? slots.default({}) : ``}</div> `;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-3dYoRuxX.js.map
