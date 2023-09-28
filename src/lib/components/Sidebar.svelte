<script>
  import { goto } from "$app/navigation";

  import BibleMenu from "./BooksMenu.svelte";
  import { bibleStore } from "../../store/bibleStore";
  import { uiStore } from "../../store/uiStore";
  let activeIndex = null;

  const handleOpenChapter = (chapter) => {
    bibleStore.update((curr) => {
      return {
        ...curr,
        openChapter: {
          ...curr.openChapter,
          loading: true,
        },
      };
    });

    uiStore.update((curr) => {
      return {
        ...curr,
        sidebarOpen: false,
      };
    });
    const openingBook = $bibleStore.toBeOpenedChapter.bookId;
    const openingBookName = $bibleStore.toBeOpenedChapter.bookName;
    const openingBookCategory = $bibleStore.toBeOpenedChapter.category;
    console.log("opening in", openingBookCategory);
    goto(
      `bible?book=${openingBook}&bookName=${openingBookName}&chapter=${chapter}&cat=${openingBookCategory}&version=${$bibleStore.bibleVersion}`
    );
  };

  const chaptersListClass = (chap) => {
    if ($bibleStore.openChapter.number === chap) {
      if (
        $bibleStore.openChapter.bookName ===
        $bibleStore.toBeOpenedChapter.bookName
      ) {
        return "bg-[#353e48]  m-2 w-full rounded-lg";
      } else {
        return "m-2 w-full rounded-lg";
      }
    }
  };

  const closeSidebar = () => {
    uiStore.update((curr) => {
      return {
        ...curr,
        sidebarOpen: false,
      };
    });
  };
</script>

<div
  class={`h-full w-full p-4 md:flex md:flex-[0.2] ${
    $uiStore.sidebarOpen ? "fixed flex" : "hidden"
  }  top-0 left-0 md:relative bg-base-100 z-20 `}
>
  <div class="sidebar-left w-full">
    <div class="logo-div mt-3 flex justify-between">
      <p class="text-primary font-extrabold text-3xl">
        Andimta <span class="text-blue-black ml-[-5px]">.</span>
      </p>
      <button
        on:click={closeSidebar}
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
    </div>
    <BibleMenu />
  </div>
  {#if $bibleStore.toBeOpenedChapter.chapters}
    <div
      class="sidebar-right menu bg-base-200 mt-11 ml-3 rounded-box overflow-y-auto flex items-center"
    >
      <ul class=" w-full flex flex-col items-center">
        {#each $bibleStore.toBeOpenedChapter.chapters as chapter}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li
            class={chaptersListClass(`${chapter}`)}
            on:click={() => handleOpenChapter(chapter)}
          >
            <p>
              {chapter}
            </p>
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</div>

<style>
  .sidebar-right::-webkit-scrollbar {
    width: 0px;
  }
  .sidebar-right::-webkit-scrollbar-track {
    width: 0px;
  }

  .sidebar-right::-webkit-scrollbar-thumb {
    background-color: transparent;
    width: 0px;
  }
</style>
