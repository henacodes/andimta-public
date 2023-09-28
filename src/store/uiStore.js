import { writable } from "svelte/store";

export const uiStore = writable({
  loading: true,
  chapterFontSize: 15,
  sidebarOpen: false,
  settingsOpen: false,
});
