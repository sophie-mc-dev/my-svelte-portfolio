<script>
  import { Footer, FooterCopyright } from "flowbite-svelte";
</script>

<Footer class="absolute bottom-0 left-0 z-20 w-full p-4 shadow">
  <div class="flex flex-col items-center justify-center">
    <img src="src/lib/images/logo.png" alt="Logo" class="h-16 mb-3" />
    <FooterCopyright href="/" by="Sofia Merino Costa" year={2024} />
  </div>
</Footer>
