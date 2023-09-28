import { writable } from "svelte/store";

export const quizStore = writable({
  quizzes: [],
  modalOpened: null,
  loading: false,
  message: null,
  scoreModalOpened: false,
  answers: [],
});
