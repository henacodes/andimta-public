<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(async () => {
    goto("/bible?book=1&bookName=Genesis&chapter=1&cat=OT&version=KJV");
  });
</script>
