<template>
  <div class="my-header">
    <img src="../assets/logo.png" class="main-logo" @click="goToHome" />
    <nav class="navbar">
      <router-link to="/house" class="header-link">Houses</router-link>
      <!-- <router-link to="/map" class="header-link">Map</router-link> -->
      <router-link to="/user-profile" class="header-link">Profile</router-link>
      <router-link to="/host" v-if="loggedinUser!==null" class="header-link">Add House</router-link>
      <router-link to="/login" class="header-link">Sign-In</router-link>
    </nav>
    <div class="hamburger" @click="showNav">&#9776;</div>
    <nav class="mobileNav hide hideToRight">
      <h1 class="mobileNavHead">HOMIFY</h1>
      <div class="header-link" @click="hideNav('house')">Houses</div>
      <!-- <div class="header-link" @click="hideNav('map')">Map</div> -->
      <div class="header-link" @click="hideNav('user-profile')">User-Profile</div>
      <div v-if="loggedinUser!==null" class="header-link" @click="hideNav('host')">Add House</div>
      <div class="header-link" @click="hideNav('login')">Sign-In</div>
      <div class="screen hide" @click="hideNav('')"></div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push("/");
    },
    showNav() {
      document
        .querySelector(".mobileNav")
        .classList.remove("hideToRight", "hide");
      document.querySelector(".screen").classList.remove("hide");
    },
    hideNav(path) {
      document.querySelector(".mobileNav").classList.add("hideToRight", "hide");
      document.querySelector(".screen").classList.add("hide");
      this.$router.push(`/${path}`);
    }
  },
  computed: {
    loggedinUser() {
      return this.$store.getters.loggedinUser;
    }
  }
};
</script>