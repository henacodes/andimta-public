import { writable } from "svelte/store";

export const bibleStore = writable({
  bibleVersion: null,
  openChapter: {
    category: null,
    chapterContent: null,
    book: null,
    bookName: null,
    number: null,
  },
  toBeOpenedChapter: {
    category: null,
    bookName: null,
    bookId: null,
    chapters: null,
  },
  activeVerse: {
    detailType: null,
    number: null,
    text: null,
    otherLanguages: [],
    translations: [],
    fathers: [],
  },
  searchResults: {
    verses: [],
    loading: false,
    message: null,
  },
});
