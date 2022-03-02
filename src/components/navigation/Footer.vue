<template>
  <div class="footer-container">
    <div class="pt-10">
      <router-link to="/" class="text-2xl font-semibold"
        >CryptoSelf</router-link
      >
    </div>
    <div class="footer-links sm:invisible lg:visible">
      <router-link
        :to="this.$store.state.isLoggedIn ? '/dashboard' : '/home'"
        class="footer-link"
        >{{ $store.state.isLoggedIn ? "Dashboard" : "Home" }}</router-link
      >
      <router-link to="/" class="footer-link">Terms of Use</router-link>
      <router-link to="/" class="footer-link">Support</router-link>
    </div>
    <div class="copyright">CryptoSelf [V0.2 2022]</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
