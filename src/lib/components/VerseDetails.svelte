<script>
  import Backdrop from "./Backdrop.svelte";
  import { bibleStore } from "../../store/bibleStore";

  const handleModalClose = () => {
    bibleStore.update((curr) => {
      return {
        ...curr,
        activeVerse: {
          otherLanguages: [],
          translations: [],
          fathers: [],
          number: null,
        },
      };
    });
  };

  const showOtherTranslations = (type) => {
    bibleStore.update((curr) => {
      return {
        ...curr,
        activeVerse: {
          ...curr.activeVerse,
          detailType: type,
        },
      };
    });
  };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class=" flex justify-center items-center bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-40"
>
  <div
    class="  rounded-xl p-5 card bg-base-100 shadow-xl w-[90%] md:w-[50%] h-[60%] md:h-[50%]"
  >
    <button
      on:click={handleModalClose}
      class="btn m-5 btn-sm btn-circle btn-outline flex items-center"
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
    <div class=" bg-blue-grey p-4 rounded-2xl">
      <p class=" text-lg font-bold text-slate-200">
        {$bibleStore.openChapter.bookName}
        {$bibleStore.openChapter.number}:{$bibleStore.activeVerse.number}
      </p>
      <p>
        {$bibleStore.activeVerse.text}
      </p>
    </div>
    <div class=" flex items-center justify-between mt-6">
      <ul class="menu menu-horizontal bg-base-200 rounded-box">
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:click={() => showOtherTranslations("lang")}>
          <p>Greek/Hebrew</p>
        </li>
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <li on:click={() => showOtherTranslations("version")}>
          <p>Versions</p>
        </li>
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        {#if $bibleStore.openChapter.category === "NT"}
          <li on:click={() => showOtherTranslations("fathers")}>
            <p>Church Fathers</p>
          </li>
        {/if}
      </ul>
    </div>
  </div>
</div>
