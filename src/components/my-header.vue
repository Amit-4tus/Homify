<template>
  <div class="my-header">
    <img src="../assets/logo.png" class="main-logo" @click="goToHome" />
    <nav class="navbar">
      <router-link to="/items" class="header-link">Items</router-link>
      <router-link to="/map" class="header-link">Map</router-link>
      <router-link to="/user-profile" class="header-link">User-Profile</router-link>
      <button class="header-link">Sign-In</button>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/");
    }
  }
};
</script>