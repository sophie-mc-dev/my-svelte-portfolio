<script>
  import { Footer, FooterCopyright } from "flowbite-svelte";
  import logo from "../images/logo.png";
</script>

<Footer class="absolute bottom-0 left-0 z-20 w-full p-4 shadow">
  <div class="flex flex-col items-center justify-center">
    <a href="#home">
      <img src={logo} alt="Logo" class="h-16 mb-3" />
    </a>
    <FooterCopyright href="https://sophie-mc.dev" by="Sofia Merino Costa." year={new Date().getFullYear()} />
  </div>
</Footer>
