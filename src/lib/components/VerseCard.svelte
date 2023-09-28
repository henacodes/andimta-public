<script>
  export let book;
  export let bookId;
  export let verse;
  export let chapter;
  export let version;
  export let content;
  export let category;
  export let linkMode = null;

  import { bibleStore } from "../../store/bibleStore";
  import { uiStore } from "../../store/uiStore";
  import { goto } from "$app/navigation";

  const handleSearchVerseClick = () => {
    bibleStore.update((curr) => {
      return {
        ...curr,
        openChapter: {
          ...curr.openChapter,
          loading: true,
        },
        searchResults: {
          verses: [],
          loading: false,
          message: null,
        },
      };
    });
    goto(`/bible?book=${bookId}&bookName=${book}&chapter=${chapter}&cat=${category}&version=${version}#verse${verse}
  `);
  };
</script>

<div class=" bg-blue-grey p-4 rounded-2xl shadow-xl my-5">
  {#if linkMode}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <p
      on:click={handleSearchVerseClick}
      class=" underline my-3 cursor-pointer text-lg font-bold text-slate-200"
    >
      {book}
      {chapter}:{verse}
    </p>
  {:else}
    <p class=" text-lg font-bold text-slate-200">
      {book}
      {chapter}:{verse}
    </p>
  {/if}
  <p>
    {@html content}
  </p>
  <div class="badge badge-accent flex items-center justify-center mt-4">
    <span> {version} </span>
  </div>
</div>
