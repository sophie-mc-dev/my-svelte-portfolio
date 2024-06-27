<script>
  import MaterialSymbolsHome from "~icons/material-symbols/home";
  import MdiUser from '~icons/mdi/user';
  import TablerCode from '~icons/tabler/code';
  import MdiBriefcase from '~icons/mdi/briefcase';
  import IcBaselineEmail from '~icons/ic/baseline-email';

  export let icons = [
    { href: "#home", component: MaterialSymbolsHome },
    { href: "#aboutme", component: MdiUser },
    { href: "#projects", component: TablerCode },
    { href: "#experience", component: MdiBriefcase },
    { href: "#contactme", component: IcBaselineEmail },
  ];
</script>

<div class="menu top-left-menu">
  <div class="menu-line"></div>
  <div class="menu-icons">
    {#each icons as icon}
      <a href={icon.href} class="menu-icon">
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
