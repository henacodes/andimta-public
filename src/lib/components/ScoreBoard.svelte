<script>
  import { onMount } from "svelte";
  import { quizStore } from "../../store/quizStore";

  let score = 0;

  onMount(() => {
    const quizzes = $quizStore.quizzes;
    quizzes?.map((q) => {
      if ($quizStore.answers.filter((x) => x == q.answer).length) {
        {
          score += 1;
        }
      }
    });
  });

  const handleModalClose = () => {
    quizStore.update((curr) => {
      return {
        ...curr,
        scoreModalOpened: false,
        quizzes: [],
      };
    });
  };

  $: console.log(score);
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

    {#each $quizStore.quizzes as quiz, i}
      <div
        class={"bg-base-300 my-3 p-3 rounded-lg border-2 " +
          ($quizStore.quizzes[i].answer === $quizStore.answers[i]
            ? " border-accent "
            : "border-warning")}
      >
        <p class="my-3 font-bold">{quiz.question}</p>
        {#each quiz.options as choice}
          <div class={" flex items-center mt-3  "}>
            <input
              type="radio"
              name={`radio-${i}`}
              class={$quizStore.quizzes[i].answer === $quizStore.answers[i]
                ? "radio radio-accent radio-sm"
                : "radio radio-warning radio-sm"}
              checked={$quizStore.answers[i] == choice}
              disabled
            />
            <p class=" mx-4">{choice}</p>
          </div>
        {/each}
        <p class="my-2">
          Answer: <span class=" text-accent font-bold"
            >{$quizStore.quizzes[i].answer}</span
          >
        </p>
      </div>
    {/each}
    <div class=" flex flex-col items-center justify-center">
      <div
        class={"radial-progress " +
          (score < 3 ? "text-warning" : "text-accent")}
        style={`--value:${(score / 5) * 100}`}
      >
        {(score / 5) * 100}%
      </div>
    </div>

    <div class=" flex justify-center m-4">
      <button on:click={handleModalClose} class="btn btn-primary btn-md"
        >Done
      </button>
    </div>
  </div>
</div>
