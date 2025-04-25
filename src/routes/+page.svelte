<script>
  import Home from "$lib/sections/Home.svelte";
  import About from "$lib/sections/About.svelte";
  import Projects from "$lib/sections/Projects.svelte";
  import Skills from "$lib/sections/Skills.svelte";
  import Contact from "$lib/sections/Contact.svelte";
  import TopMenu from "$lib/components/TopMenu.svelte";
  import BottomMenu from "$lib/components/BottomMenu.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Darkmode from "$lib/components/Darkmode.svelte";
</script>

<main>
  <TopMenu />
  <BottomMenu />
  <!-- <Darkmode /> -->

  <div class="content">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
  </div>
</main>

<style>
  main {
      overflow-x: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  }

  .content {
      width: 100%;
      margin-left: 150px;
      margin-right: 150px;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
  }

  .content > :global(section) {
      width: 100%;
  }

  @media (max-width: 768px) {
      .content {
          margin-left: 20px;
          margin-right: 20px;
          padding: 20px;
      }

      .content > :global(section) {
          height: 100vh;
          padding: 20px; 
          margin-bottom: 20px;
      }
  }

  @media (max-width: 480px) {
      .content {
          margin-left: 10px;
          margin-right: 10px;
          padding: 15px;
      }

      .content > :global(section) {
          padding: 15px 0;
          margin-bottom: 15px; 
      }
  }
</style>
