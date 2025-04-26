<script>
  import SkillsCard from "../components/SkillsCard.svelte";
  import { skills } from "../data/skillsData.js";
</script>

<section id="skills" class="skills-section">
  <h1>Skill-Set</h1>

  <div class="card-wrapper">
    <div class="skills-content">
      {#each skills as { icon, title, description, designation }}
        <SkillsCard {icon} {title} {description} {designation} />
      {/each}
    </div>
  </div>
</section>

<style>
  .skills-section {
    min-height: auto;
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

  .skills-content {
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
    width: 100%;
  }

  /* 1024px and below (large tablets/laptops) */
  @media (max-width: 1100px) {
    h1 {
      font-size: 32px;
    }

    .skills-content {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .skills-content {
      gap: 30px;
    }
  }

  /* 768px and below (tablets) */
  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
    }

    .skills-content {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .skills-section {
      padding: 40px 12px;
    }
  }

  /* 480px and below (phones) */
  @media (max-width: 480px) {
    h1 {
      font-size: 24px;
    }

    .skills-section {
      padding: 30px 10px;
      gap: 30px;
    }
  }
</style>
