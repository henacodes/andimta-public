import { bibleStore } from "../../store/bibleStore";
import { uiStore } from "../../store/uiStore";
import { BIBLE_API_URL } from "$env/static/private";
import { redirect } from "@sveltejs/kit";
// BIBLE_API_URL = https://bolls.life/
export async function load({ url }) {
  console.log("backend");
  const book = url.searchParams.get("book");
  const chapter = url.searchParams.get("chapter");
  const version = url.searchParams.get("version");

  try {
    const res = await fetch(
      `${BIBLE_API_URL}/get-text/${version}/${book}/${chapter}`
    );
    const verses = await res.json();
    console.log("fetch successful");
    console.log("verses arrived");
    if (verses) {
      return {
        verses: verses,
      };
    } else {
      console.log("verses unavailable");
      redirect(307, "/");
    }
  } catch (error) {
    console.log(error);
    redirect(307, "/");
  }
}
