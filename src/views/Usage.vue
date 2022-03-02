<template>
  <div class="usage-view h-screen flex items-center justify-center p-5">
    <!-- create usage carousel -->
    <div
      class="usage-container w-3/4 lg:grid lg:gird-cols-2 lg:grid-rows-2 lg:gap-5 flex flex-col"
    >
      <div class="usage-card lg:col-start-1 lg:row-start-1">
        <div class="p-5">
          <router-link to="/signup">
            <div class="usage-card-title">
              <p class="text-xl">( Step 1 )</p>
              <p class="text-4xl">Create An Account</p>
            </div>
            <div class="usage-card-desc">
              Accounts are free and easy to create.
            </div>
          </router-link>
        </div>
      </div>
      <div class="usage-card lg:col-start-2 lg:row-start-1">
        <router-link to="/login">
          <div class="p-5">
            <div class="usage-card-title">
              <p class="text-xl">( Step 2 )</p>
              <p class="text-4xl">Customize Your Profile</p>
            </div>
            <div class="usage-card-desc">
              Customize your profile from the dashboard
            </div>
          </div>
        </router-link>
      </div>
      <div class="usage-card lg:col-start-1 lg:row-start-2">
        <router-link to="/login">
          <div class="p-5">
            <div class="usage-card-title">
              <p class="text-xl">( Step 3 )</p>
              <p class="text-4xl">Add Addresses</p>
            </div>
            <div class="usage-card-desc">
              Set up crypto addresses and optionally generate a QR code
            </div>
          </div>
        </router-link>
      </div>
      <div class="usage-card lg:col-start-2 lg:row-start-2">
        <router-link to="/login">
          <div class="p-5">
            <div class="usage-card-title">
              <p class="text-xl">( Step 4 )</p>
              <p class="text-4xl">Share Your Link</p>
            </div>
            <div class="usage-card-desc">
              Copy and share your the link to your private or public profile so
              others can easily send you assets.
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
