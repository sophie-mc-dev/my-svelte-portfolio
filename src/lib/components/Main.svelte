<script>
  import Blob from "./Blob.svelte";
</script>

<main>
  <div class="content">
    <section>
      <div class="introduction">
        <h1>Hi 👋 I'm Sofia!</h1>
        <p>I'm a FrontEnd Developer based in Porto.</p>
        <button class="btn">Download CV</button>
      </div>
      <Blob />
    </section>
  </div>
</main>

<style>
  main {
    background: url("starry-background.jpg") no-repeat center center fixed;
    background-size: cover;
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content {
    margin-left: 150px;
    margin-right: 150px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: left;
  }

  .introduction {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 50px;
  }

  .introduction h1 {
    margin-top: 0;
    font-size: 48px;
    margin-bottom: 20px;
  }

  .introduction p {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .btn {
    background-color: white;
    color: black;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }

  .btn:hover {
    background-color: #f0f0f0;
  }
</style>
