<script>
  import { onMount } from "svelte";
  import { bibleStore } from "../../store/bibleStore";
  import LoadingModal from "./LoadingModal.svelte";
  import Skeleton from "./Skeleton.svelte";
  import VerseCard from "./VerseCard.svelte";

  const translationsIds = [
    { id: "ESV", name: " English Standard Version" },
    { id: "KJV", name: "King James Version" },
    { id: "NASB", name: "New American Standard Bible " },
    { id: "NLT", name: "NEW Living Translation" },
    { id: "RSV", name: "Revised Standard Version" },
  ];
  const otLangIds = [
    { id: "LXX", name: "Septuagint" },
    { id: "WLCa", name: "Westminster Leningrad Codex" },
  ];

  const ntLangIds = [{ id: "NTGT", name: "Greek NT: Tischendorf 8th Ed" }];
  onMount(async () => {
    const book = $bibleStore.openChapter.book;
    const chapter = $bibleStore.openChapter.number;
    const verse = $bibleStore.activeVerse.number;
    if ($bibleStore.activeVerse.detailType === "version") {
      if (!$bibleStore.activeVerse.translations.length) {
        try {
          translationsIds.map(async (ver) => {
            const res = await fetch(
              `https://bolls.life/get-verse/${ver.id}/${book}/${chapter}/${verse}/`
            );

            const data = await res.json();
            bibleStore.update((curr) => {
              return {
                ...curr,
                activeVerse: {
                  ...curr.activeVerse,
                  translations: [
                    ...curr.activeVerse.translations,
                    { ...ver, text: data.text },
                  ],
                },
              };
            });
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
    if ($bibleStore.activeVerse.detailType === "lang") {
      if (!$bibleStore.activeVerse.otherLanguages.length) {
        let data;
        if ($bibleStore.openChapter.category === "OT") {
          try {
            otLangIds.map(async (ver) => {
              const res = await fetch(
                `https://bolls.life/get-verse/${ver.id}/${book}/${chapter}/${verse}/`
              );

              data = await res.json();
              bibleStore.update((curr) => {
                return {
                  ...curr,
                  activeVerse: {
                    ...curr.activeVerse,
                    otherLanguages: [
                      ...curr.activeVerse.otherLanguages,
                      { ...ver, text: data.text },
                    ],
                  },
                };
              });
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          try {
            ntLangIds.map(async (ver) => {
              const res = await fetch(
                `https://bolls.life/get-verse/${ver.id}/${book}/${chapter}/${verse}/`
              );

              data = await res.json();
              bibleStore.update((curr) => {
                return {
                  ...curr,
                  activeVerse: {
                    ...curr.activeVerse,
                    otherLanguages: [
                      ...curr.activeVerse.otherLanguages,
                      { ...ver, text: data.text.replace(/<S>/g, "") },
                    ],
                  },
                };
              });
            });
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
  });

  const handleModalClose = () => {
    bibleStore.update((curr) => {
      return {
        ...curr,
        activeVerse: {
          ...curr.activeVerse,
          detailType: null,
        },
      };
    });
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
    {#if $bibleStore.activeVerse.detailType === "version"}
      {#if $bibleStore.activeVerse.translations.length}
        {#each $bibleStore.activeVerse.translations as t}
          <VerseCard
            book={$bibleStore.openChapter.bookName}
            verse={$bibleStore.activeVerse.number}
            chapter={$bibleStore.openChapter.number}
            version={t.id}
            content={t.text}
          />
        {/each}
      {:else}
        <Skeleton />
      {/if}
    {/if}
    {#if $bibleStore.activeVerse.detailType === "lang"}
      {#if $bibleStore.activeVerse.otherLanguages.length}
        {#each $bibleStore.activeVerse.otherLanguages as t}
          <VerseCard
            book={$bibleStore.openChapter.bookName}
            verse={$bibleStore.activeVerse.number}
            chapter={$bibleStore.openChapter.number}
            version={t.id}
            content={t.text}
          />
        {/each}
      {:else}
        <Skeleton />
      {/if}
    {/if}
  </div>
</div>
