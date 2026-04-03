<script>
  import MaterialSymbolsHome from "~icons/material-symbols/home";
  import MdiUser from "~icons/mdi/user";
  import TablerCode from "~icons/tabler/code";
  import IcBaselineEmail from "~icons/ic/baseline-email";
  import ClarityLightbulbSolid from "~icons/clarity/lightbulb-solid";

  export let icons = [
    { href: "#home", component: MaterialSymbolsHome, title: "Home" },
    { href: "#aboutme", component: MdiUser, title: "About Me" },
    { href: "#skills", component: ClarityLightbulbSolid, title: "Skills" },
    { href: "#projects", component: TablerCode, title: "Projects" },
    { href: "#contactme", component: IcBaselineEmail, title: "Contact Me" },
  ];
</script>

<div
  class="
    fixed flex items-center flex-col
    top-0 left-[100px]
    
    max-[900px]:left-0
    max-[900px]:w-full
    max-[900px]:flex-row
    max-[900px]:justify-start
    max-[900px]:bg-[rgba(0,5,21,0.5)]
    max-[900px]:backdrop-blur-md
    max-[900px]:px-3
    max-[900px]:py-2
    max-[900px]:z-[100]
  "
>
  <!-- Line -->
  <div
    class="
    bg-white transition-colors
    w-[2px] h-[100px] mb-5
    
    hover:bg-[#e9d8c7]

    max-[900px]:w-[40px]
    max-[900px]:h-[2px]
    max-[900px]:mb-0
    max-[900px]:mr-[10px]
  "
  ></div>

  <!-- Icons -->
  <div
    class="
      flex flex-col items-center
      
      max-[900px]:flex-row
    "
  >
    {#each icons as icon}
      <a
        href={icon.href}
        title={icon.title}
        class="
          block text-white no-underline
          my-[10px] text-[24px]
          transition-all duration-200 ease-in-out
          hover:scale-110 hover:text-[#e9d8c7]

          max-[900px]:my-0
          max-[900px]:mx-[8px]
          max-[900px]:text-[20px]
        "
      >
        <svelte:component this={icon.component} />
      </a>
    {/each}
  </div>
</div>
