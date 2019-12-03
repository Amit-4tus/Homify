<template>
  <div class="my-header">
    <img src="../assets/logo.png" class="main-logo" @click="goToHome" />
    <nav class="navbar">
      <!-- <router-link to="/house" class="header-link">Houses</router-link> -->
      <!-- <router-link to="/map" class="header-link">Map</router-link> -->
      <!-- <div class="header-link" @click="hideNav('map')">Map</div> -->
      <router-link to="/user-profile" v-if="loggedinUser" class="header-link">Profile</router-link>
      <router-link to="/host" v-if="loggedinUser" class="header-link">Host</router-link>
      <button v-if="loggedinUser" class="header-link" @click="doLogout">Sign-Out</button>
      <router-link to="/login" v-if="!loggedinUser" class="header-link">Sign-In</router-link>
    </nav>
    <div class="hamburger" @click="showNav">&#9776;</div>
    <nav class="mobileNav hide hideToRight">
      <h1 class="mobileNavHead">HOMIFY</h1>
      <!-- <div class="header-link" @click="hideNav('house')">Houses</div> -->
      <div class="header-link" v-if="loggedinUser" @click="hideNav('user-profile')">Profile</div>
      <div v-if="loggedinUser" class="header-link" @click="hideNav('host')">Host</div>
      <div v-if="!loggedinUser" class="header-link" @click="hideNav('login')">Sign-In</div>
      <button v-if="loggedinUser" class="header-link" @click="doLogout">Sign-Out</button>
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
    },
    async doLogout() {
      await this.$store.dispatch({ type: "logout" });
      this.$router.push('/');
      window.location.reload();
    }
  },
  computed: {
    loggedinUser() {
      let isConnected = this.$store.getters.loggedinUser;
      if (isConnected !== null && isConnected !== undefined) {
        return true;
      }
    }
  }
};
</script>