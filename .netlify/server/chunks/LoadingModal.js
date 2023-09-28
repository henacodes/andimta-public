import { w as writable } from "./index2.js";
import { c as create_ssr_component, v as validate_component } from "./ssr.js";
const bibleStore = writable({
  bibleVersion: null,
  openChapter: {
    category: null,
    chapterContent: null,
    book: null,
    bookName: null,
    number: null
  },
  toBeOpenedChapter: {
    category: null,
    bookName: null,
    bookId: null,
    chapters: null
  },
  activeVerse: {
    detailType: null,
    number: null,
    text: null,
    otherLanguages: [],
    translations: [],
    fathers: []
  },
  searchResults: {
    verses: [],
    loading: false,
    message: null
  }
});
const Backdrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { click } = $$props;
  if ($$props.click === void 0 && $$bindings.click && click !== void 0)
    $$bindings.click(click);
  return `  <div class="bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-50"></div>`;
});
const LoadingModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Backdrop, "Backdrop").$$render($$result, {}, {}, {})} <div class="w-[100vw] h-[100vh] fixed top-0 left-0 flex justify-center z-50" data-svelte-h="svelte-v7lvud"><span class="loading loading-infinity loading-lg text-primary"></span></div>`;
});
export {
  LoadingModal as L,
  bibleStore as b
};
