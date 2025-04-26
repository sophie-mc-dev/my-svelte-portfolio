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

  .menu-line:hover {
    background: #e9d8c7;
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
    transition: transform 0.2s ease;
  }

  .menu-icon:hover {
    transform: scale(1.1);
    color: #e9d8c7;
  }

  @media (max-width: 900px) {
    .menu {
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 100;
    }

    .top-left-menu {
      top: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: rgba(0, 5, 21, 0.5);
      backdrop-filter: blur(8px);
      padding: 8px 12px;
      box-sizing: border-box;
      flex-direction: row;
    }

    .menu-line {
      height: 2px;
      width: 40px;
      margin-bottom: 0;
      margin-right: 10px;
    }

    .menu-icons {
      flex-direction: row;
    }

    .menu-icon {
      margin: 0 8px;
      font-size: 20px;
    }
  }
</style>
