<script>
  import { onMount } from "svelte";
  import { bibleStore } from "../../store/bibleStore";
  import { requestChurchFathers } from "../prompt";
  import VerseCard from "./VerseCard.svelte";
  import Skeleton from "./Skeleton.svelte";
  import { PUBLIC_MAKESUIT_API_KEY } from "$env/static/public";

  onMount(async () => {
    console.log("fathers");
    if (!$bibleStore.activeVerse.fathers.length) {
      const book = $bibleStore.openChapter.bookName;
      const chapter = $bibleStore.openChapter.number;
      const verse = $bibleStore.activeVerse.number;
      try {
        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText?key=${PUBLIC_MAKESUIT_API_KEY}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: {
                text: requestChurchFathers(`${book} ${chapter}:${verse}`),
              },
            }),
          }
        );

        const data = await res.json();
        const refinedData = data.candidates[0].output.replace(
          /^```json|```/g,
          ""
        );
        console.log(refinedData);
        const fathersCommentaries = JSON.parse(refinedData);
        bibleStore.update((curr) => {
          return {
            ...curr,
            activeVerse: {
              ...curr.activeVerse,
              fathers: fathersCommentaries,
            },
          };
        });
      } catch (error) {
        console.log(error.message);
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
    <div class="badge badge-primary my-4">
      <p class="">AI Generated</p>
    </div>
    {#each $bibleStore.activeVerse.fathers as father}
      <VerseCard
        book={father.reference}
        verse={""}
        chapter={""}
        version={father.name || father.author}
        content={father.commentary || father.text || father.quote}
      />
    {/each}
    {#if !$bibleStore.activeVerse.fathers.length}
      <Skeleton />
    {/if}
  </div>
</div>
