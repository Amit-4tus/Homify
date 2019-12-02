<template>
  <div class="home">
    <home-page-top-fold></home-page-top-fold>
    <h2 class="specialPicksHeader">Special Top Picks:</h2>
    <topPickList class="topPicks"></topPickList>
    <!-- <inspSect></inspSect> -->
    <searchForm>
      <div class="formHeader">Book A Unique Place To Stay:</div>
    </searchForm>
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
  components: {
    homePageTopFold,
    topPickList,
    searchForm,
    myFooter,
    inspSect
  }
};
</script>
