<script>
  let name = "";
  let email = "";
  let message = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:me@sophie-mc.dev?subject=Message from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
    window.location.href = mailtoLink;
  };
</script>

<section id="contactme" class="contacts-section">
  <h1>Contact Me</h1>
  <p class="contact-text">
    I’d love to hear from you! Contact me at <a
      target="_blank"
      href="mailto:me@sophie-mc.dev"
      class="underline">me@sophie-mc.dev</a
    > or just drop a message below.
  </p>
  <form class="contact-form" on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="Your Name" bind:value={name} required />
    <input type="email" placeholder="Your Email" bind:value={email} required />
    <textarea placeholder="Your Message" bind:value={message} required
    ></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>

<style>
  .contacts-section {
    min-height: 100vh;
    box-sizing: border-box;
    padding: 50px 20px;
    text-align: center;
    justify-content: center;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 30px;
    scroll-margin-top: 80px;
  }

  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }

  .contact-text {
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.85;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
  }

  input,
  textarea {
    padding: 12px 16px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    outline: none;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  button {
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

  button:hover {
    background-color: #e9d8c7;
    transform: scale(1.02);
  }

  @media (max-width: 480px) {
    .contacts-section {
      padding: 40px 10px;
    }

    .contact-text {
      font-size: 16px;
    }

    input,
    textarea {
      width: 100%;
    }

    /* 1024px and below */
    @media (max-width: 1024px) {
      h1 {
        font-size: 32px;
      }

      .contacts-section {
        padding: 50px 16px;
      }

      .contact-form {
        max-width: 100%;
      }
    }

    /* 768px and below */
    @media (max-width: 768px) {
      h1 {
        font-size: 28px;
      }

      .contact-text {
        font-size: 16px;
        padding: 0 10px;
      }

      .contacts-section {
        padding: 40px 12px;
        gap: 24px;
      }
    }

    /* 480px and below */
    @media (max-width: 480px) {
      h1 {
        font-size: 24px;
      }

      .contact-text {
        font-size: 15px;
      }

      .contacts-section {
        padding: 30px 10px;
        gap: 20px;
      }

      input,
      textarea {
        font-size: 15px;
      }

      button {
        font-size: 15px;
        padding: 10px 16px;
      }
    }
  }
</style>
