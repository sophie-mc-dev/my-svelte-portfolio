<script>
  import { Carousel, Thumbnails } from "flowbite-svelte";

  const images = [
    {
      alt: "I1",
      src: "src/lib/images/image1.jpeg",
    },
    {
      alt: "I2",
      src: "src/lib/images/image2.jpeg",
    },
    {
      alt: "I3",
      src: "src/lib/images/image3.jpeg",
    },
    {
      alt: "I3",
      src: "src/lib/images/image4.jpeg",
    },
  ];

  let index = 0;
  let forward = true;
</script>

<section id="aboutme" class="about-section">
  <h1>About Me</h1>
  <div class="about-content">
    <div class="max-w-md space-y-4">
      <Carousel {images} {forward} let:Indicators let:Controls bind:index>
        <Controls />
        <Indicators />
      </Carousel>
      <Thumbnails style="" {images} {forward} bind:index />
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat.
    </p>
  </div>
</section>

<style>
  .about-section {
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
  .about-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  p {
    max-width: 500px;
    text-align: left;
    font-size: 16px;
    line-height: 3em;
  }
</style>
