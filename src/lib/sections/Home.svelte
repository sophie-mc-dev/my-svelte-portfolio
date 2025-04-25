<script>
  import Blob from "../components/Blob.svelte";
  let cvPath = "/assets/sample.pdf";
</script>

<section id="home">
  <div class="introduction">
    <h1>Hi 👋 I'm Sofia!</h1>
    <p>I'm a FrontEnd Developer based in Porto.</p>
    <a href={""} on:click={() => window.open(cvPath, '_blank')}>
      <button class="btn">Download CV</button>
    </a>
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
    padding: 20px;
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
    background-color: #e9d8c7;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    section {
      flex-direction: column-reverse;
      text-align: center;
      height: auto;
      padding: 40px 20px;
      margin-top: 80px;
    }

    .introduction {
      align-items: center;
      margin-right: 0;
      margin-top: 20px;
    }

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }

    .btn {
      font-size: 14px;
      padding: 8px 16px;
    }
  }
</style>
