<script>
  import MdiGithub from "~icons/mdi/github";
  import MdiLinkedin from "~icons/mdi/linkedin";

  export let socialIcons = [
    { href: "https://github.com/sophie-mc-dev", component: MdiGithub },
    { href: "https://www.linkedin.com/in/sofia-m-costa/", component: MdiLinkedin },
  ];
</script>

<div class="menu bottom-right-menu">
  <div class="social-icons">
    {#each socialIcons as socialIcon}
      <a target="_blank" href={socialIcon.href} class="social-icon">
        <svelte:component this={socialIcon.component} />
      </a>
    {/each}
  </div>
  <div class="menu-line"></div>
</div>

<style>
  .menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bottom-right-menu {
    bottom: 0;
    right: 100px;
  }

  .menu-line {
    width: 2px;
    height: 150px;
    background: white;
  }

  .social-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .social-icon {
    display: block;
    margin: 10px 0;
    color: white;
    font-size: 24px;
    text-decoration: none;
  }
</style>
