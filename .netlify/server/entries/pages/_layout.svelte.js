import { s as subscribe, n as null_to_empty } from "../../chunks/utils.js";
import { c as create_ssr_component, e as each, a as add_attribute, b as escape, v as validate_component } from "../../chunks/ssr.js";
import { b as bibleStore, L as LoadingModal } from "../../chunks/LoadingModal.js";
import { u as uiStore } from "../../chunks/uiStore.js";
import { w as writable } from "../../chunks/index2.js";
const app = "";
const otBooks = [
  {
    bookid: 1,
    category: "OT",
    name: "Genesis",
    chapters: 50
  },
  {
    bookid: 2,
    category: "OT",
    name: "Exodus",
    chapters: 40
  },
  {
    bookid: 3,
    category: "OT",
    name: "Leviticus",
    chapters: 27
  },
  {
    bookid: 4,
    category: "OT",
    name: "Numbers",
    chapters: 36
  },
  {
    bookid: 5,
    category: "OT",
    name: "Deuteronomy",
    chapters: 34
  },
  {
    bookid: 6,
    category: "OT",
    name: "Joshua",
    chapters: 24
  },
  {
    bookid: 7,
    category: "OT",
    name: "Judges",
    chapters: 21
  },
  {
    bookid: 8,
    category: "OT",
    name: "Ruth",
    chapters: 4
  },
  {
    bookid: 9,
    category: "OT",
    name: "1 Samuel",
    chapters: 31
  },
  {
    bookid: 10,
    category: "OT",
    name: "2 Samuel",
    chapters: 24
  },
  {
    bookid: 11,
    category: "OT",
    name: "1 Kings",
    chapters: 22
  },
  {
    bookid: 12,
    category: "OT",
    name: "2 Kings",
    chapters: 25
  },
  {
    bookid: 13,
    category: "OT",
    name: "1 Chronicles",
    chapters: 29
  },
  {
    bookid: 14,
    category: "OT",
    name: "2 Chronicles",
    chapters: 36
  },
  {
    bookid: 15,
    category: "OT",
    name: "Ezra",
    chapters: 10
  },
  {
    bookid: 16,
    category: "OT",
    name: "Nehemiah",
    chapters: 13
  },
  {
    bookid: 17,
    category: "OT",
    name: "Esther",
    chapters: 10
  },
  {
    bookid: 18,
    category: "OT",
    name: "Job",
    chapters: 42
  },
  {
    bookid: 19,
    category: "OT",
    name: "Psalm",
    chapters: 150
  },
  {
    bookid: 20,
    category: "OT",
    name: "Proverbs",
    chapters: 31
  },
  {
    bookid: 21,
    category: "OT",
    name: "Ecclesiastes",
    chapters: 12
  },
  {
    bookid: 22,
    category: "OT",
    name: "Song of Solomon",
    chapters: 8
  },
  {
    bookid: 23,
    category: "OT",
    name: "Isaiah",
    chapters: 66
  },
  {
    bookid: 24,
    category: "OT",
    name: "Jeremiah",
    chapters: 52
  },
  {
    bookid: 25,
    category: "OT",
    name: "Lamentations",
    chapters: 5
  },
  {
    bookid: 26,
    category: "OT",
    name: "Ezekiel",
    chapters: 48
  },
  {
    bookid: 27,
    category: "OT",
    name: "Daniel",
    chapters: 12
  },
  {
    bookid: 28,
    category: "OT",
    name: "Hosea",
    chapters: 14
  },
  {
    bookid: 29,
    category: "OT",
    name: "Joel",
    chapters: 3
  },
  {
    bookid: 30,
    category: "OT",
    name: "Amos",
    chapters: 9
  },
  {
    bookid: 31,
    category: "OT",
    name: "Obadiah",
    chapters: 1
  },
  {
    bookid: 32,
    category: "OT",
    name: "Jonah",
    chapters: 4
  },
  {
    bookid: 33,
    category: "OT",
    name: "Micah",
    chapters: 7
  },
  {
    bookid: 34,
    category: "OT",
    name: "Nahum",
    chapters: 3
  },
  {
    bookid: 35,
    category: "OT",
    name: "Habakkuk",
    chapters: 3
  },
  {
    bookid: 36,
    category: "OT",
    name: "Zephaniah",
    chapters: 3
  },
  {
    bookid: 37,
    category: "OT",
    name: "Haggai",
    chapters: 2
  },
  {
    bookid: 38,
    category: "OT",
    name: "Zechariah",
    chapters: 14
  },
  {
    bookid: 39,
    category: "OT",
    name: "Malachi",
    chapters: 4
  }
];
const ntBooks = [
  {
    bookid: 40,
    category: "NT",
    name: "Matthew",
    chapters: 28
  },
  {
    bookid: 41,
    category: "NT",
    name: "Mark",
    chapters: 16
  },
  {
    bookid: 42,
    category: "NT",
    name: "Luke",
    chapters: 24
  },
  {
    bookid: 43,
    category: "NT",
    name: "John",
    chapters: 21
  },
  {
    bookid: 44,
    category: "NT",
    name: "Acts",
    chapters: 28
  },
  {
    bookid: 45,
    category: "NT",
    name: "Romans",
    chapters: 16
  },
  {
    bookid: 46,
    category: "NT",
    name: "1 Corinthians",
    chapters: 16
  },
  {
    bookid: 47,
    category: "NT",
    name: "2 Corinthians",
    chapters: 13
  },
  {
    bookid: 48,
    category: "NT",
    name: "Galatians",
    chapters: 6
  },
  {
    bookid: 49,
    category: "NT",
    name: "Ephesians",
    chapters: 6
  },
  {
    bookid: 50,
    category: "NT",
    name: "Philippians",
    chapters: 4
  },
  {
    bookid: 51,
    category: "NT",
    name: "Colossians",
    chapters: 4
  },
  {
    bookid: 52,
    category: "NT",
    name: "1 Thessalonians",
    chapters: 5
  },
  {
    bookid: 53,
    category: "NT",
    name: "2 Thessalonians",
    chapters: 3
  },
  {
    bookid: 54,
    category: "NT",
    name: "1 Timothy",
    chapters: 6
  },
  {
    bookid: 55,
    category: "NT",
    name: "2 Timothy",
    chapters: 4
  },
  {
    bookid: 56,
    category: "NT",
    name: "Titus",
    chapters: 3
  },
  {
    bookid: 57,
    category: "NT",
    name: "Philemon",
    chapters: 1
  },
  {
    bookid: 58,
    category: "NT",
    name: "Hebrews",
    chapters: 13
  },
  {
    bookid: 59,
    category: "NT",
    name: "James",
    chapters: 5
  },
  {
    bookid: 60,
    category: "NT",
    name: "1 Peter",
    chapters: 5
  },
  {
    bookid: 61,
    category: "NT",
    name: "2 Peter",
    chapters: 3
  },
  {
    bookid: 62,
    category: "NT",
    name: "1 John",
    chapters: 5
  },
  {
    bookid: 63,
    category: "NT",
    name: "2 John",
    chapters: 1
  },
  {
    bookid: 64,
    category: "NT",
    name: "3 John",
    chapters: 1
  },
  {
    bookid: 65,
    category: "NT",
    name: "Jude",
    chapters: 1
  },
  {
    bookid: 66,
    category: "NT",
    name: "Revelation",
    chapters: 22
  }
];
const BooksMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bibleStore, $$unsubscribe_bibleStore;
  $$unsubscribe_bibleStore = subscribe(bibleStore, (value) => $bibleStore = value);
  const booksListClass = (bookId, openChapterBookId, toBeOpenedBookId) => {
    if (openChapterBookId == bookId) {
      return "bg-[#353e48] mt-2 text-white font-bolder";
    } else if (toBeOpenedBookId == bookId) {
      return "bg-[#353e48] mt-2";
    } else {
      return "mt-2 text-gray-600";
    }
  };
  $$unsubscribe_bibleStore();
  return `<div><div class="mt-1 collapse collapse-arrow bg-base-200"><input type="radio" name="my-accordion-2" checked="checked"> <div class="collapse-title text-sm lg:text-lg font-medium" data-svelte-h="svelte-5ajpoa">Old Testament</div> <div class="collapse-content"><div class="overflow-y-auto max-h-[70vh]"><ul class="menu bg-base-200 rounded-box">${each(otBooks, (book) => {
    return `  <li><p${add_attribute("class", booksListClass(book.bookid, $bibleStore.openChapter.book, $bibleStore.toBeOpenedChapter.bookId), 0)}>${escape(book.name)}</p> </li>`;
  })}</ul></div></div></div> <div class="mt-1 collapse collapse-arrow bg-base-200"><input type="radio" name="my-accordion-2"> <div class="collapse-title font-medium text-sm lg:text-lg" data-svelte-h="svelte-z56vpx">New Testament</div> <div class="collapse-content"><div class="overflow-y-auto max-h-[70vh]"><ul class="menu bg-base-200 rounded-box">${each(ntBooks, (book) => {
    return `  <li><p${add_attribute("class", booksListClass(book.bookid, $bibleStore.openChapter.book, $bibleStore.toBeOpenedChapter.bookId), 0)}>${escape(book.name)}</p> </li>`;
  })}</ul></div></div></div></div>`;
});
const Sidebar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".sidebar-right.svelte-1bo4y6p::-webkit-scrollbar{width:0px}.sidebar-right.svelte-1bo4y6p::-webkit-scrollbar-track{width:0px}.sidebar-right.svelte-1bo4y6p::-webkit-scrollbar-thumb{background-color:transparent;width:0px}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bibleStore, $$unsubscribe_bibleStore;
  let $uiStore, $$unsubscribe_uiStore;
  $$unsubscribe_bibleStore = subscribe(bibleStore, (value) => $bibleStore = value);
  $$unsubscribe_uiStore = subscribe(uiStore, (value) => $uiStore = value);
  const chaptersListClass = (chap) => {
    if ($bibleStore.openChapter.number === chap) {
      if ($bibleStore.openChapter.bookName === $bibleStore.toBeOpenedChapter.bookName) {
        return "bg-[#353e48]  m-2 w-full rounded-lg";
      } else {
        return "m-2 w-full rounded-lg";
      }
    }
  };
  $$result.css.add(css);
  $$unsubscribe_bibleStore();
  $$unsubscribe_uiStore();
  return `<div class="${escape(null_to_empty(`h-full w-full p-4 md:flex md:flex-[0.2] ${$uiStore.sidebarOpen ? "fixed flex" : "hidden"}  top-0 left-0 md:relative bg-base-100 z-20 `), true) + " svelte-1bo4y6p"}"><div class="sidebar-left w-full"><div class="logo-div mt-3 flex justify-between"><p class="text-primary font-extrabold text-3xl" data-svelte-h="svelte-bresd">Andimta <span class="text-blue-black ml-[-5px]">.</span></p> <button class="btn mx-5 btn-sm btn-circle btn-outline flex items-center" data-svelte-h="svelte-ou5c72"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> ${validate_component(BooksMenu, "BibleMenu").$$render($$result, {}, {}, {})}</div> ${$bibleStore.toBeOpenedChapter.chapters ? `<div class="sidebar-right menu bg-base-200 mt-11 ml-3 rounded-box overflow-y-auto flex items-center svelte-1bo4y6p"><ul class="w-full flex flex-col items-center">${each($bibleStore.toBeOpenedChapter.chapters, (chapter) => {
    return `  <li class="${escape(null_to_empty(chaptersListClass(`${chapter}`)), true) + " svelte-1bo4y6p"}"><p>${escape(chapter)}</p> </li>`;
  })}</ul></div>` : ``} </div>`;
});
const VerseDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bibleStore, $$unsubscribe_bibleStore;
  $$unsubscribe_bibleStore = subscribe(bibleStore, (value) => $bibleStore = value);
  $$unsubscribe_bibleStore();
  return `  <div class="flex justify-center items-center bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-40"><div class="rounded-xl p-5 card bg-base-100 shadow-xl w-[90%] md:w-[50%] h-[60%] md:h-[50%]"><button class="btn m-5 btn-sm btn-circle btn-outline flex items-center" data-svelte-h="svelte-5o30av"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> <div class="bg-blue-grey p-4 rounded-2xl"><p class="text-lg font-bold text-slate-200">${escape($bibleStore.openChapter.bookName)} ${escape($bibleStore.openChapter.number)}:${escape($bibleStore.activeVerse.number)}</p> <p>${escape($bibleStore.activeVerse.text)}</p></div> <div class="flex items-center justify-between mt-6"><ul class="menu menu-horizontal bg-base-200 rounded-box"> <li data-svelte-h="svelte-66l225"><p>Greek/Hebrew</p></li>  <li data-svelte-h="svelte-1vm4jcq"><p>Versions</p></li>  ${$bibleStore.openChapter.category === "NT" ? `<li data-svelte-h="svelte-13efdcw"><p>Church Fathers</p></li>` : ``}</ul></div></div></div>`;
});
const quizStore = writable({
  quizzes: [],
  modalOpened: null,
  loading: false,
  message: null,
  scoreModalOpened: false,
  answers: []
});
const Skeleton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container animate-pulse p-5" data-svelte-h="svelte-axuxyd"><div class=""> <h1 class="w-[90%] h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1> <p class="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p> <p class="w-[80%] h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p> <p class="w-[90%] h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p> <p class="w-[80%] h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p> <p class="w-[80%] h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p> <p class="w-[90%] h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p></div></div>`;
});
const VerseCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { book } = $$props;
  let { bookId } = $$props;
  let { verse } = $$props;
  let { chapter } = $$props;
  let { version } = $$props;
  let { content } = $$props;
  let { category } = $$props;
  let { linkMode = null } = $$props;
  if ($$props.book === void 0 && $$bindings.book && book !== void 0)
    $$bindings.book(book);
  if ($$props.bookId === void 0 && $$bindings.bookId && bookId !== void 0)
    $$bindings.bookId(bookId);
  if ($$props.verse === void 0 && $$bindings.verse && verse !== void 0)
    $$bindings.verse(verse);
  if ($$props.chapter === void 0 && $$bindings.chapter && chapter !== void 0)
    $$bindings.chapter(chapter);
  if ($$props.version === void 0 && $$bindings.version && version !== void 0)
    $$bindings.version(version);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.linkMode === void 0 && $$bindings.linkMode && linkMode !== void 0)
    $$bindings.linkMode(linkMode);
  return `<div class="bg-blue-grey p-4 rounded-2xl shadow-xl my-5">${linkMode ? `  <p class="underline my-3 cursor-pointer text-lg font-bold text-slate-200">${escape(book)} ${escape(chapter)}:${escape(verse)}</p>` : `<p class="text-lg font-bold text-slate-200">${escape(book)} ${escape(chapter)}:${escape(verse)}</p>`} <p><!-- HTML_TAG_START -->${content}<!-- HTML_TAG_END --></p> <div class="badge badge-accent flex items-center justify-center mt-4"><span>${escape(version)}</span></div></div>`;
});
const OtherTranslations = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bibleStore, $$unsubscribe_bibleStore;
  $$unsubscribe_bibleStore = subscribe(bibleStore, (value) => $bibleStore = value);
  $$unsubscribe_bibleStore();
  return `<div class="flex justify-center items-center bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-50"><div class="rounded-xl w-[90%] md:w-[50%] h-[60%] md:h-[50%] p-5 overflow-auto bg-base-100 shadow-xl"><button class="btn mx-5 btn-sm btn-circle btn-outline flex items-center" data-svelte-h="svelte-86j74b"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> ${$bibleStore.activeVerse.detailType === "version" ? `${$bibleStore.activeVerse.translations.length ? `${each($bibleStore.activeVerse.translations, (t) => {
    return `${validate_component(VerseCard, "VerseCard").$$render(
      $$result,
      {
        book: $bibleStore.openChapter.bookName,
        verse: $bibleStore.activeVerse.number,
        chapter: $bibleStore.openChapter.number,
        version: t.id,
        content: t.text
      },
      {},
      {}
    )}`;
  })}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}` : ``} ${$bibleStore.activeVerse.detailType === "lang" ? `${$bibleStore.activeVerse.otherLanguages.length ? `${each($bibleStore.activeVerse.otherLanguages, (t) => {
    return `${validate_component(VerseCard, "VerseCard").$$render(
      $$result,
      {
        book: $bibleStore.openChapter.bookName,
        verse: $bibleStore.activeVerse.number,
        chapter: $bibleStore.openChapter.number,
        version: t.id,
        content: t.text
      },
      {},
      {}
    )}`;
  })}` : `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}`}` : ``}</div></div>`;
});
const ChurchFathers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bibleStore, $$unsubscribe_bibleStore;
  $$unsubscribe_bibleStore = subscribe(bibleStore, (value) => $bibleStore = value);
  $$unsubscribe_bibleStore();
  return `<div class="flex justify-center items-center bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-50"><div class="rounded-xl w-[90%] md:w-[50%] h-[60%] md:h-[50%] p-5 overflow-auto bg-base-100 shadow-xl"><button class="btn mx-5 btn-sm btn-circle btn-outline flex items-center" data-svelte-h="svelte-86j74b"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> <div class="badge badge-primary my-4" data-svelte-h="svelte-earan4"><p class="">AI Generated</p></div> ${each($bibleStore.activeVerse.fathers, (father) => {
    return `${validate_component(VerseCard, "VerseCard").$$render(
      $$result,
      {
        book: father.reference,
        verse: "",
        chapter: "",
        version: father.name || father.author,
        content: father.commentary || father.text || father.quote
      },
      {},
      {}
    )}`;
  })} ${!$bibleStore.activeVerse.fathers.length ? `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}` : ``}</div></div>`;
});
const SearchResults = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bibleStore, $$unsubscribe_bibleStore;
  $$unsubscribe_bibleStore = subscribe(bibleStore, (value) => $bibleStore = value);
  const getBookProp = (bookId, prop) => {
    console.log("bookId", bookId);
    return [...otBooks, ...ntBooks].filter((x) => parseInt(x.bookid) == parseInt(bookId))[0][prop];
  };
  $$unsubscribe_bibleStore();
  return `<div class="flex justify-center items-center bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-50"><div class="rounded-xl w-[90%] md:w-[50%] h-[60%] md:h-[50%] p-5 overflow-auto bg-base-100 shadow-xl"><button class="btn mx-5 btn-sm btn-circle btn-outline flex items-center" data-svelte-h="svelte-86j74b"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> ${$bibleStore.searchResults.verses.length ? `<p data-svelte-h="svelte-3hr6wc"><span class="text-primary"></span></p> ${each($bibleStore.searchResults.verses, (verse) => {
    return `${verse.book <= 60 ? `${validate_component(VerseCard, "VerseCard").$$render(
      $$result,
      {
        linkMode: true,
        content: verse.text,
        bookId: verse.book,
        chapter: verse.chapter,
        verse: verse.verse,
        book: getBookProp(verse.book, "name"),
        category: getBookProp(verse.book, "category"),
        version: $bibleStore.bibleVersion
      },
      {},
      {}
    )}` : ``}`;
  })}` : ``} ${$bibleStore.searchResults.loading ? `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}` : ``}</div></div>`;
});
const QuizModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $quizStore, $$unsubscribe_quizStore;
  let $$unsubscribe_bibleStore;
  $$unsubscribe_quizStore = subscribe(quizStore, (value) => $quizStore = value);
  $$unsubscribe_bibleStore = subscribe(bibleStore, (value) => value);
  let selectedOptions = ["", "", "", "", ""];
  $$unsubscribe_quizStore();
  $$unsubscribe_bibleStore();
  return `<div class="flex justify-center items-center bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-50"><div class="rounded-xl w-[90%] md:w-[50%] h-[60%] md:h-[50%] p-5 overflow-auto bg-base-100 shadow-xl"><button class="btn mx-5 btn-sm btn-circle btn-outline flex items-center" data-svelte-h="svelte-86j74b"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> ${$quizStore.message ? `<p>${escape($quizStore.message)}</p>` : ``} <div class="quizzes">${$quizStore.quizzes.length ? `${each($quizStore.quizzes, (quiz, i) => {
    return `<div class="bg-base-300 my-3 p-3 rounded-lg"><p class="my-3 font-bold">${escape(quiz.question)}</p> ${each(quiz.options, (choice) => {
      return `<div class="flex items-center mt-3"><input type="radio"${add_attribute("name", `radio-${i}`, 0)} class="radio radio-primary radio-sm"${add_attribute("value", choice, 0)}> <p class="mx-4">${escape(choice)}</p> </div>`;
    })} </div>`;
  })} ${$quizStore.message ? `<p class="my-3 text-warning">${escape($quizStore.message)}</p>` : ``} <button${add_attribute(
    "class",
    selectedOptions.length == 5 ? "btn btn-primary " : "btn btn-primary btn-disabled",
    0
  )}>Finish</button>` : ``}</div> ${$quizStore.loading ? `${validate_component(Skeleton, "Skeleton").$$render($$result, {}, {}, {})}` : ``}</div></div>`;
});
const ScoreBoard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $quizStore, $$unsubscribe_quizStore;
  $$unsubscribe_quizStore = subscribe(quizStore, (value) => $quizStore = value);
  let score = 0;
  {
    console.log(score);
  }
  $$unsubscribe_quizStore();
  return `<div class="flex justify-center items-center bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-50"><div class="rounded-xl w-[90%] md:w-[50%] h-[60%] md:h-[50%] p-5 overflow-auto bg-base-100 shadow-xl"><button class="btn mx-5 btn-sm btn-circle btn-outline flex items-center" data-svelte-h="svelte-86j74b"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> ${each($quizStore.quizzes, (quiz, i) => {
    return `<div${add_attribute(
      "class",
      "bg-base-300 my-3 p-3 rounded-lg border-2 " + ($quizStore.quizzes[i].answer === $quizStore.answers[i] ? " border-accent " : "border-warning"),
      0
    )}><p class="my-3 font-bold">${escape(quiz.question)}</p> ${each(quiz.options, (choice) => {
      return `<div${add_attribute("class", " flex items-center mt-3  ", 0)}><input type="radio"${add_attribute("name", `radio-${i}`, 0)}${add_attribute(
        "class",
        $quizStore.quizzes[i].answer === $quizStore.answers[i] ? "radio radio-accent radio-sm" : "radio radio-warning radio-sm",
        0
      )} ${$quizStore.answers[i] == choice ? "checked" : ""} disabled> <p class="mx-4">${escape(choice)}</p> </div>`;
    })} <p class="my-2">Answer: <span class="text-accent font-bold">${escape($quizStore.quizzes[i].answer)}</span></p> </div>`;
  })} <div class="flex flex-col items-center justify-center"><div${add_attribute("class", "radial-progress text-warning", 0)}${add_attribute("style", `--value:${score / 5 * 100}`, 0)}>${escape(score / 5 * 100)}%</div></div> <div class="flex justify-center m-4"><button class="btn btn-primary btn-md" data-svelte-h="svelte-1b3qotb">Done</button></div></div></div>`;
});
const SettingsModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bibleStore, $$unsubscribe_bibleStore;
  let $$unsubscribe_uiStore;
  $$unsubscribe_bibleStore = subscribe(bibleStore, (value) => $bibleStore = value);
  $$unsubscribe_uiStore = subscribe(uiStore, (value) => value);
  $$unsubscribe_bibleStore();
  $$unsubscribe_uiStore();
  return `<div class="flex justify-center items-center bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-20"><div class="rounded-xl w-[90%] md:w-[50%] md:h-[50%] p-5 overflow-auto bg-base-100 shadow-xl"><button class="btn mx-5 btn-sm btn-circle btn-outline flex items-center" data-svelte-h="svelte-86j74b"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button> <div class="flex flex-col items-center"><div class="font-customize flex items-center my-5"><button class="btn mx-1 btn-sm btn-circle btn-outline btn-primary" data-svelte-h="svelte-1vuy93o"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"><path d="M19,13H5V11H19V13Z"></path></svg></button> <button class="btn btn-sm mx-1 btn-circle btn-outline btn-primary" data-svelte-h="svelte-s8cz27"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"></path></svg></button></div> <select${add_attribute("value", $bibleStore.bibleVersion?.toUpperCase(), 0)} class="select select-primary select-sm lg:select-sm w-full max-w-xs mx-2 my-2"><option value="ESV" data-svelte-h="svelte-18f74xi">English Standard Version (ESV) </option><option value="KJV" data-svelte-h="svelte-wnu93i">King James Version</option><option value="NASB" data-svelte-h="svelte-1udzx7k">New American Standard Bible (NASB)</option><option value="NLT" data-svelte-h="svelte-eikeiv">New Living Translation (NLT)</option><option value="RSV" data-svelte-h="svelte-1ivx61c">Revised Standard Version (RSV)</option></select> <button class="btn btn-primary btn-sm lg:btn-sm my-5" data-svelte-h="svelte-1w1jiw0">Quiz</button></div></div></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $uiStore, $$unsubscribe_uiStore;
  let $bibleStore, $$unsubscribe_bibleStore;
  let $quizStore, $$unsubscribe_quizStore;
  $$unsubscribe_uiStore = subscribe(uiStore, (value) => $uiStore = value);
  $$unsubscribe_bibleStore = subscribe(bibleStore, (value) => $bibleStore = value);
  $$unsubscribe_quizStore = subscribe(quizStore, (value) => $quizStore = value);
  $$unsubscribe_uiStore();
  $$unsubscribe_bibleStore();
  $$unsubscribe_quizStore();
  return `<div class="flex h-[100vh]" data-theme="dark">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})} <div class="h-full md:flex-[0.8]">${slots.default ? slots.default({}) : ``}</div> ${$uiStore.loading ? `${validate_component(LoadingModal, "LoadingModal").$$render($$result, {}, {}, {})}` : ``} ${$bibleStore.activeVerse.number ? `${validate_component(VerseDetails, "VerseDetails").$$render($$result, {}, {}, {})}` : ``} ${$bibleStore.activeVerse.detailType === "version" || $bibleStore.activeVerse.detailType === "lang" ? `${validate_component(OtherTranslations, "OtherTranslations").$$render($$result, {}, {}, {})}` : ``} ${$bibleStore.activeVerse.detailType === "fathers" ? `${validate_component(ChurchFathers, "ChurchFathers").$$render($$result, {}, {}, {})}` : ``} ${$bibleStore.searchResults.loading || $bibleStore.searchResults.verses.length || $bibleStore.searchResults.message ? `${validate_component(SearchResults, "SearchResults").$$render($$result, {}, {}, {})}` : ``} ${$quizStore.modalOpened ? `${validate_component(QuizModal, "QuizModal").$$render($$result, {}, {}, {})}` : ``} ${$quizStore.scoreModalOpened ? `${validate_component(ScoreBoard, "ScoreBoard").$$render($$result, {}, {}, {})}` : ``} ${$uiStore.settingsOpen ? `${validate_component(SettingsModal, "SettingsModal").$$render($$result, {}, {}, {})}` : ``}</div>`;
});
export {
  Layout as default
};
