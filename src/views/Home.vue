<template>
  <div class="h-screen flex flex-col lg:px-48 px-5 justify-center">
    <div class="text-6xl animate__animated animate__fadeInLeft">CryptoSelf</div>
    <p class="text-xl font-thin py-2">
      All your wallet addresses in one clean simple place
    </p>
    <div class="options flex lg:flex-row flex-col">
      <router-link
        to="/signup"
        class="border rounded-lg px-10 py-4 lg:mx-5 my-2 hover:shadow-md"
        >Sign up</router-link
      >
      <router-link
        to="/login"
        class="border rounded-lg px-10 py-4 lg:mx-5 my-2 hover:shadow-md"
        >Login</router-link
      >
      <router-link
        to="/usage"
        class="border rounded-lg px-10 py-4 lg:mx-5 my-2 hover:shadow-md"
        >How it works?</router-link
      >
    </div>
  </div>
</template>

<script>
import "animate.css";
export default {
  created() {
    window.scroll(0, 0);
  },
};
</script>

<style scoped></style>
