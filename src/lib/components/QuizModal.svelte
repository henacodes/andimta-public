<script>
  import { onMount } from "svelte";
  import { quizStore } from "../../store/quizStore";
  import { bibleStore } from "../../store/bibleStore";
  import Skeleton from "./Skeleton.svelte";
  import { PUBLIC_MAKESUIT_API_KEY } from "$env/static/public";

  onMount(async () => {
    quizStore.update((curr) => {
      return {
        ...curr,
        loading: true,
      };
    });
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
              text: `I just read ${$bibleStore.openChapter.bookName} chapter ${$bibleStore.openChapter.number}. Generate 5 hard multiple choice questions from it in json format.`,
            },
          }),
        }
      );
      const quizData = await res.json();
      const refinedData = quizData.candidates[0].output.replace(
        /^```json|```/g,
        ""
      );
      try {
        const quizzes = JSON.parse(refinedData);

        quizStore.update((curr) => {
          return {
            ...curr,
            quizzes: quizzes,
            loading: false,
          };
        });
      } catch (error) {
        quizStore.update((curr) => {
          return {
            ...curr,
            loading: false,
            message:
              "Error while generating the question. Please close this pop up and retry! ",
          };
        });
      }
    } catch (error) {
      console.log(error);
      quizStore.update((curr) => {
        return {
          ...curr,
          loading: false,
          message:
            "Error while generating the question. Please close this pop up and retry! ",
        };
      });
    }

    console.log($quizStore);
  });

  const handleModalClose = () => {
    console.log("click");
    quizStore.update((curr) => {
      return {
        ...curr,
        modalOpened: false,
        quizzes: [],
      };
    });
  };
  let selectedOptions = ["", "", "", "", ""];

  const handleChoiceChange = (e, i) => {
    selectedOptions[i] = e.target.value;
  };

  const handleFinish = () => {
    let unfulfilled = false;
    selectedOptions.map((e) => {
      if (!e) {
        unfulfilled = true;
      }
    });

    if (unfulfilled) {
      quizStore.update((curr) => {
        return {
          ...curr,
          message: "Please answer all the questions before finishing",
        };
      });
      setTimeout(() => {
        quizStore.update((curr) => {
          return {
            ...curr,
            message: null,
          };
        });
      }, 5000);
    } else {
      quizStore.update((curr) => {
        return {
          ...curr,
          modalOpened: false,
          scoreModalOpened: true,
          answers: selectedOptions,
        };
      });
    }
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

    {#if $quizStore.message}
      <p>{$quizStore.message}</p>
    {/if}
    <div class="quizzes">
      {#if $quizStore.quizzes.length}
        {#each $quizStore.quizzes as quiz, i}
          <div class="bg-base-300 my-3 p-3 rounded-lg">
            <p class="my-3 font-bold">{quiz.question}</p>
            {#each quiz.options as choice}
              <div class=" flex items-center mt-3">
                <input
                  type="radio"
                  name={`radio-${i}`}
                  class="radio radio-primary radio-sm"
                  value={choice}
                  on:change={(e) => handleChoiceChange(e, i)}
                />
                <p class=" mx-4">{choice}</p>
              </div>
            {/each}
          </div>
        {/each}
        {#if $quizStore.message}
          <p class=" my-3 text-warning">{$quizStore.message}</p>
        {/if}
        <button
          on:click={handleFinish}
          class={selectedOptions.length == 5
            ? "btn btn-primary "
            : "btn btn-primary btn-disabled"}
          >Finish
        </button>
      {/if}
    </div>
    {#if $quizStore.loading}
      <Skeleton />
    {/if}
  </div>
</div>
