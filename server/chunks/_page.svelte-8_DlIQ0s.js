import { c as create_ssr_component, v as validate_component, d as each, f as compute_rest_props, h as createEventDispatcher, s as setContext, a as add_attribute, i as spread, j as escape_object, k as escape_attribute_value, e as escape, m as missing_component, g as getContext, b as subscribe, l as compute_slots } from './ssr-C-fYxdRQ.js';
import { w as writable } from './index-DYwvirdE.js';
import { twMerge } from 'tailwind-merge';

const css$9 = {
  code: '.blob.svelte-cb0mvs{width:300px;height:300px;position:relative;color:#fff;display:flex;justify-content:center;align-items:center}.blob.svelte-cb0mvs::before{border:2px solid #fff;border-radius:58% 42% 48% 53% / 47% 60% 36% 53%;width:100%;height:100%;content:"";position:absolute;left:0;top:0;background-image:url("../images/pfp.jpeg");background-size:cover}.blob.svelte-cb0mvs::after{border:2px solid #fff;border-radius:38% 42% 48% 53% / 47% 60% 36% 53%;width:100%;height:100%;background:rgba(244, 166, 166, 0.1);content:"";position:absolute;left:0;top:0;animation:svelte-cb0mvs-rotate 16s linear infinite}@keyframes svelte-cb0mvs-rotate{0%{transform:rotate(0deg);border-color:#141c2b}50%{border-color:#ff0000}100%{transform:rotate(360deg);border-color:#141c2b}}',
  map: '{"version":3,"file":"Blob.svelte","sources":["Blob.svelte"],"sourcesContent":["<div class=\\"blob\\"></div>\\r\\n\\r\\n<style>\\r\\n  .blob {\\r\\n    width: 300px;\\r\\n    height: 300px;\\r\\n    /* margin: 10% auto; */\\r\\n    position: relative;\\r\\n    color: #fff;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n  }\\r\\n  .blob::before {\\r\\n    border: 2px solid #fff;\\r\\n    border-radius: 58% 42% 48% 53% / 47% 60% 36% 53%;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    content: \\"\\";\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    background-image: url(\\"../images/pfp.jpeg\\");\\r\\n    background-size: cover;\\r\\n  }\\r\\n\\r\\n  .blob::after {\\r\\n    border: 2px solid #fff;\\r\\n    border-radius: 38% 42% 48% 53% / 47% 60% 36% 53%;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background: rgba(244, 166, 166, 0.1);\\r\\n    content: \\"\\";\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    animation: rotate 16s linear infinite;\\r\\n  }\\r\\n  @keyframes rotate {\\r\\n    0% {\\r\\n      transform: rotate(0deg);\\r\\n      border-color: #141c2b;\\r\\n    }\\r\\n    50% {\\r\\n      border-color: #ff0000;\\r\\n    }\\r\\n    100% {\\r\\n      transform: rotate(360deg);\\r\\n      border-color: #141c2b;\\r\\n    }\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAGE,mBAAM,CACJ,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CAEb,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CACA,mBAAK,QAAS,CACZ,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAChD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,gBAAgB,CAAE,yBAAyB,CAC3C,eAAe,CAAE,KACnB,CAEA,mBAAK,OAAQ,CACX,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,CACtB,aAAa,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAChD,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CACpC,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,SAAS,CAAE,oBAAM,CAAC,GAAG,CAAC,MAAM,CAAC,QAC/B,CACA,WAAW,oBAAO,CAChB,EAAG,CACD,SAAS,CAAE,OAAO,IAAI,CAAC,CACvB,YAAY,CAAE,OAChB,CACA,GAAI,CACF,YAAY,CAAE,OAChB,CACA,IAAK,CACH,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,YAAY,CAAE,OAChB,CACF"}'
};
const Blob = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<div class="blob svelte-cb0mvs"></div>`;
});
const css$8 = {
  code: "section.svelte-x01jo9{display:flex;flex-direction:row;justify-content:center;align-items:center;text-align:left;height:100vh;width:100%}.introduction.svelte-x01jo9{margin-bottom:20px;display:flex;flex-direction:column;align-items:flex-start;margin-right:50px}h1.svelte-x01jo9{margin-top:0;font-size:48px;margin-bottom:20px}p.svelte-x01jo9{font-size:24px;margin-bottom:20px}.btn.svelte-x01jo9{background-color:white;color:black;border:none;padding:10px 20px;font-size:16px;cursor:pointer;border-radius:25px;font-weight:bold;transition:all 0.3s ease}.btn.svelte-x01jo9:hover{background-color:#dd1212;color:white;transform:scale(1.05)}",
  map: `{"version":3,"file":"Home.svelte","sources":["Home.svelte"],"sourcesContent":["<script>\\r\\n  import Blob from \\"../components/Blob.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<section id=\\"home\\">\\r\\n  <div class=\\"introduction\\">\\r\\n    <h1>Hi 👋 I'm Sofia!</h1>\\r\\n    <p>I'm a FrontEnd Developer based in Porto.</p>\\r\\n    <button class=\\"btn\\">Download CV</button>\\r\\n  </div>\\r\\n  <Blob />\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  section {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    text-align: left;\\r\\n    height: 100vh;\\r\\n    width: 100%;\\r\\n  }\\r\\n\\r\\n  .introduction {\\r\\n    margin-bottom: 20px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: flex-start;\\r\\n    margin-right: 50px;\\r\\n  }\\r\\n\\r\\n  h1 {\\r\\n    margin-top: 0;\\r\\n    font-size: 48px;\\r\\n    margin-bottom: 20px;\\r\\n  }\\r\\n\\r\\n  p {\\r\\n    font-size: 24px;\\r\\n    margin-bottom: 20px;\\r\\n  }\\r\\n\\r\\n  .btn {\\r\\n    background-color: white;\\r\\n    color: black;\\r\\n    border: none;\\r\\n    padding: 10px 20px;\\r\\n    font-size: 16px;\\r\\n    cursor: pointer;\\r\\n    border-radius: 25px;\\r\\n    font-weight: bold;\\r\\n    transition: all 0.3s ease;\\r\\n  }\\r\\n\\r\\n  .btn:hover {\\r\\n    background-color: #dd1212;\\r\\n    color: white;\\r\\n    transform: scale(1.05);\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAcE,qBAAQ,CACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IACT,CAEA,2BAAc,CACZ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,UAAU,CACvB,YAAY,CAAE,IAChB,CAEA,gBAAG,CACD,UAAU,CAAE,CAAC,CACb,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CAEA,eAAE,CACA,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CAEA,kBAAK,CACH,gBAAgB,CAAE,KAAK,CACvB,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,OAAO,CACf,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IACvB,CAEA,kBAAI,MAAO,CACT,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,MAAM,IAAI,CACvB"}`
};
const Home$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<section id="home" class="svelte-x01jo9"><div class="introduction svelte-x01jo9" data-svelte-h="svelte-ph2e99"><h1 class="svelte-x01jo9">Hi 👋 I&#39;m Sofia!</h1> <p class="svelte-x01jo9">I&#39;m a FrontEnd Developer based in Porto.</p> <button class="btn svelte-x01jo9">Download CV</button></div> ${validate_component(Blob, "Blob").$$render($$result, {}, {}, {})} </section>`;
});
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { color = "gray" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  let { border = false } = $$props;
  let { placement = void 0 } = $$props;
  let { offset = true } = $$props;
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 start-0",
    "top-center": "top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "top-right": "top-0 end-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 start-0",
    center: "top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 end-0",
    // bottom
    "bottom-left": "bottom-0 start-0",
    "bottom-center": "bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 rtl:translate-x-1/2",
    "bottom-right": "bottom-0 end-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3 rtl:translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3 rtl:-translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0) $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0) $$bindings.border(border);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0) $$bindings.placement(placement);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0) $$bindings.offset(offset);
  dotClass = twMerge("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class);
  return `<div${add_attribute("class", dotClass, 0)}>${slots.default ? slots.default({}) : ``}</div> `;
});
const ControlButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { forward: forward2 } = $$props;
  let { name } = $$props;
  let buttonCls;
  if ($$props.forward === void 0 && $$bindings.forward && forward2 !== void 0) $$bindings.forward(forward2);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
  buttonCls = twMerge("flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-none text-white dark:text-gray-300", forward2 ? "end-0" : "start-0", $$props.class);
  return `<button type="button"${add_attribute("class", buttonCls, 0)}>${slots.default ? slots.default({}) : ` <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${forward2 ? `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>` : `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`} <span class="sr-only">${escape(name)}</span></span> `}</button> `;
});
const canChangeSlide = ({ lastSlideChange, slideDuration, slideDurationRatio = 1 }) => {
  if (lastSlideChange && (/* @__PURE__ */ new Date()).getTime() - lastSlideChange.getTime() < slideDuration * slideDurationRatio) {
    console.warn("Can't change slide yet, too soon");
    return false;
  }
  return true;
};
const Controls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const { update } = state;
  function changeSlide(forward2) {
    if (!canChangeSlide({
      lastSlideChange: $state.lastSlideChange,
      slideDuration: $state.slideDuration,
      slideDurationRatio: 0.75
    })) {
      return;
    }
    if (forward2) {
      update((_state) => {
        _state.forward = true;
        _state.index = _state.index >= _state.images.length - 1 ? 0 : _state.index + 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    } else {
      update((_state) => {
        _state.forward = false;
        _state.index = _state.index <= 0 ? _state.images.length - 1 : _state.index - 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    }
  }
  $$unsubscribe_state();
  return ` ${slots.default ? slots.default({ ControlButton, changeSlide }) : ` ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Previous",
      forward: false,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Next",
      forward: true,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} `}`;
});
const Indicators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  let { activeClass = "opacity-100" } = $$props;
  let { inactiveClass = "opacity-60" } = $$props;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0) $$bindings.inactiveClass(inactiveClass);
  $$unsubscribe_state();
  return `<div${add_attribute("class", twMerge("flex absolute bottom-5 start-1/2 z-30 space-x-3 rtl:space-x-reverse -translate-x-1/2 rtl:translate-x-1/2", $$props.class), 0)}>${each($state.images, (_, idx) => {
    let selected = $state.index === idx;
    return ` <button>${slots.default ? slots.default({ Indicator, selected, index: idx }) : ` ${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        class: twMerge("bg-gray-100 hover:bg-gray-300", selected ? activeClass : inactiveClass)
      },
      {},
      {}
    )} `} </button>`;
  })}</div> `;
});
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imgClass;
  let $$restProps = compute_rest_props($$props, ["image", "transition"]);
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { image } = $$props;
  let { transition = null } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  ({
    x: $state.forward ? "100%" : "-100%",
    opacity: 1,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  ({
    x: $state.forward ? "-100%" : "100%",
    opacity: 0.9,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  imgClass = twMerge("absolute block !w-full h-full object-cover", $$props.class);
  $$unsubscribe_state();
  return `${transition ? `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>` : `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>`} `;
});
let divClass = "grid overflow-hidden relative rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "images",
    "index",
    "slideDuration",
    "transition",
    "duration",
    "ariaLabel",
    "disableSwipe",
    "imgClass"
  ]);
  let { images } = $$props;
  let { index = 0 } = $$props;
  let { slideDuration = 1e3 } = $$props;
  let { transition = null } = $$props;
  let { duration = 0 } = $$props;
  let { ariaLabel = "Draggable Carousel" } = $$props;
  let { disableSwipe = false } = $$props;
  let { imgClass = "" } = $$props;
  const dispatch = createEventDispatcher();
  const { set, subscribe: subscribe2, update } = writable({
    images,
    index,
    forward: true,
    slideDuration,
    lastSlideChange: /* @__PURE__ */ new Date()
  });
  const state = {
    set: (_state) => set({
      index: _state.index,
      images: _state.images,
      lastSlideChange: /* @__PURE__ */ new Date(),
      slideDuration,
      forward: forward2
    }),
    subscribe: subscribe2,
    update
  };
  let forward2 = true;
  setContext("state", state);
  subscribe2((_state) => {
    index = _state.index;
    forward2 = _state.forward;
    dispatch("change", images[index]);
  });
  let carouselDiv;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.slideDuration === void 0 && $$bindings.slideDuration && slideDuration !== void 0) $$bindings.slideDuration(slideDuration);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0) $$bindings.duration(duration);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.disableSwipe === void 0 && $$bindings.disableSwipe && disableSwipe !== void 0) $$bindings.disableSwipe(disableSwipe);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0) $$bindings.imgClass(imgClass);
  return ` ${$$result.head += `<!-- HEAD_svelte-h5oyes_START -->${images.length > 0 ? `${each(images, (image) => {
    return `<link rel="preload"${add_attribute("href", image.src, 0)} as="image">`;
  })}` : ``}<!-- HEAD_svelte-h5oyes_END -->`, ""}   <div class="relative" role="button"${add_attribute("aria-label", ariaLabel, 0)} tabindex="0"${add_attribute("this", carouselDiv, 0)}><div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(
          divClass,
          "transition-transform",
          $$props.class
        ))
      }
    ],
    {}
  )}>${slots.slide ? slots.slide({ Slide, index }) : ` ${validate_component(Slide, "Slide").$$render(
    $$result,
    {
      image: images[index],
      class: imgClass,
      transition
    },
    {},
    {}
  )} `}</div> ${slots.default ? slots.default({ index, Controls, Indicators }) : ``}</div> `;
});
const Thumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["selected", "activeClass", "inactiveClass"]);
  let { selected = false } = $$props;
  let { activeClass = "opacity-100" } = $$props;
  let { inactiveClass = "opacity-60" } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0) $$bindings.selected(selected);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0) $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0) $$bindings.inactiveClass(inactiveClass);
  return `<img${spread(
    [
      { alt: "..." },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(selected ? activeClass : inactiveClass, $$props.class))
      }
    ],
    {}
  )}> `;
});
const Thumbnails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { images = [] } = $$props;
  let { index = 0 } = $$props;
  let { ariaLabel = "Click to view image" } = $$props;
  let { imgClass = "" } = $$props;
  let { throttleDelay = 650 } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0) $$bindings.images(images);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0) $$bindings.index(index);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0) $$bindings.imgClass(imgClass);
  if ($$props.throttleDelay === void 0 && $$bindings.throttleDelay && throttleDelay !== void 0) $$bindings.throttleDelay(throttleDelay);
  index = (index + images.length) % images.length;
  return `<div${add_attribute("class", twMerge("flex flex-row justify-center bg-gray-100 w-full", $$props.class), 0)}>${each(images, (image, idx) => {
    let selected = index === idx;
    return `  <button${add_attribute("aria-label", ariaLabel, 0)}>${slots.default ? slots.default({ Thumbnail, image, selected, imgClass }) : ` ${validate_component(Thumbnail, "Thumbnail").$$render($$result, Object.assign({}, image, { selected }, { class: imgClass }), {}, {})} `} </button>`;
  })}</div> `;
});
const DarkMode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["btnClass", "size", "ariaLabel"]);
  let { btnClass: btnClass2 = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5" } = $$props;
  let { size = "md" } = $$props;
  let { ariaLabel = "Dark mode" } = $$props;
  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  };
  if ($$props.btnClass === void 0 && $$bindings.btnClass && btnClass2 !== void 0) $$bindings.btnClass(btnClass2);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0) $$bindings.ariaLabel(ariaLabel);
  return `${$$result.head += `<!-- HEAD_svelte-1pa505f_START --><script data-svelte-h="svelte-mp99qu">if ('color-theme' in localStorage) {
      // explicit preference - overrides author's choice
      localStorage.getItem('color-theme') === 'dark' ? window.document.documentElement.classList.add('dark') : window.document.documentElement.classList.remove('dark');
    } else {
      // browser preference - does not overrides
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) window.document.documentElement.classList.add('dark');
    }<\/script><!-- HEAD_svelte-1pa505f_END -->`, ""} <button${spread(
    [
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { type: "button" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(btnClass2, $$props.class))
      }
    ],
    {}
  )}><span class="hidden dark:block">${slots.lightIcon ? slots.lightIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1
  0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> `}</span> <span class="block dark:hidden">${slots.darkIcon ? slots.darkIcon({}) : ` <svg${add_attribute("class", sizes[size], 0)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> `}</span></button> `;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["footerType"]);
  let { footerType = void 0 } = $$props;
  let footerClass = twMerge(footerType === "sitemap" && "bg-gray-800", footerType === "socialmedia" && "p-4 bg-white sm:p-6 dark:bg-gray-800", footerType === "logo" && "p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800", footerType === "default" && "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800", $$props.class);
  if ($$props.footerType === void 0 && $$bindings.footerType && footerType !== void 0) $$bindings.footerType(footerType);
  return `<footer${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(footerClass)
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</footer> `;
});
const FooterCopyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["spanClass", "aClass", "year", "href", "by", "target", "copyrightMessage"]);
  let { spanClass = "block text-sm text-gray-500 sm:text-center dark:text-gray-400" } = $$props;
  let { aClass = "hover:underline" } = $$props;
  let { year = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear() } = $$props;
  let { href = "" } = $$props;
  let { by = "" } = $$props;
  let { target = void 0 } = $$props;
  let { copyrightMessage = "All Rights Reserved." } = $$props;
  let spanCls = twMerge(spanClass, $$props.classSpan);
  let aCls = twMerge(aClass, $$props.classA);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0) $$bindings.spanClass(spanClass);
  if ($$props.aClass === void 0 && $$bindings.aClass && aClass !== void 0) $$bindings.aClass(aClass);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0) $$bindings.year(year);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.by === void 0 && $$bindings.by && by !== void 0) $$bindings.by(by);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0) $$bindings.target(target);
  if ($$props.copyrightMessage === void 0 && $$bindings.copyrightMessage && copyrightMessage !== void 0) $$bindings.copyrightMessage(copyrightMessage);
  return `<span${add_attribute("class", spanCls, 0)}>© ${escape(year)} ${href ? `<a${spread(
    [
      escape_object($$restProps),
      { href: escape_attribute_value(href) },
      { target: escape_attribute_value(target) },
      { class: escape_attribute_value(aCls) }
    ],
    {}
  )}>${escape(by)}</a>` : `<span class="ms-1">${escape(by)}</span>`} ${escape(copyrightMessage)}</span> `;
});
const css$7 = {
  code: ".about-section.svelte-kxeibb{padding:50px 20px;text-align:center;justify-content:center;color:white;display:flex;flex-direction:column;gap:40px}h1.svelte-kxeibb{font-size:36px;margin-bottom:40px}.about-content.svelte-kxeibb{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:50px}p.svelte-kxeibb{max-width:500px;text-align:left;font-size:16px;line-height:3em}",
  map: '{"version":3,"file":"About.svelte","sources":["About.svelte"],"sourcesContent":["<script>\\r\\n  import { Carousel, Thumbnails } from \\"flowbite-svelte\\";\\r\\n\\r\\n  const images = [\\r\\n    {\\r\\n      alt: \\"I1\\",\\r\\n      src: \\"src/lib/images/image1.jpg\\",\\r\\n    },\\r\\n    {\\r\\n      alt: \\"I2\\",\\r\\n      src: \\"src/lib/images/image1.jpg\\",\\r\\n    },\\r\\n    {\\r\\n      alt: \\"I3\\",\\r\\n      src: \\"src/lib/images/image1.jpg\\",\\r\\n    },\\r\\n  ];\\r\\n\\r\\n  let index = 0;\\r\\n  let forward = true;\\r\\n<\/script>\\r\\n\\r\\n<section id=\\"aboutme\\" class=\\"about-section\\">\\r\\n  <h1>About Me</h1>\\r\\n  <div class=\\"about-content\\">\\r\\n    <div class=\\"max-w-md space-y-4\\">\\r\\n      <Carousel {images} {forward} let:Indicators let:Controls bind:index>\\r\\n        <Controls />\\r\\n        <Indicators />\\r\\n      </Carousel>\\r\\n      <Thumbnails style=\\"\\" {images} {forward} bind:index />\\r\\n    </div>\\r\\n    <p>\\r\\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\\r\\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\r\\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\r\\n      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\\r\\n      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\\r\\n      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\\r\\n      est laborum. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed\\r\\n      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\\r\\n      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\\r\\n      ea commodo consequat.\\r\\n    </p>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  .about-section {\\r\\n    padding: 50px 20px;\\r\\n    text-align: center;\\r\\n    justify-content: center;\\r\\n    color: white;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 40px;\\r\\n  }\\r\\n  h1 {\\r\\n    font-size: 36px;\\r\\n    margin-bottom: 40px;\\r\\n  }\\r\\n  .about-content {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 50px;\\r\\n  }\\r\\n  p {\\r\\n    max-width: 500px;\\r\\n    text-align: left;\\r\\n    font-size: 16px;\\r\\n    line-height: 3em;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAgDE,4BAAe,CACb,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACA,gBAAG,CACD,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CACA,4BAAe,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CACA,eAAE,CACA,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GACf"}'
};
let forward = true;
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    {
      alt: "I1",
      src: "src/lib/images/image1.jpg"
    },
    {
      alt: "I2",
      src: "src/lib/images/image1.jpg"
    },
    {
      alt: "I3",
      src: "src/lib/images/image1.jpg"
    }
  ];
  let index = 0;
  $$result.css.add(css$7);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<section id="aboutme" class="about-section svelte-kxeibb"><h1 class="svelte-kxeibb" data-svelte-h="svelte-hbz7zl">About Me</h1> <div class="about-content svelte-kxeibb"><div class="max-w-md space-y-4">${validate_component(Carousel, "Carousel").$$render(
      $$result,
      { images, forward, index },
      {
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ Indicators: Indicators2, Controls: Controls2 }) => {
          return `${validate_component(Controls2, "Controls").$$render($$result, {}, {}, {})} ${validate_component(Indicators2, "Indicators").$$render($$result, {}, {}, {})}`;
        }
      }
    )} ${validate_component(Thumbnails, "Thumbnails").$$render(
      $$result,
      { style: "", images, forward, index },
      {
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <p class="svelte-kxeibb" data-svelte-h="svelte-1srmxj5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.</p></div> </section>`;
  } while (!$$settled);
  return $$rendered;
});
const css$6 = {
  code: ".projects-section.svelte-qm9xun{padding:50px 20px;text-align:center;justify-content:center;color:white;display:flex;flex-direction:column;gap:40px}h1.svelte-qm9xun{font-size:36px;margin-bottom:40px}.projects-content.svelte-qm9xun{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:50px}",
  map: '{"version":3,"file":"Projects.svelte","sources":["Projects.svelte"],"sourcesContent":["<script>\\r\\n<\/script>\\r\\n\\r\\n<section id=\\"projects\\" class=\\"projects-section\\">\\r\\n  <h1>My Projects</h1>\\r\\n  <div class=\\"projects-content\\"></div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  .projects-section {\\r\\n    padding: 50px 20px;\\r\\n    text-align: center;\\r\\n    justify-content: center;\\r\\n    color: white;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 40px;\\r\\n  }\\r\\n  h1 {\\r\\n    font-size: 36px;\\r\\n    margin-bottom: 40px;\\r\\n  }\\r\\n  .projects-content {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 50px;\\r\\n  }\\r\\n  p {\\r\\n    max-width: 500px;\\r\\n    text-align: left;\\r\\n    font-size: 16px;\\r\\n    line-height: 3em;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AASE,+BAAkB,CAChB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACA,gBAAG,CACD,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CACA,+BAAkB,CAChB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP"}'
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<section id="projects" class="projects-section svelte-qm9xun" data-svelte-h="svelte-1pchqhw"><h1 class="svelte-qm9xun">My Projects</h1> <div class="projects-content svelte-qm9xun"></div> </section>`;
});
const css$5 = {
  code: ".skills-section.svelte-1mdztrr{padding:50px 20px;text-align:center;justify-content:center;color:white;display:flex;flex-direction:column;gap:40px}h1.svelte-1mdztrr{font-size:36px;margin-bottom:40px}.skills-content.svelte-1mdztrr{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:50px}",
  map: '{"version":3,"file":"Skills.svelte","sources":["Skills.svelte"],"sourcesContent":["<script>\\r\\n<\/script>\\r\\n\\r\\n<section id=\\"skills\\" class=\\"skills-section\\">\\r\\n  <h1>My Skills</h1>\\r\\n  <div class=\\"skills-content\\"></div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  .skills-section {\\r\\n    padding: 50px 20px;\\r\\n    text-align: center;\\r\\n    justify-content: center;\\r\\n    color: white;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 40px;\\r\\n  }\\r\\n  h1 {\\r\\n    font-size: 36px;\\r\\n    margin-bottom: 40px;\\r\\n  }\\r\\n  .skills-content {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 50px;\\r\\n  }\\r\\n  p {\\r\\n    max-width: 500px;\\r\\n    text-align: left;\\r\\n    font-size: 16px;\\r\\n    line-height: 3em;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AASE,8BAAgB,CACd,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACA,iBAAG,CACD,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CACA,8BAAgB,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP"}'
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section id="skills" class="skills-section svelte-1mdztrr" data-svelte-h="svelte-1z0nij8"><h1 class="svelte-1mdztrr">My Skills</h1> <div class="skills-content svelte-1mdztrr"></div> </section>`;
});
const css$4 = {
  code: ".contacts-section.svelte-148xfaz{padding:50px 20px;text-align:center;justify-content:center;color:white;display:flex;flex-direction:column;gap:40px}h1.svelte-148xfaz{font-size:36px;margin-bottom:40px}.contacts-content.svelte-148xfaz{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:50px}",
  map: '{"version":3,"file":"Contact.svelte","sources":["Contact.svelte"],"sourcesContent":["<script>\\r\\n<\/script>\\r\\n\\r\\n<section id=\\"contactme\\" class=\\"contacts-section\\">\\r\\n  <h1>Contact Me</h1>\\r\\n  <div class=\\"contacts-content\\"></div>\\r\\n</section>\\r\\n\\r\\n<style>\\r\\n  .contacts-section {\\r\\n    padding: 50px 20px;\\r\\n    text-align: center;\\r\\n    justify-content: center;\\r\\n    color: white;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    gap: 40px;\\r\\n  }\\r\\n  h1 {\\r\\n    font-size: 36px;\\r\\n    margin-bottom: 40px;\\r\\n  }\\r\\n  .contacts-content {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    gap: 50px;\\r\\n  }\\r\\n  p {\\r\\n    max-width: 500px;\\r\\n    text-align: left;\\r\\n    font-size: 16px;\\r\\n    line-height: 3em;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AASE,gCAAkB,CAChB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,MAAM,CAClB,eAAe,CAAE,MAAM,CACvB,KAAK,CAAE,KAAK,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACA,iBAAG,CACD,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CACA,gCAAkB,CAChB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP"}'
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section id="contactme" class="contacts-section svelte-148xfaz" data-svelte-h="svelte-he3g6k"><h1 class="svelte-148xfaz">Contact Me</h1> <div class="contacts-content svelte-148xfaz"></div> </section>`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const User = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Code = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Baseline_email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Lightbulb_solid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 36 36" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M23.86 29.15H12.11a.8.8 0 1 0 0 1.6h11.75a.8.8 0 0 0 0-1.6" class="clr-i-solid clr-i-solid-path-1"/><path fill="currentColor" d="M22 32.15h-8a.8.8 0 1 0 0 1.6h8a.8.8 0 1 0 0-1.6" class="clr-i-solid clr-i-solid-path-2"/><path fill="currentColor" d="M18 2.25a11 11 0 0 0-11 11a10.7 10.7 0 0 0 1 4.63a16 16 0 0 0 1.12 1.78a17 17 0 0 1 2 3.47a16.2 16.2 0 0 1 .59 4h5.69v-5.52l-2.86-3.13l3-3a.8.8 0 0 1 1.13 1.13l-1.89 1.89L19 21v6.17h5.3a16.2 16.2 0 0 1 .59-4a17 17 0 0 1 2-3.47A16 16 0 0 0 28 17.86a10.7 10.7 0 0 0 1-4.63A11 11 0 0 0 18 2.25m.45 9.75l-2.73 2.73a.8.8 0 1 1-1.13-1.13l2.73-2.73A.8.8 0 1 1 18.45 12" class="clr-i-solid clr-i-solid-path-3"/><path fill="none" d="M0 0h36v36H0z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const css$3 = {
  code: ".menu.svelte-2z74v2{position:fixed;display:flex;flex-direction:column;align-items:center}.top-left-menu.svelte-2z74v2{top:0;left:100px}.menu-line.svelte-2z74v2{width:2px;height:100px;background:white;margin-bottom:20px}.menu-icons.svelte-2z74v2{display:flex;flex-direction:column;align-items:center}.menu-icon.svelte-2z74v2{display:block;margin:10px 0;color:white;font-size:24px;text-decoration:none}",
  map: `{"version":3,"file":"TopMenu.svelte","sources":["TopMenu.svelte"],"sourcesContent":["<script>\\r\\n  import MaterialSymbolsHome from \\"~icons/material-symbols/home\\";\\r\\n  import MdiUser from '~icons/mdi/user';\\r\\n  import TablerCode from '~icons/tabler/code';\\r\\n  import IcBaselineEmail from '~icons/ic/baseline-email';\\r\\n  import ClarityLightbulbSolid from '~icons/clarity/lightbulb-solid';\\r\\n\\r\\n  export let icons = [\\r\\n    { href: \\"#home\\", component: MaterialSymbolsHome, title: \\"Home\\" },\\r\\n    { href: \\"#aboutme\\", component: MdiUser, title: \\"About Me\\" },\\r\\n    { href: \\"#skills\\", component: ClarityLightbulbSolid, title: \\"Skills\\" },\\r\\n    { href: \\"#projects\\", component: TablerCode, title: \\"Projects\\" },\\r\\n    { href: \\"#contactme\\", component: IcBaselineEmail, title: \\"Contact Me\\" },\\r\\n  ];\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"menu top-left-menu\\">\\r\\n  <div class=\\"menu-line\\"></div>\\r\\n  <div class=\\"menu-icons\\">\\r\\n    {#each icons as icon}\\r\\n      <a href={icon.href} class=\\"menu-icon\\" title={icon.title}>\\r\\n        <svelte:component this={icon.component} />\\r\\n      </a>\\r\\n    {/each}\\r\\n  </div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .menu {\\r\\n    position: fixed;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .top-left-menu {\\r\\n    top: 0;\\r\\n    left: 100px;\\r\\n  }\\r\\n\\r\\n  .menu-line {\\r\\n    width: 2px;\\r\\n    height: 100px;\\r\\n    background: white;\\r\\n    margin-bottom: 20px;\\r\\n  }\\r\\n\\r\\n  .menu-icons {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .menu-icon {\\r\\n    display: block;\\r\\n    margin: 10px 0;\\r\\n    color: white;\\r\\n    font-size: 24px;\\r\\n    text-decoration: none;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4BE,mBAAM,CACJ,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CAEA,4BAAe,CACb,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KACR,CAEA,wBAAW,CACT,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,IACjB,CAEA,yBAAY,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CAEA,wBAAW,CACT,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,IACnB"}`
};
const TopMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icons = [
    {
      href: "#home",
      component: Home,
      title: "Home"
    },
    {
      href: "#aboutme",
      component: User,
      title: "About Me"
    },
    {
      href: "#skills",
      component: Lightbulb_solid,
      title: "Skills"
    },
    {
      href: "#projects",
      component: Code,
      title: "Projects"
    },
    {
      href: "#contactme",
      component: Baseline_email,
      title: "Contact Me"
    }
  ] } = $$props;
  if ($$props.icons === void 0 && $$bindings.icons && icons !== void 0) $$bindings.icons(icons);
  $$result.css.add(css$3);
  return `<div class="menu top-left-menu svelte-2z74v2"><div class="menu-line svelte-2z74v2"></div> <div class="menu-icons svelte-2z74v2">${each(icons, (icon) => {
    return `<a${add_attribute("href", icon.href, 0)} class="menu-icon svelte-2z74v2"${add_attribute("title", icon.title, 0)}>${validate_component(icon.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})} </a>`;
  })}</div> </div>`;
});
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>`}<!-- HTML_TAG_END --></svg>`;
});
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { viewBox: "0 0 24 24" },
      { width: "1.2em" },
      { height: "1.2em" },
      escape_object($$props)
    ],
    {}
  )}><!-- HTML_TAG_START -->${`<path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>`}<!-- HTML_TAG_END --></svg>`;
});
const css$2 = {
  code: ".menu.svelte-1de9xfu{position:fixed;display:flex;flex-direction:column;align-items:center}.bottom-right-menu.svelte-1de9xfu{bottom:0;right:100px}.menu-line.svelte-1de9xfu{width:2px;height:150px;background:white}.social-icons.svelte-1de9xfu{display:flex;flex-direction:column;align-items:center}.social-icon.svelte-1de9xfu{display:block;margin:10px 0;color:white;font-size:24px;text-decoration:none}",
  map: '{"version":3,"file":"BottomMenu.svelte","sources":["BottomMenu.svelte"],"sourcesContent":["<script>\\r\\n  import MdiGithub from \\"~icons/mdi/github\\";\\r\\n  import MdiLinkedin from \\"~icons/mdi/linkedin\\";\\r\\n\\r\\n  export let socialIcons = [\\r\\n    { href: \\"https://github.com/sophie-mc-dev\\", component: MdiGithub },\\r\\n    { href: \\"https://www.linkedin.com/in/sofia-m-costa/\\", component: MdiLinkedin },\\r\\n  ];\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"menu bottom-right-menu\\">\\r\\n  <div class=\\"social-icons\\">\\r\\n    {#each socialIcons as socialIcon}\\r\\n      <a target=\\"_blank\\" href={socialIcon.href} class=\\"social-icon\\">\\r\\n        <svelte:component this={socialIcon.component} />\\r\\n      </a>\\r\\n    {/each}\\r\\n  </div>\\r\\n  <div class=\\"menu-line\\"></div>\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .menu {\\r\\n    position: fixed;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .bottom-right-menu {\\r\\n    bottom: 0;\\r\\n    right: 100px;\\r\\n  }\\r\\n\\r\\n  .menu-line {\\r\\n    width: 2px;\\r\\n    height: 150px;\\r\\n    background: white;\\r\\n  }\\r\\n\\r\\n  .social-icons {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .social-icon {\\r\\n    display: block;\\r\\n    margin: 10px 0;\\r\\n    color: white;\\r\\n    font-size: 24px;\\r\\n    text-decoration: none;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAsBE,oBAAM,CACJ,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CAEA,iCAAmB,CACjB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,KACT,CAEA,yBAAW,CACT,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KACd,CAEA,4BAAc,CACZ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CAEA,2BAAa,CACX,OAAO,CAAE,KAAK,CACd,MAAM,CAAE,IAAI,CAAC,CAAC,CACd,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,IACnB"}'
};
const BottomMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { socialIcons = [
    {
      href: "https://github.com/sophie-mc-dev",
      component: Github
    },
    {
      href: "https://www.linkedin.com/in/sofia-m-costa/",
      component: Linkedin
    }
  ] } = $$props;
  if ($$props.socialIcons === void 0 && $$bindings.socialIcons && socialIcons !== void 0) $$bindings.socialIcons(socialIcons);
  $$result.css.add(css$2);
  return `<div class="menu bottom-right-menu svelte-1de9xfu"><div class="social-icons svelte-1de9xfu">${each(socialIcons, (socialIcon) => {
    return `<a target="_blank"${add_attribute("href", socialIcon.href, 0)} class="social-icon svelte-1de9xfu">${validate_component(socialIcon.component || missing_component, "svelte:component").$$render($$result, {}, {}, {})} </a>`;
  })}</div> <div class="menu-line svelte-1de9xfu"></div> </div>`;
});
const Footer_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Footer, "Footer").$$render(
    $$result,
    {
      class: "absolute bottom-0 left-0 z-20 w-full p-4 shadow"
    },
    {},
    {
      default: () => {
        return `<div class="flex flex-col items-center justify-center"><img src="src/lib/images/logo.png" alt="Logo" class="h-16 mb-3"> ${validate_component(FooterCopyright, "FooterCopyright").$$render(
          $$result,
          {
            href: "/",
            by: "Sofia Merino Costa",
            year: 2024
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}`;
});
const css$1 = {
  code: ".menu.svelte-dlv2g6{position:fixed;display:flex;flex-direction:column;align-items:center}.top-right.svelte-dlv2g6{top:20px;right:100px}",
  map: '{"version":3,"file":"Darkmode.svelte","sources":["Darkmode.svelte"],"sourcesContent":["<script>\\r\\n  import { DarkMode } from \\"flowbite-svelte\\";\\r\\n\\r\\n  let btnClass =\\r\\n    \\"text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2\\";\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<div class=\\"menu top-right\\">\\r\\n    <DarkMode {btnClass} />\\r\\n\\r\\n</div>\\r\\n\\r\\n<style>\\r\\n  .menu {\\r\\n    position: fixed;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .top-right {\\r\\n    top: 20px;\\r\\n    right: 100px;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AAcE,mBAAM,CACJ,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MACf,CAEA,wBAAW,CACT,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,KACT"}'
};
let btnClass = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2";
const Darkmode = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="menu top-right svelte-dlv2g6">${validate_component(DarkMode, "DarkMode").$$render($$result, { btnClass }, {}, {})} </div>`;
});
const css = {
  code: "main.svelte-1mptqx0{overflow-x:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center}.content.svelte-1mptqx0{margin-left:150px;margin-right:150px;padding:20px;display:flex;flex-direction:column;justify-content:center;align-items:center}.content.svelte-1mptqx0>section{width:100%;height:100vh}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  import Home from \\"$lib/sections/Home.svelte\\";\\r\\n  import About from \\"$lib/sections/About.svelte\\";\\r\\n  import Projects from \\"$lib/sections/Projects.svelte\\";\\r\\n  import Skills from \\"$lib/sections/Skills.svelte\\";\\r\\n  import Contact from \\"$lib/sections/Contact.svelte\\";\\r\\n  import TopMenu from \\"$lib/components/TopMenu.svelte\\";\\r\\n  import BottomMenu from \\"$lib/components/BottomMenu.svelte\\";\\r\\n  import Footer from \\"$lib/components/Footer.svelte\\";\\r\\n  import Darkmode from \\"$lib/components/Darkmode.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<main>\\r\\n  <TopMenu />\\r\\n  <BottomMenu />\\r\\n  <Darkmode />\\r\\n\\r\\n  <div class=\\"content\\">\\r\\n    <Home />\\r\\n    <About />\\r\\n    <Skills />\\r\\n    <Projects />\\r\\n    <Contact />\\r\\n    <Footer />\\r\\n  </div>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n  main {\\r\\n    overflow-x: hidden;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .content {\\r\\n    margin-left: 150px;\\r\\n    margin-right: 150px;\\r\\n    padding: 20px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n  }\\r\\n\\r\\n  .content > :global(section) {\\r\\n    width: 100%;\\r\\n    height: 100vh;\\r\\n  }\\r\\n</style>\\r\\n"],"names":[],"mappings":"AA4BE,mBAAK,CACH,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CAEA,uBAAS,CACP,WAAW,CAAE,KAAK,CAClB,YAAY,CAAE,KAAK,CACnB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CAEA,uBAAQ,CAAW,OAAS,CAC1B,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KACV"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-1mptqx0">${validate_component(TopMenu, "TopMenu").$$render($$result, {}, {}, {})} ${validate_component(BottomMenu, "BottomMenu").$$render($$result, {}, {}, {})} ${validate_component(Darkmode, "Darkmode").$$render($$result, {}, {}, {})} <div class="content svelte-1mptqx0">${validate_component(Home$1, "Home").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})} ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} ${validate_component(Footer_1, "Footer").$$render($$result, {}, {}, {})}</div> </main>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8_DlIQ0s.js.map
