<script>
  import { Carousel, Thumbnails } from "flowbite-svelte";
  import image1 from "../images/image1.jpeg";
  import image2 from "../images/image2.jpeg";
  import image3 from "../images/image3.jpeg";
  import image4 from "../images/image4.jpeg";

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
    <div class="max-w-md space-y-4">
      <Carousel {images} {forward} let:Controls bind:index>
        <Controls />
      </Carousel>
      <Thumbnails {images} {forward} bind:index />
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. <br />Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt.
    </p>
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
  }
  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  .about-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
  }
  p {
    max-width: 500px;
    text-align: left;
    font-size: 16px;
    line-height: 3em;
  }

  @media (max-width: 1050px) {
    .about-section {
      height: 100vh;
    }
    .about-content {
      flex-direction: column-reverse;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 30px;
      width: 100%;
      padding: 0 10px;
      box-sizing: border-box;
    }
    p {
      text-align: center;
    }
  }

</style>
