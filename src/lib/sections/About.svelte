<script>
  import { Carousel, Thumbnails } from "flowbite-svelte";
  import image1 from "../images/profile/image1.jpeg";
  import image2 from "../images/profile/image2.jpeg";
  import image3 from "../images/profile/image3.jpeg";
  import image4 from "../images/profile/image4.jpeg";

  const images = [
    { alt: "Image 1 description", src: image1 },
    { alt: "Image 2 description", src: image2 },
    { alt: "Image 3 description", src: image3 },
    { alt: "Image 4 description", src: image4 },
  ];

  let index = 0;
  let forward = true;
</script>

<section
  id="aboutme"
  class="min-h-screen flex flex-col items-center text-white gap-10 px-5 scroll-mt-20"
>
  <h1 class="text-3xl md:text-4xl mt-8 md:mt-0">About Me</h1>

  <div
    class="w-full max-w-[980px] mx-auto 
           flex flex-col items-center gap-8
           xl:block"
  >
    <!-- Carousel -->
    <div
      class="
        flex flex-col gap-4
        w-full max-w-[300px]
        md:max-w-[384px]
        xl:float-left xl:mr-[50px] xl:mb-5 xl:w-[384px]
        lg:mr-[30px] lg:w-[320px]
      "
    >
      <Carousel {images} {forward} let:Controls bind:index>
        <Controls />
      </Carousel>
      <Thumbnails {images} {forward} bind:index />
    </div>

    <!-- Text -->
    <div
      class="
        w-full
        text-center xl:text-left
      "
    >
      <p
        class="
          text-xs sm:text-sm md:text-base
          leading-[1.5] md:leading-[1.6] lg:leading-[1.8]
          max-w-full xl:max-w-none
          mx-auto xl:mx-0
          text-center xl:text-justify
        "
      >
        I have a Masters in Informatics and Computer Engineering
        from
        <a
          target="_blank"
          href="https://www.up.pt/feup/en/"
          class="underline font-bold text-brand-beige hover:text-white transition-colors"
        >
          FEUP
        </a>,
        where I developed an intelligent knowledge management system to support
        engineering education, as my thesis.

        <br /><br />
        I'm passionate about creating thoughtful,
        user-centered digital experiences. Right now I'm exploring low-development with Outsystems,
        where I enjoy turning new functionalities into useful
        interactions that prioritize simplicity, usability, and real-world impact.

        <br /><br />
        Outside of tech, I'm always exploring — whether it's
        discovering new places, diving into music from around the world, or
        trying new sports. Lately, I've been enjoying padel, it's a great way
        to reset after a full day of screen time.
      </p>
    </div>
  </div>
</section>