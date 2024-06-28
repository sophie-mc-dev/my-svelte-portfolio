<script>
  import { DarkMode } from "flowbite-svelte";

  let btnClass =
    "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2";
</script>


<div class="menu top-right">
    <DarkMode {btnClass} />

</div>

<style>
  .menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top-right {
    top: 20px;
    right: 100px;
  }
</style>
