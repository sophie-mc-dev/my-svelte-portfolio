<script>
  import { Card } from "flowbite-svelte";
  export let icon;
  export let title;
  export let description;
  export let designation = [];
</script>

<Card class="max-w-s h-[300px] bg-gray-800 p-5 rounded-lg text-left card-wrapper flex flex-col justify-between">
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
      <span class="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
        {skill}
      </span>
    {/each}
  </div>
</Card>