<script>
  import "../app.css";
  import Sidebar from "../lib/components/Sidebar.svelte";
  import { uiStore } from "../store/uiStore";
  import { bibleStore } from "../store/bibleStore";
  import VerseDetails from "../lib/components/VerseDetails.svelte";
  import { quizStore } from "../store/quizStore";
  import LoadingModal from "../lib/components/LoadingModal.svelte";
  import OtherTranslations from "../lib/components/OtherTranslations.svelte";
  import ChurchFathers from "../lib/components/ChurchFathers.svelte";
  import SearchResults from "../lib/components/SearchResults.svelte";
  import QuizModal from "../lib/components/QuizModal.svelte";
  import ScoreBoard from "../lib/components/ScoreBoard.svelte";
  import { onMount } from "svelte";
  import SettingsModal from "../lib/components/SettingsModal.svelte";

  onMount(() => {
    uiStore.subscribe((curr) => console.log("UI Store", curr));
  });
</script>

<div class="flex h-[100vh]" data-theme="dark">
  <Sidebar />
  <div class="  h-full md:flex-[0.8]">
    <slot />
  </div>

  {#if $uiStore.loading}
    <LoadingModal />
  {/if}

  {#if $bibleStore.activeVerse.number}
    <VerseDetails />
  {/if}

  {#if $bibleStore.activeVerse.detailType === "version" || $bibleStore.activeVerse.detailType === "lang"}
    <OtherTranslations />
  {/if}

  {#if $bibleStore.activeVerse.detailType === "fathers"}
    <ChurchFathers />
  {/if}
  {#if $bibleStore.searchResults.loading || $bibleStore.searchResults.verses.length || $bibleStore.searchResults.message}
    <SearchResults />
  {/if}
  {#if $quizStore.modalOpened}
    <QuizModal />
  {/if}

  {#if $quizStore.scoreModalOpened}
    <ScoreBoard />
  {/if}
  {#if $uiStore.settingsOpen}
    <SettingsModal />
  {/if}
</div>
