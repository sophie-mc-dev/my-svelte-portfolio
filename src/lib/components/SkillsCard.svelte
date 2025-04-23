<script>
  import { Card } from "flowbite-svelte";
  export let icon;
  export let title;
  export let description;
  export let designation = "";
</script>

<Card class="max-w-s h-[300px] bg-gray-800 p-5 rounded-lg text-left card-wrapper flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
  <div>
    {#if icon}
      <svelte:component this={icon} class="w-12 h-12 mb-3 text-white" />
    {/if}
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-white">
      {title}
    </h5>
    <p class="mb-3 font-normal text-gray-400">
      {description}
    </p>
  </div>
  <div class="flex flex-wrap gap-2">
    {#each designation as skill}
    <span class="bg-white/10 text-gray-200 text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
      {skill}
    </span>
    
    {/each}
  </div>
</Card>