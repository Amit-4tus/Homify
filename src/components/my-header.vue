<template>
  <div class="item-details">
    <img src="../assets/logo.png" class="main-logo" @click="goToHome" />
    <router-link to="/items">Items</router-link> |
    <router-link to="/map">Map</router-link> |
        <router-link to="/user-profile">User-Profile</router-link> |
    <button>Sign-In</button>
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