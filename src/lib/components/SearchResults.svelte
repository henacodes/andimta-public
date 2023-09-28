<script>
  import { bibleStore } from "../../store/bibleStore";
  import { ntBooks, otBooks } from "../books";
  import Skeleton from "./Skeleton.svelte";
  import VerseCard from "./VerseCard.svelte";
  const handleModalClose = () => {
    bibleStore.update((curr) => {
      return {
        ...curr,
        searchResults: {
          verses: [],
          loading: false,
          message: null,
        },
      };
    });
  };

  const getBookProp = (bookId, prop) => {
    console.log("bookId", bookId);
    return [...otBooks, ...ntBooks].filter(
      (x) => parseInt(x.bookid) == parseInt(bookId)
    )[0][prop];
  };
</script>

<div
  class=" flex justify-center items-center bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-50"
>
  <div
    class="  rounded-xl w-[90%] md:w-[50%] h-[60%] md:h-[50%] p-5 overflow-auto bg-base-100 shadow-xl"
  >
    <button
      on:click={handleModalClose}
      class="btn mx-5 btn-sm btn-circle btn-outline flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        /></svg
      >
    </button>
    {#if $bibleStore.searchResults.verses.length}
      <p><span class="text-primary" /></p>
      {#each $bibleStore.searchResults.verses as verse}
        {#if verse.book <= 60}
          <VerseCard
            linkMode={true}
            content={verse.text}
            bookId={verse.book}
            chapter={verse.chapter}
            verse={verse.verse}
            book={getBookProp(verse.book, "name")}
            category={getBookProp(verse.book, "category")}
            version={$bibleStore.bibleVersion}
          />
        {/if}
      {/each}
    {/if}

    {#if $bibleStore.searchResults.loading}
      <Skeleton />
    {/if}
  </div>
</div>
