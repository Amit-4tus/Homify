<template>
  <div class="item-details">
    <img src="../assets/logo.png" @click="goToHome" />
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