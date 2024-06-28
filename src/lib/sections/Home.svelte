<script>
  import Blob from "../components/Blob.svelte";
</script>

<section id="home">
  <div class="introduction">
    <h1>Hi 👋 I'm Sofia!</h1>
    <p>I'm a FrontEnd Developer based in Porto.</p>
    <button class="btn">Download CV</button>
  </div>
  <Blob />
</section>

<style>
  section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: left;
    height: 100vh;
    width: 100%;
  }

  .introduction {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 50px;
  }

  h1 {
    margin-top: 0;
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
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
    border-radius: 25px;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  .btn:hover {
    background-color: #dd1212;
    color: white;
    transform: scale(1.05);
  }
</style>
