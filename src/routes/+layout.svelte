<script>
  import "../app.css";

  let y;
  let innerHeight = 0;
  let innerWidth = 0;
</script>

<div
  class="relative flex flex-col max-w-[1400xp] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div
    class={"fixed bottom-0 w-full duration-200 flex p-10 z-[10]" +
      (y > 0
        ? "opacity-full pointer-events-auto"
        : "pointer-events-none opacity-0")}
  >
  </div>
  <slot />
</div>

<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
