<template>
  <div class="home">
    <home-page-top-fold></home-page-top-fold>
    <section class="topPicksContainer container">
      <h2 class="specialPicksHeader">Special Top Picks</h2>
      <topPickList class="topPicks"></topPickList>
    </section>
    <!-- <inspSect></inspSect> -->
    <myFooter></myFooter>
  </div>
</template>

<script>
import homePageTopFold from "../components/HomePageTopFold";
import topPickList from "../components/TopPickList";
import searchForm from "../components/SearchForm";
import myFooter from "../components/MyFooter";
import inspSect from "../components/InspirationalSection";
export default {
  name: "home",
  created() {
    this.$store.dispatch("loadItems");
  },
  mounted() {
    var elMyHeader = document.querySelector(".my-header");
    elMyHeader.classList.add("fixed");
  },
  components: {
    homePageTopFold,
    topPickList,
    searchForm,
    myFooter,
    inspSect
  },
  destroyed() {
    document.querySelector(".my-header").classList.remove("absolute");
  }
};
</script>
