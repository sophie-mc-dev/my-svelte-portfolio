<script>
  import { Carousel, Thumbnails } from "flowbite-svelte";
  import image1 from "../images/profile/image1.jpeg";
  import image2 from "../images/profile/image2.jpeg";
  import image3 from "../images/profile/image3.jpeg";
  import image4 from "../images/profile/image4.jpeg";

  const images = [
    {
      alt: "Image 1 description",
      src: image1,
      style: "object-fit: cover; width: 100%; height: 100%;",
    },
    {
      alt: "Image 2 description",
      src: image2,
      style: "object-fit: cover; width: 100%; height: 100%;",
    },
    {
      alt: "Image 3 description",
      src: image3,
      style: "object-fit: cover; width: 100%; height: 100%;",
    },
    {
      alt: "Image 4 description",
      src: image4,
      style: "object-fit: cover; width: 100%; height: 100%;",
    },
  ];

  let index = 0;
  let forward = true;
</script>

<section id="aboutme" class="about-section">
  <h1>About Me</h1>
  <div class="about-content">
    <div class="carousel-container">
      <Carousel {images} {forward} let:Controls bind:index>
        <Controls />
      </Carousel>
      <Thumbnails {images} {forward} bind:index />
    </div>
    <div class="text-content">
      <p>
        I have a bachelor's degree in Informatics Engineering and am currently
        finishing my master's in Informatics and Computer Engineering at <u
          ><a href="https://www.up.pt/feup/pt/">FEUP</a></u
        >. For my thesis, I'm developing an intelligent knowledge management
        system aimed at supporting engineering education. What excites me most
        is that it's not just a research project — it's a real product with the
        potential to help students and educators access knowledge more easily
        and effectively. Creating something useful that can truly make a
        difference is what drives me.

        <br /><br />Frontend development is where I feel most at home. I love
        designing clean, thoughtful interfaces that make the user experience
        seamless. JavaScript still tests my patience sometimes, but each
        challenge helps me grow stronger and more confident.

        <br /><br />Outside of tech, I'm always exploring — whether it's
        discovering new places, diving into music from around the world, or
        trying new sports. Lately, I've been practicing padel, it's a great way
        to reset after a full day of screen time.
      </p>
    </div>
  </div>
</section>

<style>
  .about-section {
    min-height: 100vh;
    box-sizing: border-box;
    text-align: center;
    justify-content: flex-start;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 40px;
    scroll-margin-top: 80px;
    padding: 0 20px;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  .about-content {
    max-width: 980px;
    margin: 0 auto;
    width: 100%;
    position: relative;
  }

  .carousel-container {
    float: left;
    width: 384px;
    margin-right: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    shape-outside: margin-box;
  }

  .text-content {
    overflow: hidden;
    text-align: left;
  }

  .text-content p {
    font-size: 16px;
    line-height: 1.8em;
    margin: 0;
    text-align: justify;
    hyphens: auto;
  }

  /* Responsive breakpoints */
  @media (max-width: 1200px) {
    .about-content {
      padding: 0 10px;
    }

    .carousel-container {
      width: 320px;
      margin-right: 30px;
    }
  }

  @media (max-width: 1350px) {
    .about-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    .carousel-container {
      float: none;
      width: 100%;
      max-width: 384px;
      margin-right: 0;
      margin-bottom: 0;
    }

    .text-content {
      overflow: visible;
      text-align: center;
      width: 100%;
    }

    .text-content p {
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
      margin-top: 2rem;
    }

    .text-content p {
      font-size: 14px;
      line-height: 1.6em;
      max-width: 100%;
    }

    .carousel-container {
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    .about-section {
      padding: 0 15px;
    }

    .text-content p {
      font-size: 12px;
      line-height: 1.5em;
    }
  }
</style>
