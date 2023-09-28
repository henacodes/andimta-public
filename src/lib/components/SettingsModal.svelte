<script>
  import { bibleStore } from "../../store/bibleStore";
  import { uiStore } from "../../store/uiStore";
  import { quizStore } from "../../store/quizStore";
  import { goto } from "$app/navigation";

  const changeFontSize = (val) => {
    if (val === "inc") {
      if ($uiStore.chapterFontSize <= 30) {
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
  const handleVersionChange = (e) => {
    uiStore.update((curr) => {
      return {
        ...curr,
        settingsOpen: false,
      };
    });
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

  const openQuizModal = () => {
    quizStore.update((curr) => {
      return {
        ...curr,
        modalOpened: true,
      };
    });
  };

  const handleModalClose = () => {
    uiStore.update((curr) => {
      return {
        ...curr,
        settingsOpen: false,
      };
    });
  };
</script>

<div
  class=" flex justify-center items-center bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-20"
>
  <div
    class="  rounded-xl w-[90%] md:w-[50%] md:h-[50%] p-5 overflow-auto bg-base-100 shadow-xl"
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

    <div class=" flex flex-col items-center">
      <div class=" font-customize flex items-center my-5">
        <button
          on:click={() => changeFontSize("dec")}
          class="btn mx-1 btn-sm btn-circle btn-outline btn-primary"
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
          class="btn btn-sm mx-1 btn-circle btn-outline btn-primary"
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
        class="select select-primary select-sm lg:select-sm w-full max-w-xs mx-2 my-2"
      >
        <option value="ESV"> English Standard Version (ESV) </option>
        <option value="KJV">King James Version</option>
        <option value="NASB">New American Standard Bible (NASB)</option>
        <option value="NLT">New Living Translation (NLT)</option>
        <option value="RSV"> Revised Standard Version (RSV)</option>
      </select>
      <button
        class="btn btn-primary btn-sm lg:btn-sm my-5"
        on:click={openQuizModal}>Quiz</button
      >
    </div>
  </div>
</div>
