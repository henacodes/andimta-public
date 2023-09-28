import { u as uiStore } from "../../../chunks/uiStore.js";
import { r as redirect } from "../../../chunks/index.js";
const BIBLE_API_URL = "https://bolls.life";
async function load({ url }) {
  console.log("backend");
  const book = url.searchParams.get("book");
  const chapter = url.searchParams.get("chapter");
  const version = url.searchParams.get("version");
  uiStore.update((curr) => {
    return {
      ...curr,
      loading: true
    };
  });
  try {
    const res = await fetch(
      `${BIBLE_API_URL}/get-text/${version}/${book}/${chapter}`
    );
    const verses = await res.json();
    console.log("fetch successful");
    console.log("verses arrived");
    if (verses) {
      return {
        verses
      };
    } else {
      console.log("verses unavailable");
      redirect(307, "/");
    }
  } catch (error) {
    redirect(307, "/");
  }
}
export {
  load
};
