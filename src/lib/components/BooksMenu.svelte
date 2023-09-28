<script>
  import { otBooks, ntBooks } from "../books";
  import { bibleStore } from "../../store/bibleStore";

  const handleBookClick = (bookName, bookId, chapters, category) => {
    bibleStore.update((curr) => {
      return {
        ...curr,
        toBeOpenedChapter: {
          bookId,
          category,
          bookName,
          chapters: Array.from({ length: chapters }, (_, i) => i + 1),
        },
      };
    });
  };

  const booksListClass = (bookId, openChapterBookId, toBeOpenedBookId) => {
    if (openChapterBookId == bookId) {
      return "bg-[#353e48] mt-2 text-white font-bolder";
    } else if (toBeOpenedBookId == bookId) {
      return "bg-[#353e48] mt-2";
    } else {
      return "mt-2 text-gray-600";
    }
  };
</script>

<div>
  <div class=" mt-1 collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" checked="checked" />
    <div class="collapse-title text-sm lg:text-lg font-medium">
      Old Testament
    </div>
    <div class="collapse-content">
      <div class="overflow-y-auto max-h-[70vh]">
        <ul class="menu bg-base-200 rounded-box">
          {#each otBooks as book}
            <!-- svelte-ignore a11y-click-events-have-key-events --
                 <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li
              on:click={() =>
                handleBookClick(
                  book.name,
                  book.bookid,
                  book.chapters,
                  book.category
                )}
            >
              <p
                class={booksListClass(
                  book.bookid,
                  $bibleStore.openChapter.book,
                  $bibleStore.toBeOpenedChapter.bookId
                )}
              >
                {book.name}
              </p>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
  <div class=" mt-1 collapse collapse-arrow bg-base-200">
    <input type="radio" name="my-accordion-2" />
    <div class="collapse-title font-medium text-sm lg:text-lg">
      New Testament
    </div>
    <div class="collapse-content">
      <div class="overflow-y-auto max-h-[70vh]">
        <ul class="menu bg-base-200 rounded-box">
          {#each ntBooks as book}
            <!-- svelte-ignore a11y-click-events-have-key-events --
                     <!-- svelte-ignore a11y-no-static-element-interactions -->
            <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
            <li
              on:click={() =>
                handleBookClick(
                  book.name,
                  book.bookid,
                  book.chapters,
                  book.category
                )}
            >
              <p
                class={booksListClass(
                  book.bookid,
                  $bibleStore.openChapter.book,
                  $bibleStore.toBeOpenedChapter.bookId
                )}
              >
                {book.name}
              </p>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>
