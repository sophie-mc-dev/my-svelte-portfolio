<script lang="ts">
    import { Card } from "flowbite-svelte";
    export let image: string;
    export let title: string;
    export let techStack: string[] = [];
    export let description: string;
    export let githubUrl: string;
    export let liveUrl: string;
  </script>
  
  <Card class="max-w-s h-[400px] bg-gray-800 p-5 rounded-lg text-left card-wrapper flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
    <img src={image} alt="{title} screenshot" class="w-full h-48 object-cover" />
  
    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <h3 class="text-xl font-semibold text-white">{title}</h3>
        <div class="flex gap-3">
          {#if githubUrl}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              class="text-white hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.73.5 12..."/>
              </svg>
            </a>
          {/if}
  
          {#if liveUrl}
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live project"
              class="text-white hover:text-gray-300 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3h7v7m0 0L10 21l-7-7L14 3z"/>
              </svg>
            </a>
          {/if}
        </div>
      </div>
  
      <p class="text-sm text-gray-300">{description}</p>
  
      <div class="flex flex-wrap gap-2 mt-2">
        {#each techStack as tech}
          <span class="bg-white/10 text-gray-200 text-xs px-2 py-1 rounded-full">
            {tech}
          </span>
        {/each}
      </div>
    </div>
  </Card>
  