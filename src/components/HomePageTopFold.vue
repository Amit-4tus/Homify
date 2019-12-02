<template>
  <section class="home-page-top-fold">
    <h1 class="main-title">Find The Perfect Vacation</h1>
    <h2 class="secondary-title">It's as easy as clicking a butoon</h2>
    <button class="startBtn" @click="doScroll()">v</button>
  </section>
</template>

<script>
export default {
  methods: {
    doScroll() {
      console.log('tutu');
      window.scrollTo({ top: window.innerHeight*2.4, behavior: 'smooth' });
    }
  }
};
</script>