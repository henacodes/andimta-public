<script>
  export let click;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  on:click={click}
  class=" bg-black/75 w-[100vw] h-[100vh] fixed top-0 left-0 z-50"
/>
