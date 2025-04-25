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
  .menu-line:hover {
    background: #e9d8c7;
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
    transition: transform 0.2s ease;
  }

  .social-icon:hover {
    transform: scale(1.1);
    color: #e9d8c7;
  }

  @media (max-width: 768px) {
    .bottom-right-menu {
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: flex-end;
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
      margin-left: 10px;
    }

    .social-icons {
      flex-direction: row; 
    }

    .social-icon {
      margin: 0 5px;
      font-size: 20px; 
    }
  }
</style>
