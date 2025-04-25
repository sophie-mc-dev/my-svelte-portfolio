<script>
  import ProjectsCard from "../components/ProjectsCard.svelte";
  import { projects } from "../data/projectsData.js";
</script>

<section id="projects" class="projects-section">
  <h1>My Projects</h1>
  <div class="card-wrapper">
    <div class="projects-content">
      {#each projects as { image, title, techStack, tags, description, githubUrl, liveUrl }}
        <ProjectsCard
          {image}
          {title}
          {techStack}
          {tags}
          {description}
          {githubUrl}
          {liveUrl}
        />
      {/each}
    </div>
  </div>
</section>

<style>
  .projects-section {
    min-height: auto;
    box-sizing: border-box;
    padding: 60px 20px;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;
    scroll-margin-top: 80px;
  }

  .card-wrapper {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 20px;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 40px;
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
  @media (max-width: 1024px) {
    h1 {
      font-size: 32px;
    }

    .projects-section {
      padding: 50px 16px;
    }

    .projects-content {
      gap: 30px;
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

    .projects-section {
      padding: 40px 12px;
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
