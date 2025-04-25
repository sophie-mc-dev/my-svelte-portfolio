<script>
  import ProjectsCard from "../components/ProjectsCard.svelte";
  import { projects } from "../data/projectsData.js";
</script>

<section id="projects">
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
  section {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 50px 20px;
    text-align: center;
    justify-content: center;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;
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
    margin-bottom: 40px;
  }
  .projects-content {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    width: 100%;
  }
</style>
