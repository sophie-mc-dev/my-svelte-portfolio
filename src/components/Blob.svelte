<div class="blob"></div>

<style>
  .blob {
    width: 300px;
    height: 300px;
    margin: 10% auto;
    position: relative;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .blob::before {
    border: 2px solid #fff;
    border-radius: 58% 42% 48% 53% / 47% 60% 36% 53%;
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background-image: url("../lib/images/pfp.JPEG");
    background-size: cover;
  }

  .blob::after {
    border: 2px solid #fff;
    border-radius: 38% 42% 48% 53% / 47% 60% 36% 53%;
    width: 100%;
    height: 100%;
    background: rgba(244, 166, 166, 0.1);
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    animation: rotate 16s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      border-color: #003b68;
    }
    50% {
      border-color: #4987f2;
    }
    100% {
      transform: rotate(360deg);
      border-color: #003b68;
    }
  }
</style>
