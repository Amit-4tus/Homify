<template>
  <section>
    <my-header></my-header>
    <user-msg></user-msg>

    <router-view></router-view>
  </section>
</template>

<script>
import myHeader from "./components/MyHeader";
import userMsg from "./components/UserMsg";

export default {
  components: {
    myHeader,
    userMsg
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
