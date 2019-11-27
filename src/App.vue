<template>
  <div id="app">
    <div id="nav">
      <my-header></my-header>
      <router-link to="/items">Items</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import myHeader from './components/my-header'
export default {
  components: {
    myHeader,
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
