<script>
  import MdiGithub from "~icons/mdi/github";
  import MdiLinkedin from "~icons/mdi/linkedin";

  export let socialIcons = [
    { href: "https://github.com/sophie-mc-dev", component: MdiGithub },
    {
      href: "https://www.linkedin.com/in/sofia-m-costa/",
      component: MdiLinkedin,
    },
  ];
</script>

<div
  class="
    fixed flex flex-col items-center
    bottom-0 right-[100px]

    max-[900px]:left-0
    max-[900px]:right-0
    max-[900px]:w-full
    max-[900px]:flex-row
    max-[900px]:justify-end
    max-[900px]:items-center
    max-[900px]:bg-[rgba(0,5,21,0.5)]
    max-[900px]:backdrop-blur-md
    max-[900px]:px-3
    max-[900px]:py-2
  "
>
  <!-- Icons -->
  <div
    class="
      flex flex-col items-center

      max-[900px]:flex-row
    "
  >
    {#each socialIcons as socialIcon}
      <a
        target="_blank"
        href={socialIcon.href}
        class="
          block text-white no-underline
          my-[10px] text-[24px]
          transition-all duration-200 ease-in-out
          hover:scale-110 hover:text-[#e9d8c7]

          max-[900px]:my-0
          max-[900px]:mx-[5px]
          max-[900px]:text-[20px]
        "
      >
        <svelte:component this={socialIcon.component} />
      </a>
    {/each}
  </div>

  <!-- Line -->
  <div
    class="
      bg-white transition-colors
      w-[2px] h-[150px]

      hover:bg-[#e9d8c7]

      max-[900px]:w-[40px]
      max-[900px]:h-[2px]
      max-[900px]:ml-[10px]
    "
  ></div>
</div>