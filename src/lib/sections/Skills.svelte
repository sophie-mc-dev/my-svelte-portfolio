<script>
  import SkillsCard from "../components/SkillsCard.svelte";
  import { skills } from '../data/skillsData.js';
</script>

<section id="skills" class="skills-section">
  <h1>Skill-Set</h1>
  <div class="skills-content">
    {#each skills as { icon, title, description, designation }}
      <SkillsCard {icon} {title} {description} {designation} />
    {/each}
  </div>
</section>

<style>
  .skills-section {
    padding: 50px 20px;
    text-align: center;
    justify-content: center;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100vh;
  }
  h1 {
    font-size: 36px;
    margin-bottom: 40px;
  }
  .skills-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start; 
    gap: 50px;
  }
</style>
