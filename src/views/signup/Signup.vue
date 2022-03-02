<template>
  <div class="signup-view h-auto mt-5 flex items-center justify-center">
    <div
      class="signup-card border rounded-lg flex flex-col items-center justify-center w-96 h-96"
    >
      <p class="text-2xl">Sign up</p>
      <div class="card-inputs flex flex-col">
        <input
          type="text"
          placeholder="Username"
          v-model="username"
          class="border rounded-md focus:border m-3"
        />
        <input
          type="text"
          placeholder="Password"
          v-model="password"
          class="border rounded-md m-3"
        />
        <input
          type="text"
          placeholder="Confirm password"
          v-model="confirmation_password"
          class="border rounded-md focus:border m-3"
        />
      </div>
      <div class="card-actions flex justify-center items-evenly">
        <button
          class="border rounded-full px-2 py-1 hover:shadow-md"
          :onClick="submitForm"
        >
          Submit
        </button>
        <button class="border rounded-full px-2 py-1 hover:shadow-md">
          Reset
        </button>
      </div>
      <div>
        Already a member?
        <router-link to="/login" class="font-semibold hover:underline"
          >Login</router-link
        >
        here
      </div>
      <div class="errors text-red-900" v-if="error">passwords dont match!</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirmation_password: "",
      error: false,
    };
  },
  methods: {
    submitForm() {
      if (this.password === this.confirmation_password) {
        // this.$store.dispatch("signup", {
        //   username: this.username,
        //   password: this.password,
        // });
        console.log("success");
      } else {
        this.error = true;
      }
    },
  },
  created() {
    window.scroll(0, 0);
  },
};
</script>

<style scoped></style>
