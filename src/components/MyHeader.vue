<template>
  <div class="my-header">
    <img src="../assets/logo.png" class="main-logo" @click="goToHome" />
    <nav class="navbar">
      <router-link to="/house" class="header-link">Houses</router-link>
      <router-link to="/map" class="header-link">Map</router-link>
      <router-link to="/user-profile" class="header-link">User-Profile</router-link>
      <router-link v-if="loggedinUser!==null" to="/host" class="header-link">Host</router-link>
      <router-link to="/login" class="header-link">Login</router-link>
      <!-- <button class="header-link">Sign-In</button> -->
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/");
    }
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    }
  }
};
</script>