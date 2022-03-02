<template>
  <div class="header-container">
    <div class="header-logo col-start-1">
      <router-link to="/" class="text-2xl font-semibold"
        >CryptoSelf</router-link
      >
    </div>
    <div class="header-links">
      <!-- TODO::CREATE RESPONSIVE HAMBURGER ICON -->
      <router-link
        :to="this.$store.state.isLoggedIn ? '/dashboard' : '/home'"
        class="header-link"
        >{{ $store.state.isLoggedIn ? "Dashboard" : "Home" }}</router-link
      >
      <router-link to="/" class="header-link">Contact us</router-link>
      <router-link to="/" class="header-link">About</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
