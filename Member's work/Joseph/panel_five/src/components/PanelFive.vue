<template>
  <div class="container">
    <img class="singleMusic" src="../assets/single_music.svg">
    <img class="rightMusic" src="../assets/right_music.svg">
    <div class="loader"></div>
    <img class="uniB" src="../assets/uniB_image.png" alt="UniB">
    <img class="leftMusic" src="../assets/left_music.svg">
    <h2>Finding your match...</h2>
  </div>
</template>

<script>
export default {
  name: "PanelFive",
  props: {
    msg: String
  }
}
</script>

<style>
    .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    }

    .loader {
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #4badee; /* Blue */
    border-radius: 50%;
    width: 30vw;
    height: 30vw;
    animation: spin 1.75s ease-in-out infinite;
    animation: name duration timing-function delay iteration-count direction fill-mode;
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }

    .singleMusic {
        width: 1.5vw;
        margin-left: -10vw;
    }
    .rightMusic {
        padding-left: 18vw;
        margin-bottom: -20vh;
        width: 2.5vw;
    }

    .uniB {
        margin-top: -42vh;
        width: 17vw;
        height: 35vh;
    }
    h2 {
        padding-top: 28vh;
    }

    .leftMusic {
        margin-top: -18vh;
        margin-left: -37vh;
        width: 3vw;
    }
</style>
