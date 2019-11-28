<template>
  <section class="home-page-top-fold">
    <h1 class="main-title">Inspirational Quote</h1>
    <h2 class="secondary-title">If You Read beyond the main title you're awesome!</h2>
    <button class="start-btn" @click="doScroll">Find The Perfect Vacation</button>
  </section>
</template>

<script>
export default {
  methods: {
    doScroll() {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      console.log('scrolling');
    }
  }
};
</script>