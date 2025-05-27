<script>
  import ProjectsCard from "../components/ProjectsCard.svelte";
  // import { projects } from "../data/projects";
</script>

<section id="projects" class="projects-section">
  <h1>My Projects</h1>
  <div class="card-wrapper">
    <div class="projects-content">
      <!-- {#each projects as project}
        <ProjectsCard {project} />
      {/each} -->
      work in progress...
    </div>
  </div>
</section>

<style>
  .projects-section {
    min-height: 100vh;
    box-sizing: border-box;
    text-align: center;
    justify-content: flex-start;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;
    scroll-margin-top: 80px;
  }

  .card-wrapper {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 20px;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  .projects-content {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;
  }

  /* 1024px and below (large tablets/laptops) */
  @media (max-width: 1100px) {
    h1 {
      font-size: 32px;
    }

    .projects-content {
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  }

  /* 768px and below (tablets) */
  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
    }

    .projects-content {
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
  }

  /* 480px and below (phones) */
  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }

    .projects-section {
      padding: 30px 10px;
      gap: 30px;
    }
  }
</style>
