<script>
    import ProjectsCard from "../components/ProjectsCard.svelte";
    import { projects } from '../data/projectsData.js';
</script>

<section id="projects" class="projects-section">
  <h1>My Projects</h1>
  <div class="projects-content">
    {#each projects as { image, title, techStack, description, githubUrl, liveUrl }}
    <ProjectsCard {image} {title} {techStack} {description} {githubUrl} {liveUrl} />
  {/each}
  </div>
  
</section>

<style>
  .projects-section {
    padding: 50px 20px;
    text-align: center;
    justify-content: center;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  h1 {
    font-size: 36px;
    margin-bottom: 40px;
  }
  .projects-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
</style>
