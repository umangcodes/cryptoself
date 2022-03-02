<template>
  <div>
    <Header class="z-20" />
    <router-view class="z-10"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/navigation/Header.vue";
import Footer from "./components/navigation/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style></style>
