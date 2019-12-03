<template>
  <section class="home-page-top-fold">
    <searchForm>
      <h1 class="main-title">Find The Perfect Vacation</h1>
    </searchForm>
    <!-- <button class="startBtn" @click="doScroll">v</button> -->
  </section>
</template>

<script>
import searchForm from "./SearchForm";
export default {
  methods: {
    doScroll() {
      // window.scrollTo({ top: window.innerHeight * 2.9, behavior: "smooth" });
    }
  },
  components: {
    searchForm
  }
};
</script>