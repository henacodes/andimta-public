<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { bibleStore } from "../../store/bibleStore";
  import { uiStore } from "../../store/uiStore";
  import LoadingModal from "../../lib/components/LoadingModal.svelte";
  import { ntBooks, otBooks } from "../../lib/books";
  import { goto } from "$app/navigation";
  import { quizStore } from "../../store/quizStore";
  export let data;
  onMount(async () => {
    console.log("datatatat", data);

    const unsubscribe = page.subscribe((value) => {
      const queryObject = {};

      queryObject.book = new URLSearchParams(value.url.search).get("book");
      queryObject.bookName = new URLSearchParams(value.url.search).get(
        "bookName"
      );
      queryObject.chapter = new URLSearchParams(value.url.search).get(
        "chapter"
      );
      queryObject.version = new URLSearchParams(value.url.search).get(
        "version"
      );
      queryObject.category = new URLSearchParams(value.url.search).get("cat");
      bibleStore.update((curr) => {
        return {
          ...curr,
          bibleVersion: queryObject.version,
          openChapter: {
            category: queryObject.category,
            chapterContent: curr.openChapter.chapterContent,
            book: queryObject.book,
            bookName: queryObject.bookName,
            number: queryObject.chapter,
          },
        };
      });

      bibleStore.subscribe((val) => {
        console.log("stooore", val);
      });
    });
    if (data.verses) {
      uiStore.update((curr) => {
        return {
          ...curr,
          loading: false,
        };
      });
    }
    return unsubscribe;
  });

  const handleVersionChange = (e) => {
    data.verses = [];
    bibleStore.update((curr) => {
      return {
        ...curr,
        openChapter: {
          ...curr.openChapter,
          loading: true,
        },
      };
    });
    const { book, bookName, number, category } = $bibleStore.openChapter;
    goto(
      `/bible?book=${book}&bookName=${bookName}&chapter=${number}&cat=${category}&version=${e.target.value}`
    );
  };

  const handleVerseClick = (verseNum, text) => {
    bibleStore.update((curr) => {
      return {
        ...curr,
        activeVerse: {
          ...curr.activeVerse,
          number: verseNum,
          text: text,
        },
      };
    });
  };
  let fontSize = 15;
  const changeFontSize = (val) => {
    if (val === "inc") {
      if ($uiStore.chapterFontSize <= 35) {
        uiStore.update((curr) => {
          return {
            ...curr,
            chapterFontSize: curr.chapterFontSize + 5,
          };
        });
      }
    } else {
      if ($uiStore.chapterFontSize >= 15) {
        uiStore.update((curr) => {
          return {
            ...curr,
            chapterFontSize: curr.chapterFontSize - 5,
          };
        });
      }
    }
  };
  const navigateChapters = (dir) => {
    const bookId = $bibleStore.openChapter.book;
    const bookName = $bibleStore.openChapter.bookName;
    const chapter =
      dir === "prev"
        ? parseInt($bibleStore.openChapter.number) - 1
        : parseInt($bibleStore.openChapter.number) + 1;
    const category = $bibleStore.openChapter.category;
    const book = [...ntBooks, ...otBooks].filter((x) => x.bookid == bookId)[0];
    if (chapter < 1 || chapter > book.chapters) {
      console.log("first");
    } else {
      bibleStore.update((curr) => {
        return {
          ...curr,
          openChapter: {
            ...curr.openChapter,
            loading: true,
          },
        };
      });
      goto(
        `bible?book=${bookId}&bookName=${bookName}&chapter=${chapter}&cat=${category}&version=${$bibleStore.bibleVersion}`
      );
    }
  };

  let searchQuery = "";

  const handleSearch = async () => {
    if (!searchQuery) {
      return;
    }
    bibleStore.update((curr) => {
      return {
        ...curr,
        searchResults: {
          ...curr.searchResults,
          loading: true,
        },
      };
    });

    try {
      bibleStore.update((curr) => {
        return {
          ...curr,
          searchResults: {
            ...curr.searchResults,
            loading: true,
          },
        };
      });
      const res = await fetch(
        `https://bolls.life/find/${$bibleStore.bibleVersion}/?search=${searchQuery}`
      );
      const result = await res.json();
      bibleStore.update((curr) => {
        return {
          ...curr,
          searchResults: {
            ...curr.searchResults,
            loading: false,
            verses: result,
            message: null,
          },
        };
      });
    } catch (error) {
      bibleStore.update((curr) => {
        return {
          ...curr,
          searchResults: {
            ...curr.searchResults,
            loading: false,
            message: error.message,
          },
        };
      });
    }
  };

  const openQuizModal = () => {
    quizStore.update((curr) => {
      return {
        ...curr,
        modalOpened: true,
      };
    });
  };

  const handleMenu = () => {
    uiStore.update((curr) => {
      return {
        ...curr,
        sidebarOpen: true,
      };
    });
  };

  const handleSettings = () => {
    uiStore.update((curr) => {
      return {
        ...curr,
        settingsOpen: true,
      };
    });
  };
</script>

<div class="bg-base-200 h-full relative pt-5 md:px-7">
  <div
    class=" border-b border-b-white flex justify-between items-center px-7 pb-3"
  >
    <p
      class=" text-white font-semibold text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <span>{$bibleStore.openChapter.bookName}</span>
      <span>{$bibleStore.openChapter.number}</span>
    </p>
    <div class=" search-bar join w-[70%] md:w-[50%] flex justify-center">
      <input
        class="input input-bordered join-item input-xs lg:input-sm w-[100%] md:w-[70%]"
        placeholder="Search the entire bible"
        type="search"
        on:input={(e) => (searchQuery = e.target.value)}
      />
      <button
        on:click={handleSearch}
        class="btn btn-primary join-item rounded-r-full btn-xs lg:btn-sm"
        >search</button
      >
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class=" md:hidden" on:click={handleMenu}>
      <img src="/menu.svg" alt="" srcset="" />
    </div>
    <div class=" hidden items-center md:flex">
      <div class=" font-customize flex items-center">
        <button
          on:click={() => changeFontSize("dec")}
          class="btn mx-1 btn-xs btn-circle btn-outline btn-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M19,13H5V11H19V13Z" />
          </svg>
        </button>
        <button
          on:click={() => changeFontSize("inc")}
          class="btn btn-xs mx-1 btn-circle btn-outline btn-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        </button>
      </div>
      <select
        value={$bibleStore.bibleVersion?.toUpperCase()}
        on:change={handleVersionChange}
        class="select select-primary select-xs lg:select-sm w-full max-w-xs mx-2"
      >
        <option value="ESV"> English Standard Version (ESV) </option>
        <option value="KJV">King James Version</option>
        <option value="NASB">New American Standard Bible (NASB)</option>
        <option value="NLT">New Living Translation (NLT)</option>
        <option value="RSV"> Revised Standard Version (RSV)</option>
      </select>
      <button class="btn btn-primary btn-xs lg:btn-sm" on:click={openQuizModal}
        >Quiz</button
      >
    </div>
  </div>

  {#if data?.verses?.length}
    <div class="menu rounded-box overflow-y-auto max-h-[90vh]">
      <ul>
        {#each data.verses as verse, index}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li
            on:click={() => handleVerseClick(verse.verse, verse.text)}
            id={`verse${verse.verse}`}
          >
            <p
              class="text-[#a6adba] leading-10"
              style={`font-size: ${$uiStore.chapterFontSize}px`}
            >
              {verse.verse}
              {verse.text}
            </p>
          </li>
        {/each}
        <!-- Add more list items if needed -->
      </ul>
    </div>
  {/if}
  {#if $bibleStore.openChapter.loading}
    <LoadingModal />
  {/if}
  {#if data.verses?.length}
    <div
      class=" chapter-controls absolute bottom-[9%] md:bottom-3 left-0 flex items-center w-full justify-center z-10"
    >
      <div
        class="flex items-center bg-base-100 justify-center p-2 rounded-full shadow-xl"
      >
        <button
          on:click={() => navigateChapters("prev")}
          class="btn btn-sm mx-3 btn-circle btn-outline btn-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class=" md:hidden" on:click={handleSettings}>
          <img src="/settings.svg" alt="" srcset="" />
        </div>

        <button
          on:click={() => navigateChapters("next")}
          class="btn btn-sm mx-3 btn-circle btn-outline btn-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  {/if}
</div>
