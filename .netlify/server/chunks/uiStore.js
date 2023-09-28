import { w as writable } from "./index2.js";
const uiStore = writable({
  loading: true,
  chapterFontSize: 15,
  sidebarOpen: false,
  settingsOpen: false
});
export {
  uiStore as u
};
