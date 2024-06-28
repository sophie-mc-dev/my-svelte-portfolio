<script>
  import MaterialSymbolsHome from "~icons/material-symbols/home";
  import MdiUser from '~icons/mdi/user';
  import TablerCode from '~icons/tabler/code';
  import IcBaselineEmail from '~icons/ic/baseline-email';
  import ClarityLightbulbSolid from '~icons/clarity/lightbulb-solid';

  export let icons = [
    { href: "#home", component: MaterialSymbolsHome, title: "Home" },
    { href: "#aboutme", component: MdiUser, title: "About Me" },
    { href: "#skills", component: ClarityLightbulbSolid, title: "Skills" },
    { href: "#projects", component: TablerCode, title: "Projects" },
    { href: "#contactme", component: IcBaselineEmail, title: "Contact Me" },
  ];
</script>

<div class="menu top-left-menu">
  <div class="menu-line"></div>
  <div class="menu-icons">
    {#each icons as icon}
      <a href={icon.href} class="menu-icon" title={icon.title}>
        <svelte:component this={icon.component} />
      </a>
    {/each}
  </div>
</div>

<style>
  .menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-left-menu {
    top: 0;
    left: 100px;
  }

  .menu-line {
    width: 2px;
    height: 100px;
    background: white;
    margin-bottom: 20px;
  }

  .menu-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu-icon {
    display: block;
    margin: 10px 0;
    color: white;
    font-size: 24px;
    text-decoration: none;
  }
</style>
